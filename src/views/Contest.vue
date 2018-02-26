<template lang="html">
  <div id="contest" v-show="!loading">
    <question @answer="answer" :substances="substances" :data="randomSubstance" :type="randomType"/>
    <v-progress-linear class="contest__progress" v-model="progress"></v-progress-linear>
  </div>
</template>

<script>
  import Question from '../components/Question';

  export default {
    components: {Question},
    data() {
      return {
        randomType: 0,
        randomSubstance: {},
        substances: [],
        correct: 0,
        questions: 10,
        currentQuestion: 0
      }
    },
    computed: {
      progress() {
        return this.currentQuestion/this.questions*100;
      },
      loading() {
        return this.$store.state.loading
      },
    },
    methods: {
      nextQuestion() {
        this.currentQuestion++;
        this.$store.commit('setTitle', 'Вопрос ' + this.currentQuestion);

        if(this.currentQuestion >= this.questions) this.$router.push('/result?score=' + this.correct);
        else {
          this.randomSubstance = this.substances[Math.floor(Math.random()*this.substances.length)];
          this.randomType = Math.round(Math.random());
        }
      },
      answer(isCorrect) {
        if(isCorrect) this.$store.commit('setMessage', {log: 'Вы ответили правильно', type: 'success'});
        else this.$store.commit('setMessage', {log: 'Ответ: ' + (this.randomType ? this.randomSubstance.title : this.randomSubstance.formula), type: 'error'});
        this.correct += isCorrect;
        setTimeout(() => this.nextQuestion(), 200);
      }
    },
    mounted() {
      this.$store.commit('setHeader', true);
      this.questions = +this.$route.query.questions;

      let selects = JSON.parse(this.$route.query.selects);
      for(let key in selects) {
        if(!selects[key]) continue;
        if(key === 'favorites') this.substances = this.substances.concat(this.$store.state.database.favorites);
        else this.substances = this.substances.concat(this.$store.getters.getSubstances(key));
      }
      this.nextQuestion();
    }
  }
</script>

<style>
  .contest__progress {
    position: fixed;
    bottom: 41px;
    left: 0;
  }
</style>

<template lang="html">
  <div class="question">
    <model-substance class="question__model" :data="model"/>
    <v-card flat class="question__variants">
      <v-card-text>
        <v-layout row wrap>
          <span class="grey--text">Выберите правильные вариант:</span>
          <br>
          <br>
          <v-flex xs12>
            <v-btn style="width: 44%" color="primary" large v-for="(answer, i) in answers" @click="setAnswer(answer)" :key="i">{{type ? answer.title : answer.formula}}</v-btn>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import ModelSubstance from '../components/ModelSubstance'

  export default {
    components: {ModelSubstance},
    props: ['data', 'type', 'substances'],
    computed: {
      model() {
        return this.$store.state.substance.structure
      }
    },
    data() {
      return {
        answers: []
      }
    },
    methods: {
      setAnswer(answer) {
        let correct = answer.formula === this.data.formula;
        this.$emit('answer', correct);
      }
    },
    watch: {
      data(v) {
        this.$store.dispatch('loadSubstance', {label: v.title, formula: v.formula});

        this.answers = [];
        let subs = this.substances.slice();
        subs.forEach((sub, i) => {
          if(sub.title === v.title) subs.splice(i, 1);
        });
        for(let i = 0; i < 4; i++) {
          let rand = Math.floor(Math.random()*subs.length);
          this.answers.push(subs[rand]);
          subs.splice(rand, 1);
        }
        this.answers[Math.floor(Math.random()*4)] = v;
      }
    }
  }
</script>

<style lang="css">
  .model.question__model {
    top: 50px;
  }
  .question__variants {
    margin: 100% -24px 0;
  }
</style>

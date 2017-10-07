<template lang="html">
  <router-link :to="link">
    <div class="card-panel waves-effect">
      <span>{{data.label}}</span>
      <br>
      <span class="card-title">{{data.formula}}</span>
      <a class="waves-effect btn-star" :class="classStar"><i class="material-icons">star</i></a>
    </div>
  </router-link>
</template>

<script>
  module.exports = {
    props: ['data'],
    data() {
      return {
        isClick: false,
        classStar: 'grey-text'
      }
    },
    computed: {
      link() {
        return "/substance?label=" + this.data.label + '&formula=' + this.data.formula;
      }
    },
    methods: {
      substanceToggleStar() {
        if(this.isClick) {
          this.classStar = 'grey-text';
          // this.$store.dispatch('removeStar', this.data);
        } else {
          this.classStar = 'orange-text';
          this.$store.dispatch('addStar', this.data);
        }

        this.isClick = !this.isClick;
      }
    }
  }
</script>

<style scoped>
  .card-panel {
    width: 100%;
  }
  span {
    font-size: 1.4em;
  }

  a.btn-star {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
  }
  a.btn-star i {
    line-height: 40px;
  }
</style>

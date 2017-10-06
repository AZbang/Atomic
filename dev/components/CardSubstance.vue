<template lang="html">
  <router-link :to="getSubstanceLink(data.label)">
    <div class="card waves-effect">
      <img src="http://cosmetic.ua/uploads/spool/photo/00000018037-filename-00002-tape.jpg" alt="">
      <div class="card-content white-text">
        <span class="card-title">{{data.formula}}</span>
        <p>{{data.label}}</p>
      </div>
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
      },
      getSubstanceLink(req) {
        return "/substance?q=" + req;
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 100%;
  }

  a.btn-star {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
  }
  a.btn-star i {
    line-height: 40px;
  }
</style>

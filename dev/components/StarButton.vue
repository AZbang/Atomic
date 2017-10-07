<template>
  <a class="waves-effect btn-star" @click="substanceToggleStar" :class="classStar"><i class="material-icons">star</i></a>
</template>

<script>
  module.exports = {
    props: ['data'],
    data() {
      return {
        isClick: this.data.isStar,
        classStar: this.data.isStar ? 'blue-text' : 'grey-text'
      }
    },
    methods: {
      substanceToggleStar() {
        if(this.isClick) {
          this.classStar = 'grey-text';
          this.$store.commit('removeStar', this.data);
        } else {
          this.classStar = 'blue-text';
          this.$store.commit('addStar', this.data);
        }

        this.isClick = !this.isClick;
      }
    }
  }
</script>

<style scoped>
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

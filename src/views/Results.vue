<template lang="html">
   <v-container fill-height style="height: 80vh">
     <v-layout align-center>
       <v-flex text-xs-center>
         <h3 class="display-1">Вы набрали</h3>
         <h3 class="display-3">{{result/10*100}}%</h3>
         <v-btn round color="primary" to="/learn" dark>Еще раз</v-btn>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
  export default {
    data() {
      return {
        result: 0
      }
    },
    mounted() {
      this.$store.commit('setHeader', true);
      this.$store.commit('setTitle', 'Результат');
      this.result = +this.$route.query.score;
    }
  }
</script>

<style lang="css">
</style>

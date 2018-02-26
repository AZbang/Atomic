<template lang="html">
  <div id="substance" v-show="!loading">
    <v-toolbar app :class="header ? '' : 'substance__toolbar--pressed'" :color="header ? 'blue' : 'transparent'">
      <v-btn icon flat ripple @click="back" color="grey">
        <v-icon :color="header ? 'white' : 'grey lighten-1'">chevron_left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <toggle-favorite :data="info" :color="header && 'white'"/>
    </v-toolbar>
    <model-substance :data="model"/>
    <info-substance class="substance__info" :data="info"/>
  </div>
</template>

<script>
  import ToggleFavorite from '../components/ToggleFavorite'
  import ModelSubstance from '../components/ModelSubstance'
  import InfoSubstance from '../components/InfoSubstance'

  export default {
    components: {
      ToggleFavorite,
      ModelSubstance,
      InfoSubstance
    },
    data() {
      return {
        header: 0
      }
    },
    computed: {
      type() {
        return this.$store.getters.getType(this.data.type)
      },
      model() {
        return this.$store.state.substance.structure
      },
      loading() {
        return this.$store.state.loading
      },
      info() {
        return this.$store.state.substance.info
      }
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      onScroll(e) {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if(scroll > 100) this.header =  1;
        else this.header = 0;
      }
    },
    mounted() {
      this.$store.commit('setHeader', false);
      this.$store.commit('setTitle', 'Вещество');
      this.$store.dispatch('loadSubstance', this.$route.query);
    }
  }
</script>

<style>
  .substance__toolbar--pressed {
    box-shadow: none;
  }
  .substance__info {
    padding-bottom: 100px;
    margin: 100% -24px -24px;
  }
</style>

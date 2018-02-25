<template lang="html">
  <div id="substance">
    <v-toolbar app class="substance__toolbar" color="transparent">
      <v-btn icon flat ripple @click="back" color="grey">
        <v-icon color="grey lighten-1">chevron_left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <toggle-favorite :data="data"/>
    </v-toolbar>
    <model-substance v-if="model" :data="model"/>
  </div>
</template>

<script>
  import ToggleFavorite from '../components/ToggleFavorite';
  import ModelSubstance from '../components/ModelSubstance';

  export default {
    components: {ToggleFavorite, ModelSubstance},
    computed: {
      type() {
        return this.$store.getters.getType(this.data.type)
      },
      model() {
        return this.$store.state.substance.structure;
      }
    },
    methods: {
      back() {
        this.$router.go(-1);
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
  .substance__toolbar {
    box-shadow: none;
  }
</style>

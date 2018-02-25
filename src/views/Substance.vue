<template lang="html">
  <div id="substance">
    <v-toolbar app class="substance__toolbar" color="transparent">
      <v-btn icon flat ripple @click="back" color="grey">
        <v-icon color="grey lighten-1">chevron_left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <toggle-favorite :data="info"/>
    </v-toolbar>
    <model-substance v-if="model.typeStructure" :data="model"/>
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
      },
      info() {
        return this.$store.state.substance.info;
      }
    },
    methods: {
      back() {
        this.renderModel = false;
        this.$router.go(-1);
      }
    },
    mounted() {
      this.$store.commit('setHeader', false);
      this.$store.commit('setTitle', 'Вещество');
      this.$store.dispatch('loadSubstance', this.$route.query);
      this.renderModel = true;
    }
  }
</script>

<style>
  .substance__toolbar {
    box-shadow: none;
  }
</style>

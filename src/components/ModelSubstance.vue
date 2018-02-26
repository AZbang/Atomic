<template>
  <div id="model" ref="model" :class="data.typeStructure"></div>
</template>

<script>
  import Model from '../model';

  export default {
    props: ['data'],
    computed: {
      model() {
        return this.$store.state.model
      }
    },
    watch: {
      data(v) {
        if(!v) return;

        this.model.removeMolecule(0);
        this.model.addMolecule(v);
      }
    },
    mounted() {
      this.$refs.model.appendChild(this.model.renderer.domElement);

      if(!this.data.typeStructure) return;
      this.model.removeMolecule(0);
      this.model.addMolecule(this.data);
    }
  }
</script>

<style lang="css">
  #model {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

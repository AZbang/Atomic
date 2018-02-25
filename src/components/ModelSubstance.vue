<template>
  <div ref="model" id="model"></div>
</template>

<script>
  import Model from '../model';

  export default {
    props: ['data'],
    methods: {
      generateStructure(data) {
        this.model.removeMolecule(0);
        this.model.addMolecule(data);
      }
    },
    mounted() {
      this.model = new Model(this.$refs.model, window.innerWidth, window.innerHeight/2);
      this.model.atomsData = this.$store.state.database.atoms;
      this.model.start();
      this.generateStructure(this.data);
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

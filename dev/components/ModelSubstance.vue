<template>
  <div id="model"></div>
</template>

<script>
  const Model = require('../model');

  module.exports = {
    methods: {
      generateStructure(data) {
        this.model.removeMolecule(0);
        this.model.addMolecule(data);
      }
    },
    mounted() {
      let wrap = document.getElementById('model');
      this.model = new Model(wrap, window.innerWidth, window.innerHeight/2);
      this.model.start();

      this.$parent.$on('generateStructure', this.generateStructure);
    }
  }
</script>

<style lang="css">
  #model {
    position: absolute;
    top: 60px;
    left: 0px;
  }
</style>

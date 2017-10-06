<template>
  <div id="model"></div>
</template>

<script>
  const Model = require('../model');

  module.exports = {
    props: ['data'],
    mounted() {
      let wrap = document.getElementById('model');
      this.model = new Model(wrap, window.innerWidth, window.innerHeight/2);
      setTimeout(() => {
        this.model.removeMolecule(0);
        this.model.addMolecule(this.data);
        this.model.start();
      }, 5000);
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

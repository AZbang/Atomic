<template>
  <div id="model" :class="data.typeStructure"></div>
</template>

<script>
  import Model from '../model';

  export default {
    props: ['data'],
    watch: {
      data(v) {
        if(!v) return;

        this.model.removeMolecule(0);
        this.model.addMolecule(v);
      }
    },
    mounted() {
      this.model = new Model(document.getElementById('model'), window.innerWidth, window.innerHeight/2);
      this.model.atomsData = this.$store.state.database.atoms;
      this.model.start();

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

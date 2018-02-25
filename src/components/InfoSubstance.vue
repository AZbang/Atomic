<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{data.title}}</h3>
        <span class="grey--text">{{data.formula}}</span><br>
        <div>{{data.extract}}</div>
        <img :src="data.image" style="margin: 30px auto; display: block; width: 90vw;"/>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="css">
</style>

<template lang="html">
  <router-link :to="getTypeLink" tag="div">
    <v-card ripple class="card-substance-type">
      <v-card-media class="white--text" height="200px" :src="data.img">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{data.label}}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-title>
        <div>
          <span>{{data.description}}</span>
        </div>
      </v-card-title>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    getTypeLink() {
      return '/types/' + this.data.type
    },
    getLearnLink() {
      return '/train/' + this.data.type
    }
  }
}
</script>

<style lang="css">
  .card-substance-type {
    margin-top: 20px;
  }
</style>

<template>
  <div id="types" class="container">
    <h1>Типы веществ:</h1>

    <div class="card" v-for="item in types">
      <router-link :to="item.link">
        <div class="card-image waves-effect waves-block waves-light">
          <img :src="item.img">
          <span class="card-title">{{item.label}}</span>
        </div>
        <div class="card-content">
          <router-link :to="getLearnLink(item.type)" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">book</i></router-link>
          <p>{{item.description}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  module.exports = {
    computed: {
      types() {
        console.log(this.$store);
        return this.$store.state.database.types
      }
    },
    methods: {
      getLearnLink(type) {
        return "train/" + type;
      }
    }
  }
</script>

<style scoped="">
  h1 {
    margin-top: 0;
    font-weight: 300;
    font-size: 2em;
  }
  a {
    color: #000;
  }
  .card-content {
    position: relative;
  }
  .card-content a.btn-floating {
    top: -20px;
  }
</style>

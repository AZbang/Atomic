<template>
  <nav id="navigation" class="row nav blue">
    <div class="col s2">
      <side-nav></side-nav>
    </div>

    <div class="col s10">
      <search></search>
    </div>
  </nav>
</template>

<script>
  const Search = require('./Search.vue');
  const SideNav = require('./SideNav.vue');

  module.exports = {
    components: {
      Search,
      SideNav
    }
  }
</script>

<style scoped>
  .nav {
    height: 58px;

  }
</style>

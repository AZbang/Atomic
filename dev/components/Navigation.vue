<template>
  <div id="navigation" class="row">
    <div class="col s2">
      <side-nav></side-nav>
    </div>

    <div class="col s10">
      <search></search>
    </div>
  </div>
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
  .row {
    margin-top: 6px;
  }
</style>

<template>
  <div class="search-wrapper card">
    <input id="search"><i class="material-icons">search</i>
  </div>
</template>

<style scoped>
  .search-wrapper {
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), 0 1px 1px 0 rgba(0,0,0,0.05), 0 3px 1px -6px rgba(0,0,0,0.1) !important;
  }
  .search-wrapper input#search {
    display: block;
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    height: 45px;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 45px 0 15px;
    border: 0;
  }
  .search-wrapper i.material-icons {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>

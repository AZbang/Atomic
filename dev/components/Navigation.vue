<template>
  <div id="navigation">
    <ul id="slide-out" class="side-nav">
      <br>
      <li><a class="subheader">Molecules</a></li>
      <li v-on:click="closeSideNav"><router-link to="/main"><i class="material-icons">visibility</i>Главная</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/types"><i class="material-icons">view_module</i>Типы веществ</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/main"><i class="material-icons">star</i>Отмеченные</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/main"><i class="material-icons">extension</i>Тренажер</router-link></li>
    </ul>

    <div class="row">
      <div class="col s2">
       <a class="waves-effect button-collapse" data-activates="slide-out"><i class="material-icons">menu</i></a>
      </div>
      <div class="col s10">
       <div class="search-wrapper card">
         <input id="search"><i class="material-icons">search</i>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'Navigation',
    methods: {
      closeSideNav() {
        $('.button-collapse').sideNav('hide');
      }
    },
    mounted() {
      $(".button-collapse").sideNav();
    }
  }
</script>

<style scoped>
  .row {
    margin-top: 6px;
  }
  .button-collapse {
    margin-top: 6px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: none;
  }
  .button-collapse i {
    position: absolute;
    top: 10px;
    right: 13px;
    cursor: pointer;
    line-height: 33px;
    color: #333;
  }
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

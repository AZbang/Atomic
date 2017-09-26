<template>
  <div id="navigation">
    <div id="side-nav">
      <ul id="slide-out" class="side-nav">
        <li><a class="header"><i class="material-icons">cloud</i>Molecls!</a></li>
        <li><div class="divider"></div></li>
        <li><a class="waves-effect" href="#!">Главная</a></li>
        <li><a class="waves-effect" href="#!">Типы веществ</a></li>
        <li><a class="waves-effect" href="#!">Отмеченные</a></li>
        <li><a class="waves-effect" href="#!">Тренажер</a></li>
      </ul>
    </div>

    <div class="row">
      <div class="col s2">
       <a class="waves-effect button-collapse"><i class="material-icons">dehaze</i></a>
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
    line-height: 33px;
    color: #333;
    right: 13px !important;
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
  i.material-icons {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>

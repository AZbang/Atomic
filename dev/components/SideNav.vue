<template>
  <div id="side-nav">
    <ul id="slide-out" class="side-nav">
      <br>
      <li><a class="subheader">Molecules</a></li>
      <li v-on:click="closeSideNav"><router-link to="/main"><i class="material-icons">visibility</i>Главная</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/types"><i class="material-icons">view_module</i>Типы веществ</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/stars"><i class="material-icons">star</i>Отмеченные</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/history"><i class="material-icons">history</i>История</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/trainer_types"><i class="material-icons">extension</i>Тренажер</router-link></li>
      <li><div class="divider"></div></li>
      <br>
      <li v-on:click="closeSideNav"><router-link to="/choose_lang">Сменить язык</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/star_app">Оценить приложение</router-link></li>
      <li v-on:click="closeSideNav"><router-link to="/author">Автор</router-link></li>
    </ul>

    <a class="waves-effect button-collapse" data-activates="slide-out"><i class="material-icons">menu</i></a>
  </div>
</template>

<script>
  module.exports = {
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
  .button-collapse {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: none;
    margin: 3px 0;
  }
  .button-collapse i {
    position: absolute;
    top: 10px;
    right: 13px;
    cursor: pointer;
    line-height: 33px;
    color: #fff;
  }
  .router-link-active {
    color: #1976D2;
  }
  .router-link-active i {
    color: #1976D2 !important;
  }
</style>

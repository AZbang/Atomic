<template lang="html">
  <div id="learn">
    <v-list subheader style="margin: -20px;">
      <v-subheader>Выберите темы по которым хотите пройти тестs</v-subheader>
      <v-list-tile avatar v-for="(type, i) in types" :key="type.type">
        <v-list-tile-action>
          <v-checkbox v-model="selects[type.type]"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{type.label}}</v-list-tile-title>
          <v-list-tile-sub-title>Все {{type.label}} доступные из справочника</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-model="selects.favorites"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Отмеченные</v-list-tile-title>
          <v-list-tile-sub-title>Все ваши сохраненные вещества</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <br>
    <br>
    <div class="text-xs-center">
     <v-btn round color="primary" :to="linkToTest" dark>Начать тест</v-btn>
   </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selects: {
          favorites: true
        }
      }
    },
    computed: {
      types() {
        return this.$store.state.database.types
      },
      linkToTest() {
        return '/contest?questions=10&selects=' + JSON.stringify(this.selects)
      }
    },
    mounted() {
      this.$store.commit('setHeader', true);
      this.$store.commit('setTitle', 'Пройти тест');
    }
  }
</script>

<style lang="css">
</style>

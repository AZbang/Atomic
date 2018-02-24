<template lang="html">
  <v-toolbar app color="blue">
    <v-toolbar-title v-show="!isSearch" class="white--text">{{this.$route.name}}</v-toolbar-title>
    <v-spacer v-show="!isSearch"></v-spacer>
    <v-text-field
      ref="search"
      style="margin-left: 6px; box-shadow: none;"
      v-show="isSearch"
      v-model="req"
      @blur="isSearch = false"
      solo placeholder="Search substance">
    </v-text-field>
    <v-btn icon class="white--text" @click="toggleSearch">
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        req: '',
        isSearch: false
      }
    },
    methods: {
      toggleSearch() {
        this.isSearch = !this.isSearch;
        this.$refs.search.$el.focus();
      }
    }
  }
</script>

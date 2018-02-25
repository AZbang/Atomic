<template lang="html">
  <v-toolbar app color="blue" v-if="isHeader">
    <v-toolbar-title v-show="!isSearch" class="white--text">{{title}}</v-toolbar-title>
    <v-spacer v-show="!isSearch"></v-spacer>
    <v-btn icon v-show="!isSearch" class="white--text" @click="toggleSearch">
      <v-icon>search</v-icon>
    </v-btn>
    <v-text-field
      style="margin: 0 10px; box-shadow: none;"
      v-if="isSearch"
      :autofocus="true"
      v-model="req"
      append-icon="search"
      @blur="isSearch = false"
      solo placeholder="Search substance">
    </v-text-field>
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
    computed: {
      title() {
        return this.$store.state.title;
      },
      isHeader() {
        return this.$store.state.isHeader;
      }
    },
    methods: {
      toggleSearch() {
        this.isSearch = !this.isSearch
      }
    }
  }
</script>

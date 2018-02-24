<template lang="html">
  <v-toolbar app color="blue">
   <!-- <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon> -->
   <v-toolbar-title class="white--text">{{this.$route.name}}</v-toolbar-title>
   <v-spacer></v-spacer>
   <v-btn icon class="white--text">
     <v-icon>search</v-icon>
   </v-btn>
 </v-toolbar>
</template>

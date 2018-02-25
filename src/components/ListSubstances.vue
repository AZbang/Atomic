<template lang="html">
  <v-list two-line subheader style="margin: -20px">
    <v-subheader>{{label}}</v-subheader>
    <substance-preview v-for="item in data" :data="item" :key="item.formula"/>
  </v-list>
</template>

<script>
  import SubstancePreview from '../components/SubstancePreview';

  export default {
    components: {SubstancePreview},
    props: ['data', 'label']
  }
</script>

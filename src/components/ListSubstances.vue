<template lang="html">
  <v-list two-line subheader style="margin: -20px">
    <v-subheader>{{label}}</v-subheader>
    <substance-preview v-for="(item, i) in data" :data="item" :key="i"/>
  </v-list>
</template>

<script>
  import SubstancePreview from '../components/SubstancePreview';

  export default {
    components: {SubstancePreview},
    props: ['data', 'label']
  }
</script>

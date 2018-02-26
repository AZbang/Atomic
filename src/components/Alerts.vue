<template lang="html">
  <v-alert
    class="message-alert"
    :type="message.type"
    :value="isShow"
    transition="scale-transition"
  >{{message.log}}</v-alert>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    computed: {
      message() {
        return this.$store.state.message;
      }
    },
    watch: {
      message(v) {
        this.isShow = true;
        setTimeout(() => this.isShow = false, 3000);
        if(v.toBack) this.$router.go(-1);
      }
    }
  }
</script>

<style lang="css">
  .message-alert {
    position: fixed;
    bottom: 52px;
    z-index: 10000;
    width: 100%;
    left: 0;
  }
</style>

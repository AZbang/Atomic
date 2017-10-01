<template>
  <div id="substances" class="container">
    <h1>Тип "{{data.label}}":</h1>

    <ul class="collection">
      <li class="collection-item avatar waves-effect" v-for="item in data.substances">
        <i class="material-icons circle" :class="data.color">assignment</i>
        <span class="title">{{item.formula}}</span>
        <p>{{item.label}}</p>

        <a class="waves-effect secondary-content btn-star" @click="substanceStar"><i class="material-icons" :class="colorBtnStar">star</i></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: this.$store.state.substances[this.$route.params.type],
        colorBtnStar: 'grey-text'
      }
    },
    methods: {
      substanceStar() {
        this.colorBtnStar = (this.colorBtnStar == 'grey-text' ? 'orange-text' : 'grey-text');
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin-top: 0;
    font-weight: 300;
    font-size: 2em;
  }
  .collection .collection-item.avatar {
    min-height: inherit;
    width: 100%;
  }

  a.btn-star {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
  }
  a.btn-star i {
    line-height: 40px;
  }
</style>

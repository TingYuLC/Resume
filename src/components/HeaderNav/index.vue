<template>
  <div class="header-nav">
      <div class="logo">
          <img src="//luojc.cn/images/ljc.jpg" @click="linkTo(0)"/>
          <a href="//blog.luojc.cn/" target="_blank">{{$store.state.data.logoBlog}}</a>
      </div>
      <div class="content">
          <span v-for="(page, index) in $store.state.data.pageNames" :key="index" :class="{'span-active': id === (index+1)}" @click="linkTo(index+1)">{{page}}</span>
      </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
    }
  },
  methods: {
    linkTo (id) {
      this.$emit('linkTo', id)
    }
  }
}
</script>

<style scoped lang="less">
@import './index.less';
</style>


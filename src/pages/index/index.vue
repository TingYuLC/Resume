<template>
  <div class="index page">
    <div class="index-bg"></div>
    <div class="index-content">
      <h1>你好，我是罗金城！</h1>
      <h1>A Front-End Engineer</h1>
      <div class="index-btn">
        <button @click="linkTo(1)" @touchstart="linkTo(1)">关于我</button>
        <button @click="linkTo(4)" @touchstart="linkTo(4)">博客</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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


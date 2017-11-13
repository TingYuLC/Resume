<template>
    <div class="page articles">
        <h3>{{$store.state.data.blog}}</h3>
        <a class="blog-content" v-for="(item, i) in $store.state.data.articles" :key="i" :href="item.url" target="_blank">
            <div class="title">
                <span>{{item.date}}</span>
                <span @touchstart="linkTo(item.url)">{{item.title}}</span>
            </div>
            <div class="content">
                <p>{{item.text}}</p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
  methods: {
    linkTo (url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>

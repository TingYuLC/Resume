<template>
    <div class="page project">
        <h3>{{$store.state.data.projectName}}</h3>
        <div class="project-content" @touchmove="touchmove" @touchend="touchend">
            <div class="project-item" v-for="(item, i) in $store.state.data.projects" :key="i"
                :style="{transform: `translateX(${320*getNum(i)}px)`}">
                <div class="demo">
                    <span>{{item.title}}</span>
                    <button v-if="item.demo !== undefined" @click="touchstart(item.demo)">demo</button>
                </div>
                <img :src="item.img" />
                <p>{{item.content}}</p>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      currentItem: 0,
      touchStartX: 0
    }
  },
  methods: {
    getNum (i) {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return i - this.currentItem
      } else {
        return 0
      }
    },
    touchstart (url) {
      window.location.href = url
    },
    touchmove (e) {
      if (this.touchStartX !== 0) return
      this.touchStartX = e.changedTouches[0].screenX
    },
    touchend (e) {
      if (this.touchStartX === 0) return
      const touchEndX = e.changedTouches[0].screenX
      if (this.touchStartX - touchEndX > 20) {
        if (this.currentItem < 2) this.currentItem++
      } else if (this.touchStartX - touchEndX < -20) {
        if (this.currentItem > 0) this.currentItem--
      }
      this.touchStartX = 0
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
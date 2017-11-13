<template>
  <div id="app">
    <div class="entry" @touchmove="touchmove" @touchend="touchend">
      <transition name="header-nav-fade">
        <headernav v-if="this.currentPage !== 0" :id="this.currentPage" @linkTo="linkTo" />
      </transition>
      <transition name="lang-switcher-fade">
        <language v-if="this.currentPage !== 0" />
      </transition>
      <index 
        @linkTo="linkTo"
        :class="{
          currentPage: currentPage === 0,
          prePage: currentPage > 0,
          nextPage: currentPage < 0
        }"
      />
      <introduction 
        :class="{
          currentPage: currentPage === 1,
          prePage: currentPage > 1,
          nextPage: currentPage < 1
        }"
      />
      <skills 
        :class="{
          currentPage: currentPage === 2,
          prePage: currentPage > 2,
          nextPage: currentPage < 2
        }"
      />
      <project 
        :class="{
          currentPage: currentPage === 3,
          prePage: currentPage > 3,
          nextPage: currentPage < 3
        }"
      />
      <articles 
        :class="{
          currentPage: currentPage === 4,
          prePage: currentPage > 4,
          nextPage: currentPage < 4
        }"
      />
      <concact 
        :class="{
          currentPage: currentPage === 5,
          prePage: currentPage > 5,
          nextPage: currentPage < 5
        }"
      />
    </div>
    <transition name="footer-fade">
      <div class="copyright" v-if="currentPage === 5">
        <p>Copyright © 2017 LittleBitch - 粤ICP备 17071196 号</p>
      </div>
    </transition>
  </div>
</template>

<script>
import index from './pages/index'
import concact from './pages/concact'
import introduction from './pages/introduction'
import articles from './pages/articles'
import skills from './pages/skills'
import project from './pages/project'
import language from './components/LanguageSwitcher'
import headernav from './components/HeaderNav'
import 'babel-polyfill'

export default {
  name: 'app',
  data () {
    return {
      currentPage: 0,
      touchStartX: 0
    }
  },
  methods: {
    linkTo (id) {
      this.currentPage = id
    },
    // 兼容火狐
    handleMouseWheel (e) {
      if (this.currentPage === 0) return
      let delta = e.wheelDelta
      if (e.wheelDelta) {
        delta = e.wheelDelta
      } else {
        delta = (-e.detail) * 40
      }

      e.stopPropagation()
      e.preventDefault()

      if (this.scrollingLock) return

      if (delta === -120) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)
        if (this.currentPage < 5) this.currentPage++
      } else if (delta === 120) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)
        if (this.currentPage > 1) this.currentPage--
      }
    },
    touchmove (e) {
      e.preventDefault()
      if (this.touchStartX !== 0) return
      this.touchStartX = e.changedTouches[0].screenY
    },
    touchend (e) {
      e.preventDefault()
      if (this.touchStartX === 0) return
      const touchEndX = e.changedTouches[0].screenY
      if (this.currentPage === 0) return
      if (this.scrollingLock) return
      if (this.touchStartX - touchEndX > 80) {
        this.scrollingLock = true
        setTimeout(() => {
          this.scrollingLock = false
        }, 700)
        if (this.currentPage < 5) this.currentPage++
      } else if (this.touchStartX - touchEndX < -80) {
        this.scrollingLock = true
        setTimeout(() => {
          this.scrollingLock = false
        }, 700)
        if (this.currentPage > 1) this.currentPage--
      }
      this.touchStartX = 0
    }
  },
  mounted () {
    const that = this
    document.addEventListener('mousewheel', function (e) {
      that.handleMouseWheel(e)
    })
    document.addEventListener('DOMMouseScroll', function (e) {
      that.handleMouseWheel(e)
    })
  },
  components: {
    index,
    concact,
    introduction,
    articles,
    skills,
    project,
    language,
    headernav
  }
}
</script>

<style lang="less">
@import './assets/less/_reset.less';
@import './assets/less/common.less';
@import './assets/less/animation.less';
</style>

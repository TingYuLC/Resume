<template>
  <div class="component-language" :class="$store.state.lang">
    <span class="language-cn"@click="changeLanguage('cn')" @touchstart="changeLanguage('cn')">中</span>
    <span class="language-en"@click="changeLanguage('en')" @touchstart="changeLanguage('en')">Eng</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'languageSwitcher',
  methods: {
    ...mapActions([
      'changeLanguage'
    ])
  }
}
</script>


<style scoped lang="less">
@import './index.less';
</style>


<template>
    <div class="page skills">
        <h3>{{$store.state.data.skills}}</h3>
        <div class="skills-content">
            <img v-for="(img, index) in $store.state.data.skillImgs" :key="index" :src="img" />
        </div>
        <div class="skills-others">
            <img v-for="(img, index) in $store.state.data.skillsOthers" :key="index" :src="img" />
        </div>
    </div>
</template>
<script>
import arrow from '../../components/Arrow'
export default {
  components: {
    arrow
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
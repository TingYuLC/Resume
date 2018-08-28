<template>
    <div class="page introduction">
        <img src="//luojc.cn/images/LittleBitch.jpg" />
        <span>{{$store.state.data.name}}</span>
        <p>{{$store.state.data.about}}</p>
        <arrow />
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
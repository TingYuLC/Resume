<template>
    <div class="page index">
        <h3>{{$store.state.data.concact}}</h3>
        <div class="personal-concat">
            <div class="content" v-for="(item, i) in concactItems" :key="i" :src="item" >
                <img :src="item.title" />
                <span>{{$store.state.data[item.name]}}</span>
            </div>
        </div>
        <div class="git-blog">
            <a href="http://blog.luojc.cn/" target="_blank">
              <img @touchstart="linkTo('http://blog.luojc.cn/')" src="../../assets/img/svg/blog.svg"/>
            </a>
            <a href="https://github.com/TingYuLC" target="_blank">
              <img @touchstart="linkTo('https://github.com/TingYuLC')" src="../../assets/img/svg/github.svg"/>
            </a>
            <a href="https://www.zhihu.com/people/luo-cheng-20-76" target="_blank">
              <img @touchstart="linkTo('https://www.zhihu.com/people/luo-cheng-20-76')" src="../../assets/img/svg/konw.svg"/>
            </a>
        </div>
    </div>
</template>
<script>
import university from '@/assets/img/svg/university.svg'
import email from '@/assets/img/svg/email.svg'
import phone from '@/assets/img/svg/phone.svg'
export default {
  data () {
    return {
      concactItems: [
        {
          title: university,
          name: 'university'
        },
        {
          title: phone,
          name: 'phone'
        },
        {
          title: email,
          name: 'email'
        }
      ]
    }
  },
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
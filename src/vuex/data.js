import html from '@/assets/img/svg/html.svg'
import css from '@/assets/img/svg/css3.svg'
import js from '@/assets/img/svg/js.svg'
import java from '@/assets/img/svg/java.svg'
import vue from '@/assets/img/svg/vue.svg'
import react from '@/assets/img/svg/react.svg'
import ps from '@/assets/img/svg/ps.svg'
import node from '@/assets/img/svg/node.svg'

const cn = {
  title: '罗金城的简历',
  name: '罗金城',
  logoBlog: '罗金城的博客',
  concact: '联系我',
  university: '深圳大学',
  phone: '13128972305',
  email: '1317697565@qq.com',
  pageNames: [
    '关于我',
    '技能掌握',
    '项目经验',
    '博客文章',
    '联系我'
  ],
  about: '我叫罗金城，08年毕业，坐标深圳，是一名前端工程师，除了Javascript，也接触过C,C++,Java。',
  skills: '技能',
  skillImgs: [
    html,
    css,
    js,
    node
  ],
  skillsOthers: [
    ps,
    vue,
    react,
    java
  ],
  blog: '博客文章',
  articles: [
    {
      date: '2017-10-12',
      title: 'Flex布局',
      text: '目前常见的布局方式有固定布局，流动布局，而为适应响应式布局，css3增加了弹性布局',
      url: '//blog.luojc.cn/2017/10/12/Flex/'
    },
    {
      date: '2017-09-12',
      title: 'ES6常见特性',
      text: 'ES5只有全局作用域，ES6新增了块级作用域，所谓块级作用域，即块内声明的变量只在块内有效。',
      url: '//blog.luojc.cn/2017/09/12/ES6/'
    },
    {
      date: '2017-08-12',
      title: '前端跨域',
      text: '由于浏览器同源策略的原因，只有具有相同源的脚本和文档才能相互访问。而所谓的跨域，就是让不同源的脚本，文档能够相互访问的方法。',
      url: '//blog.luojc.cn/2017/08/12/crossDomain/'
    },
    {
      date: '2017-07-27',
      title: 'this指针',
      text: '本文章主要针对this指针的指向问题，从全局上下文，函数上下文，箭头函数，原型链各方面讲解this的指向。',
      url: '//blog.luojc.cn/2017/07/27/this/'
    },
    {
      date: '2017-06-24',
      title: '垂直居中',
      text: '在平常写网页时，总会遇到很多水平居中，垂直居中的问题，往往对很多居中属性半生不熟，本文章整理了一些水平，垂直居中的方法，希望有用。',
      url: '//blog.luojc.cn/2017/06/24/center/'
    },
    {
      date: '2017-05-04',
      title: 'css定位问题',
      text: 'w3c中指出，除非专门指定，否则所有框都在普通流中定位。出了普通流，还有相对定位，绝对定位，粘性定位，浮动等。',
      url: '//blog.luojc.cn/2017/05/04/Position/'
    }
  ],
  projects: [
    {
      title: '毕业设计',
      img: '//luojc.cn/images/design.png',
      content: '一个类似CMS的个人博客管理系统，采用Vue+axios+Element-ui搭建，后端采用koa2。',
      demo: '//design.luojc.cn'
    },
    {
      title: 'React-Native乱炖',
      img: '//luojc.cn/images/rndemo.png',
      content: '一款集合了豆瓣电影，网易云音乐，友盟第三方分享的React-Native App'
    },
    {
      title: '树洞控制台',
      img: '//luojc.cn/images/szdashboard.png',
      content: '为小程序制作的控制台，团队合作，负责React组件的编写，熟悉Git的使用，使用Redux。'
    }
  ],
  projectName: '项目经验'
}

const en = {
  title: '罗金城的简历',
  name: 'LuoJC',
  logoBlog: 'LittleB blog',
  concact: 'Concact Me',
  university: 'ShenZhen University',
  phone: '13128972305',
  email: '1317697565@qq.com',
  pageNames: [
    'About Me',
    'Skill Mastery',
    'Project Experience',
    'Blog Articles',
    'Concact Me'
  ],
  about: 'My name is Luo Jincheng, now senior, coordinate Shenzhen, is a front-end engineer, in addition to Javascript, also contacted with C, C++, Java.',
  skills: 'Skill Mastery',
  skillImgs: [
    html,
    css,
    js,
    node
  ],
  skillsOthers: [
    ps,
    vue,
    react,
    java
  ],
  blog: 'Blog Articles',
  articles: [
    {
      date: '2017-10-12',
      title: 'Flex',
      text: 'At present, the common layout methods have fixed layout and flow layout, while CSS3 has increased the elastic layout to adapt to the responsive layout.',
      url: '//blog.luojc.cn/2017/10/12/Flex/'
    },
    {
      date: '2017-09-12',
      title: 'ES6',
      text: 'ES5 has only a global scope, and ES6 adds a block level scope, called the block level scope, where the declared variables within the block are only valid within the block.',
      url: '//blog.luojc.cn/2017/09/12/ES6/'
    },
    {
      date: '2017-08-12',
      title: 'Cross Domain',
      text: 'Because of the same source strategy of browsers, only scripts and documents with the same source can access each other. The so-called cross domain, is to let different script, document can access each other.',
      url: '//blog.luojc.cn/2017/08/12/crossDomain/'
    },
    {
      date: '2017-07-27',
      title: 'This Pointer',
      text: 'Just contact JavaScript, more or less with the this point, MDN is presented to a lot of this, including the global context, function context, arrow function, object, prototype chain and so on this point, but we couldn\'t figure out is more pointed to function.',
      url: '//blog.luojc.cn/2017/07/27/this/'
    },
    {
      date: '2017-06-24',
      title: 'Vertical Centering',
      text: 'Write in a web page, will meet a lot of horizontal center, vertical center problem, often for many middle or not to attribute halfcooked, summary, this article compiled some level method vertically, the hope that useful.',
      url: '//blog.luojc.cn/2017/06/24/center/'
    },
    {
      date: '2017-05-04',
      title: 'Css Location',
      text: 'W3C indicates that all boxes are positioned in the normal stream unless specified. That is to say, the position of the elements in the general flow is determined by the position of the element in (X) HTML. That means that the elements in the normal stream follow their layout in html.',
      url: '//blog.luojc.cn/2017/05/04/Position/'
    }
  ],
  projects: [
    {
      title: 'Graduation project',
      img: '//luojc.cn/images/design.png',
      content: 'A personal blog management system similar to CMS is built with Vue+axios+Element-ui, and koa2 is used in the back end.',
      demo: '//design.luojc.cn'
    },
    {
      title: 'React-Native Stew',
      img: '//luojc.cn/images/rndemo.png',
      content: 'A collection of Douban Movies, NetEase Cloud Music, React-Native App shared by third parties in the Alliance.'
    },
    {
      title: 'Dashboard',
      img: '//luojc.cn/images/szdashboard.png',
      content: 'Dashboaard for tree hole applet, team work, responsible for the preparation of front-end React components, familiar with the use of Git, the use of Redux.'
    }
  ],
  projectName: 'Project Experience'
}

export default {
  cn: cn,
  en: en
}

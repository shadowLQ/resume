export default {
  name: '李强',
  tel: '18801225653',
  email: 'shadowsLQ@126.com',
  github: 'https://github.com/shadowLQ',
  website: 'https://shadowlq.github.io/blog',
  edus: [
    {
      left: '内蒙古科技大学',
      right: '中国内蒙古',
      children: [
        {
          left: '专业：信息与计算科学本科',
          right: '2015年9月 - 2019年7月'
        },
        {
          left: '荣誉：3年三等奖学金，1年二等奖学金',
        },
      ]
    },
  ],
  skills: {
    frameworks: ['Spring', 'SpringMVC', 'SpringBoot', 'SpringCloud', 'Mybatis'],
    libraries: ['Redis', 'Mysql', 'PostgreSQL','RocketMQ'],
    tools: ['IDEA', 'WebStorm', 'Navicat'],
    tests: ['Postman', 'docker'],
  },
  works: [
    {
      left: '民生租赁@科技部',
      link: '',
      right: '2019年7月 - 至今',
      children: [
        {left: '主要负责民生租赁系统，使用 *Vue* + *Ant Design* + *SpringBoot* 技术栈开发业务管理后台'},
        {left: '将项目工程化，接入 Coding 流水线，引入页面告警和埋点上报'},
        {left: '总结并输出开发指南，并开发一套运维指南'},
      ]
    }
  ],
  interns: [
    {
      left: '小米（后端实习，中国 北京）',
      link: 'http://code.mi.com/',
      right: '2018年9月 - 2019年3月',
      children:  [
        {left: '使用 *React.js* 单独开发一套 OJ（Online Judge）系统'},
        {left: '基于 *Ant Design* 和 *Sass* 编写组件样式和网页布局'},
        {left: '使用 *Ace Editor* 实现在线编辑代码功能，并用 Session 记住每道编程题的做题情况'},
        {left: '前后端分离，使用 *SpringCloud* 生成数据后端提供的 RESTful API'}
      ]
    },
  ],
  projects: [
    {
      left: '个人博客',
      link: 'https://github.com/shadowLQ/blog',
      right: '2021年12月',
      children: [
        {left: '基于vitepress打造'},
        {left: '部署在github pages'},
        {left: '记录日常学习和生活'},
      ]
    },
    {
      left: 'JSGo',
      link: 'https://github.com/shadowLQ/JSGo',
      right: '2021年10月',
      children: [
        {left: '学习前端知识的一些代码'},
        {left: 'vue2 vue3 TS Vite WebPack'},
      ]
    },

  ],
}

(function(t){function e(e){for(var n,l,o=e[0],a=e[1],c=e[2],f=0,p=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var a=s[o];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var n={},r={app:0},i=[];function l(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=n,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(s,n,function(e){return t[e]}.bind(null,n));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/resume/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=a;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"4d65":function(t,e,s){"use strict";s("fe15")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Home")],1)},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"info"},[s("h1",{staticClass:"name"},[t._v(t._s(t.name))]),s("p",[t._v("\n      电话: "),s("strong",{staticClass:"tel"},[t._v(t._s(t.tel))]),t._v("\n      邮件: "),s("strong",{staticClass:"email"},[t._v(t._s(t.email))])]),s("div",{staticClass:"blogs"},[t._v("\n      个人主页: "),s("strong",[s("a",{attrs:{href:t.website}},[t._v(t._s(t.website))])])]),s("div",{staticClass:"links"},[t._v("\n      Github: "),s("strong",[s("a",{attrs:{href:t.github}},[t._v(t._s(t.github))])])])]),s("div",{staticClass:"edu"},[s("h4",[t._v("教育背景")]),s("hr"),s("List",{attrs:{source:t.edus}})],1),t.interns?s("div",{staticClass:"interns"},[s("h4",[t._v("工作经历")]),s("hr"),s("List",{attrs:{source:t.works}})],1):t._e(),t.interns?s("div",{staticClass:"interns"},[s("h4",[t._v("实习经历")]),s("hr"),s("List",{attrs:{source:t.interns}})],1):t._e(),s("div",{staticClass:"projects"},[s("h4",[t._v("个人项目")]),s("hr"),s("List",{attrs:{source:t.projects}})],1),s("div",{staticClass:"skills"},[s("h4",[t._v("技能清单")]),s("hr"),s("Skills",{attrs:{skills:t.skills}})],1)])},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",t._l(t.source,(function(e){return s("li",[s("div",{staticClass:"item"},[s("span",{staticClass:"left"},[t._v("\n                "+t._s(e.left)+"\n                "),s("small",[e.link?s("a",{staticClass:"link",attrs:{href:e.link}},[t._v(" ("+t._s(e.link)+")")]):t._e()])]),s("span",{staticClass:"right"},[t._v(t._s(e.right))])]),s("ul",t._l(e.children,(function(e){return s("li",[s("p",{staticClass:"children-item"},[s("span",{staticClass:"left",domProps:{innerHTML:t._s(t.renderLeft(e.left))}}),s("span",{staticClass:"right"},[t._v(t._s(e.right))])])])})),0)])})),0)},c=[],u=(s("a481"),{name:"Edu",props:{source:{type:Array,required:!0}},methods:{renderLeft:function(t){return t.replace(/\*([\w.\s&()\/,，、]+)\*/g,"<strong>$1</strong>")}}}),f=u,p=(s("4d65"),s("2877")),d=Object(p["a"])(f,a,c,!1,null,"3500d1e2",null),h=d.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",[t._v("框架：")]),t._v(t._s(t.skills.frameworks.join(", "))+"\n    ")]),s("li",[s("strong",[t._v("中间件：")]),t._v(t._s(t.skills.libraries.join(", "))+"\n    ")]),s("li",[s("strong",[t._v("工具：")]),t._v(t._s(t.skills.tools.join(", "))+"\n    ")]),s("li",[s("strong",[t._v("测试&部署")]),t._v(t._s(t.skills.tests.join(", "))+"\n    ")])])},_=[],g={name:"Skills",props:{skills:{type:Object,required:!0}}},b=g,m=Object(p["a"])(b,v,_,!1,null,"3d4aa9cc",null),k=m.exports,w={name:"李强",tel:"18801225653",email:"shadowsLQ@126.com",github:"https://github.com/shadowLQ",website:"https://shadowlq.github.io/blog",edus:[{left:"内蒙古科技大学",right:"中国内蒙古",children:[{left:"专业：信息与计算科学本科",right:"2015年9月 - 2019年7月"},{left:"荣誉：3年三等奖学金，1年二等奖学金"}]}],skills:{frameworks:["Spring","SpringMVC","SpringBoot","SpringCloud","Mybatis"],libraries:["Redis","Mysql","PostgreSQL","RocketMQ"],tools:["IDEA","WebStorm","Navicat"],tests:["Postman","docker"]},works:[{left:"民生租赁@科技部",link:"",right:"2019年7月 - 至今",children:[{left:"主要负责民生租赁系统，使用 *Vue* + *Ant Design* + *SpringBoot* 技术栈开发业务管理后台"},{left:"将项目工程化，接入 Coding 流水线，引入页面告警和埋点上报"},{left:"总结并输出开发指南，并开发一套运维指南"}]}],interns:[{left:"小米（后端实习，中国 北京）",link:"http://code.mi.com/",right:"2018年9月 - 2019年3月",children:[{left:"使用 *React.js* 单独开发一套 OJ（Online Judge）系统"},{left:"基于 *Ant Design* 和 *Sass* 编写组件样式和网页布局"},{left:"使用 *Ace Editor* 实现在线编辑代码功能，并用 Session 记住每道编程题的做题情况"},{left:"前后端分离，使用 *SpringCloud* 生成数据后端提供的 RESTful API"}]}],projects:[{left:"个人博客",link:"https://github.com/shadowLQ/blog",right:"2021年12月",children:[{left:"基于vitepress打造"},{left:"部署在github pages"},{left:"记录日常学习和生活"}]},{left:"JSGo",link:"https://github.com/shadowLQ/JSGo",right:"2021年10月",children:[{left:"学习前端知识的一些代码"},{left:"vue2 vue3 TS Vite WebPack"}]}]},j={name:"Home",data:function(){return w},components:{List:h,Skills:k}},y=j,C=(s("facb"),Object(p["a"])(y,l,o,!1,null,"ca0258b6",null)),S=C.exports,O={name:"app",data:function(){return{indent:"20px"}},components:{Home:S}},L=O,P=(s("5c0b"),Object(p["a"])(L,r,i,!1,null,null,null)),x=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("e332")},e332:function(t,e,s){},f659:function(t,e,s){},facb:function(t,e,s){"use strict";s("f659")},fe15:function(t,e,s){}});
//# sourceMappingURL=app.58e5ef58.js.map
/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-27 00:47:05
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7fe9d4a"],{"0bb4":function(e,t,a){"use strict";a.r(t),a.d(t,"getNoticeList",(function(){return n}));var s=a("b775");function n(){return Object(s["default"])({url:"https://api.vuejs-core.cn/getNotice",method:"get"})}},1498:function(e,t,a){},"37f9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"index-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:24,md:24,sm:24,xl:24,xs:24}},[e.noticeList?t("el-alert",[t("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[t("a",{attrs:{href:"https://github.com/zxwk1998/vue-admin-better",target:"_blank"}},[t("img",{staticStyle:{"margin-right":"10px"},attrs:{src:"https://img.shields.io/github/stars/zxwk1998/vue-admin-better?style=flat-square&label=Stars&logo=github"}})]),t("p",{domProps:{innerHTML:e._s(e.noticeList.notice)}})])]):e._e()],1),t("el-col",{attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[t("el-card",{attrs:{shadow:"never"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("访问量")])]),t("vab-chart",{attrs:{autoresize:"",option:e.fwl}}),t("div",{staticClass:"bottom"},[t("span",[e._v(" 日均访问量: "+e._s(e.config1.endVal)+" ")])])],1)],1),t("el-col",{attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[t("el-card",{attrs:{shadow:"never"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("授权数")])]),t("vab-chart",{attrs:{autoresize:"",option:e.sqs}}),t("div",{staticClass:"bottom"},[t("span",[e._v(" 总授权数: "+e._s(e.config2.endVal)+" ")])])],1)],1),e._l(e.iconList,(function(a,s){return t("el-col",{key:s,attrs:{lg:3,md:3,sm:6,xl:3,xs:12}},[t("router-link",{attrs:{target:"_blank",to:a.link}},[t("el-card",{staticClass:"icon-panel",attrs:{shadow:"never"}},[t("vab-icon",{style:{color:a.color},attrs:{icon:["fas",a.icon]}}),t("p",[e._v(e._s(a.title))])],1)],1)],1)})),t("el-col",{attrs:{lg:11,md:24,sm:24,xl:11,xs:24}},[t("el-card",{staticClass:"card",attrs:{shadow:"never"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("依赖信息")])]),t("table",{staticClass:"table"},[t("tr",[t("td",[e._v("@vue/cli版本")]),t("td",[e._v(e._s(e.devDependencies["@vue/cli-service"]))]),t("td",[e._v("vue版本")]),t("td",[e._v(e._s(e.dependencies["vue"]))])]),t("tr",[t("td",[e._v("vuex版本")]),t("td",[e._v(e._s(e.dependencies["vuex"]))]),t("td",[e._v("vue-router版本")]),t("td",[e._v(e._s(e.dependencies["vue-router"]))])]),t("tr",[t("td",[e._v("element-ui版本")]),t("td",[e._v(e._s(e.dependencies["element-ui"]))]),t("td",[e._v("axios版本")]),t("td",[e._v(e._s(e.dependencies["axios"]))])]),t("tr",[t("td",[e._v("eslint版本")]),t("td",[e._v(e._s(e.devDependencies["eslint"]))]),t("td",[e._v("prettier版本")]),t("td",[e._v(e._s(e.devDependencies["prettier"]))])]),t("tr",[t("td",[e._v("sass版本")]),t("td",[e._v(e._s(e.devDependencies["sass"]))]),t("td",[e._v("mockjs版本")]),t("td",[e._v(e._s(e.dependencies["mockjs"]))])]),t("tr",[t("td",[e._v("layouts版本")]),t("td",[e._v(e._s(e.dependencies["layouts"]))]),t("td",[e._v("lodash版本")]),t("td",[e._v(e._s(e.dependencies["lodash"]))])])]),t("br"),t("el-alert",{attrs:{closable:!1,title:e.userAgent,type:"info"}}),t("br")],1)],1),t("el-col",{attrs:{lg:13,md:13,sm:24,xl:13,xs:24}},[t("el-card",{attrs:{shadow:"never"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("其他信息")])]),t("div",{staticStyle:{"text-align":"center"}},[t("vab-colorful-icon",{staticStyle:{"font-size":"140px"},attrs:{"icon-class":"vab"}}),t("h1",{staticStyle:{"font-size":"30px"}},[e._v("vue-admin-better")])],1),t("div",{staticClass:"bottom-btn"},[t("el-popover",{attrs:{placement:"top",trigger:"hover",width:"250"}},[t("p",[e._v(" 请我们喝杯咖啡，付款后联系qq 783963206，我们将邀请您加入我们的讨论群，谢谢您愿意支持开源，加群获取文档、及基础模板，群内大佬众多，希望能帮到大家（如情况不允许，请勿勉强）。 ")]),t("el-image",{attrs:{src:a("f0a2")}}),t("a",{attrs:{slot:"reference",target:"_blank"},slot:"reference"},[t("el-button",{attrs:{type:"primary"}},[e._v("QQ讨论群、基础版、文档")])],1)],1),t("a",{attrs:{href:"https://github.com/zxwk1998/vue-admin-better",target:"_blank"}},[t("el-button",{attrs:{type:"plain"}},[e._v("vue2.x版本 github下载源码点star")])],1),t("a",{attrs:{href:"https://gitee.com/chu1204505056/vue-admin-better",target:"_blank"}},[t("el-button",{attrs:{type:"plain"}},[e._v("vue2.x版本 码云下载源码点star")])],1),t("a",{attrs:{href:"https://github.com/zxwk1998/vue-admin-arco",target:"_blank"}},[t("el-button",{attrs:{type:"plain"}},[e._v("vue3.x版本 github下载源码点star")])],1),t("a",{attrs:{href:"https://vuejs-core.cn/admin-pro",target:"_blank"}},[t("el-button",{attrs:{type:"primary"}},[e._v("Admin Pro ￥699")])],1),t("a",{attrs:{href:"https://vuejs-core.cn/admin-plus",target:"_blank"}},[t("el-button",{attrs:{type:"primary"}},[e._v("Admin Plus ￥799")])],1),t("a",{attrs:{href:"https://vuejs-core.cn/shop-vite",target:"_blank"}},[t("el-button",{attrs:{type:"success"}},[e._v("Shop Vite ￥1899")])],1),t("a",{on:{click:e.handleChangeTheme}},[t("el-button",{attrs:{type:"danger"}},[e._v("修改主题和布局")])],1)],1)])],1)],2)],1)},n=[],r=(a("cdf1"),a("7fc4")),i=a("9224"),l=a("0bb4"),o={name:"Index",components:{VabChart:r["default"]},data(){return{timer:0,updateTime:"2024-7-27 00:47:05",nodeEnv:"production",dependencies:i["a"],devDependencies:i["b"],config1:{startVal:0,endVal:this.$baseLodash.random(2e4,6e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},config2:{startVal:0,endVal:this.$baseLodash.random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},config3:{startVal:0,endVal:this.$baseLodash.random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},fwl:{color:["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"],backgroundColor:"rgba(252,252,252,0)",grid:{top:"4%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"访问量",type:"line",data:[],smooth:!0,areaStyle:{}}]},sqs:{color:["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"],backgroundColor:"rgba(252,252,252,0)",grid:{top:"4%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["0时","4时","8时","12时","16时","20时","24时"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"授权数",type:"bar",barWidth:"60%",data:[10,52,20,33,39,33,22]}]},cy:{grid:{top:"4%",left:"2%",right:"4%",bottom:"0%"},series:[{type:"wordCloud",gridSize:15,sizeRange:[12,40],rotationRange:[0,0],width:"100%",height:"100%",textStyle:{normal:{color(){const e=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#975FE5"];let t=Math.floor(Math.random()*e.length);return e[t]}}},data:[{name:"vue-admin-better",value:15e3},{name:"element",value:10081},{name:"beautiful",value:9386},{name:"vue",value:6500},{name:"zxwk1998",value:6e3},{name:"good",value:4500},{name:"success",value:3800},{name:"never",value:3e3},{name:"boy",value:2500},{name:"girl",value:2300},{name:"github",value:2e3},{name:"hbuilder",value:1900},{name:"dcloud",value:1800},{name:"china",value:1700},{name:"1204505056",value:1600},{name:"972435319",value:1500},{name:"young",value:1200},{name:"old",value:1100},{name:"vuex",value:900},{name:"router",value:800},{name:"money",value:700},{name:"qingdao",value:800},{name:"yantai",value:9e3},{name:"author is very cool",value:9200}]}]},reverse:!0,activities:[],noticeList:[],userAgent:navigator.userAgent,iconList:[{icon:"video",title:"视频播放器",link:"/vab/player",color:"#ffc069"},{icon:"table",title:"表格",link:"/vab/table/comprehensiveTable",color:"#5cdbd3"},{icon:"laptop-code",title:"源码",link:"https://github.com/zxwk1998/vue-admin-better",color:"#b37feb"},{icon:"book",title:"书籍",link:"",color:"#69c0ff"},{icon:"bullhorn",title:"公告",link:"",color:"#ff85c0"},{icon:"gift",title:"礼物",link:"",color:"#ffd666"},{icon:"balance-scale-left",title:"公平的世界",link:"",color:"#ff9c6e"},{icon:"coffee",title:"休息一下",link:"",color:"#95de64"}]}},created(){this.fetchData()},beforeDestroy(){clearInterval(this.timer)},mounted(){let e=+new Date(2020,1,1),t=864e5,a=[],s=[1500*Math.random()],n=new Date(e);const r=e=>{n=[n.getFullYear(),n.getMonth()+1,n.getDate()].join("/"),a.push(n),s.push(this.$baseLodash.random(2e4,6e4)),e&&(a.shift(),s.shift()),n=new Date(+new Date(n)+t)};for(let i=1;i<6;i++)r();r(!0),this.fwl.xAxis[0].data=a,this.fwl.series[0].data=s,this.timer=setInterval(()=>{r(!0),this.fwl.xAxis[0].data=a,this.fwl.series[0].data=s},3e3)},methods:{handleClick(e){this.$baseMessage(`点击了${e.name},这里可以写跳转`)},handleZrClick(){},handleChangeTheme(){this.$baseEventBus.$emit("theme")},async fetchData(){const e=await Object(l["getNoticeList"])();this.noticeList=e.data}}},c=o,d=(a("fc40"),a("426c")),u=Object(d["a"])(c,s,n,!1,null,"91cd8124",null);t["default"]=u.exports},"7fc4":function(e,t,a){"use strict";a.r(t);a("5f31");var s=a("8079");t["default"]=s["a"]},f0a2:function(e,t,a){e.exports=a.p+"static/img/zfb_kf.1e418073.jpg"},fc40:function(e,t,a){"use strict";a("1498")}}]);
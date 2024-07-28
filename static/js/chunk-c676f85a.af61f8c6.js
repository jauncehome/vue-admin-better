/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-28 16:49:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c676f85a"],{"18fc":function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s._self._c;return a("div",{staticClass:"lodash-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-link",{attrs:{href:"https://www.lodashjs.com/",target:"_blank",type:"primary"}},[s._v("lodashjs官网")])],1)],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("去除数组array中的最后一个元素")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.initial([1, 2, 3]) "),a("br"),s._v(" // => [1, 2] ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("返回数组 array的第一个元素")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.head([1, 2, 3]) "),a("br"),s._v(" // => 1 ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("合并数组")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.concat([1],[2]) "),a("br"),s._v(" // => [1,2] ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("左切片")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.drop([1, 2, 3],2切除的数量) "),a("br"),s._v(" // => [3] ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("右切片")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.dropRight([1, 2, 3],2切除的数量) "),a("br"),s._v(" // => [1] ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("修改拼接")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.join(['a', 'b', 'c'], '~'); "),a("br"),s._v(" // => 'a~b~c' ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("获取数组最后一个元素")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.last(['a', 'b', 'c']); "),a("br"),s._v(" // => 'c' ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("数组去重")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.uniq(['a', 'b', 'a']); "),a("br"),s._v(" // => ['a','b'] ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("获取数组的最大值")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.max([4, 2, 8, 6]) "),a("br"),s._v(" // => 8 ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("获取数组的最小值")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.min([4, 2, 8, 6]) "),a("br"),s._v(" // => 2 ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("四舍五入(保留任意位小数)")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.round(4.006,2保持几位小数) "),a("br"),s._v(" // => 4.01 ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("数组内数据相加")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.sum([4, 2, 8, 6]) "),a("br"),s._v(" // => 20 ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("返回随机数")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.random(0, 5) "),a("br"),s._v(" // => 0到5任意数 ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("返回数组内的随机数")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.sample([1, 2, 3, 4]) "),a("br"),s._v(" // => 数组1到4任意数 ")])])],1),a("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[s._v("事件防抖动")])]),a("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.debounce(@click的事件,延迟的毫秒数) "),a("br"),s._v(" // => 点击后多久不可以点击 ")])])],1)],1)],1)},d=[],l={name:"Lodash",data(){return{}},created(){},mounted(){},methods:{}},r=l,o=(t("d3ea"),t("426c")),h=Object(o["a"])(r,e,d,!1,null,"fb151bea",null);a["default"]=h.exports},bda8:function(s,a,t){},d3ea:function(s,a,t){"use strict";t("bda8")}}]);
/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-28 16:49:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b25a3"],{"246a":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"webSocket-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:8,md:12,sm:24,xl:8,xs:24}},[t("el-alert",{attrs:{closable:!1,type:"success"}},[e._v("webSocket连接"+e._s(e.status)+"！")]),t("br"),t("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"地址"}},[t("el-input",{attrs:{disabled:""},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),t("el-form-item",{attrs:{label:"消息",prop:"message"}},[t("el-input",{model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("发送消息")])],1),t("el-form-item",{attrs:{label:"返回信息汇总"}},[e._v(" "+e._s(e.data)+" ")])],1)],1)],1)],1)},r=[],a=(s("cdf1"),{name:"WebSocket",components:{},data(){return{url:"ws://123.207.136.134:9010/ajaxchattest",webSocket:null,data:[],status:"",form:{message:null},rules:{message:[{required:!0,message:"请输入消息",trigger:"blur"}]}}},created(){this.init()},destroyed(){this.webSocket.close()},methods:{submit(){this.$refs["form"].validate(e=>{if(!e)return!1;this.send(this.form.message)})},init(){const e=this.url;this.webSocket=new WebSocket(e),this.webSocket.onmessage=this.onmessage,this.webSocket.onopen=this.onopen,this.webSocket.onerror=this.onerror,this.webSocket.onclose=this.onclose},onopen(){this.status="成功"},onerror(){this.status="失败",this.initWebSocket()},onmessage({data:e}){this.data.push(e.substring(0,e.length-66))},send(e){this.webSocket.send(e)},onclose(e){this.status="断开"}}}),l=a,i=s("426c"),n=Object(i["a"])(l,o,r,!1,null,null,null);t["default"]=n.exports}}]);
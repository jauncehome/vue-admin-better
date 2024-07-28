/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-28 16:49:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2108d185"],{4463:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"roleManagement-container"},[t("el-divider",{attrs:{"content-position":"left"}},[e._v(" 演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制 ")]),t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:12}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")]),t("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:e.handleDelete}},[e._v("批量删除")])],1),t("vab-query-form-right-panel",{attrs:{span:12}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入查询条件"},model:{value:e.queryForm.permission,callback:function(t){e.$set(e.queryForm,"permission","string"===typeof t?t.trim():t)},expression:"queryForm.permission"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v("查询")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText},on:{"selection-change":e.setSelectRows}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection"}}),t("el-table-column",{attrs:{label:"id",prop:"id","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"权限码",prop:"permission","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":"",width:"200"},scopedSlots:e._u([{key:"default",fn:function({row:i}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(i)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(i)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},s=[],a=i("e157"),l=i("e3d4"),r={name:"RoleManagement",components:{Edit:l["default"]},data(){return{list:null,listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10,permission:""},timeOutID:null}},created(){this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{setSelectRows(e){this.selectRows=e},handleEdit(e){e.id?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){if(e.id)this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{msg:t}=await Object(a["doDelete"])({ids:e.id});this.$baseMessage(t,"success"),this.fetchData()});else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;{const e=this.selectRows.map(e=>e.id).join();this.$baseConfirm("你确定要删除选中项吗",null,async()=>{const{msg:t}=await Object(a["doDelete"])({ids:e});this.$baseMessage(t,"success"),this.fetchData()})}}},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e,totalCount:t}=await Object(a["getList"])(this.queryForm);this.list=e,this.total=t,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},n=r,c=i("426c"),u=Object(c["a"])(n,o,s,!1,null,null,null);t["default"]=u.exports},e157:function(e,t,i){"use strict";i.r(t),i.d(t,"getList",(function(){return s})),i.d(t,"doEdit",(function(){return a})),i.d(t,"doDelete",(function(){return l}));var o=i("b775");function s(e){return Object(o["default"])({url:"/roleManagement/getList",method:"post",data:e})}function a(e){return Object(o["default"])({url:"/roleManagement/doEdit",method:"post",data:e})}function l(e){return Object(o["default"])({url:"/roleManagement/doDelete",method:"post",data:e})}},e3d4:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"权限码",prop:"permission"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.permission,callback:function(t){e.$set(e.form,"permission",t)},expression:"form.permission"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},s=[],a=i("e157"),l={name:"RoleManagementEdit",data(){return{form:{id:""},rules:{permission:[{required:!0,trigger:"blur",message:"请输入权限码"}]},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;{const{msg:e}=await Object(a["doEdit"])(this.form);this.$baseMessage(e,"success"),this.$emit("fetch-data"),this.close()}})}}},r=l,n=i("426c"),c=Object(n["a"])(r,o,s,!1,null,null,null);t["default"]=c.exports}}]);
/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-28 16:49:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b567d96"],{"635a":function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e._self._c;return i("el-dialog",{attrs:{"before-close":e.handleClose,"close-on-click-modal":!1,title:e.title,visible:e.dialogFormVisible,width:"909px"},on:{"update:visible":function(i){e.dialogFormVisible=i}}},[i("div",{staticClass:"upload"},[i("el-alert",{attrs:{closable:!1,title:`支持jpg、jpeg、png格式，单次可最多选择${e.limit}张图片，每张不可大于${e.size}M，如果大于${e.size}M会自动为您过滤`,type:"info"}}),i("br"),i("el-upload",{ref:"upload",staticClass:"upload-content",attrs:{accept:"image/png, image/jpeg",action:e.action,"auto-upload":!1,"close-on-click-modal":!1,data:e.data,"file-list":e.fileList,headers:e.headers,limit:e.limit,"list-type":"picture-card",multiple:!0,name:e.name,"on-change":e.handleChange,"on-error":e.handleError,"on-exceed":e.handleExceed,"on-preview":e.handlePreview,"on-progress":e.handleProgress,"on-remove":e.handleRemove,"on-success":e.handleSuccess}},[i("i",{staticClass:"el-icon-plus",attrs:{slot:"trigger"},slot:"trigger"}),i("el-dialog",{attrs:{"append-to-body":"",title:"查看大图",visible:e.dialogVisible},on:{"update:visible":function(i){e.dialogVisible=i}}},[i("div",[i("img",{attrs:{alt:"",src:e.dialogImageUrl,width:"100%"}})])])],1)],1),i("div",{staticClass:"dialog-footer",staticStyle:{position:"relative","padding-right":"15px","text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[e.show?i("div",{staticStyle:{position:"absolute",top:"10px",left:"15px",color:"#999"}},[e._v(" 正在上传中... 当前上传成功数:"+e._s(e.imgSuccessNum)+"张 当前上传失败数:"+e._s(e.imgErrorNum)+"张 ")]):e._e(),i("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("关闭")]),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:e.loading,size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("开始上传")])],1)])},l=[],a={name:"VabUpload",props:{url:{type:String,default:"/upload",required:!0},name:{type:String,default:"file",required:!0},limit:{type:Number,default:50,required:!0},size:{type:Number,default:1,required:!0}},data(){return{show:!1,loading:!1,dialogVisible:!1,dialogImageUrl:"",action:"https://vab-unicloud-3a9da9.service.tcloudbase.com/upload",headers:{},fileList:[],picture:"picture",imgNum:0,imgSuccessNum:0,imgErrorNum:0,typeList:null,title:"上传",dialogFormVisible:!1,data:{}}},computed:{percentage(){return 0==this.allImgNum?0:100*this.$baseLodash.round(this.imgNum/this.allImgNum,2)}},methods:{submitUpload(){this.$refs.upload.submit()},handleProgress(){this.loading=!0,this.show=!0},handleChange(e,i){e.size>1048576*this.size?(i.map((t,s)=>{t===e&&i.splice(s,1)}),this.fileList=i):this.allImgNum=i.length},handleSuccess(e,i,t){this.imgNum=this.imgNum+1,this.imgSuccessNum=this.imgSuccessNum+1,t.length===this.imgNum&&setTimeout(()=>{this.$baseMessage(`上传完成! 共上传${t.length}张图片`,"success")},1e3),setTimeout(()=>{this.loading=!1,this.show=!1},1e3)},handleError(){this.imgNum=this.imgNum+1,this.imgErrorNum=this.imgErrorNum+1,this.$baseMessage(`文件[${file.raw.name}]上传失败,文件大小为${this.$baseLodash.round(file.raw.size/1024,0)}KB`,"error"),setTimeout(()=>{this.loading=!1,this.show=!1},1e3)},handleRemove(){this.imgNum=this.imgNum-1,this.allNum=this.allNum-1},handlePreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleExceed(e,i){this.$baseMessage(`当前限制选择 ${this.limit} 个文件，本次选择了\n             ${e.length}\n             个文件`,"error")},handleShow(e){this.title="上传",this.data=e,this.dialogFormVisible=!0},handleClose(){this.fileList=[],this.picture="picture",this.allImgNum=0,this.imgNum=0,this.imgSuccessNum=0,this.imgErrorNum=0,this.dialogFormVisible=!1}}},o=a,r=(t("97cc"),t("426c")),n=Object(r["a"])(o,s,l,!1,null,"47fd85aa",null);i["default"]=n.exports},"6d5d":function(e,i,t){},"838f":function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e._self._c;return i("div",{staticClass:"upload-container"},[i("el-divider",{attrs:{"content-position":"left"}},[e._v("演示环境可能无法模拟上传")]),i("vab-upload",{ref:"vabUpload",attrs:{limit:50,name:"file",size:2,url:"/upload"}}),i("el-button",{attrs:{type:"primary"},on:{click:function(i){return e.handleShow({key:"value"})}}},[e._v("模拟上传")])],1)},l=[],a=t("635a"),o={name:"Upload",components:{VabUpload:a["default"]},data(){return{}},methods:{handleShow(e){this.$refs["vabUpload"].handleShow(e)}}},r=o,n=t("426c"),d=Object(n["a"])(r,s,l,!1,null,null,null);i["default"]=d.exports},"97cc":function(e,i,t){"use strict";t("6d5d")}}]);
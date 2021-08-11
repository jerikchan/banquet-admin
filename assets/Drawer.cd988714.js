var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))s.call(t,a)&&i(e,a,t[a]);return e},n=(e,t,a)=>new Promise(((r,o)=>{var s=e=>{try{l(a.next(e))}catch(t){o(t)}},i=e=>{try{l(a.throw(e))}catch(t){o(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,i);l((a=a.apply(e,t)).next())}));import{ag as d,bq as c,A as u,r as p,j as m,u as f,_ as b,L as g,F as y,a3 as v,x as h,a1 as D}from"./vendor.517bedfb.js";import{f as w}from"./BasicForm.dc1a8526.js";import{u as j}from"./useForm.d9f38e8c.js";/* empty css              */import{s as x}from"./directory.31b975a4.js";import{u as I,aG as P,i as S}from"./index.a6fa69dd.js";import{B as O,a as F}from"./index.af0d4e7b.js";import{_ as L}from"./Tree.vue_vue&type=style&index=0&lang.6368a1a6.js";const{devUrl:B}=I();var U,_;(_=U||(U={})).DirectoryPageList="/notification/find",_.GetAllDirectoryList="/system/getAllDirectoryList",_.AddDirectory="/notification//add",_.UpdateDirectory="/notification/update",_.DeleteDirectory="/notification/delete",_.MenuList="/system/getMenuList",_.setDirectoryStatus="/system/setRoleStatus";const k=e=>P.get({url:U.DirectoryPageList,params:l({},e)},{devUrl:B}),R=e=>P.post({url:U.DeleteDirectory,params:e},{devUrl:B}),T=[{title:"审批名称",dataIndex:"label",width:200},{title:"审批值",dataIndex:"code",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),d(c,{checked:"0"===e.status,checkedChildren:"已启用",unCheckedChildren:"已禁用",loading:e.pendingStatus,onChange(t){e.pendingStatus=!0;const a=t?"0":"1",{createMessage:r}=S();x(e.id,a).then((()=>{e.status=a,r.success("已成功修改审批状态")})).catch((()=>{r.error("修改审批状态失败")})).finally((()=>{e.pendingStatus=!1}))}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],A=[{field:"label",label:"审批名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],M=[{field:"label",label:"审批名称",required:!0,component:"Input"},{field:"code",label:"审批值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}];var C=u({name:"NotificationDrawer",components:{BasicDrawer:O,BasicForm:w,BasicTree:L},emits:["success","register"],setup(e,{emit:r}){const o=p(!0),s=p([]);let i="";const[d,{resetFields:c,setFieldsValue:u,validate:b}]=j({labelWidth:90,schemas:M,showActionButtonGroup:!1}),[g,{setDrawerProps:y,closeDrawer:v}]=F((e=>n(this,null,(function*(){var t;c(),y({confirmLoading:!1}),0===f(s).length&&(s.value=yield P.get({url:U.MenuList,params:t})),o.value=!!(null==e?void 0:e.isUpdate),f(o)&&(u(l({},e.record)),i=e.record.dicId)}))));return{registerDrawer:g,registerForm:d,getTitle:m((()=>f(o)?"编辑提醒":"新增提醒")),handleSubmit:function(){return n(this,null,(function*(){try{const d=yield b();y({confirmLoading:!0}),o.value?yield(s=l({},d),n={dicId:i},e=t(s,a(n)),P.post({url:U.UpdateDirectory,params:l({},e)},{devUrl:B})):yield(e=>P.post({url:U.AddDirectory,params:l({},e)},{devUrl:B}))(d),v(),r("success")}finally{y({confirmLoading:!1})}var e,s,n}))},treeData:s}}});C.render=function(e,t,a,r,o,s){const i=b("BasicTree"),l=b("BasicForm"),n=b("BasicDrawer");return g(),y(n,D(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:v((()=>[h(l,{onRegister:e.registerForm},{menu:v((({model:t,field:a})=>[h(i,{value:t[a],"onUpdate:value":e=>t[a]=e,treeData:e.treeData,replaceFields:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});export{G as D,C as _,T as c,R as d,k as g,A as s};
import{_ as e}from"./BasicForm.2c35510a.js";import{u as o}from"./useForm.232c0327.js";import{i as t}from"./index.0dd8ec84.js";import{P as n}from"./index.864efc08.js";import{A as r,F as s,G as i,x as a,L as l,_ as p}from"./vendor.18836d94.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.78cbb7ba.js";/* empty css              *//* empty css              *//* empty css              */import"./index.28a38f1a.js";import"./useWindowSizeFn.ba0495b0.js";/* empty css              *//* empty css              */import"./download.4b8b5ec7.js";import"./base64Conver.bb012c73.js";import"./index.1a429cb2.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.4e594fbe.js";import"./useContentViewHeight.4547994f.js";const c=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var d=r({name:"FormBasicPage",components:{BasicForm:e,PageWrapper:n},setup(){const{createMessage:e}=t(),[n,{validate:r,setProps:s}]=o({labelCol:{span:8},wrapperCol:{span:10},schemas:c,actionColOptions:{offset:8,span:12},submitButtonOptions:{text:"提交"},submitFunc:function(){return o=this,t=null,n=function*(){try{yield r(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}},new Promise(((e,r)=>{var s=e=>{try{a(n.next(e))}catch(o){r(o)}},i=e=>{try{a(n.throw(e))}catch(o){r(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(s,i);a((n=n.apply(o,t)).next())}));var o,t,n}});return{register:n}}});const m=l("data-v-10c89d50"),u=m(((e,o,t,n,r,l)=>{const c=p("BasicForm"),d=p("PageWrapper");return s(),i(d,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:m((()=>[a(c,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));d.render=u,d.__scopeId="data-v-10c89d50";export{d as default};

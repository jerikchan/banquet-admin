import{A as e,_ as i,L as s,F as o,a3 as r,x as t,a1 as d}from"./vendor.517bedfb.js";import{B as n,a}from"./index.8753fb51.js";import{f as m}from"./BasicForm.d5d93021.js";import{u as p}from"./useForm.3c867098.js";import"./index.c1a25957.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65d24057.js";/* empty css              *//* empty css              *//* empty css              */import"./index.80a9d931.js";import"./useWindowSizeFn.45b2e0d5.js";/* empty css              *//* empty css              */import"./download.2f487ea9.js";import"./base64Conver.bb012c73.js";import"./index.559cde34.js";const l=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=e({components:{BasicDrawer:n,BasicForm:m},setup(){const[e,{setFieldsValue:i}]=p({labelWidth:120,schemas:l,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=a((e=>{i({field2:e.data,field1:e.info})}));return{register:s,schemas:l,registerForm:e}}});c.render=function(e,n,a,m,p,l){const c=i("BasicForm"),f=i("BasicDrawer");return s(),o(f,d(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:r((()=>[t("div",null,[t(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export{c as default};
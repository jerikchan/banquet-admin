import{A as e,ag as i,_ as t,L as s,F as a,a3 as o,x as n}from"./vendor.517bedfb.js";import{f as r}from"./BasicForm.dc1a8526.js";import{aN as d,i as m}from"./index.a6fa69dd.js";import{T as p}from"./index.2a531dee.js";import{P as l}from"./index.89ec6d4d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f2387e1f.js";/* empty css              *//* empty css              *//* empty css              */import"./index.c8e28192.js";import"./useWindowSizeFn.45b2e0d5.js";/* empty css              *//* empty css              */import"./download.6d82b677.js";import"./base64Conver.bb012c73.js";import"./index.f9866302.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              *//* empty css              */import"./useContentViewHeight.779ab64e.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>i(p,{value:e[t],onChange:i=>{e[t]=i}})}];var u=e({components:{BasicForm:r,CollapseContainer:d,PageWrapper:l},setup(){const{createMessage:e}=m();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});u.render=function(e,i,r,d,m,p){const l=t("BasicForm"),c=t("CollapseContainer"),u=t("PageWrapper");return s(),a(u,{title:"富文本嵌入表单示例"},{default:o((()=>[n(c,{title:"富文本表单"},{default:o((()=>[n(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export{u as default};
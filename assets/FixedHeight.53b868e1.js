import{A as e,bl as s,_ as i,L as o,F as r,x as t,a3 as a,aa as d}from"./vendor.517bedfb.js";import{_ as m}from"./TableImg.7d5459f2.js";import"./BasicForm.dc1a8526.js";import{u as n}from"./useTable.04146873.js";import{getCustomHeaderColumns as p}from"./tableData.3f3da3f1.js";import{d as c}from"./table.3483bde7.js";import{ax as j}from"./index.a6fa69dd.js";/* empty css              *//* empty css              */import"./useForm.d9f38e8c.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.45b2e0d5.js";import"./index.c8e28192.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              */import"./useSortable.02c5aeae.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f2387e1f.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6d82b677.js";import"./base64Conver.bb012c73.js";import"./index.f9866302.js";var l=e({components:{BasicTable:m,FormOutlined:s,BasicHelp:j},setup(){const[e]=n({title:"定高/头部自定义",api:c,columns:p(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const b={class:"p-4"},f=d(" 姓名 "),x=d(" 地址 ");l.render=function(e,s,d,m,n,p){const c=i("BasicHelp"),j=i("FormOutlined"),l=i("BasicTable");return o(),r("div",b,[t(l,{onRegister:e.registerTable},{customTitle:a((()=>[t("span",null,[f,t(c,{class:"ml-2",text:"姓名"})])])),customAddress:a((()=>[x,t(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export{l as default};
import{A as e,_ as i,L as o,F as r,x as t,a3 as a,aa as s}from"./vendor.517bedfb.js";import{_ as d}from"./TableImg.7d5459f2.js";import"./BasicForm.dc1a8526.js";import{u as n}from"./useTable.04146873.js";import{getBasicColumns as m}from"./tableData.3f3da3f1.js";import{d as p}from"./table.3483bde7.js";/* empty css              *//* empty css              */import"./useForm.d9f38e8c.js";import"./index.a6fa69dd.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.45b2e0d5.js";import"./index.c8e28192.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              */import"./useSortable.02c5aeae.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f2387e1f.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6d82b677.js";import"./base64Conver.bb012c73.js";import"./index.f9866302.js";var l=e({components:{BasicTable:d},setup(){const[e,{reload:i}]=n({title:"远程加载示例",api:p,columns:m()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const j={class:"p-4"},c=s(" 刷新当前页 "),f=s(" 刷新并返回第一页 ");l.render=function(e,s,d,n,m,p){const l=i("a-button"),b=i("BasicTable");return o(),r("div",j,[t(b,{onRegister:e.registerTable},{toolbar:a((()=>[t(l,{type:"primary",onClick:e.handleReloadCurrent},{default:a((()=>[c])),_:1},8,["onClick"]),t(l,{type:"primary",onClick:e.handleReload},{default:a((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export{l as default};
import{A as e,_ as i,L as t,F as o,x as n,a3 as d}from"./vendor.517bedfb.js";import{_ as a}from"./TableImg.7d5459f2.js";import{_ as s}from"./BasicForm.dc1a8526.js";import{u as r}from"./useTable.04146873.js";import{d as l}from"./table.3483bde7.js";/* empty css              *//* empty css              */import"./useForm.d9f38e8c.js";import"./index.a6fa69dd.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.45b2e0d5.js";import"./index.c8e28192.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              */import"./useSortable.02c5aeae.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f2387e1f.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6d82b677.js";import"./base64Conver.bb012c73.js";import"./index.f9866302.js";const m=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var c=e({components:{BasicTable:a,TableAction:s},setup(){const[e]=r({title:"TableAction组件及固定列示例",api:l,columns:m,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};c.render=function(e,a,s,r,l,m){const c=i("TableAction"),b=i("BasicTable");return t(),o("div",p,[n(b,{onRegister:e.registerTable},{action:d((({record:i})=>[n(c,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export{c as default};
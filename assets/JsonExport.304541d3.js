import{A as e,_ as a,L as i,F as t,a3 as o,x as d,aa as s}from"./vendor.517bedfb.js";import{_ as r}from"./TableImg.a9748a39.js";import"./BasicForm.d5d93021.js";import"./index.4deab4a4.js";import{c as n,d as m,j as p}from"./data.3e89855a.js";import{P as c}from"./index.dedb6f7a.js";/* empty css              *//* empty css              */import"./useForm.3c867098.js";import"./index.c1a25957.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.45b2e0d5.js";import"./index.80a9d931.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              */import"./useSortable.2c7efa40.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65d24057.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2f487ea9.js";import"./base64Conver.bb012c73.js";import"./index.559cde34.js";/* empty css              *//* empty css              */import"./useContentViewHeight.b4f36b25.js";var j=e({components:{BasicTable:r,PageWrapper:c},setup:()=>({defaultHeader:function(){p({data:m,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){p({data:m,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:n,data:m})});const x=s(" 导出：默认头部 "),f=s(" 导出：自定义头部 ");j.render=function(e,s,r,n,m,p){const c=a("a-button"),j=a("BasicTable"),l=a("PageWrapper");return i(),t(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:o((()=>[d(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:o((()=>[d(c,{onClick:e.defaultHeader},{default:o((()=>[x])),_:1},8,["onClick"]),d(c,{onClick:e.customHeader},{default:o((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export{j as default};
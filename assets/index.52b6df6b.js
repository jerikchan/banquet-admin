import{D as e}from"./index.6698ce91.js";import{_ as t}from"./TableImg.d7ec16ff.js";import"./BasicForm.5d52eae8.js";import{u as i}from"./useTable.73da740f.js";import{P as r}from"./index.c05e4b18.js";import{z as o,a_ as s,D as a,F as d,w as n,K as m,Z as p}from"./vendor.586ef38d.js";/* empty css              */import{refundTableData as c,refundTableSchema as l,refundTimeTableSchema as u,refundTimeTableData as f,refundSchema as j,refundData as b,personSchema as x,personData as g}from"./data.b93b7041.js";import"./index.8b600a06.js";/* empty css              *//* empty css              *//* empty css              */import"./useForm.47432b01.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.58b367db.js";import"./index.af75603f.js";import"./onMountedOrActivated.91bbfd98.js";import"./useSortable.df579297.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.5ed4a38e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.bb0f9f87.js";import"./base64Conver.bb012c73.js";import"./index.932d00f5.js";/* empty css              *//* empty css              */import"./useContentViewHeight.83011d32.js";var h=o({components:{Description:e,BasicTable:t,PageWrapper:r,[s.name]:s},setup(){const[e]=i({title:"退货商品",dataSource:c,columns:l,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=i({title:"退货进度",columns:u,pagination:!1,dataSource:f,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:j,refundData:b,personSchema:x,personData:g}}});const T=m("data-v-33e8998f"),S=T(((e,t,i,r,o,s)=>{const m=p("Description"),c=p("a-divider"),l=p("BasicTable"),u=p("PageWrapper");return a(),d(u,{title:"基础详情页",contentBackground:""},{default:T((()=>[n(m,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),n(c),n(m,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),n(c),n(l,{onRegister:e.registerRefundTable},null,8,["onRegister"]),n(c),n(l,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=S,h.__scopeId="data-v-33e8998f";export{h as default};

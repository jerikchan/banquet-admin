import{A as e,_ as t,L as s,F as r,a3 as o,x as a,a1 as i}from"./vendor.517bedfb.js";import{B as n}from"./index.80a9d931.js";import{D as d}from"./index.7bce5036.js";import{e as m}from"./index.c1a25957.js";import{getDescSchema as c}from"./data.6753dc82.js";import{u as p}from"./useDescription.87aa320b.js";import"./useWindowSizeFn.45b2e0d5.js";/* empty css              *//* empty css              */var l=e({name:"ErrorLogDetailModal",components:{BasicModal:n,Description:d},props:{info:{type:Object,default:null}},setup(){const{t:e}=m(),[t]=p({column:2,schema:c()});return{register:t,useI18n:m,t:e}}});l.render=function(e,n,d,m,c,p){const l=t("Description"),u=t("BasicModal");return s(),r(u,i({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:o((()=>[a(l,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export{l as default};
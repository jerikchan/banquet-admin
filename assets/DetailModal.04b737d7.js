import{A as e,_ as t,L as s,F as r,a3 as o,x as a,a1 as i}from"./vendor.517bedfb.js";import{B as n}from"./index.c8e28192.js";import{D as d}from"./index.d9324104.js";import{e as m}from"./index.a6fa69dd.js";import{getDescSchema as p}from"./data.288a0c11.js";import{u as c}from"./useDescription.e91fe5f8.js";import"./useWindowSizeFn.45b2e0d5.js";/* empty css              *//* empty css              */var f=e({name:"ErrorLogDetailModal",components:{BasicModal:n,Description:d},props:{info:{type:Object,default:null}},setup(){const{t:e}=m(),[t]=c({column:2,schema:p()});return{register:t,useI18n:m,t:e}}});f.render=function(e,n,d,m,p,c){const f=t("Description"),l=t("BasicModal");return s(),r(l,i({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:o((()=>[a(f,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export{f as default};
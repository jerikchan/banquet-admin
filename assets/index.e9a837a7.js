import{A as o,j as e,_ as a,L as s,F as t,a3 as r,a9 as n,$ as c}from"./vendor.517bedfb.js";import d from"./LockPage.8be0bbda.js";import{u as m}from"./lock.b6205fa8.js";import"./index.c1a25957.js";import"./header.d801b988.js";var i=o({name:"Lock",components:{LockPage:d},setup(){const o=m();return{getIsLock:e((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});i.render=function(o,e,d,m,i,u){const f=a("LockPage");return s(),t(c,{name:"fade-bottom",mode:"out-in"},{default:r((()=>[o.getIsLock?(s(),t(f,{key:0})):n("v-if",!0)])),_:1})};export{i as default};
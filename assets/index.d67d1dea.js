import{A as e,_ as t,L as a,F as n,a3 as o,x as r,aa as s}from"./vendor.f90788d9.js";import{P as i}from"./index.2d7cf9f2.js";import{f as c}from"./index.27af0dce.js";import{s as p}from"./account.3e8fef20.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useWindowSizeFn.206cf3e2.js";import"./useContentViewHeight.f4cabba7.js";var f=e({name:"TestSessionTimeout",components:{PageWrapper:i},setup:()=>(c(),{test:function(){return e=this,t=null,a=function*(){yield p()},new Promise(((n,o)=>{var r=e=>{try{i(a.next(e))}catch(t){o(t)}},s=e=>{try{i(a.throw(e))}catch(t){o(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,s);i((a=a.apply(e,t)).next())}));var e,t,a}})});const m=s("点击触发用户登录过期");f.render=function(e,s,i,c,p,f){const d=t("a-button"),u=t("PageWrapper");return a(),n(u,{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:o((()=>[r(d,{type:"primary",onClick:e.test},{default:o((()=>[m])),_:1},8,["onClick"])])),_:1})};export{f as default};
import{r as e,j as t,u as n}from"./vendor.f90788d9.js";import{w as i}from"./index.27af0dce.js";import{u as o}from"./useWindowSizeFn.206cf3e2.js";const r=Symbol();const a=e(0),s=e(0);function u(){return{headerHeightRef:a,footerHeightRef:s,setHeaderHeight:function(e){a.value=e},setFooterHeight:function(e){s.value=e}}}function c(){const u=e(window.innerHeight),c=e(window.innerHeight),h=t((()=>n(u)-n(a)-n(s)||0));o((()=>{u.value=window.innerHeight}),100,{immediate:!0}),i({contentHeight:h,setPageHeight:function(e){return t=this,n=null,i=function*(){c.value=e},new Promise(((e,o)=>{var r=e=>{try{s(i.next(e))}catch(t){o(t)}},a=e=>{try{s(i.throw(e))}catch(t){o(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,a);s((i=i.apply(t,n)).next())}));var t,n,i},pageHeight:c},r,{native:!0})}export{u as a,c as u};
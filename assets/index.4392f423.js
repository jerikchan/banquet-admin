import{z as e,aL as a,r as n,j as i,u as s,Z as t,D as r,F as o,w as d,K as l}from"./vendor.586ef38d.js";import{u as f}from"./useWindowSizeFn.58b367db.js";import{p,c as m}from"./index.8b600a06.js";import{a as c}from"./useContentViewHeight.83011d32.js";var g=e({name:"IFrame",components:{Spin:a},props:{frameSrc:p.string.def("")},setup(){const e=n(!0),a=n(50),t=n(window.innerHeight),r=n(),{headerHeightRef:o}=c(),{prefixCls:d}=m("iframe-page");f(l,150,{immediate:!0});function l(){const e=s(r);if(!e)return;const n=o.value;a.value=n,t.value=window.innerHeight-n;const i=document.documentElement.clientHeight-n;e.style.height=`${i}px`}return{getWrapStyle:i((()=>({height:`${s(t)}px`}))),loading:e,frameRef:r,prefixCls:d,hideLoading:function(){e.value=!1,l()}}}});const u=l(),h=u(((e,a,n,i,s,l)=>{const f=t("Spin");return r(),o("div",{class:e.prefixCls,style:e.getWrapStyle},[d(f,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:u((()=>[d("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef",onLoad:a[1]||(a[1]=(...a)=>e.hideLoading&&e.hideLoading(...a))},null,42,["src"])])),_:1},8,["spinning","style"])],6)}));g.render=h,g.__scopeId="data-v-3827797a";export{g as default};

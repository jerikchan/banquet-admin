import{A as e,bo as s,_ as t,L as n,F as i,x as a,J as r,a1 as o,K as p}from"./vendor.517bedfb.js";/* empty css              */import{c as d}from"./index.a6fa69dd.js";import{b as m}from"./index.e594a076.js";import"./index.af0d4e7b.js";/* empty css              *//* empty css              */import"./index.933c524b.js";import"./index.c0fc36df.js";import"./useWindowSizeFn.45b2e0d5.js";import"./useContentViewHeight.779ab64e.js";/* empty css              */import"./useSortable.02c5aeae.js";import"./lock.4d261191.js";var u=e({name:"InputNumberItem",components:{InputNumber:s},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:s}=d("setting-input-number-item");return{prefixCls:s,handleChange:function(s){e.event&&m(e.event,s)}}}});const l=p()(((e,s,p,d,m,u)=>{const l=t("InputNumber");return n(),i("div",{class:e.prefixCls},[a("span",null,r(e.title),1),a(l,o(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));u.render=l,u.__scopeId="data-v-4c1dd0d9";export{u as default};
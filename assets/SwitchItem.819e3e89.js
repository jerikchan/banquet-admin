import{z as e,bI as t,j as n,Z as i,D as s,F as d,w as a,J as o,a0 as r,K as l}from"./vendor.586ef38d.js";/* empty css              */import{c as p,e as c}from"./index.8b600a06.js";import{b as m}from"./index.fc73736b.js";import"./index.63626449.js";/* empty css              *//* empty css              */import"./index.278d769e.js";import"./index.4392f423.js";import"./useWindowSizeFn.58b367db.js";import"./useContentViewHeight.83011d32.js";/* empty css              */import"./useSortable.df579297.js";import"./lock.691f95e8.js";var f=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=p("setting-switch-item"),{t:i}=c();return{prefixCls:t,t:i,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=l()(((e,t,n,l,p,c)=>{const m=i("Switch");return s(),d("div",{class:e.prefixCls},[a("span",null,o(e.title),1),a(m,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=h,f.__scopeId="data-v-440e72fd";export{f as default};

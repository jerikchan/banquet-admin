import{A as e,bp as t,j as s,_ as a,L as i,F as n,x as d,J as o,a1 as r,K as l}from"./vendor.8887d027.js";import{c as p}from"./index.139ebaf4.js";import{b as m}from"./index.059f4305.js";import"./index.93fada4d.js";/* empty css              *//* empty css              */import"./index.e7aad1df.js";import"./index.1a71abce.js";import"./useWindowSizeFn.fddb5d97.js";import"./useContentViewHeight.d6114e24.js";/* empty css              */import"./useSortable.67b4cd15.js";import"./lock.855aeb5e.js";var f=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=l()(((e,t,s,l,p,m)=>{const f=a("Select");return i(),n("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(f,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=u,f.__scopeId="data-v-b6196ee8";export{f as default};

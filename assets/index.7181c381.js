import{A as e,r as a,u as n,_ as t,L as o,F as r,a3 as l,x as s,aa as i}from"./vendor.8887d027.js";import{M as u}from"./index.28537ad7.js";import{P as d}from"./index.9adf7152.js";import"./index.139ebaf4.js";import"./index.694555f1.js";import"./useWindowSizeFn.fddb5d97.js";import"./onMountedOrActivated.1f4114eb.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d6114e24.js";var m=e({components:{MarkDown:u,PageWrapper:d},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const a=n(e);if(!a)return;a.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e},clearValue:function(){t.value=""}}}});const p=i(" 黑暗主题 "),c=i(" 清空内容 ");m.render=function(e,a,n,i,u,d){const m=t("a-button"),f=t("MarkDown"),g=t("PageWrapper");return o(),r(g,{title:"MarkDown组件示例"},{default:l((()=>[s(m,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[p])),_:1},8,["onClick"]),s(m,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:l((()=>[c])),_:1},8,["onClick"]),s(f,{value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,ref:"markDownRef",placeholder:"这是占位文本"},null,8,["value","onChange"])])),_:1})};export{m as default};

import{A as e,r as a,u as n,_ as t,L as o,F as r,a3 as l,x as s,aa as i}from"./vendor.f90788d9.js";import{M as u}from"./index.d6ac41b5.js";import{P as c}from"./index.2d7cf9f2.js";import"./index.27af0dce.js";import"./index.99f4ae53.js";import"./useWindowSizeFn.206cf3e2.js";import"./onMountedOrActivated.a9c9ce1d.js";/* empty css              *//* empty css              */import"./useContentViewHeight.f4cabba7.js";var d=e({components:{MarkDown:u,PageWrapper:c},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const a=n(e);if(!a)return;a.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e},clearValue:function(){t.value=""}}}});const f=i(" 黑暗主题 "),m=i(" 清空内容 ");d.render=function(e,a,n,i,u,c){const d=t("a-button"),p=t("MarkDown"),g=t("PageWrapper");return o(),r(g,{title:"MarkDown组件示例"},{default:l((()=>[s(d,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[f])),_:1},8,["onClick"]),s(d,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:l((()=>[m])),_:1},8,["onClick"]),s(p,{value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,ref:"markDownRef",placeholder:"这是占位文本"},null,8,["value","onChange"])])),_:1})};export{d as default};
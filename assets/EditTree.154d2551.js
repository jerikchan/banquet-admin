import{A as e,ag as t,bZ as a,b_ as r,_ as i,L as n,F as s,a3 as o,x as l}from"./vendor.517bedfb.js";import{_ as c}from"./Tree.vue_vue&type=style&index=0&lang.6368a1a6.js";import{t as d}from"./data.5e96733f.js";import{P as p}from"./index.89ec6d4d.js";import"./index.a6fa69dd.js";import"./useContextMenu.63aa4de5.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.e21098c8.js";import"./useWindowSizeFn.45b2e0d5.js";import"./useContentViewHeight.779ab64e.js";var u=e({components:{BasicTree:c,PageWrapper:p},setup:()=>({treeData:d,actionList:[{render:e=>t(a,{class:"ml-2",onClick:()=>{}})},{render:()=>t(r)}],getRightMenuList:function(e){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]},createIcon:function({level:e}){return 1===e?"ion:git-compare-outline":2===e?"ion:home":3===e?"ion:airplane":void 0}})});const m={class:"flex"};u.render=function(e,t,a,r,c,d){const p=i("BasicTree"),u=i("PageWrapper");return n(),s(u,{title:"Tree函数操作示例"},{default:o((()=>[l("div",m,[l(p,{class:"w-1/3",title:"右侧操作按钮/自定义图标",helpMessage:"帮助信息",treeData:e.treeData,actionList:e.actionList,renderIcon:e.createIcon},null,8,["treeData","actionList","renderIcon"]),l(p,{class:"w-1/3 mx-4",title:"右键菜单",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"]),l(p,{class:"w-1/3",title:"工具栏使用",toolbar:"",checkable:"",search:"",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])])),_:1})};export{u as default};
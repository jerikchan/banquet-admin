import{A as e,r as a,u as t,_ as n,L as o,F as s,a3 as r,x as i,aa as l}from"./vendor.517bedfb.js";import{aN as p,b6 as d,i as u}from"./index.a6fa69dd.js";import{P as c}from"./index.89ec6d4d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.e21098c8.js";import"./useWindowSizeFn.45b2e0d5.js";import"./useContentViewHeight.779ab64e.js";var f=e({name:"Copy",components:{CollapseContainer:p,PageWrapper:c},setup(){const e=a(""),{createMessage:n}=u(),{clipboardRef:o,copiedRef:s}=d();return{handleCopy:function(){const a=t(e);a?(o.value=a,t(s)&&n.warning("copy success！")):n.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"flex justify-center"},C=l(" Copy ");f.render=function(e,a,t,l,p,d){const u=n("a-input"),c=n("a-button"),f=n("CollapseContainer"),b=n("PageWrapper");return o(),s(b,{title:"文本复制示例"},{default:r((()=>[i(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:r((()=>[i("div",m,[i(u,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),i(c,{type:"primary",onClick:e.handleCopy},{default:r((()=>[C])),_:1},8,["onClick"])])])),_:1})])),_:1})};export{f as default};
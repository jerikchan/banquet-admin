import{A as e,bF as t,c0 as a,r as n,w as o,_ as i,L as l,F as d,a3 as m,x as r,aa as u}from"./vendor.517bedfb.js";import{C as s}from"./index.12c45832.js";import{P as c}from"./index.89ec6d4d.js";/* empty css              *//* empty css              */import"./index.a6fa69dd.js";import"./useWindowSizeFn.45b2e0d5.js";import"Vue";/* empty css              *//* empty css              */import"./onMountedOrActivated.e21098c8.js";import"./useContentViewHeight.779ab64e.js";const p='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}';var h=e({components:{CodeEditor:s,PageWrapper:c,RadioButton:t.Button,RadioGroup:t.Group,ASpace:a},setup(){const e=n("application/json"),t=n(p);return{value:t,modeValue:e,handleModeChange:function(e){const a=e.target.value;"application/json"!==a?"htmlmixed"!==a?"javascript"!==a||(t.value="\n      (() => {\n        var htmlRoot = document.getElementById('htmlRoot');\n        var theme = window.localStorage.getItem('__APP__DARK__MODE__');\n        if (htmlRoot && theme) {\n          htmlRoot.setAttribute('data-theme', theme);\n          theme = htmlRoot = null;\n        }\n      })();\n  "):t.value='\n     <!DOCTYPE html>\n<html lang="en" id="htmlRoot">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n    <meta name="renderer" content="webkit" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"\n    />\n    <title><%= title %></title>\n    <link rel="icon" href="/favicon.ico" />\n  </head>\n  <body>\n    <div id="app">\n    </div>\n  </body>\n</html>\n  ':t.value=p},showData:function(){o.info({title:"编辑器当前值",content:t.value})}}}});const v=u("获取数据"),x=u(" json数据 "),f=u(" html代码 "),w=u(" javascript代码 ");h.render=function(e,t,a,n,o,u){const s=i("a-button"),c=i("RadioButton"),p=i("RadioGroup"),h=i("a-space"),g=i("CodeEditor"),j=i("PageWrapper");return l(),d(j,{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:m((()=>[r(h,{size:"middle"},{default:m((()=>[r(s,{onClick:e.showData,type:"primary"},{default:m((()=>[v])),_:1},8,["onClick"]),r(p,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[1]||(t[1]=t=>e.modeValue=t),onChange:e.handleModeChange},{default:m((()=>[r(c,{value:"application/json"},{default:m((()=>[x])),_:1}),r(c,{value:"htmlmixed"},{default:m((()=>[f])),_:1}),r(c,{value:"javascript"},{default:m((()=>[w])),_:1})])),_:1},8,["value","onChange"])])),_:1})])),default:m((()=>[r(g,{value:e.value,"onUpdate:value":t[2]||(t[2]=t=>e.value=t),mode:e.modeValue},null,8,["value","mode"])])),_:1})};export{h as default};
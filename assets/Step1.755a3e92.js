import{_ as e}from"./BasicForm.2c35510a.js";import{u as t}from"./useForm.232c0327.js";import{step1Schemas as a}from"./data.2505cb7f.js";import{A as s,br as o,al as i,bu as n,B as r,D as d,F as p,G as l,x as c,L as m,aa as u,_ as v}from"./vendor.18836d94.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.0dd8ec84.js";import"./index.78cbb7ba.js";/* empty css              *//* empty css              *//* empty css              */import"./index.28a38f1a.js";import"./useWindowSizeFn.ba0495b0.js";/* empty css              */import"./download.4b8b5ec7.js";import"./base64Conver.bb012c73.js";import"./index.1a429cb2.js";var b=s({components:{BasicForm:e,[o.name]:o,ASelectOption:o.Option,[i.name]:i,[i.Group.name]:i.Group,[n.name]:n},emits:["next"],setup(e,{emit:s}){const[o,{validate:i}]=t({labelWidth:100,schemas:a,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:function(){return e=this,t=null,a=function*(){try{const e=yield i();s("next",e)}catch(e){}},new Promise(((s,o)=>{var i=e=>{try{r(a.next(e))}catch(t){o(t)}},n=e=>{try{r(a.throw(e))}catch(t){o(t)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,n);r((a=a.apply(e,t)).next())}));var e,t,a}});return{register:o}}});const j=m("data-v-4c120de8");r("data-v-4c120de8");const x={class:"step1"},f={class:"step1-form"},h=u(" 支付宝 "),y=u(" 银联 "),_=c("h3",null,"说明",-1),F=c("h4",null,"转账到支付宝账户",-1),B=c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),g=c("h4",null,"转账到银行卡",-1),w=c("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);d();const O=j(((e,t,a,s,o,i)=>{const n=v("a-select-option"),r=v("a-select"),d=v("a-input"),m=v("a-input-group"),u=v("BasicForm"),b=v("a-divider");return p(),l("div",x,[c("div",f,[c(u,{onRegister:e.register},{fac:j((({model:e,field:t})=>[c(m,{compact:""},{default:j((()=>[c(r,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:j((()=>[c(n,{value:"zfb"},{default:j((()=>[h])),_:1}),c(n,{value:"yl"},{default:j((()=>[y])),_:1})])),_:2},1032,["value","onUpdate:value"]),c(d,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),c(b),_,F,B,g,w])}));b.render=O,b.__scopeId="data-v-4c120de8";export{b as default};

var t=(t,e,s)=>new Promise(((i,n)=>{var o=t=>{try{r(s.next(t))}catch(e){n(e)}},a=t=>{try{r(s.throw(t))}catch(e){n(e)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(o,a);r((s=s.apply(t,e)).next())}));import{A as e,bL as s,bA as i,bV as n,B as o,D as a,_ as r,L as d,F as m,x as p,K as c,aa as l}from"./vendor.517bedfb.js";import{f as u}from"./BasicForm.d5d93021.js";import{u as x}from"./useForm.3c867098.js";import{step2Schemas as b}from"./data.2505cb7f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c1a25957.js";import"./index.65d24057.js";/* empty css              *//* empty css              */import"./index.80a9d931.js";import"./useWindowSizeFn.45b2e0d5.js";/* empty css              */import"./download.2f487ea9.js";import"./base64Conver.bb012c73.js";import"./index.559cde34.js";var j=e({components:{BasicForm:u,[s.name]:s,[i.name]:i,[n.name]:n,[n.Item.name]:n.Item},emits:["next","prev"],setup(e,{emit:s}){const[i,{validate:n,setProps:o}]=x({labelWidth:80,schemas:b,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:function(){return t(this,null,(function*(){s("prev")}))},submitFunc:function(){return t(this,null,(function*(){try{const t=yield n();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),s("next",t)}),1500)}catch(t){}}))}});return{register:i}}});const f=c();o("data-v-29165770");const v={class:"step2"},h=l(" ant-design@alipay.com "),g=l(" test@example.com "),B=l(" Vben "),F=l(" 500元 ");a();const _=f(((t,e,s,i,n,o)=>{const a=r("a-alert"),c=r("a-descriptions-item"),l=r("a-descriptions"),u=r("a-divider"),x=r("BasicForm");return d(),m("div",v,[p(a,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),p(l,{column:1,class:"mt-5"},{default:f((()=>[p(c,{label:"付款账户"},{default:f((()=>[h])),_:1}),p(c,{label:"收款账户"},{default:f((()=>[g])),_:1}),p(c,{label:"收款人姓名"},{default:f((()=>[B])),_:1}),p(c,{label:"转账金额"},{default:f((()=>[F])),_:1})])),_:1}),p(u),p(x,{onRegister:t.register},null,8,["onRegister"])])}));j.render=_,j.__scopeId="data-v-29165770";export{j as default};
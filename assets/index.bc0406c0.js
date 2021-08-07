var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,a,r)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;import{ag as o,ab as s}from"./index.0dd8ec84.js";import{A as l,r as i,bl as u,j as d,u as p,aj as f,R as c,Y as y,bm as m,F as b,G as g,K as v}from"./vendor.18836d94.js";var S=l({name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator:t=>t>=0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(t,{emit:s}){const l=i(t.startVal),b=i(!1);let g=u(l);const v=d((()=>function(e){if(!e&&0!==e)return"";const{decimals:a,decimal:r,separator:n,suffix:s,prefix:l}=t;e=Number(e).toFixed(a);const i=(e+="").split(".");let u=i[0];const d=i.length>1?r+i[1]:"",p=/(\d+)(\d{3})/;if(n&&!o(n))for(;p.test(u);)u=u.replace(p,"$1"+n+"$2");return l+u+d+s}(p(g))));function S(){j(),l.value=t.endVal}function j(){g=u(l,((t,o)=>{for(var s in o||(o={}))a.call(o,s)&&n(t,s,o[s]);if(e)for(var s of e(o))r.call(o,s)&&n(t,s,o[s]);return t})({disabled:b,duration:t.duration,onFinished:()=>s("onFinished"),onStarted:()=>s("onStarted")},t.useEasing?{transition:m[t.transition]}:{}))}return f((()=>{l.value=t.startVal})),c([()=>t.startVal,()=>t.endVal],(()=>{t.autoplay&&S()})),y((()=>{t.autoplay&&S()})),{value:v,start:S,reset:function(){l.value=t.startVal,j()}}}});S.render=function(t,e,a,r,n,o){return b(),g("span",{style:{color:t.color}},v(t.value),5)};const j=s(S);export{j as C};

var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&s(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{c,ac as p,v as u,ad as d,ae as f,ab as b}from"./index.0dd8ec84.js";import{A as m,r as y,j,u as v,x as O,bg as x,bh as g,a1 as h,bi as P}from"./vendor.18836d94.js";/* empty css              */const w=b(m({name:"Description",props:{useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},emits:["register"],setup(e,{slots:t,emit:a}){const l=y(null),{prefixCls:r}=c("description"),n=p(),s=j((()=>o(o({},e),v(l)))),b=j((()=>i(o({},v(s)),{title:void 0}))),m=j((()=>!!v(s).title)),w=j((()=>o({canExpand:!1},v(b).collapseOptions))),S=j((()=>o(o({},v(n)),v(b))));function C({label:e,labelMinWidth:t,labelStyle:a}){if(!a&&!t)return e;const l=i(o({},a),{minWidth:`${t}px `});return O("div",{style:l},[e])}const D=()=>{let e;return O(x,h({class:`${r}`},v(S)),"function"==typeof(t=e=function(){const{schema:e,data:t}=v(b);return v(e).map((e=>{const{render:a,field:l,span:r,show:n,contentMinWidth:s}=e;if(n&&u(n)&&!n(t))return null;const o=()=>{var e;const t=null==(e=v(b))?void 0:e.data;if(!t)return null;const r=P(t,l);return u(a)?a(r,t):null!=r?r:""},i=s;return O(x.Item,{label:C(e),key:l,span:r},{default:()=>s?O("div",{style:{minWidth:`${i}px`}},[o()]):o()})})).filter((e=>!!e))}())||"[object Object]"===Object.prototype.toString.call(t)&&!g(t)?e:{default:()=>[e]});var t};return a("register",{setDescProps:function(e){l.value=o(o({},v(l)),e)}}),()=>v(m)?(()=>{const a=e.useCollapse?D():O("div",null,[D()]);if(!e.useCollapse)return a;const{canExpand:l,helpMessage:r}=v(w),{title:n}=v(s);return O(f,{title:n,canExpan:l,helpMessage:r},{default:()=>a,action:()=>d(t,"action")})})():D()}}));export{w as D};

import{ag as t,ac as e,w as i}from"./index.8b600a06.js";import{z as s,r,N as a,j as l,u as n,Q as o,X as m,Y as d,w as c,a_ as u,A as h,B as p,Z as g,D as f,F as v,J as b,K as _,a9 as x}from"./vendor.586ef38d.js";/* empty css              */import{P as H}from"./index.c05e4b18.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.91bbfd98.js";import"./useWindowSizeFn.58b367db.js";import"./useContentViewHeight.83011d32.js";function S(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}var w=s({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(i,{slots:s}){const u=r(null),h=a({first:0,last:0,scrollTop:0}),p=l((()=>parseInt(i.bench,10))),g=l((()=>parseInt(i.itemHeight,10))),f=l((()=>Math.max(0,h.first-n(p)))),v=l((()=>Math.min((i.items||[]).length,h.last+n(p)))),b=l((()=>({height:S((i.items||[]).length*n(g))}))),_=l((()=>{const t={},e=S(i.height),s=S(i.minHeight),r=S(i.minWidth),a=S(i.maxHeight),l=S(i.maxWidth),n=S(i.width);return e&&(t.height=e),s&&(t.minHeight=s),r&&(t.minWidth=r),a&&(t.maxHeight=a),l&&(t.maxWidth=l),n&&(t.width=n),t}));function x(t){const e=n(u);if(!e)return 0;const s=parseInt(i.height||0,10)||e.clientHeight;return t+Math.ceil(s/n(g))}function H(){const t=n(u);t&&(h.scrollTop=t.scrollTop,h.first=Math.floor(h.scrollTop/n(g)),h.last=x(h.first))}function w(){const{items:t=[]}=i;return t.slice(n(f),n(v)).map(N)}function N(t,i){const r=S((i+=n(f))*n(g));return c("div",{class:"virtual-scroll__item",style:{top:r},key:i},[e(s,"default",{index:i,item:t})])}return o([()=>i.itemHeight,()=>i.height],(()=>{H()})),m((()=>{h.last=x(0),d((()=>{const e=n(u);e&&t({el:e,name:"scroll",listener:H,wait:0})}))})),()=>c("div",{class:"virtual-scroll",style:n(_),ref:u},[c("div",{class:"virtual-scroll__container",style:n(b)},[w()])])}});w.__scopeId="data-v-dd7becb6";const N=i(w),j=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var W=s({components:{VScroll:N,Divider:u,PageWrapper:H},setup:()=>({data:j})});const y=_();h("data-v-002a1a68");const I=x("基础滚动示例"),M={class:"virtual-scroll-demo-wrap"},T={class:"virtual-scroll-demo__item"},V=x("即使不可见，也预先加载50条数据，防止空白"),A={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};p();const P=y(((t,e,i,s,r,a)=>{const l=g("Divider"),n=g("VScroll"),o=g("PageWrapper");return f(),v(o,{class:"virtual-scroll-demo"},{default:y((()=>[c(l,null,{default:y((()=>[I])),_:1}),c("div",M,[c(n,{itemHeight:41,items:t.data,height:300,width:300},{default:y((({item:t})=>[c("div",T,b(t.title),1)])),_:1},8,["items"])]),c(l,null,{default:y((()=>[V])),_:1}),c("div",A,[c(n,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:y((({item:t})=>[c("div",D,b(t.title),1)])),_:1},8,["items"])])])),_:1})}));W.render=P,W.__scopeId="data-v-002a1a68";export{W as default};

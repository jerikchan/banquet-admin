import{A as s,r as o,u as l,B as r,D as a,_ as t,L as e,F as c,x as n,a8 as i,ap as d,J as p,K as f,aa as u}from"./vendor.f90788d9.js";import{S as m}from"./index.27af0dce.js";import{P as b}from"./index.2d7cf9f2.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useWindowSizeFn.206cf3e2.js";import"./useContentViewHeight.f4cabba7.js";var x=s({components:{ScrollContainer:m,PageWrapper:b},setup(){const s=o(null),r=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){r().scrollTo(s)},scrollRef:s,scrollBottom:function(){r().scrollBottom()}}}});const _=f();r("data-v-4b70854c");const j={class:"my-4"},v=u(" 滚动到100px位置 "),C=u(" 滚动到800px位置 "),k=u(" 滚动到顶部 "),w=u(" 滚动到底部 "),T={class:"scroll-wrap"},B={class:"p-3"};a();const S=_(((s,o,l,r,a,f)=>{const u=t("a-button"),m=t("ScrollContainer"),b=t("PageWrapper");return e(),c(b,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:_((()=>[n("div",j,[n(u,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:_((()=>[v])),_:1}),n(u,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:_((()=>[C])),_:1}),n(u,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:_((()=>[k])),_:1}),n(u,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:_((()=>[w])),_:1})]),n("div",T,[n(m,{class:"mt-4",ref:"scrollRef"},{default:_((()=>[n("ul",B,[(e(),c(i,null,d(100,(s=>n("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},p(s),1))),64))])])),_:1},512)])])),_:1})}));x.render=S,x.__scopeId="data-v-4b70854c";export{x as default};
var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,n=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&r(e,o,t[o]);if(s)for(var o of s(t))l.call(t,o)&&r(e,o,t[o]);return e},i=(e,s)=>t(e,o(s));import{e as c,c as u,aB as p,p as d,S as f,ac as g,ay as w,ag as y,v as h,af as v,ax as b,ab as C}from"./index.27af0dce.js";import{A as m,j as k,_ as D,L as x,F as B,a8 as O,a5 as $,a1 as P,a3 as S,aa as j,J as T,a9 as _,c0 as F,x as L,b8 as H,r as V,R as A,Z as E,u as I,t as N,ae as M,av as R,aB as G,G as J,ap as Z,O as q,bH as z,aj as K}from"./vendor.f90788d9.js";/* empty css              */const{t:Q}=c(),U={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Q("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Q("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},W=n({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},U);var X=m({name:"BasicDrawerFooter",props:i(n({},U),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:o}=u("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:o,handleClose:function(){t("close")},getStyle:k((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});X.render=function(e,t,o,s,a,l){const r=D("a-button");return e.showFooter||e.$slots.footer?(x(),B("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?$(e.$slots,"footer",{key:1}):(x(),B(O,{key:0},[$(e.$slots,"insertFooter"),e.showCancelBtn?(x(),B(r,P({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:S((()=>[j(T(e.cancelText),1)])),_:1},16,["onClick"])):_("v-if",!0),$(e.$slots,"centerFooter"),e.showOkBtn?(x(),B(r,P({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:S((()=>[j(T(e.okText),1)])),_:1},16,["type","onClick","loading"])):_("v-if",!0),$(e.$slots,"appendFooter")],64))],6)):_("v-if",!0)};var Y=m({name:"BasicDrawerHeader",components:{BasicTitle:p,ArrowLeftOutlined:F},props:{isDetail:d.bool,showDetailBack:d.bool,title:d.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:o}=u("basic-drawer-header");return{prefixCls:o,handleClose:function(){t("close")}}}});const ee={key:1};Y.render=function(e,t,o,s,a,l){const r=D("BasicTitle"),n=D("ArrowLeftOutlined");return e.isDetail?(x(),B("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[L("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(x(),B("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[L(n,{class:`${e.prefixCls}__back`},null,8,["class"])])):_("v-if",!0),e.title?(x(),B("span",ee,T(e.title),1)):_("v-if",!0)],2),L("span",{class:`${e.prefixCls}__toolbar`},[$(e.$slots,"titleToolbar")],2)],2)):(x(),B(r,{key:0,class:e.prefixCls},{default:S((()=>[$(e.$slots,"title"),j(" "+T(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var te=m({components:{Drawer:H,ScrollContainer:f,DrawerFooter:X,DrawerHeader:Y},inheritAttrs:!1,props:W,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const o=V(!1),s=g(),a=V(null),{t:l}=c(),{prefixVar:r,prefixCls:p}=u("basic-drawer"),d={setDrawerProps:function(e){a.value=w(I(a)||{},e),Reflect.has(e,"visible")&&(o.value=!!e.visible)},emitVisible:void 0},f=M();f&&t("register",d,f.uid);const v=k((()=>w(N(e),I(a)))),b=k((()=>{const e=i(n(n({placement:"right"},I(s)),I(v)),{visible:I(o)});e.title=void 0;const{isDetail:t,width:a,wrapClassName:l,getContainer:c}=e;if(t){a||(e.width="100%");const t=`${p}__detail`;e.wrapClassName=l?`${l} ${t}`:t,c||(e.getContainer=`.${r}-layout-content`)}return e})),C=k((()=>n(n({},s),I(b)))),m=k((()=>{const{footerHeight:e,showFooter:t}=I(b);return t&&e?y(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),D=k((()=>({position:"relative",height:`calc(100% - ${I(m)})`}))),x=k((()=>{var e;return!!(null==(e=I(b))?void 0:e.loading)}));return A((()=>e.visible),((e,t)=>{e!==t&&(o.value=e)}),{deep:!0}),A((()=>o.value),(e=>{E((()=>{var o;t("visible-change",e),f&&(null==(o=d.emitVisible)||o.call(d,e,f.uid))}))})),{onClose:function(e){return s=this,a=null,l=function*(){const{closeFunc:s}=I(b);if(t("close",e),s&&h(s)){const e=yield s();o.value=!e}else o.value=!1},new Promise(((t,o)=>{var r=t=>{try{i(l.next(t))}catch(e){o(e)}},n=t=>{try{i(l.throw(t))}catch(e){o(e)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,n);i((l=l.apply(s,a)).next())}));var s,a,l},t:l,prefixCls:p,getMergeProps:v,getScrollContentStyle:D,getProps:b,getLoading:x,getBindValues:C,getFooterHeight:m,handleOk:function(){t("ok")}}}});te.render=function(e,t,o,s,a,l){const r=D("DrawerHeader"),n=D("ScrollContainer"),i=D("DrawerFooter"),c=D("Drawer"),u=R("loading");return x(),B(c,P({class:e.prefixCls,onClose:e.onClose},e.getBindValues),G({default:S((()=>[J(L(n,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:S((()=>[$(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[u,e.getLoading]]),L(i,P(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),G({_:2},[Z(Object.keys(e.$slots),(t=>({name:t,fn:S((o=>[$(e.$slots,t,o)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:S((()=>[$(e.$slots,"title")]))}:{name:"title",fn:S((()=>[L(r,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:S((()=>[$(e.$slots,"titleToolbar")])),_:3},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const oe=q({}),se=q({});function ae(){if(!M())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=V(null),t=V(!1),o=V("");const s=()=>{const t=I(e);return t||b("useDrawer instance is undefined!"),t};return[function(s,a){I(t)&&v()&&s===I(e)||(o.value=a,e.value=s,t.value=!0,s.emitVisible=(e,t)=>{se[t]=e})},{setDrawerProps:e=>{var t;null==(t=s())||t.setDrawerProps(e)},getVisible:k((()=>se[~~I(o)])),openDrawer:(e=!0,t,a=!0)=>{var l;if(null==(l=s())||l.setDrawerProps({visible:e}),!t)return;if(a)return oe[I(o)]=null,void(oe[I(o)]=N(t));z(N(oe[I(o)]),N(t))||(oe[I(o)]=N(t))},closeDrawer:()=>{var e;null==(e=s())||e.setDrawerProps({visible:!1})}}]}const le=e=>{const t=V(null),o=M(),s=V("");if(!M())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const a=()=>{const e=I(t);if(e)return e;b("useDrawerInner instance is undefined!")};return K((()=>{const t=oe[I(s)];t&&e&&h(e)&&E((()=>{e(t)}))})),[(e,a)=>{s.value=a,t.value=e,null==o||o.emit("register",e,a)},{changeLoading:(e=!0)=>{var t;null==(t=a())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=a())||t.setDrawerProps({confirmLoading:e})},getVisible:k((()=>se[~~I(s)])),closeDrawer:()=>{var e;null==(e=a())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=a())||t.setDrawerProps(e)}}]},re=C(te);export{re as B,le as a,ae as u};
var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,s=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&r(e,l,t[l]);if(n)for(var l of n(t))a.call(t,l)&&r(e,l,t[l]);return e},i=(e,n)=>t(e,l(n)),c=(e,t,l)=>new Promise(((n,o)=>{var a=e=>{try{s(l.next(e))}catch(t){o(t)}},r=e=>{try{s(l.throw(e))}catch(t){o(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,r);s((l=l.apply(e,t)).next())}));import{e as u,q as d,ac as p,aA as f,x as g,w as h,S as m,c as b,aB as y,v,ay as C,ax as H,af as M,ab as F}from"./index.0dd8ec84.js";import{aj as S,u as k,A as O,V as B,x as P,w as x,bh as w,r as T,bK as j,j as W,R as $,Y as N,af as R,Z as E,F as A,G as _,a3 as V,_ as L,ax as I,H as D,a5 as q,a6 as z,b5 as Y,b6 as K,bL as X,a8 as G,a9 as J,a1 as Z,aa as Q,K as U,ae as ee,ak as te,o as le,aB as ne,ap as oe,O as ae,t as re,bJ as se,ac as ie}from"./vendor.18836d94.js";import{u as ce}from"./useWindowSizeFn.ba0495b0.js";const{t:ue}=u(),de={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ue("common.cancelText")},okText:{type:String,default:ue("common.okText")},closeFunc:Function},pe=Object.assign({},de,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function fe(e){const t=(e,t)=>getComputedStyle(e)[t],l=l=>{if(!l)return;l.setAttribute("data-drag",k(e.draggable));const n=l.querySelector(".ant-modal-header"),o=l.querySelector(".ant-modal");n&&o&&k(e.draggable)&&(n.style.cursor="move",n.onmousedown=e=>{if(!e)return;const l=e.clientX,n=e.clientY,a=document.body.clientWidth,r=document.documentElement.clientHeight,s=o.offsetWidth,i=o.offsetHeight,c=o.offsetLeft,u=a-o.offsetLeft-s,d=o.offsetTop,p=r-o.offsetTop-i,f=t(o,"left"),g=t(o,"top");let h=+f,m=+g;f.includes("%")?(h=+document.body.clientWidth*(+f.replace(/%/g,"")/100),m=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(h=+f.replace(/px/g,""),m=+g.replace(/px/g,"")),document.onmousemove=function(e){let t=e.clientX-l,a=e.clientY-n;-t>c?t=-c:t>u&&(t=u),-a>d?a=-d:a>p&&(a=p),o.style.cssText+=`;left:${t+h}px;top:${a+m}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})};S((()=>{k(e.visible)&&k(e.draggable)&&d((()=>{(()=>{const n=document.querySelectorAll(".ant-modal-wrap");for(const o of Array.from(n)){if(!o)continue;const n=t(o,"display"),a=o.getAttribute("data-drag");"none"!==n&&(null===a||k(e.destroyOnClose))&&l(o)}})()}),30)}))}var ge=O({name:"Modal",inheritAttrs:!1,props:pe,setup(e,{slots:t}){const{visible:l,draggable:n,destroyOnClose:o}=B(e),a=p();return fe({visible:l,destroyOnClose:o,draggable:n}),()=>{let l;const n=s(s({},k(a)),e);return P(x,n,"function"==typeof(o=l=f(t))||"[object Object]"===Object.prototype.toString.call(o)&&!w(o)?l:{default:()=>[l]});var o}}});const he=Symbol();function me(){return g(he)}var be=O({name:"ModalWrapper",components:{ScrollContainer:m},inheritAttrs:!1,props:{loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},emits:["height-change","ext-height"],setup(e,{emit:t}){const l=T(null),n=T(null),o=T(0),a=T(0);let r=0;ce(i.bind(null,!1)),j(n,(()=>{i()}),{attributes:!0,subtree:!0}),h({redoModalHeight:i},he);const s=W((()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${k(o)}px`})));function i(){return c(this,null,(function*(){if(!e.visible)return;const a=k(l);if(!a)return;const s=a.$el.parentElement;if(s){s.style.padding="0",yield E();try{const l=s.parentElement&&s.parentElement.parentElement;if(!l)return;const a=getComputedStyle(l).top,i=Number.parseInt(a);let c=window.innerHeight-2*i+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;i<40&&(c-=26),yield E();const u=k(n);if(!u)return;yield E(),r=u.scrollHeight,e.fullScreen?o.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:o.value=e.height?e.height:r>c?c:r,t("height-change",k(o))}catch(i){}}}))}return S((()=>{e.useWrapper&&i()})),$((()=>e.fullScreen),(e=>{i(),e?a.value=o.value:o.value=a.value})),N((()=>{const{modalHeaderHeight:l,modalFooterHeight:n}=e;t("ext-height",l+n)})),R((()=>{})),{wrapperRef:l,spinRef:n,spinStyle:s,scrollTop:function(){return c(this,null,(function*(){E((()=>{var e;const t=k(l);t&&(null==(e=null==t?void 0:t.scrollTo)||e.call(t,0))}))}))},setModalHeight:i}}});be.render=function(e,t,l,n,o,a){const r=L("ScrollContainer"),s=I("loading");return A(),_(r,{ref:"wrapperRef"},{default:V((()=>[D(P("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[q(e.$slots,"default")],12,["loading-tip"]),[[s,e.loading]])])),_:3},512)};var ye=O({name:"ModalClose",components:{Tooltip:z,FullscreenExitOutlined:Y,FullscreenOutlined:K,CloseOutlined:X},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:t}){const{prefixCls:l}=b("basic-modal-close"),{t:n}=u();return{t:n,getClass:W((()=>[l,`${l}--custom`,{[`${l}--can-full`]:e.canFullscreen}])),prefixCls:l,handleCancel:function(e){t("cancel",e)},handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),t("fullscreen")}}}});ye.render=function(e,t,l,n,o,a){const r=L("FullscreenExitOutlined"),s=L("Tooltip"),i=L("FullscreenOutlined"),c=L("CloseOutlined");return A(),_("div",{class:e.getClass},[e.canFullscreen?(A(),_(G,{key:0},[e.fullScreen?(A(),_(s,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:V((()=>[P(r,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])])),_:1},8,["title"])):(A(),_(s,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:V((()=>[P(i,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])])),_:1},8,["title"]))],64)):J("",!0),P(s,{title:e.t("component.modal.close"),placement:"bottom"},{default:V((()=>[P(c,{onClick:e.handleCancel},null,8,["onClick"])])),_:1},8,["title"])],2)};var ve=O({name:"BasicModalFooter",props:pe,emits:["ok","cancel"],setup:(e,{emit:t})=>({handleOk:function(e){t("ok",e)},handleCancel:function(e){t("cancel",e)}})});ve.render=function(e,t,l,n,o,a){const r=L("a-button");return A(),_("div",null,[q(e.$slots,"insertFooter"),e.showCancelBtn?(A(),_(r,Z({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:V((()=>[Q(U(e.cancelText),1)])),_:1},16,["onClick"])):J("",!0),q(e.$slots,"centerFooter"),e.showOkBtn?(A(),_(r,Z({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:V((()=>[Q(U(e.okText),1)])),_:1},16,["type","onClick","loading"])):J("",!0),q(e.$slots,"appendFooter")])};var Ce=O({name:"BasicModalHeader",components:{BasicTitle:y},props:{helpMessage:{type:[String,Array]},title:{type:String}}});Ce.render=function(e,t,l,n,o,a){const r=L("BasicTitle");return A(),_(r,{helpMessage:e.helpMessage},{default:V((()=>[Q(U(e.title),1)])),_:1},8,["helpMessage"])};var He=O({name:"BasicModal",components:{Modal:ge,ModalWrapper:be,ModalClose:ye,ModalFooter:ve,ModalHeader:Ce},inheritAttrs:!1,props:pe,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:t,attrs:l}){const n=T(!1),o=T(null),a=T(null),r=T(0),u={setModalProps:function(e){o.value=C(k(o)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible);Reflect.has(e,"defaultFullscreen")&&(h.value=!!e.defaultFullscreen)},emitVisible:void 0,redoModalHeight:()=>{E((()=>{k(a)&&k(a).setModalHeight()}))}},d=ee();d&&t("register",u,d.uid);const p=W((()=>s(s({},e),k(o)))),{handleFullScreen:f,getWrapClassName:g,fullScreenRef:h}=function(e){const t=T(!1);return{getWrapClassName:W((()=>{const l=k(e.wrapClassName)||"";return k(t)?`fullscreen-modal ${l} `:k(l)})),handleFullScreen:function(e){e&&e.stopPropagation(),t.value=!k(t)},fullScreenRef:t}}({modalWrapperRef:a,extHeightRef:r,wrapClassName:te(p.value,"wrapClassName")}),m=W((()=>{const e=i(s({},k(p)),{visible:k(n),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return i(s({},e),{wrapClassName:k(g)})})),b=W((()=>{const e=i(s(s({},l),k(p)),{visible:k(n),wrapClassName:k(g)});return k(h)?le(e,"height"):e})),y=W((()=>{if(!k(h))return k(m).height}));return S((()=>{n.value=!!e.visible,h.value=!!e.defaultFullscreen})),$((()=>k(n)),(l=>{var n;t("visible-change",l),t("update:visible",l),d&&(null==(n=u.emitVisible)||n.call(u,l,d.uid)),E((()=>{e.scrollTop&&l&&k(a)&&k(a).scrollTop()}))}),{immediate:!1}),{handleCancel:function(l){return c(this,null,(function*(){if(null==l||l.stopPropagation(),e.closeFunc&&v(e.closeFunc)){const t=yield e.closeFunc();n.value=!t}else n.value=!1,t("cancel",l)}))},getBindValue:b,getProps:m,handleFullScreen:f,fullScreenRef:h,getMergeProps:p,handleOk:function(e){t("ok",e)},visibleRef:n,omit:le,modalWrapperRef:a,handleExtHeight:function(e){r.value=e},handleHeightChange:function(e){t("height-change",e)},handleTitleDbClick:function(t){e.canFullscreen&&(t.stopPropagation(),f(t))},getWrapperHeight:y}}});He.render=function(e,t,l,n,o,a){const r=L("ModalClose"),s=L("ModalHeader"),i=L("ModalFooter"),c=L("ModalWrapper"),u=L("Modal");return A(),_(u,Z(e.getBindValue,{onCancel:e.handleCancel}),ne({default:V((()=>[P(c,Z({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:void 0===e.footer||e.footer?void 0:0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:V((()=>[q(e.$slots,"default")])),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])])),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:V((()=>[P(r,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]))},e.$slots.title?void 0:{name:"title",fn:V((()=>[P(s,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]))},e.$slots.footer?void 0:{name:"footer",fn:V((()=>[P(i,Z(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),ne({_:2},[oe(Object.keys(e.$slots),(t=>({name:t,fn:V((l=>[q(e.$slots,t,l)]))})))]),1040,["onOk","onCancel"])]))},oe(Object.keys(e.omit(e.$slots,"default")),(t=>({name:t,fn:V((l=>[q(e.$slots,t,l)]))})))]),1040,["onCancel"])};const Me=ae({}),Fe=ae({});function Se(){const e=T(null),t=T(!1),l=T("");const n=()=>{const t=k(e);return t||H("useModal instance is undefined!"),t};return[function(n,o){if(!ee())throw new Error("useModal() can only be used inside setup() or functional components!");l.value=o,R((()=>{e.value=null,t.value=!1,Me[k(l)]=null})),k(t)&&M()&&n===k(e)||(e.value=n,n.emitVisible=(e,t)=>{Fe[t]=e})},{setModalProps:e=>{var t;null==(t=n())||t.setModalProps(e)},getVisible:W((()=>Fe[~~k(l)])),redoModalHeight:()=>{var e,t;null==(t=null==(e=n())?void 0:e.redoModalHeight)||t.call(e)},openModal:(e=!0,t,o=!0)=>{var a;if(null==(a=n())||a.setModalProps({visible:e}),!t)return;const r=k(l);if(o)return Me[r]=null,void(Me[r]=re(t));se(re(Me[r]),re(t))||(Me[r]=re(t))},closeModal:()=>{var e;null==(e=n())||e.setModalProps({visible:!1})}}]}const ke=e=>{const t=T(null),l=ee(),n=T(""),o=()=>{const e=k(t);return e||H("useModalInner instance is undefined!"),e};return S((()=>{const t=Me[k(n)];t&&e&&v(e)&&E((()=>{e(t)}))})),[(e,o)=>{ie((()=>{t.value=null})),n.value=o,t.value=e,null==l||l.emit("register",e,o)},{changeLoading:(e=!0)=>{var t;null==(t=o())||t.setModalProps({loading:e})},getVisible:W((()=>Fe[~~k(n)])),changeOkLoading:(e=!0)=>{var t;null==(t=o())||t.setModalProps({confirmLoading:e})},closeModal:()=>{var e;null==(e=o())||e.setModalProps({visible:!1})},setModalProps:e=>{var t;null==(t=o())||t.setModalProps(e)},redoModalHeight:()=>{var e;const t=null==(e=o())?void 0:e.redoModalHeight;t&&t()}}]},Oe=F(He);export{Oe as B,ke as a,Se as b,me as u};

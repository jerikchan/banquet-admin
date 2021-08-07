import{A as e,bw as t,j as n,_ as i,F as s,G as a,x as o,a3 as r,a5 as l,a8 as c,ap as m,a1 as u,aB as d,O as g,r as p,aj as f,u as v,bL as w,aa as h,bN as b,bO as L,aN as x}from"./vendor.18836d94.js";/* empty css              */import{p as I,c as _,aj as S,aZ as y}from"./index.0dd8ec84.js";import{P as C}from"./index.864efc08.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.4e594fbe.js";import"./useWindowSizeFn.ba0495b0.js";import"./useContentViewHeight.4547994f.js";var k=e({name:"ImagePreview",components:{Image:t,PreviewGroup:t.PreviewGroup},props:{functional:I.bool,imageList:{type:Array}},setup(e){const{prefixCls:t}=_("image-preview");return{prefixCls:t,getImageList:n((()=>{const{imageList:t}=e;return t?t.map((e=>S(e)?{src:e,placeholder:!1}:e)):[]}))}}});k.render=function(e,t,n,g,p,f){const v=i("Image"),w=i("PreviewGroup");return s(),a("div",{class:e.prefixCls},[o(w,null,{default:r((()=>[!e.imageList||e.$slots.default?l(e.$slots,"default",{key:0}):(s(!0),a(c,{key:1},m(e.getImageList,(e=>(s(),a(v,u({key:e.src},e),d({_:2},[e.placeholder?{name:"placeholder",fn:r((()=>[o(v,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:3})],2)};var O,j;(j=O||(O={}))[j.LOADING=0]="LOADING",j[j.DONE=1]="DONE",j[j.FAIL=2]="FAIL";const D={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},N="img-preview";var P=e({name:"ImagePreview",props:D,emits:["img-load","img-error"],setup(e,{expose:t,emit:i}){const s=new Map,a=g({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:O.LOADING,currentIndex:0,moveX:0,moveY:0,show:e.show}),r=p(null),l=p(null);function c(){!function(){const e=v(r);if(!e)return;e.onmousewheel=d,document.body.addEventListener("DOMMouseScroll",d),document.ondragstart=function(){return!1}}();const{index:t,imageList:n}=e;if(!n||!n.length)throw new Error("imageList is undefined");a.currentIndex=t,S(n[t])}function m(){a.imgScale=1,a.imgRotate=0,a.imgTop=0,a.imgLeft=0}const u=n((()=>e.scaleStep>0&&e.scaleStep<100?e.scaleStep/100:a.imgScale/10));function d(e){(e=e||window.event).delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&x(u.value),e.delta<0&&x(-u.value)}function x(e){a.imgScale<=.2&&e<0||(a.imgScale+=e)}function I(e){a.imgRotate+=e}function _(){const e=v(l);e&&(e.onmousemove=null)}function S(t){a.status=O.LOADING;const n=new Image;n.src=t,n.onload=n=>{if(a.currentUrl!==t){const o=n.composedPath();if(e.rememberState){s.set(a.currentUrl,{scale:a.imgScale,top:a.imgTop,left:a.imgLeft,rotate:a.imgRotate});const n=s.get(t);n?(a.imgScale=n.scale,a.imgTop=n.top,a.imgRotate=n.rotate,a.imgLeft=n.left):(m(),e.defaultWidth&&(a.imgScale=e.defaultWidth/o[0].naturalWidth))}else e.defaultWidth&&(a.imgScale=e.defaultWidth/o[0].naturalWidth);o&&i("img-load",{index:a.currentIndex,dom:o[0],url:t})}a.currentUrl=t,a.status=O.DONE},n.onerror=e=>{const n=e.composedPath();n&&i("img-error",{index:a.currentIndex,dom:n[0],url:t}),a.status=O.FAIL}}function y(e){e&&e.stopPropagation(),C()}function C(){a.show=!1,document.body.removeEventListener("DOMMouseScroll",d),document.ondragstart=null}function k(){m()}function j(t){const{currentIndex:n}=a,{imageList:i}=e;"left"===t&&(a.currentIndex--,n<=0&&(a.currentIndex=i.length-1)),"right"===t&&(a.currentIndex++,n>=i.length-1&&(a.currentIndex=0)),S(i[a.currentIndex])}function D(e){e=e||window.event,a.moveX=e.clientX,a.moveY=e.clientY;const t=v(l);t&&(t.onmousemove=P)}function P(e){(e=e||window.event).preventDefault();const t=e.clientX-a.moveX,n=e.clientY-a.moveY;a.imgLeft+=t,a.imgTop+=n,a.moveX=e.clientX,a.moveY=e.clientY}t({resume:k,close:C,prev:j.bind(null,"left"),next:j.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(a.imgScale=e)},setRotate:e=>{a.imgRotate=e}});const W=n((()=>{const{imgScale:t,imgRotate:n,imgTop:i,imgLeft:s}=a;return{transform:`scale(${t}) rotate(${n}deg)`,marginTop:`${i}px`,marginLeft:`${s}px`,maxWidth:e.defaultWidth?"unset":"100%"}})),A=n((()=>{const{imageList:t}=e;return t.length>1}));f((()=>{e.show&&c(),e.imageList&&m()}));const E=t=>{e.maskClosable&&t.target&&t.target.classList.contains("img-preview-content")&&y(t)},G=()=>{if(!v(A))return null;const{currentIndex:t}=a,{imageList:n}=e;return o("div",{class:"img-preview__index"},[t+1,h(" / "),n.length])},M=e=>v(A)?o("div",{class:["img-preview__arrow",e],onClick:()=>j(e)},[o("left"===e?b:L,null,null)]):null;return()=>a.show&&o("div",{class:N,ref:r,onMouseup:_,onClick:E},[o("div",{class:"img-preview-content"},[o("img",{style:v(W),class:["img-preview-image",a.status===O.DONE?"":"hidden"],ref:l,src:a.currentUrl,onMousedown:D},null),o("div",{class:"img-preview__close",onClick:y},[o(w,{class:"img-preview__close-icon"},null)]),G(),o("div",{class:"img-preview__controller"},[o("div",{class:"img-preview__controller-item",onClick:()=>x(-u.value)},[o("img",{src:"/banquet-admin/assets/unscale.c552f416.svg"},null)]),o("div",{class:"img-preview__controller-item",onClick:()=>x(u.value)},[o("img",{src:"/banquet-admin/assets/scale.44abde22.svg"},null)]),o("div",{class:"img-preview__controller-item",onClick:k},[o("img",{src:"/banquet-admin/assets/resume.8f27866b.svg"},null)]),o("div",{class:"img-preview__controller-item",onClick:()=>I(-90)},[o("img",{src:"/banquet-admin/assets/unrotate.ef6a2daf.svg"},null)]),o("div",{class:"img-preview__controller-item",onClick:()=>I(90)},[o("img",{src:"/banquet-admin/assets/p-rotate.cb8bbfc3.svg"},null)])]),M("left"),M("right")])])}});let W=null;const A=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var E=e({components:{PageWrapper:C,ImagePreview:k},setup:()=>({imgList:A,openImg:function(){!function(e){var t;if(!y)return;const n={},i=document.createElement("div");Object.assign(n,{show:!0,index:0,scaleStep:100},e),W=o(P,n),x(W,i),document.body.appendChild(i),null==(t=W.component)||t.exposed}({imageList:A,defaultWidth:700,rememberState:!0,onImgLoad:({index:e,url:t,dom:n})=>{}})}})});const G=h("无预览图");E.render=function(e,t,n,l,c,m){const u=i("ImagePreview"),d=i("a-button"),g=i("PageWrapper");return s(),a(g,{title:"图片预览示例"},{default:r((()=>[o(u,{imageList:e.imgList},null,8,["imageList"]),o(d,{onClick:e.openImg,type:"primary"},{default:r((()=>[G])),_:1},8,["onClick"])])),_:1})};export{E as default};

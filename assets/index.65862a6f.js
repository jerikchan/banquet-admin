import{D as e,p as o,c as t,f as a,e as s,G as r}from"./index.c1a25957.js";import{A as n,ay as i,az as l,j as c,_ as d,L as p,F as f,x as m,a3 as u,a9 as g,J as k,a8 as x}from"./vendor.517bedfb.js";import{D as h}from"./siteSetting.c485f07c.js";import{c as _,u as b}from"./index.403b71a6.js";import{b as j}from"./index.80a9d931.js";import{h as D}from"./header.d801b988.js";import"./index.60c3f304.js";import"./useWindowSizeFn.45b2e0d5.js";import"./useContentViewHeight.b4f36b25.js";/* empty css              *//* empty css              */import"./useSortable.2c7efa40.js";import"./lock.b6205fa8.js";var v=n({name:"UserDropdown",components:{Dropdown:i,Menu:l,MenuItem:_((()=>e((()=>import("./DropMenuItem.722f9868.js")),["assets/DropMenuItem.722f9868.js","assets/vendor.517bedfb.js","assets/vendor.3f9e96ed.css","assets/index.c1a25957.js","assets/index.e52d8973.css"]))),MenuDivider:l.Divider,LockAction:_((()=>e((()=>import("./LockModal.d74cf352.js")),["assets/LockModal.d74cf352.js","assets/LockModal.8fa08283.css","assets/index.de001465.css","assets/index.1800f0a6.css","assets/index.e80cf572.css","assets/index.0dc54981.css","assets/index.85577cc2.css","assets/index.0840187f.css","assets/index.34d3dbc6.css","assets/index.3c93b162.css","assets/index.4b8e53bb.css","assets/index.24b58842.css","assets/index.4c61959e.css","assets/index.2abcdf8a.css","assets/vendor.517bedfb.js","assets/vendor.3f9e96ed.css","assets/index.c1a25957.js","assets/index.e52d8973.css","assets/index.80a9d931.js","assets/index.b49fd12d.css","assets/useWindowSizeFn.45b2e0d5.js","assets/BasicForm.d5d93021.js","assets/BasicForm.0bb5691f.css","assets/index.65d24057.js","assets/index.07759353.css","assets/download.2f487ea9.js","assets/base64Conver.bb012c73.js","assets/index.559cde34.js","assets/index.0958b6e3.css","assets/useForm.3c867098.js","assets/lock.b6205fa8.js","assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=s(),{getShowDoc:n,getUseLockPage:i}=b(),l=a(),d=c((()=>{const{realName:e="",avatar:o,desc:t}=l.getUserInfo||{};return{realName:e,avatar:o||D,desc:t}})),[p,{openModal:f}]=j();return{prefixCls:e,t:o,getUserInfo:d,handleMenuClick:function(e){switch(e.key){case"logout":l.confirmLoginOut();break;case"doc":r(h);break;case"lock":f(!0)}},getShowDoc:n,register:p,getUseLockPage:i}}});v.render=function(e,o,t,a,s,r){const n=d("MenuItem"),i=d("MenuDivider"),l=d("Menu"),c=d("Dropdown"),h=d("LockAction");return p(),f(x,null,[m(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:u((()=>[m(l,{onClick:e.handleMenuClick},{default:u((()=>[e.getShowDoc?(p(),f(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("v-if",!0),e.getShowDoc?(p(),f(i,{key:1})):g("v-if",!0),e.getUseLockPage?(p(),f(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("v-if",!0),m(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:u((()=>[m("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[m("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),m("span",{class:`${e.prefixCls}__info hidden md:block`},[m("span",{class:[`${e.prefixCls}__name  `,"truncate"]},k(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),m(h,{onRegister:e.register},null,8,["onRegister"])],64)};export{v as default};
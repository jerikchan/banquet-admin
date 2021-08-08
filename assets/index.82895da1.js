var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{A as s,r as i,bU as u,R as m,L as p,F as c,J as d,O as f,V as v,_ as b,a3 as j,x as w}from"./vendor.f90788d9.js";import{P as g}from"./index.2d7cf9f2.js";import{p as O,e as y,aW as T,aF as D,av as P,ag as h,aj as x,C,ab as M,ad as _}from"./index.27af0dce.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useWindowSizeFn.206cf3e2.js";import"./useContentViewHeight.f4cabba7.js";var W=s({name:"Time",props:{value:O.oneOfType([O.number,O.instanceOf(Date),O.string]).isRequired,step:O.number.def(60),mode:O.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const t=i(""),{t:a}=y();function n(){const{mode:n,value:o}=e,r=function(){const{value:t}=e;let a=0;if(h(t)){const e=t.toString().length>10?t:1e3*t;a=new Date(e).getTime()}else x(t)?a=new Date(t).getTime():C(t)&&(a=t.getTime());return a}();"relative"===n?t.value=function(e){const t=(new Date).getTime(),n=P(e).isBefore(t);let o=t-e;n||(o=-o);let r="",l=a(n?"component.time.before":"component.time.after");r=o<1e3?a("component.time.just"):o<6e4?parseInt(o/1e3)+a("component.time.seconds")+l:o>=6e4&&o<36e5?Math.floor(o/6e4)+a("component.time.minutes")+l:o>=36e5&&o<864e5?Math.floor(o/36e5)+a("component.time.hours")+l:o>=864e5&&o<262386e4?Math.floor(o/864e5)+a("component.time.days")+l:o>=262386e4&&o<=3156786e4&&n?P(e).format("MM-DD-HH-mm"):P(e).format("YYYY");return r}(r):"datetime"===n?t.value=T(o):"date"===n&&(t.value=D(o))}return u(n,1e3*e.step),m((()=>e.value),(()=>{n()}),{immediate:!0}),{date:t}}});W.render=function(e,t,a,n,o,r){return p(),c("span",null,d(e.date),1)};var Y=s({components:{PageWrapper:g,Time:M(W),CollapseContainer:_},setup(){const e=(new Date).getTime(),s=f({time1:e-18e4,time2:e-2592e5});return i=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&l(e,a,t[a]);return e})({},v(s)),t(i,a({now:e}));var i}});const F=w("br",null,null,-1),H=w("br",null,null,-1),S=w("br",null,null,-1),A=w("br",null,null,-1);Y.render=function(e,t,a,n,o,r){const l=b("Time"),s=b("CollapseContainer"),i=b("PageWrapper");return p(),c(i,{title:"时间组件示例"},{default:j((()=>[w(s,{title:"基础示例"},{default:j((()=>[w(l,{value:e.time1},null,8,["value"]),F,w(l,{value:e.time2},null,8,["value"])])),_:1}),w(s,{title:"定时更新",class:"my-4"},{default:j((()=>[w(l,{value:e.now,step:1},null,8,["value"]),H,w(l,{value:e.now,step:5},null,8,["value"])])),_:1}),w(s,{title:"定时更新"},{default:j((()=>[w(l,{value:e.now,mode:"date"},null,8,["value"]),S,w(l,{value:e.now,mode:"datetime"},null,8,["value"]),A,w(l,{value:e.now},null,8,["value"])])),_:1})])),_:1})};export{Y as default};
import{u as e}from"./useScript.6cc3aec8.js";import{z as t,r,X as a,Y as n,u as s,D as i,F as o}from"./vendor.586ef38d.js";var p=t({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const t=r(null),{toPromise:i}=e({src:"https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b"});function o(){return e=this,r=null,a=function*(){yield i(),yield n();const e=s(t);e&&new window.AMap.Map(e,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})},new Promise(((t,n)=>{var s=e=>{try{o(a.next(e))}catch(t){n(t)}},i=e=>{try{o(a.throw(e))}catch(t){n(t)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);o((a=a.apply(e,r)).next())}));var e,r,a}return a((()=>{o()})),{wrapRef:t}}});p.render=function(e,t,r,a,n,s){return i(),o("div",{ref:"wrapRef",style:{height:e.height,width:e.width}},null,4)};export{p as default};

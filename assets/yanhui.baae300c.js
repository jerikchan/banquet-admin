var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,c=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&i(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&i(e,t,r[t]);return e},d=(e,a)=>r(e,t(a));import{u as l,aG as p}from"./index.a6fa69dd.js";const{devUrl:y}=l();var n,b;(b=n||(n={})).DirectoryPageList="/dic/findDic",b.GetAllDirectoryList="/system/getAllDirectoryList",b.AddDirectory="/dic/add",b.UpdateDirectory="/dic/update",b.DeleteDirectory="/dic/delete",b.MenuList="/system/getMenuList",b.setDirectoryStatus="/system/setRoleStatus";const u=e=>p.get({url:n.DirectoryPageList,params:d(c({},e),{parentId:"402881847b2c2d77017b2c2e67180002"})},{devUrl:y}),D=e=>p.post({url:n.AddDirectory,params:d(c({},e),{parentId:"402881847b2c2d77017b2c2e67180002"})},{devUrl:y}),m=e=>p.post({url:n.UpdateDirectory,params:d(c({},e),{parentId:"402881847b2c2d77017b2c2e67180002"})},{devUrl:y}),f=e=>p.post({url:n.DeleteDirectory,params:e},{devUrl:y}),g=e=>p.get({url:n.MenuList,params:e});export{g as a,D as b,f as d,u as g,m as u};
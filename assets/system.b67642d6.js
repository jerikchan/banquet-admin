import{u as t,az as e}from"./index.27af0dce.js";const{devUrl:s}=t();var a,l;(l=a||(a={})).AccountList="/system/getAccountList",l.IsAccountExist="/system/accountExist",l.DeptList="/dept/get/tree",l.AddDept="/dept/add",l.UpdateDept="/dept/update",l.DeleteDept="/dept/delete",l.setRoleStatus="/system/setRoleStatus",l.MenuList="/system/getMenuList",l.RolePageList="/system/getRoleListByPage",l.GetAllRoleList="/system/getAllRoleList";const r=t=>e.get({url:a.AccountList,params:t}),p=t=>e.get({url:a.DeptList,params:t},{devUrl:s}),o=t=>e.get({url:a.MenuList,params:t}),u=t=>e.get({url:a.RolePageList,params:t}),d=t=>e.get({url:a.GetAllRoleList,params:t}),i=(t,s)=>e.post({url:a.setRoleStatus,params:{id:t,status:s}}),c=t=>e.post({url:a.IsAccountExist,params:{account:t}},{errorMessageMode:"none"}),m=t=>e.post({url:a.AddDept,params:t},{devUrl:s}),g=t=>e.post({url:a.UpdateDept,params:t},{devUrl:s}),n=t=>e.post({url:a.DeleteDept,params:t},{devUrl:s});export{p as a,d as b,u as c,o as d,n as e,m as f,r as g,c as i,i as s,g as u};
import{A as r,_ as e,L as a,F as s,a3 as t,x as o,a1 as i,aa as n}from"./vendor.517bedfb.js";import{B as c,a as d}from"./index.8753fb51.js";import"./index.c1a25957.js";/* empty css              */var f=r({components:{BasicDrawer:c},setup(){const[r,{closeDrawer:e}]=d();return{register:r,closeDrawer:e}}});const l=n(" Drawer Info. "),p=n(" 内部关闭drawer ");f.render=function(r,n,c,d,f,w){const m=e("a-button"),u=e("BasicDrawer");return a(),s(u,i(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:t((()=>[l,o(m,{type:"primary",onClick:r.closeDrawer},{default:t((()=>[p])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export{f as default};
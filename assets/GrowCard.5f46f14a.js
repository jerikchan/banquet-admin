import{C as a}from"./index.a02d4c10.js";import{_ as t}from"./index.8b600a06.js";import{z as l,bl as o,br as e,Z as s,D as n,F as i,a7 as r,ao as c,a2 as d,w as u,a9 as p,J as m}from"./vendor.586ef38d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const x=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var f=l({components:{CountTo:a,Tag:o,Card:e,Icon:t},setup:()=>({growCardList:x})});const v={class:"md:flex"},g={class:"py-4 px-4 flex justify-between"},j={class:"p-2 px-4 flex justify-between"};f.render=function(a,t,l,o,e,x){const f=s("Tag"),w=s("CountTo"),b=s("Icon"),C=s("Card");return n(),i("div",v,[(n(!0),i(r,null,c(a.growCardList,((t,l)=>(n(),i(C,{key:t.title,size:"small",loading:a.$attrs.loading,title:t.title,class:["md:w-1/4 w-full !md:mt-0 !mt-4",[l+1<4&&"!md:mr-4"]],canExpan:!1},{extra:d((()=>[u(f,{color:t.color},{default:d((()=>[p(m(t.action),1)])),_:2},1032,["color"])])),default:d((()=>[u("div",g,[u(w,{prefix:"$",startVal:1,endVal:t.value,class:"text-2xl"},null,8,["endVal"]),u(b,{icon:t.icon,size:40},null,8,["icon"])]),u("div",j,[u("span",null,"总"+m(t.title),1),u(w,{prefix:"$",startVal:1,endVal:t.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export{f as default};

import{A as s,bl as e,j as a,_ as t,L as l,F as r,x as n,J as c,bm as d}from"./vendor.f90788d9.js";/* empty css              */import{f as x}from"./index.27af0dce.js";import{h as i}from"./header.d801b988.js";var m=s({components:{Avatar:e},setup(){const s=x();return{userinfo:a((()=>s.getUserInfo)),headerImg:i}}});const o={class:"lg:flex"},f={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},p={class:"md:text-lg text-md"},u=n("span",{class:"text-secondary"}," 今日晴，20℃ - 32℃！ ",-1),v=d('<div class="flex flex-1 justify-end md:mt-0 mt-4"><div class="flex flex-col justify-center text-right"><span class="text-secondary"> 待办 </span><span class="text-2xl">2/10</span></div><div class="flex flex-col justify-center text-right md:mx-16 mx-12"><span class="text-secondary"> 项目 </span><span class="text-2xl">8</span></div><div class="flex flex-col justify-center text-right md:mr-10 mr-4"><span class="text-secondary"> 团队 </span><span class="text-2xl">300</span></div></div>',1);m.render=function(s,e,a,d,x,i){const m=t("Avatar");return l(),r("div",o,[n(m,{src:s.userinfo.avatar||s.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),n("div",f,[n("h1",p,"早安, "+c(s.userinfo.realName)+", 开始您一天的工作吧！",1),u]),v])};export{m as default};
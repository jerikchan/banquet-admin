import{z as a,br as t,r as e,Q as i,Z as s,D as o,F as r,a2 as d,w as l}from"./vendor.586ef38d.js";/* empty css              *//* empty css              *//* empty css              */import{u as n}from"./useECharts.19a6eb5a.js";import"./index.8b600a06.js";var m=a({components:{Card:t},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(a){const t=e(null),{setOptions:s}=n(t);return i((()=>a.loading),(()=>{a.loading||s({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})}),{immediate:!0}),{chartRef:t}}});m.render=function(a,t,e,i,n,m){const p=s("Card");return o(),r(p,{title:"销售统计",loading:a.loading},{default:d((()=>[l("div",{ref:"chartRef",style:{width:a.width,height:a.height}},null,4)])),_:1},8,["loading"])};export{m as default};

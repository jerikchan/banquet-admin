import{A as a,bd as t,r as s,_ as i,L as e,F as n,a3 as r,x as o,a9 as b,a1 as d}from"./vendor.517bedfb.js";/* empty css              *//* empty css              *//* empty css              */import p from"./VisitAnalysis.694dcde4.js";import y from"./VisitAnalysisBar.e3235859.js";import"./useECharts.2ab86d1c.js";import"./index.a6fa69dd.js";import"./props.f48aca0b.js";var c=a({components:{Card:t,VisitAnalysis:p,VisitAnalysisBar:y},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const f={key:0},l={key:1};c.render=function(a,t,s,p,y,c){const m=i("VisitAnalysis"),v=i("VisitAnalysisBar"),j=i("Card");return e(),n(j,d({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(e(),n("p",f,[o(m)])):b("v-if",!0),"tab2"===a.activeKey?(e(),n("p",l,[o(v)])):b("v-if",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export{c as default};
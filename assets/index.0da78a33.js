import{A as e,bs as a,bi as t,ao as l,be as d,ce as i,ba as s,_ as n,F as r,a3 as o,L as u,x as m,aa as b}from"./vendor.8887d027.js";import{_ as f}from"./TableImg.8709f9ad.js";import"./BasicForm.24833f51.js";import{u as p}from"./useTable.b198c16a.js";import{P as c}from"./index.9adf7152.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{refundTimeTableSchema as _,refundTimeTableData as j}from"./data.a6d5a489.js";/* empty css              *//* empty css              */import"./useForm.341a37c5.js";import"./index.139ebaf4.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.fddb5d97.js";import"./index.694555f1.js";import"./onMountedOrActivated.1f4114eb.js";import"./useSortable.67b4cd15.js";/* empty css              *//* empty css              *//* empty css              */import"./index.1ff1fcb7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.53426b47.js";import"./base64Conver.bb012c73.js";import"./index.7e041dc6.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d6114e24.js";var x=e({components:{BasicTable:f,PageWrapper:c,[a.name]:a,[t.name]:t,Empty:l,[d.name]:d,[d.Item.name]:d.Item,[i.name]:i,[i.Step.name]:i.Step,[s.name]:s,[s.TabPane.name]:s.TabPane},setup(){const[e]=p({title:"退货进度",columns:_,pagination:!1,dataSource:j,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:e}}});const g=b(" 操作一 "),T=b(" 操作二 "),y=b(" 主操作 "),v={class:"pt-4 m-4 desc-wrap"},X=b(" 曲丽丽 "),h=b(" XX 服务 "),k=b(" 2017-01-10 "),w=m("a",null,"12421",-1),C=b(" 2017-07-07 ~ 2017-08-08 "),P=b(" 请于两个工作日内确认 "),S=m("div",null,"Vben",-1),B=b(),F=m("p",null,"2016-12-12 12:32",-1),I=m("p",null,"Chad",-1),z=b(" 付小小 "),W=b(" XX 32943898021309809423 "),A=b(" 3321944288191034921 "),E=b(" 18112345678 "),M=b(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 "),R=b(" 111 "),V=b(" 2017-08-08 "),Y=b(" 725 "),H=b(" 2017-08-08 "),L=m("h4",null,"信息组",-1),N=b(" 林东东 "),O=b(" 1234567 "),q=b(" XX公司 - YY部 "),D=b(" 2017-08-08 "),G=b(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... "),J=b(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. "),K=b(" 付小小 "),Q=b(" 1234568 ");x.render=function(e,a,t,l,d,i){const s=n("a-button"),b=n("a-tab-pane"),f=n("a-tabs"),p=n("a-descriptions-item"),c=n("a-descriptions"),_=n("a-step"),j=n("a-steps"),x=n("a-card"),U=n("a-divider"),Z=n("Empty"),$=n("BasicTable"),ee=n("PageWrapper");return u(),r(ee,{title:"单号：234231029431",contentBackground:""},{extra:o((()=>[m(s,null,{default:o((()=>[g])),_:1}),m(s,null,{default:o((()=>[T])),_:1}),m(s,{type:"primary"},{default:o((()=>[y])),_:1})])),footer:o((()=>[m(f,{"default-active-key":"1"},{default:o((()=>[m(b,{key:"1",tab:"详情"}),m(b,{key:"2",tab:"规则"})])),_:1})])),default:o((()=>[m("div",v,[m(c,{size:"small",column:2},{default:o((()=>[m(p,{label:"创建人"},{default:o((()=>[X])),_:1}),m(p,{label:"订购产品"},{default:o((()=>[h])),_:1}),m(p,{label:"创建时间"},{default:o((()=>[k])),_:1}),m(p,{label:"关联单据"},{default:o((()=>[w])),_:1}),m(p,{label:"生效日期"},{default:o((()=>[C])),_:1}),m(p,{label:"备注"},{default:o((()=>[P])),_:1})])),_:1}),m(x,{title:"流程进度",bordered:!1},{default:o((()=>[m(j,{current:1,"progress-dot":"",size:"small"},{default:o((()=>[m(_,{title:"创建项目"},{description:o((()=>[S,B,F])),_:1}),m(_,{title:"部门初审"},{description:o((()=>[I])),_:1}),m(_,{title:"财务复核"}),m(_,{title:"完成"})])),_:1})])),_:1}),m(x,{title:"用户信息",bordered:!1,class:"mt-5"},{default:o((()=>[m(c,{column:3},{default:o((()=>[m(p,{label:"用户姓名"},{default:o((()=>[z])),_:1}),m(p,{label:"会员卡号"},{default:o((()=>[W])),_:1}),m(p,{label:"身份证"},{default:o((()=>[A])),_:1}),m(p,{label:"联系方式"},{default:o((()=>[E])),_:1}),m(p,{label:"联系地址",span:2},{default:o((()=>[M])),_:1})])),_:1}),m(c,{title:"信息组",column:3},{default:o((()=>[m(p,{label:"某某数据"},{default:o((()=>[R])),_:1}),m(p,{label:"该数据更新时间"},{default:o((()=>[V])),_:1}),m(p,{label:"某某数据"},{default:o((()=>[Y])),_:1}),m(p,{label:"该数据更新时间"},{default:o((()=>[H])),_:1})])),_:1}),L,m(x,{title:"多层级信息组"},{default:o((()=>[m(c,{title:"组名称",column:3},{default:o((()=>[m(p,{label:"负责人"},{default:o((()=>[N])),_:1}),m(p,{label:"角色码"},{default:o((()=>[O])),_:1}),m(p,{label:"所属部门"},{default:o((()=>[q])),_:1}),m(p,{label:"过期时间"},{default:o((()=>[D])),_:1}),m(p,{label:"描述",span:2},{default:o((()=>[G])),_:1})])),_:1}),m(U),m(c,{title:"组名称",column:1},{default:o((()=>[m(p,{label:"学名"},{default:o((()=>[J])),_:1})])),_:1}),m(U),m(c,{title:"组名称",column:1},{default:o((()=>[m(p,{label:"负责人"},{default:o((()=>[K])),_:1}),m(p,{label:"角色码"},{default:o((()=>[Q])),_:1})])),_:1})])),_:1})])),_:1}),m(x,{title:"用户近半年来电记录",class:"my-5"},{default:o((()=>[m(Z)])),_:1}),m($,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])),_:1})};export{x as default};

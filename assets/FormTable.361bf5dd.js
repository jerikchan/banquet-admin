import{_ as e}from"./TableImg.d7ec16ff.js";import"./BasicForm.5d52eae8.js";import{u as o}from"./useTable.73da740f.js";import{getBasicColumns as s,getFormConfig as t}from"./tableData.3f3da3f1.js";import{z as i,bF as r,r as a,Z as n,D as d,F as m,a2 as c,w as p,a7 as l,J as f,a9 as b}from"./vendor.586ef38d.js";/* empty css              */import{d as j}from"./table.0f852fbc.js";/* empty css              *//* empty css              */import"./useForm.47432b01.js";import"./index.8b600a06.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.58b367db.js";import"./index.af75603f.js";import"./onMountedOrActivated.91bbfd98.js";/* empty css              */import"./useSortable.df579297.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.5ed4a38e.js";/* empty css              *//* empty css              */import"./download.bb0f9f87.js";import"./base64Conver.bb012c73.js";import"./index.932d00f5.js";var u=i({components:{BasicTable:e,AAlert:r},setup(){const e=a([]),[i,{getForm:r}]=o({title:"开启搜索区域",api:j,columns:s(),useSearchForm:!0,formConfig:t(),showTableSetting:!0,showIndexColumn:!1,rowKey:"id"});return{registerTable:i,getFormValues:function(){},checkedKeys:e,onSelectChange:function(o){e.value=o}}}});const x=b(" custom-slot "),g=b("清空"),h={key:1},y=b("获取表单数据");u.render=function(e,o,s,t,i,r){const a=n("a-button"),b=n("a-alert"),j=n("BasicTable");return d(),m(j,{onRegister:e.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:e.checkedKeys,onChange:e.onSelectChange}},{"form-custom":c((()=>[x])),headerTop:c((()=>[p(b,{type:"info","show-icon":""},{message:c((()=>[e.checkedKeys.length>0?(d(),m(l,{key:0},[p("span",null,"已选中"+f(e.checkedKeys.length)+"条记录(可跨页)",1),p(a,{type:"link",onClick:o[1]||(o[1]=o=>e.checkedKeys=[]),size:"small"},{default:c((()=>[g])),_:1})],64)):(d(),m("span",h,"未选中任何项目"))])),_:1})])),toolbar:c((()=>[p(a,{type:"primary",onClick:e.getFormValues},{default:c((()=>[y])),_:1},8,["onClick"])])),_:1},8,["onRegister","rowSelection"])};export{u as default};

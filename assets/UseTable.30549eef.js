import{_ as e}from"./TableImg.d7ec16ff.js";import"./BasicForm.5d52eae8.js";import{u as t}from"./useTable.73da740f.js";import{getBasicColumns as o,getBasicShortColumns as n}from"./tableData.3f3da3f1.js";import{h as i}from"./index.8b600a06.js";import{d as a}from"./table.0f852fbc.js";import{z as s,Z as l,D as c,F as r,w as d,a2 as m,a9 as f}from"./vendor.586ef38d.js";/* empty css              *//* empty css              */import"./useForm.47432b01.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.58b367db.js";import"./index.af75603f.js";import"./onMountedOrActivated.91bbfd98.js";/* empty css              */import"./useSortable.df579297.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.5ed4a38e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.bb0f9f87.js";import"./base64Conver.bb012c73.js";import"./index.932d00f5.js";var u=s({components:{BasicTable:e},setup(){const{createMessage:e}=i();function s(){}const[l,{setLoading:c,setColumns:r,getColumns:d,getDataSource:m,getRawDataSource:f,reload:u,getPaginationRef:g,setPagination:b,getSelectRows:p,getSelectRowKeys:C,setSelectedRowKeys:j,clearSelectedRowKeys:k}]=t({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:a,columns:o(),rowKey:"id",showTableSetting:!0,onChange:s,rowSelection:{type:"checkbox"},onColumnsChange:e=>{}});return{registerTable:l,changeLoading:function(){c(!0),setTimeout((()=>{c(!1)}),1e3)},changeColumns:function(){r(n())},reloadTable:function(){r(o()),u({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getTableRawData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){b({current:2}),u()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){j(["0","1","2"])},clearSelect:function(){k()},onChange:s}}});const g={class:"p-4"},b={class:"mb-4"},p=f(" 还原 "),C=f(" 开启loading "),j=f(" 更改Columns "),k=f(" 获取Columns "),w=f(" 获取表格数据 "),x=f(" 获取接口原始数据 "),S=f(" 跳转到第2页 "),R={class:"mb-4"},T=f(" 获取选中行 "),_=f(" 获取选中行Key "),h=f(" 设置选中行 "),y=f(" 清空选中行 "),K=f(" 获取分页信息 ");u.render=function(e,t,o,n,i,a){const s=l("a-button"),f=l("BasicTable");return c(),r("div",g,[d("div",b,[d(s,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[p])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[j])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getTableRawData},{default:m((()=>[x])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),d("div",R,[d(s,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[T])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[h])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[y])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[K])),_:1},8,["onClick"])]),d(f,{onRegister:e.registerTable},null,8,["onRegister"])])};export{u as default};

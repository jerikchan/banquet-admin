import{_ as e}from"./TableImg.b0d1676c.js";import"./BasicForm.2c35510a.js";import{u as t}from"./useTable.7d2deb83.js";import{o as i,t as d}from"./tree.dfb52307.js";import{d as n}from"./table.7efdfcc0.js";import{A as o,_ as a,F as r,G as m,x as s}from"./vendor.18836d94.js";/* empty css              *//* empty css              */import"./useForm.232c0327.js";import"./index.0dd8ec84.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.ba0495b0.js";import"./index.28a38f1a.js";import"./onMountedOrActivated.4e594fbe.js";/* empty css              */import"./useSortable.b2f70596.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.78cbb7ba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4b8b5ec7.js";import"./base64Conver.bb012c73.js";import"./index.1a429cb2.js";const l=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:e=>{return t=this,i=null,d=function*(){return"2"===e?"不能输入该值":""},new Promise(((e,n)=>{var o=e=>{try{r(d.next(e))}catch(t){n(t)}},a=e=>{try{r(d.throw(e))}catch(t){n(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,a);r((d=d.apply(t,i)).next())}));var t,i,d},width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:i,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name7",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:d,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"时间选择",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var p=o({components:{BasicTable:e},setup(){const[e]=t({title:"可编辑单元格示例",api:n,columns:l,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const c={class:"p-4"};p.render=function(e,t,i,d,n,o){const l=a("BasicTable");return r(),m("div",c,[s(l,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export{p as default};

import{_ as e}from"./TableImg.b0d1676c.js";import{g as o}from"./BasicForm.2c35510a.js";import{u as t}from"./useTable.7d2deb83.js";import{a as i,e as n}from"./system.9030f79c.js";import{b as a}from"./index.28a38f1a.js";import{_ as s,c as r,s as d}from"./DeptModal.65e0aca8.js";import{A as l,_ as c,F as m,G as p,x as b,a3 as u,aa as f}from"./vendor.18836d94.js";/* empty css              *//* empty css              */import"./useForm.232c0327.js";import"./index.0dd8ec84.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.ba0495b0.js";import"./onMountedOrActivated.4e594fbe.js";/* empty css              */import"./useSortable.b2f70596.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.78cbb7ba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4b8b5ec7.js";import"./base64Conver.bb012c73.js";import"./index.1a429cb2.js";var j=l({name:"DeptManagement",components:{BasicTable:e,DeptModal:s,TableAction:o},setup(){const[e,{openModal:o}]=a(),[s,{reload:l}]=t({title:"部门列表",api:i,columns:r,formConfig:{labelWidth:120,schemas:d},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:s,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return o=this,t=null,i=function*(){yield n({deptId:e.deptId}),l()},new Promise(((e,n)=>{var a=e=>{try{r(i.next(e))}catch(o){n(o)}},s=e=>{try{r(i.throw(e))}catch(o){n(o)}},r=o=>o.done?e(o.value):Promise.resolve(o.value).then(a,s);r((i=i.apply(o,t)).next())}));var o,t,i},handleSuccess:function(){l()}}}});const x=f(" 新增部门 ");j.render=function(e,o,t,i,n,a){const s=c("a-button"),r=c("TableAction"),d=c("BasicTable"),l=c("DeptModal");return m(),p("div",null,[b(d,{onRegister:e.registerTable},{toolbar:u((()=>[b(s,{type:"primary",onClick:e.handleCreate},{default:u((()=>[x])),_:1},8,["onClick"])])),action:u((({record:o})=>[b(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export{j as default};

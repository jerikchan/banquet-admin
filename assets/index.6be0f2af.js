import{A as e,O as t,_ as o,L as n,F as i,a3 as a,x as s,aa as r}from"./vendor.f90788d9.js";import{_ as d}from"./TableImg.6c52b8df.js";import{g as c}from"./BasicForm.12c2408d.js";import{u as l}from"./useTable.cc31026c.js";import{g as m}from"./system.b67642d6.js";import{P as p}from"./index.2d7cf9f2.js";import u from"./DeptTree.9662c635.js";import{b as f}from"./index.99f4ae53.js";import{_ as b,c as j,s as x}from"./AccountModal.266007e9.js";import{k as h}from"./index.27af0dce.js";/* empty css              *//* empty css              */import"./useForm.182501aa.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.206cf3e2.js";import"./onMountedOrActivated.a9c9ce1d.js";/* empty css              */import"./useSortable.22060609.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.1b0403ed.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ca2729e5.js";import"./base64Conver.bb012c73.js";import"./index.1d6c4e00.js";/* empty css              *//* empty css              */import"./useContentViewHeight.f4cabba7.js";import"./Tree.vue_vue&type=style&index=0&lang.0c2e42f1.js";import"./useContextMenu.e7e72f3b.js";var g=e({name:"AccountManagement",components:{BasicTable:d,PageWrapper:p,DeptTree:u,AccountModal:b,TableAction:c},setup(){const e=h(),[o,{openModal:n}]=f(),i=t({}),[a,{reload:s,updateTableDataRecord:r}]=l({title:"账号列表",api:m,rowKey:"id",columns:j,formConfig:{labelWidth:120,schemas:x,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn:e=>e,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:a,registerModal:o,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(e){n(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:t}){if(e){r(t.id,t)}else s()},handleSelect:function(e=""){i.deptId=e,s()},handleView:function(t){e("/system/account_detail/"+t.id)},searchInfo:i}}});const S=r("新增账号");g.render=function(e,t,r,d,c,l){const m=o("DeptTree"),p=o("a-button"),u=o("TableAction"),f=o("BasicTable"),b=o("AccountModal"),j=o("PageWrapper");return n(),i(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:a((()=>[s(m,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),s(f,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:a((()=>[s(p,{type:"primary",onClick:e.handleCreate},{default:a((()=>[S])),_:1},8,["onClick"])])),action:a((({record:t})=>[s(u,{actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:e.handleView.bind(null,t)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister","searchInfo"]),s(b,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export{g as default};
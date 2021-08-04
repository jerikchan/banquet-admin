import{_ as e}from"./BasicForm.5d52eae8.js";import{ad as s,h as o}from"./index.8b600a06.js";import{P as t}from"./index.c05e4b18.js";import{z as l,r as a,Z as i,D as n,F as r,a2 as p,w as d,a9 as c}from"./vendor.586ef38d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.5ed4a38e.js";/* empty css              *//* empty css              *//* empty css              */import"./index.af75603f.js";import"./useWindowSizeFn.58b367db.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.bb0f9f87.js";import"./base64Conver.bb012c73.js";import"./index.932d00f5.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.91bbfd98.js";import"./useContentViewHeight.83011d32.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=l({components:{BasicForm:e,CollapseContainer:s,PageWrapper:t},setup(){const e=a(null),{createMessage:s}=o();return{formElRef:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const f={class:"mb-4"},b=c(" 更改labelWidth "),P=c(" 还原labelWidth "),j=c(" 更改Size "),C=c(" 还原Size "),h=c(" 禁用表单 "),k=c(" 解除禁用 "),x=c(" 紧凑表单 "),_=c(" 还原正常间距 "),v=c(" 操作按钮位置 "),w={class:"mb-4"},B=c(" 隐藏操作按钮 "),S=c(" 显示操作按钮 "),g=c(" 隐藏重置按钮 "),W=c(" 显示重置按钮 "),z=c(" 隐藏查询按钮 "),O=c(" 显示查询按钮 "),R=c(" 修改重置按钮 "),F=c(" 修改查询按钮 ");u.render=function(e,s,o,t,l,a){const c=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),G=i("PageWrapper");return n(),r(G,{title:"Ref操作示例"},{default:p((()=>[d("div",f,[d(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:p((()=>[b])),_:1}),d(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:p((()=>[P])),_:1}),d(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:p((()=>[j])),_:1}),d(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:p((()=>[C])),_:1}),d(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:p((()=>[h])),_:1}),d(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:p((()=>[k])),_:1}),d(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:p((()=>[x])),_:1}),d(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:p((()=>[_])),_:1}),d(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:p((()=>[v])),_:1})]),d("div",w,[d(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:p((()=>[B])),_:1}),d(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:p((()=>[S])),_:1}),d(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:p((()=>[g])),_:1}),d(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:p((()=>[W])),_:1}),d(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:p((()=>[z])),_:1}),d(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:p((()=>[O])),_:1}),d(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:p((()=>[R])),_:1}),d(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:p((()=>[F])),_:1})]),d(u,{title:"使用ref调用表单内部函数示例"},{default:p((()=>[d(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export{u as default};

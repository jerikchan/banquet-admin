<template>
  <PageWrapper class="high-form" title="BEO下单" content=" 婚礼指令单" @back="goBack">
    <a-card title="基本信息" :bordered="true">
      <BasicForm @register="register" />
    </a-card>
    <a-card title="档期信息" :bordered="true">
      <BasicForm @register="registerSchedule">
        <template #[fileInfo.key] v-for="fileInfo in fileInfos" :key="fileInfo.key">
          <a-upload
            listType="picture-card"
            v-model:fileList="fileInfo.data"
            :customRequest="uploadPicApiCustom"
            @change="onFileChange(fileInfo, $event)"
          >
            <div v-if="fileInfo.data.length < 4">
              <PlusOutlined />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
        </template>
      </BasicForm>
    </a-card>
    <a-card title="财务信息" :bordered="true">
      <BasicForm @register="registerBeoFinance" />
    </a-card>
    <a-card title="财务部备注" :bordered="true">
      <BasicForm @register="registerFinanceRemark" />
    </a-card>
    <a-card title="菜品信息" :bordered="true">
      <BasicForm @register="registerFoodsForm">
        <!-- <template #add="{ field }">
          <Button v-if="Number(field) === 0" @click="add">+</Button>
          <Button v-if="field > 0" @click="del(field)">-</Button>
        </template> -->
      </BasicForm>
    </a-card>
    <BasicTable
      @register="registerTimeTable"
      v-if="!desData.showFoodsTable"
      :searchInfo="searchInfo"
    >
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
      </template>
    </BasicTable>
    <CollapseContainer title="饮料酒水(Drink)">
      <BasicForm @register="registerDrink" />
    </CollapseContainer>
    <CollapseContainer title="灯孔音控备注(Audio Visual)">
      <BasicForm @register="registerLight" />
    </CollapseContainer>
    <CollapseContainer title="餐饮部备注(F&B)">
      <BasicForm @register="registerMealDepartment" />
    </CollapseContainer>
    <CollapseContainer title="管家部备注(HD)">
      <BasicForm @register="registerManagerDepartment" />
    </CollapseContainer>
    <CollapseContainer title="工程安保部备注(ENG)">
      <BasicForm @register="registerProjectSafety" />
    </CollapseContainer>
    <!-- <CollapseContainer title="管家部BEO内容">
      <BasicForm @register="registerTaskManager" />
    </CollapseContainer>
    <CollapseContainer title="厨师部BEO内容">
      <BasicForm @register="registerTaskKitchen" />
    </CollapseContainer>
    <CollapseContainer title="服务部BEO内容">
      <BasicForm @register="registerTaskServe" />
    </CollapseContainer>
    <CollapseContainer title="工程部BEO内容">
      <BasicForm @register="registerTaskProject" />
    </CollapseContainer>
    <CollapseContainer title="综合部BEO内容">
      <BasicForm @register="registerTaskMutiple" />
    </CollapseContainer>
    <CollapseContainer title="采购部BEO内容">
      <BasicForm @register="registerTaskBuy" />
    </CollapseContainer>
    <CollapseContainer title="财务部BEO内容">
      <BasicForm @register="registerTaskFinance" />
    </CollapseContainer> -->

    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref, reactive, unref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { uploadPicApiCustom } from '/@/api/sys/upload';

  import {
    orderFormSchema,
    roomScheduleFormSchema,
    foodsColumn,
    beoTaskFormSchema,
    beoFinanceFormSchema,
    drinkFormSchema,
    lightFormSchema,
    mealDepartmentFormSchema,
    managerDepartmentFormSchema,
    projectSafetyFormSchema,
    financeRemarkFormSchema,
    // searchFoodsFormSchema,
  } from './order.data';
  import { Card } from 'ant-design-vue';
  import {
    BasicTable,
    useTable,
    ActionItem,
    EditRecordRow,
    TableAction,
    BasicColumn,
  } from '/@/components/Table';
  import { CollapseContainer } from '/@/components/Container/index';
  // import { ApiSelect } from '/@/components/Form/index';

  import {
    getAgreementInfo,
    getScheduleByAgreementId,
    getFoodsInfos,
    getFoodsChooseInfos,
  } from '/@/api/admin/contract';

  import { getReceivablesInfo } from '/@/api/admin/finance';

  import { updateOrder, getOrder } from '/@/api/admin/beo';

  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { FormSchema } from '/@/components/Table';
  // import { emit } from 'process';

  export default defineComponent({
    name: 'BeoEditOrderModal',
    components: {
      BasicForm,
      PageWrapper,
      [Card.name]: Card,
      BasicTable,
      CollapseContainer,
      TableAction,
    },
    setup() {
      let newAgreementId;
      const currentEditKeyRef = ref('');
      const foodsFormSchema: FormSchema[] = [
        {
          field: 'isStandard',
          component: 'Switch',
          label: '是否使用标准菜单',
          colProps: {
            span: 8,
          },
          labelWidth: 200,
        },
        {
          field: 'foodsId',
          component: 'ApiSelect',
          label: '菜单选择',
          dynamicDisabled: ({ values }) => {
            desData.showFoodsTable = !values.isStandard;
            // return showFoodsTable;
            return !values.isStandard;
          },
          // componentProps: {
          //   api: getFoodsInfos,
          //   labelField: 'name',
          //   valueField: 'id',
          //   onChange: async (e: any) => {
          //     desData.foodsId = e;
          //     let temp = await getFoodsInfos({ id: e });
          //     Object.assign(foodsData, temp);
          //     // debugger;
          //     const data = temp.find((item) => item.id === e);
          //     if (data) {
          //       setTableData(data.children);
          //     }
          //   },
          // },
          componentProps: {
            api: getFoodsInfos,
            labelField: 'name',
            valueField: 'id',
            onChange: async (e: any) => {
              desData.foodsId = e;
              let temp = await getFoodsInfos({ id: e });
              Object.assign(foodsData, temp);
              // debugger;
              const data = temp.find((item) => item.id === e);
              if (data) {
                setTableData(data.children);
                // setFieldsFoodsValue({ singleDeskPrice: data.total });
              }
            },
          },
        },
        {
          field: 'singleDeskPrice',
          label: '单桌价格',
          component: 'Input',
          colProps: {
            offset: 2,
          },
          dynamicDisabled: ({ values }) => {
            // debugger;
            desData.showFoodsTable = !values.isStandard;
            // return showFoodsTable;
            return values.isStandard;
          },
          // componentProps: ({ formModel }) => {
          //   return {
          //     // placeholder: '同步f2的值为f1',
          //     onChange: (e: ChangeEvent) => {
          //       formModel.singleDeskPrice = e.target.value;
          //     },
          //   };
          // },
          // required: true,
        },
        {
          field: 'diyFoods',
          label: '自定义菜品',
          component: 'InputTextArea',
          colProps: {
            offset: 1,
            span: 20,
          },
          componentProps: {
            rows: 8,
          },
          dynamicDisabled: ({ values }) => {
            // debugger;
            desData.showFoodsTable = !values.isStandard;
            // return showFoodsTable;
            return values.isStandard;
          },
        },
      ];

      const desData: Recordable = reactive({
        showFoodsTable: false,
      });

      const fileInfos = reactive<any>(
        ['setUpType'].map((key) => {
          return {
            key,
            data: [],
          };
        })
      );

      const foodsData: Recordable = reactive({});

      const { createMessage } = useMessage();
      const searchInfo = reactive<Recordable>({});

      const [register, { setFieldsValue, getFieldsValue: getBasciValues }] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: orderFormSchema,
        showActionButtonGroup: false,
      });

      const [
        registerSchedule,
        { setFieldsValue: setFieldsValueSchedule, getFieldsValue: getScheduleValues },
      ] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: roomScheduleFormSchema,
        showActionButtonGroup: false,
      });

      const [
        registerBeoFinance,
        { setFieldsValue: setFieldsFinanceValue, getFieldsValue: getFieldFinanceValue },
      ] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: beoFinanceFormSchema,
        showActionButtonGroup: false,
      });

      const [
        registerFoodsForm,
        { setFieldsValue: setFieldsFoodsValue, getFieldsValue: getFieldFoodsValue },
      ] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: foodsFormSchema,
        showActionButtonGroup: false,
      });

      const [registerTimeTable, { setTableData, getDataSource }] = useTable({
        title: '菜品内容',
        columns: foodsColumn,
        pagination: false,
        showIndexColumn: false,
        formConfig: {
          labelWidth: 120,
          // schemas: searchFoodsFormSchema,
          autoSubmitOnEnter: true,
        },
        // api: getFoodsInfos.bind(null, { parentId: desData.foodsId }),
        // dataSource: foodsData,
        scroll: { y: 300 },
        useSearchForm: false,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      // 管家部
      const [registerTaskManager, { getFieldsValue: getManagerValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 厨师部
      const [registerTaskKitchen, { getFieldsValue: getKitchenValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 服务部
      const [registerTaskServe, { getFieldsValue: getServeValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 工程部
      const [registerTaskProject, { getFieldsValue: getProjectValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 综合部
      const [registerTaskMutiple, { getFieldsValue: getMutipleValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 采购部
      const [registerTaskBuy, { getFieldsValue: getBuyValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 财务部
      const [registerTaskFinance, { getFieldsValue: getFinanceValues }] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: beoTaskFormSchema,
        showActionButtonGroup: false,
      });

      // 饮料酒水
      const [registerDrink, { setFieldsValue: setDrinkValues, getFieldsValue: getDrinksValues }] =
        useForm({
          labelWidth: 120,
          baseColProps: {
            span: 10,
          },
          schemas: drinkFormSchema,
          showActionButtonGroup: false,
        });

      // 灯孔音响
      const [registerLight, { setFieldsValue: setLightValues, getFieldsValue: getLightValues }] =
        useForm({
          labelWidth: 120,
          baseColProps: {
            span: 10,
          },
          schemas: lightFormSchema,
          showActionButtonGroup: false,
        });

      // 餐饮部备注
      const [
        registerMealDepartment,
        { setFieldsValue: setMealDepartmentValues, getFieldsValue: getMealDepartmentValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: mealDepartmentFormSchema,
        showActionButtonGroup: false,
      });

      // 管家部
      const [
        registerManagerDepartment,
        { setFieldsValue: setManagerDepartmentValues, getFieldsValue: getManagerDepartmentValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: managerDepartmentFormSchema,
        showActionButtonGroup: false,
      });

      // 工程安保部备注
      const [
        registerProjectSafety,
        { setFieldsValue: setProjectSafetyValues, getFieldsValue: getProjectSafetyValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: projectSafetyFormSchema,
        showActionButtonGroup: false,
      });

      // 财务部备注
      const [
        registerFinanceRemark,
        { setFieldsValue: setFinanceRemarkValues, getFieldsValue: getFinanceRemarkValues },
      ] = useForm({
        labelWidth: 120,
        baseColProps: {
          span: 10,
        },
        schemas: financeRemarkFormSchema,
        showActionButtonGroup: false,
      });

      const go = useGo();
      const route = useRoute();
      const agreementId = ref(route.params?.id);
      let res, foods;

      function onFileChange(fileInfo, { fileList }) {
        fileInfo.data = fileList.map((fileInfo) => fileInfo.response || fileInfo);
      }

      async function submitAll() {
        try {
          const fileInfoRecord = fileInfos.reduce((acc, fileInfo) => {
            const data = unref(fileInfo.data);
            acc[fileInfo.key] =
              data && Array.isArray(data) && data.length
                ? data.map((info) => info?.response?.uid || info.uid)
                : null;
            return acc;
          }, {});
          // debugger;
          // setFieldsValueSchedule(fileInfoRecord);
          let submitValues = {},
            tasks = [];
          Object.assign(submitValues, getBasciValues());
          Object.assign(submitValues, getScheduleValues());
          Object.assign(submitValues, getFieldFinanceValue());
          Object.assign(submitValues, getLightValues());
          Object.assign(submitValues, getMealDepartmentValues());
          Object.assign(submitValues, getProjectSafetyValues());
          Object.assign(submitValues, getManagerDepartmentValues());
          Object.assign(submitValues, getFinanceRemarkValues());
          Object.assign(submitValues, getDrinksValues());
          Object.assign(submitValues, getFieldFoodsValue());

          const foodsItems = getFieldFoodsValue();
          console.log(getFieldFoodsValue());
          if (foodsItems.isStandard) {
            const foodsArray = {
              foodsChooseInfos: getDataSource(),
            };

            Object.assign(submitValues, foodsArray);
          }

          let temp = {};
          // Object.defineProperty(temp, 'deptName', '管家部');
          temp.deptName = '管家部';
          Object.assign(temp, getManagerValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '厨政部';
          Object.assign(temp, getKitchenValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '服务部';
          Object.assign(temp, getServeValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '工程部';
          Object.assign(temp, getProjectValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '财务部';
          Object.assign(temp, getFinanceValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '综合部';
          Object.assign(temp, getMutipleValues());
          tasks.push(temp);
          temp = {};
          temp.deptName = '采购部';
          Object.assign(temp, getBuyValues());
          tasks.push(temp);
          temp = {};
          // Object.defineProperty(submitValues, 'tasks', tasks);
          submitValues.tasks = tasks;
          // submitValues.agreementId = submitValues.id;
          // debugger;
          submitValues.id = agreementId.value;
          submitValues.agreementId = newAgreementId;

          console.log(submitValues);
          submitValues.beoType = '执行beo单';
          submitValues.setUpTypeList = fileInfoRecord.setUpType;
          await updateOrder(submitValues);
          createMessage.success('操作成功!');
          go('/beo/order');
        } catch (error) {
          console.error(error);
        }
      }

      function goBack() {
        go('/beo/order');
      }

      async function handleData(id: string) {
        let beoInfo = await getOrder({ id: id });
        console.log(beoInfo);
        setMealDepartmentValues(beoInfo);
        setDrinkValues(beoInfo);
        setLightValues(beoInfo);
        setManagerDepartmentValues(beoInfo);
        setProjectSafetyValues(beoInfo);
        setFinanceRemarkValues(beoInfo);
        // debugger;
        if (beoInfo.isStandard) {
          setFieldsFoodsValue(beoInfo);
          foods = await getFoodsChooseInfos({ foodsId: beoInfo.foodsId, beoId: id });
          setTableData(foods);
        } else {
          setFieldsFoodsValue(beoInfo);
        }

        // debugger;
        res = await getAgreementInfo({ id: beoInfo.agreementId });
        setFieldsValue({
          ...beoInfo,
        });

        newAgreementId = beoInfo.agreementId;

        // foodsId = res.foodsId;

        res = await getScheduleByAgreementId({ id: res.id });

        fileInfos.forEach((fileInfo) => {
          if (res[fileInfo.key]) {
            fileInfo.data = res[fileInfo.key];
          }
        });

        setFieldsValueSchedule({
          ...res,
        });

        res = await getReceivablesInfo({ id: beoInfo.agreementId });
        setFieldsFinanceValue({
          ...res,
        });
      }

      // setProps(setFoodsTable);

      async function setFoodsTable() {
        // let temp = await getFoodsInfos({ parentId: id });
        // setTableData({});
        setFieldsFoodsValue({});
        getFieldFoodsValue();
      }

      handleData(agreementId.value);

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        if (!record.editable) {
          console.log(record);
          return [
            {
              label: '编辑',
              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
              ifShow: record.canEdit === '是',
              onClick: handleEdit.bind(null, record),
            },
          ];
        }
        return [
          {
            label: '保存',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '取消',
            popConfirm: {
              title: '是否取消编辑',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

      function handleEdit(record: EditRecordRow) {
        currentEditKeyRef.value = record.key;
        record.onEdit?.(true);
      }

      function handleCancel(record: EditRecordRow) {
        currentEditKeyRef.value = '';
        record.onEdit?.(false, false);
      }

      async function handleSave(record: EditRecordRow) {
        const pass = await record.onEdit?.(false, true);
        if (pass) {
          currentEditKeyRef.value = '';
        }
      }

      return {
        register,
        registerSchedule,
        registerTimeTable,
        submitAll,
        goBack,
        handleData,
        registerTaskManager,
        registerTaskKitchen,
        registerTaskServe,
        registerTaskProject,
        registerTaskMutiple,
        registerTaskBuy,
        registerTaskFinance,
        registerBeoFinance,
        registerFoodsForm,
        foodsFormSchema,
        desData,
        setFoodsTable,
        foodsData,
        searchInfo,
        fileInfos,
        onFileChange,
        uploadPicApiCustom,
        registerDrink,
        registerLight,
        registerMealDepartment,
        registerManagerDepartment,
        registerProjectSafety,
        registerFinanceRemark,
        createActions,
        handleEdit,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>

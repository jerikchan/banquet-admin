<template>
  <PageWrapper title="流程详细信息" contentBackground @back="goBack">
    <!-- <template #extra>
      <a-button type="primary" @click="handleEdit"> 审核 </a-button>
    </template> -->
    <Description
      size="middle"
      title="流程信息"
      :bordered="false"
      :column="2"
      :data="mockData"
      :schema="flowSchema"
    />
    <Description
      title="客户基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: '客户信息' }"
      :column="3"
      :data="customerInfoData"
      :schema="customerInfoSchema"
      v-if="mockData.customerId !== null"
    />
    <Description
      title="合同基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: '合同信息' }"
      :column="2"
      :data="agreementInfoData"
      :schema="agreementInfoSchema"
      v-if="
        mockData.flowType === '11' ||
        mockData.flowType === '20' ||
        mockData.flowType === '21' ||
        mockData.flowType === '30' ||
        mockData.flowType === '40'
      "
    />
    <Description
      title="BEO基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: 'beo信息' }"
      :column="2"
      :data="beoInfoData"
      :schema="beoInfoSchema"
      v-if="mockData.flowType === '20' || mockData.flowType === '21' || mockData.flowType === '40'"
    />
    <Description
      title="档期基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: '档期信息' }"
      :column="2"
      :data="roomScheduleData"
      :schema="roomScheduleFormSchema"
      v-if="mockData.flowType === '20' || mockData.flowType === '21' || mockData.flowType === '40'"
    />
    <Description
      title="应收款信息"
      :collapseOptions="{ canExpand: false, helpMessage: '应收款信息' }"
      :column="2"
      :data="receivableInfoData"
      :schema="receivableInfoFormSchema"
      v-if="
        mockData.flowType === '30' ||
        mockData.flowType === '20' ||
        mockData.flowType === '21' ||
        mockData.flowType === '40'
      "
    />
    <Description
      title="beo单详情补充"
      :collapseOptions="{ canExpand: false, helpMessage: 'beo单详情补充' }"
      :column="1"
      :data="beoDetailInfosData"
      :schema="beoDetailsInfoSchema"
      v-if="
        mockData.flowType === '30' ||
        mockData.flowType === '20' ||
        mockData.flowType === '21' ||
        mockData.flowType === '40'
      "
    />
    <Description
      title="菜品信息"
      :collapseOptions="{ canExpand: false, helpMessage: '菜品信息' }"
      :column="2"
      :data="foodsDetalInfoData"
      :schema="foodsDetailInfoFormSchema"
      v-if="
        mockData.flowType === '30' ||
        mockData.flowType === '20' ||
        mockData.flowType === '21' ||
        mockData.flowType === '40'
      "
    />
    <Description
      title="回款信息"
      :collapseOptions="{ canExpand: false, helpMessage: '回款信息' }"
      :column="2"
      :data="returnCollectionData"
      :schema="returnCollectionFormSchema"
      v-if="mockData.flowType === '30'"
    />
    <!-- <BasicTable
      @register="registerBeoTaskTable"
      @success="handleSuccess"
      v-if="mockData.flowType === '20' || mockData.flowType === '21' || mockData.flowType === '40'"
    /> -->
    <BasicTable
      @register="registerFoodsTable"
      @success="handleSuccess"
      v-if="
        (mockData.flowType === '20' || mockData.flowType === '21' || mockData.flowType === '40') &&
        foodsDetalInfoData.isStandard
      "
    />
    <a-card title="流程进度" :bordered="false">
      <a-steps :current="mockData.nodeOrder" progress-dot size="small">
        <!-- <a-step title="创建项目">
          <template #description> <div>Vben</div> <p>2016-12-12 12:32</p> </template>
        </a-step>
        <a-step title="部门初审">
          <template #description>
            <p>Chad</p>
          </template>
        </a-step>
        <a-step title="财务复核" />
        <a-step title="完成" /> -->
        <a-step v-for="obj in listData" :key="obj">
          <template #description>
            <div>审核角色:{{ obj.roleName }}</div>
            <div>{{ obj.realName }}</div>
            <p>{{ obj.content }}</p>
            <p>{{ obj.modifyTime }}</p>
            <p>{{ obj.statusStr }}</p>
          </template>
        </a-step>
      </a-steps>
    </a-card>
    <BasicTable @register="registerTimeTable" @success="handleSuccess" />
    <!-- <ReviewDrawer @register="registerDrawer" @success="handleSuccessEvent" /> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { getFlowInfo, getWorkFlowFlowNodes } from '/@/api/admin/approval';
  import { getCustomer } from '/@/api/admin/customer';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  // import ReviewDrawer from './ReviewDrawer.vue';
  import { useDrawer } from '/@/components/Drawer';

  import { getAgreementInfo, getFoodsInfos } from '/@/api/admin/contract';
  import { getBeoOrder } from '/@/api/admin/beo';
  import { getAcceptInfo, getTotalInfo, getReceivablesInfo } from '/@/api/admin/finance';
  import { getRoomScheduleByAgreementId } from '/@/api/admin/banquet';

  import { DescItem } from '/@/components/Description/index';

  import { useMessage } from '/@/hooks/web/useMessage';

  import {
    flowSchema,
    customerInfoSchema,
    refundTimeTableSchema,
    agreementInfoSchema,
    beoInfoSchema,
    // beoTaskListSchema,
    returnCollectionFormSchema,
    receivableInfoFormSchema,
    roomScheduleFormSchema,
    beoDetailsInfoSchema,
    foodsColumn,
  } from './form.data';

  const mockData: Recordable = reactive({});

  let listData: Recordable = reactive({});

  const customerInfoData: Recordable = reactive({});

  const agreementInfoData: Recordable = reactive({});

  const beoInfoData: Recordable = reactive({});

  const returnCollectionData: Recordable = reactive({});

  const receivableInfoData: Recordable = reactive({});

  const roomScheduleData: Recordable = reactive({});

  const beoDetailInfosData: Recordable = reactive({});

  export default defineComponent({
    components: {
      Description,
      PageWrapper,
      BasicTable,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      [Divider.name]: Divider,
      [Card.name]: Card,
      // ReviewDrawer,
    },
    setup() {
      // debugger;
      const route = useRoute();
      const go = useGo();
      // 此处可以得到ID
      const flowId = ref(route.params?.id);
      const currentKey = ref('detail');

      const { createMessage } = useMessage();

      const foodsDetalInfoData: Recordable = reactive({});

      const foodsDetailInfoFormSchema: DescItem[] = [
        {
          label: '菜单类型',
          field: 'isStandardStr',
        },
        {
          label: '单桌价格',
          field: 'singleDeskPrice',
        },
        {
          label: '自定义菜单内容',
          field: 'diyFoods',
          show: () => {
            if (foodsDetalInfoData.isStandard) {
              return false;
            }
            return true;
          },
        },
      ];

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/approval/form');
      }

      const [register] = useDescription({
        title: '待审核流程详情',
        data: mockData,
        schema: flowSchema,
      });

      const [registerDrawer, { openDrawer }] = useDrawer();

      async function handleData(id: string) {
        let res = await getFlowInfo({ id: id });
        let resultArr = await getWorkFlowFlowNodes({ flowId: id });
        console.log(resultArr);
        Object.assign(mockData, res);
        mockData.nodeOrder = res.nodeOrder - 1 + '';
        console.log(mockData.noderOrder);
        let type = res.flowType ? res.flowType : null;
        let customerId = res.customerId;
        let agreementId = res.agreementId;
        let beoId = res.beoOrderId;
        let returnId = res.returnCollectionId;
        if (
          type &&
          (type === '1' || type === '2' || type === '3' || type === '5' || type === '6')
        ) {
          let detailsInfo = await getCustomer({ id: customerId });
          Object.assign(customerInfoData, detailsInfo);
          customerInfoData.flowType = type;
        } else if (type === '11') {
          // debugger;
          let agreementInfo = await getAgreementInfo({ id: agreementId });
          let detailsInfo = await getCustomer({ id: customerId });
          Object.assign(customerInfoData, detailsInfo);
          Object.assign(agreementInfoData, agreementInfo);
          console.log('test');
        } else if (type === '20') {
          let beoInfo = await getBeoOrder({ id: beoId });
          let agreementInfo = await getAgreementInfo({ id: beoInfo.agreementId });
          let roomScheduleInfo = await getRoomScheduleByAgreementId({ id: beoInfo.agreementId });
          let receivableInfo = await getReceivablesInfo({ id: beoInfo.agreementId });
          Object.assign(beoInfoData, beoInfo);
          Object.assign(agreementInfoData, agreementInfo);
          Object.assign(roomScheduleData, roomScheduleInfo);
          Object.assign(receivableInfoData, receivableInfo);
          // setTableData(beoInfo.taskList);
        } else if (type === '21') {
          let beoInfo = await getBeoOrder({ id: beoId });
          let agreementInfo = await getAgreementInfo({ id: beoInfo.agreementId });
          let roomScheduleInfo = await getRoomScheduleByAgreementId({ id: beoInfo.agreementId });
          let receivableInfo = await getReceivablesInfo({ id: beoInfo.agreementId });
          // debugger;
          Object.assign(beoInfoData, beoInfo);
          Object.assign(agreementInfoData, agreementInfo);
          Object.assign(roomScheduleData, roomScheduleInfo);
          Object.assign(receivableInfoData, receivableInfo);
          Object.assign(beoDetailInfosData, beoInfo);
          Object.assign(foodsDetalInfoData, beoInfo);

          if (foodsDetalInfoData.isStandard) {
            let foodsRes = await getFoodsInfos({ parentId: beoInfo.foodsId });
            setTableData(foodsRes);
          }

          // setTableData(beoInfo.taskList);
        } else if (type === '30') {
          let returnCollection = await getAcceptInfo({ id: returnId });
          let receivableInfo = await getTotalInfo({ id: returnCollection.receivableId });
          Object.assign(returnCollectionData, returnCollection);
          Object.assign(receivableInfoData, receivableInfo);

          let agreementInfo = await getAgreementInfo({ id: receivableInfo.agreementId });
          Object.assign(agreementInfoData, agreementInfo);
        } else if (type === '40') {
          let beoInfo = await getBeoOrder({ id: beoId });
          let agreementInfo = await getAgreementInfo({ id: beoInfo.agreementId });
          let roomScheduleInfo = await getRoomScheduleByAgreementId({ id: beoInfo.agreementId });
          let receivableInfo = await getReceivablesInfo({ id: beoInfo.agreementId });
          Object.assign(beoInfoData, beoInfo);
          Object.assign(agreementInfoData, agreementInfo);
          Object.assign(roomScheduleData, roomScheduleInfo);
          Object.assign(receivableInfoData, receivableInfo);
          Object.assign(beoDetailInfosData, beoInfo);
          Object.assign(foodsDetalInfoData, beoInfo);

          if (foodsDetalInfoData.isStandard) {
            let foodsRes = await getFoodsInfos({ parentId: beoInfo.foodsId });
            setTableData(foodsRes);
          }
        }

        console.log(resultArr);
        Object.assign(mockData, res);
        mockData.nodeOrder = res.nodeOrder - 1 + '';
        console.log(mockData.noderOrder);

        for (var i = 0; i < resultArr.length; i++) {
          if (resultArr[i].status === '0') {
            resultArr[i].statusStr = '待处理';
          } else if (resultArr[i].status === '1') {
            resultArr[i].statusStr = '处理完毕';
          } else if (resultArr[i].status === '2') {
            resultArr[i].statusStr = '尚未流转至此';
          } else if (resultArr[i].status === '3') {
            resultArr[i].statusStr = '不同意';
          }
          listData[i] = resultArr[i];
        }
      }

      handleData(flowId.value);

      const [registerTimeTable, { reload }] = useTable({
        title: '处理内容',
        columns: refundTimeTableSchema,
        pagination: false,
        api: getWorkFlowFlowNodes.bind(null, { flowId: flowId.value }),
        showIndexColumn: true,
      });

      const [registerFoodsTable, { setTableData }] = useTable({
        title: '菜品内容',
        columns: foodsColumn,
        pagination: false,
        showIndexColumn: true,
      });

      function handleSuccess() {
        reload();
      }

      function handleSuccessEvent() {
        createMessage.success('操作成功!');
        go('/approval/review');
      }

      function handleEdit(record: Recordable) {
        record.id = flowId.value;
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      return {
        flowSchema,
        customerInfoSchema,
        register,
        goBack,
        currentKey,
        flowId,
        handleData,
        mockData,
        customerInfoData,
        registerTimeTable,
        handleSuccess,
        listData,
        handleEdit,
        registerDrawer,
        agreementInfoSchema,
        agreementInfoData,
        beoInfoData,
        beoInfoSchema,
        // beoTaskListSchema,
        // registerBeoTaskTable,
        handleSuccessEvent,
        returnCollectionFormSchema,
        receivableInfoFormSchema,
        returnCollectionData,
        receivableInfoData,
        roomScheduleFormSchema,
        roomScheduleData,
        beoDetailInfosData,
        beoDetailsInfoSchema,
        foodsDetailInfoFormSchema,
        foodsDetalInfoData,
        foodsColumn,
        registerFoodsTable,
      };
    },
  });
</script>

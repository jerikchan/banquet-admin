<template>
  <PageWrapper title="流程详细信息" contentBackground @back="goBack">
    <!-- <template #extra>
      <a-button type="primary"> 审核 </a-button>
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
      :column="2"
      :data="customerInfoData"
      :schema="customerInfoSchema"
      v-if="mockData.customerId !== null || mockData.flowType === 11"
    />
    <Description
      title="合同基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: '合同信息' }"
      :column="2"
      :data="agreementInfoData"
      :schema="agreementInfoSchema"
      v-if="mockData.flowType === '11'"
    />
    <Description
      title="BEO基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: 'beo信息' }"
      :column="2"
      :data="beoInfoData"
      :schema="beoInfoSchema"
      v-if="mockData.flowType === '20' || mockData.flowType === '21'"
    />
    <BasicTable
      @register="registerBeoTaskTable"
      @success="handleSuccess"
      v-if="mockData.flowType === '20' || mockData.flowType === '21'"
    />
    <a-card title="流程进度" :bordered="false">
      <a-steps :current="mockData.nodeOrder" progress-dot size="small">
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
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { getFlowInfo, getWorkFlowFlowNodes } from '/@/api/admin/approval';
  import { getCustomer } from '/@/api/admin/customer';
  import { getAgreementInfo } from '/@/api/admin/contract';
  import { getBeoOrder } from '/@/api/admin/beo';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import {
    flowSchema,
    customerInfoSchema,
    refundTimeTableSchema,
    agreementInfoSchema,
    beoInfoSchema,
    beoTaskListSchema,
  } from './form.data';

  const mockData: Recordable = reactive({});

  const agreementInfoData: Recordable = reactive({});

  const customerInfoData: Recordable = reactive({});

  const beoInfoData: Recordable = reactive({});

  let listData: Recordable = reactive({});

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
    },
    setup() {
      // debugger;
      const route = useRoute();
      const go = useGo();
      // 此处可以得到ID
      const flowId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/approval/form');
      }

      async function handleData(id: string) {
        let res = await getFlowInfo({ id: id });
        let resultArr = await getWorkFlowFlowNodes({ flowId: id });
        let type = res.flowType ? res.flowType : null;
        let customerId = res.customerId;
        let agreementId = res.agreementId;
        let beoId = res.beoOrderId;
        if (
          type &&
          (type === '1' || type === '2' || type === '3' || type === '5' || type === '6')
        ) {
          let detailsInfo = await getCustomer({ id: customerId });
          Object.assign(customerInfoData, detailsInfo);
        } else if (type === '11') {
          let agreementInfo = await getAgreementInfo({ id: agreementId });
          let detailsInfo = await getCustomer({ id: customerId });
          Object.assign(customerInfoData, detailsInfo);
          Object.assign(agreementInfoData, agreementInfo);
        } else if (type === '20') {
          let beoInfo = await getBeoOrder({ id: beoId });
          Object.assign(beoInfoData, beoInfo);
          setTableData(beoInfo.taskList);
        } else if (type === '21') {
          let beoInfo = await getBeoOrder({ id: beoId });
          Object.assign(beoInfoData, beoInfo);
          setTableData(beoInfo.taskList);
        }
        console.log(resultArr);
        Object.assign(mockData, res);
        mockData.nodeOrder = res.nodeOrder - 1 + '';
        // console.log(mockData.noderOrder);
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

      const [registerBeoTaskTable, { setTableData }] = useTable({
        title: 'beo任务列表',
        columns: beoTaskListSchema,
        pagination: false,
        showIndexColumn: true,
      });

      const [registerTimeTable, { reload }] = useTable({
        title: '处理内容',
        columns: refundTimeTableSchema,
        pagination: false,
        api: getWorkFlowFlowNodes,
        beforeFetch: function (params) {
          params.flowId = flowId.value;
        },
        showIndexColumn: true,
      });

      handleData(flowId.value);

      function handleSuccess() {
        reload();
      }

      return {
        flowSchema,
        goBack,
        currentKey,
        flowId,
        handleData,
        mockData,
        registerTimeTable,
        registerBeoTaskTable,
        handleSuccess,
        customerInfoSchema,
        customerInfoData,
        agreementInfoSchema,
        agreementInfoData,
        beoInfoSchema,
        beoInfoData,
        beoTaskListSchema,
        listData,
      };
    },
  });
</script>

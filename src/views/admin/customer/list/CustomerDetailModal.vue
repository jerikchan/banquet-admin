<template>
  <PageWrapper title="流程详细信息" contentBackground @back="goBack">
    <Description
      size="middle"
      title="流程信息"
      :bordered="false"
      :column="2"
      :data="mockData"
      :schema="schema"
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
    <ReviewDrawer @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { getFlowInfo, getWorkFlowFlowNodes } from '/@/api/admin/approval';
  // import { get } from '/@/api/admin/customer';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicColumn } from '/@/components/Table/src/types/table';
  import ReviewDrawer from './ReviewDrawer.vue';
  import { useDrawer } from '/@/components/Drawer';

  const mockData: Recordable = reactive({
    userName: '',
    nodeOrder: 100,
  });

  // const customerData: Recordable = reactive({
  //   userName: '',
  //   nodeOrder: 100,
  // });

  // const agreementInfoData: Recordable = reactive({
  //   userName: '',
  //   nodeOrder: 100,
  // });

  // const chatRecordInfoData: Recordable = reactive({
  //   userName: '',
  //   nodeOrder: 100,
  // });

  // const returnCollectionData: Recordable = reactive({
  //   userName: '',
  //   nodeOrder: 100,
  // });

  // const cancelData: Recordable = reactive({
  //   userName: '',
  //   nodeOrder: 100,
  // });

  let listData: Recordable = reactive({});

  const schema: DescItem[] = [
    {
      field: 'flowCode',
      label: '流程编号',
    },
    {
      field: 'flowName',
      label: '流程名称',
    },
    {
      field: 'flowTypeStr',
      label: '流程类型',
    },
    {
      field: 'promoterName',
      label: '发起人名称',
    },
    {
      field: 'customerName',
      label: '相关客户',
    },
  ];

  const refundTimeTableSchema: BasicColumn[] = [
    {
      title: '名称',
      width: 100,
      dataIndex: 'realName',
    },
    {
      title: '所属部门',
      width: 100,
      dataIndex: 'deptName',
    },
    {
      title: '处理时间	',
      width: 100,
      dataIndex: 'modifyTime',
    },
    {
      title: '处理内容',
      width: 100,
      dataIndex: 'content',
    },
    {
      title: '处理状态',
      width: 200,
      dataIndex: 'statusStr',
    },
  ];

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
      ReviewDrawer,
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
        go('/customer/list');
      }

      const [register] = useDescription({
        title: '客户详情',
        data: mockData,
        schema: schema,
      });

      const [registerDrawer, { openDrawer }] = useDrawer();

      async function handleData(id: string) {
        let res = await getFlowInfo({ id: id });
        let resultArr = await getWorkFlowFlowNodes({ flowId: id });
        console.log(resultArr);
        mockData.roleName = res.roleName;
        mockData.createTime = res.createTime;
        mockData.flowCode = res.flowCode;
        mockData.nodeOrder = res.nodeOrder - 1 + '';
        console.log(mockData.noderOrder);

        if (res.flowType === '1') {
          mockData.flowTypeStr = '录入线索客资流程';
        } else if (res.flowType === '2') {
          mockData.flowTypeStr = '意向客资审核流程';
        } else if (res.flowType === '3') {
          mockData.flowTypeStr = '滑单流程';
        } else if (res.flowType === '5') {
          mockData.flowTypeStr = '成交客户审核流程';
        } else if (res.flowType === '11') {
          mockData.flowTypeStr = '宴会下单流程';
        } else if (res.flowType === '6') {
          mockData.flowTypeStr = '无效客资流程';
        }

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

      function handleSuccess() {
        reload();
      }

      function handleEdit(record: Recordable) {
        record.id = flowId.value;
        alert('页面内审核尚未测试完毕，暂不开放!');
        return;
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      return {
        schema,
        register,
        goBack,
        currentKey,
        flowId,
        handleData,
        mockData,
        registerTimeTable,
        handleSuccess,
        listData,
        handleEdit,
        registerDrawer,
      };
    },
  });
</script>

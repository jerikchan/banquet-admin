<template>
  <PageWrapper title="应收款的详细信息" contentBackground @back="goBack">
    <Description
      size="middle"
      title="应收款信息"
      :bordered="false"
      :column="2"
      :data="mockData"
      :schema="schema"
    />
    <BasicTable @register="registerTimeTable" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { getTotalInfo, getAcceptList } from '/@/api/admin/finance';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicColumn } from '/@/components/Table/src/types/table';

  const mockData: Recordable = reactive({
    userName: '',
  });

  const schema: DescItem[] = [
    {
      field: 'receivablesCode',
      label: '应收款单编号',
    },
    {
      field: 'agreementCode',
      label: '合同编号',
    },
    {
      field: 'preTotal',
      label: '预计总款',
    },
    {
      field: 'realTotal',
      label: '实收款',
    },
    {
      field: 'receivableMan',
      label: '收款人',
    },
    {
      field: 'createTime',
      label: '创建时间',
    },
    {
      field: 'lastTime',
      label: '尾款时间',
    },
    {
      field: 'frontMoney',
      label: '定金',
    },
    {
      field: 'midMoney',
      label: '中款',
    },
    {
      field: 'lastTime',
      label: '尾款',
    },
    {
      field: 'remark',
      label: '备注',
    },
  ];

  const refundTimeTableSchema: BasicColumn[] = [
    {
      title: '回款单编号',
      width: 100,
      dataIndex: 'returnCode',
    },
    {
      title: '回款人',
      width: 100,
      dataIndex: 'returnMan',
    },
    {
      title: '回款金额	',
      width: 100,
      dataIndex: 'returnMoney',
    },
    {
      title: '回款时间',
      width: 100,
      dataIndex: 'returnTime',
    },
    {
      title: '备注',
      width: 200,
      dataIndex: 'remark',
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
    },
    setup() {
      // debugger;
      const route = useRoute();
      const go = useGo();
      // 此处可以得到ID
      const receivableId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/finance/total');
      }

      const [register] = useDescription({
        title: '信息列表',
        data: mockData,
        schema: schema,
      });

      async function handleData(id: string) {
        let res = await getTotalInfo({ id: id });
        mockData.receivablesCode = res.receivablesCode;
        mockData.agreementCode = res.agreementCode;
        mockData.preTotal = res.preTotal;
        mockData.realTotal = res.realTotal;
        mockData.receivableMan = res.receivableMan;
        mockData.createTime = res.createTime;
        mockData.lastTime = res.lastTime;
        mockData.frontMoney = res.frontMoney;
        mockData.midMoney = res.midMoney;
        mockData.finalMoney = res.finalMoney;
        mockData.remark = res.remark;
      }

      handleData(receivableId.value);

      const [registerTimeTable, { reload }] = useTable({
        title: '相应回款单列表',
        columns: refundTimeTableSchema,
        pagination: false,
        api: getAcceptList.bind(null, { receivableId: receivableId.value }),
        showIndexColumn: true,
      });

      function handleSuccess() {
        reload();
      }

      return {
        schema,
        register,
        goBack,
        currentKey,
        receivableId,
        handleData,
        mockData,
        registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

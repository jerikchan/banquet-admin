<template>
  <PageWrapper title="回款单的的详细信息" contentBackground @back="goBack">
    <Description
      size="middle"
      title="回款单"
      :bordered="false"
      :column="2"
      :data="mockData"
      :schema="schema"
    />
    <!-- <BasicTable @register="registerTimeTable" @success="handleSuccess" /> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { getAcceptInfo } from '/@/api/admin/finance';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  // import { BasicColumn } from '/@/components/Table/src/types/table';

  const mockData: Recordable = reactive({
    userName: '',
  });

  const schema: DescItem[] = [
    {
      field: 'returnCode',
      label: '回款单编号',
    },
    {
      field: 'returnMan',
      label: '回款人',
    },
    {
      field: 'createTime',
      label: '创建时间',
    },
    {
      field: 'returnTime',
      label: '回款时间',
    },
    {
      field: 'returnMoney',
      label: '回款金额',
    },
    {
      field: 'remark',
      label: '备注',
    },
  ];

  // const refundTimeTableSchema: BasicColumn[] = [
  //   {
  //     title: '回款单编号',
  //     width: 100,
  //     dataIndex: 'returnCode',
  //   },
  //   {
  //     title: '回款人',
  //     width: 100,
  //     dataIndex: 'returnMan',
  //   },
  //   {
  //     title: '回款金额	',
  //     width: 100,
  //     dataIndex: 'returnMoney',
  //   },
  //   {
  //     title: '回款时间',
  //     width: 100,
  //     dataIndex: 'returnTime',
  //   },
  //   {
  //     title: '备注',
  //     width: 200,
  //     dataIndex: 'remark',
  //   },
  // ];

  export default defineComponent({
    components: {
      Description,
      PageWrapper,
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
      const acceptId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/finance/accept');
      }

      const [register] = useDescription({
        title: '信息列表',
        data: mockData,
        schema: schema,
      });

      async function handleData(id: string) {
        let res = await getAcceptInfo({ id: id });
        mockData.returnMoney = res.returnMoney;
        mockData.returnCode = res.returnCode;
        mockData.returnMan = res.returnMan;
        mockData.createTime = res.createTime;
        mockData.returnTime = res.returnTime;
        mockData.remark = res.remark;
      }

      handleData(acceptId.value);

      // const [registerTimeTable, { reload }] = useTable({
      //   title: '相应回款单列表',
      //   columns: refundTimeTableSchema,
      //   pagination: false,
      //   api: getAcceptList.bind(null, { receivableId: receivableId.value }),
      //   showIndexColumn: true,
      // });

      function handleSuccess() {
        // reload();
      }

      return {
        schema,
        register,
        goBack,
        currentKey,
        acceptId,
        handleData,
        mockData,
        // registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

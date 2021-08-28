<template>
  <PageWrapper title="档期详情" contentBackground @back="goBack">
    <Description
      size="middle"
      title="档期信息"
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
  import { getBanquetInfo } from '/@/api/admin/banquet';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  // import { BasicTable, useTable } from '/@/components/Table';
  // import { BasicColumn } from '/@/components/Table/src/types/table';

  const mockData: Recordable = reactive({
    userName: '',
  });

  const schema: DescItem[] = [
    {
      field: 'banquetTime',
      label: '档期时间',
    },
    {
      field: 'scheduleType',
      label: '档期类型',
    },
    {
      field: 'setUpType',
      label: '摆桌形式',
    },
    {
      field: 'deskCount',
      label: '桌数',
    },
    {
      field: 'backupDesk',
      label: '备用桌数',
    },
    {
      field: 'remark',
      label: '备注',
    },
  ];

  // const refundTimeTableSchema: BasicColumn[] = [
  //   {
  //     title: '档期日期',
  //     width: 100,
  //     dataIndex: 'banquetTime',
  //   },
  //   {
  //     title: '档期类型',
  //     width: 100,
  //     dataIndex: 'scheduleType',
  //   },
  //   {
  //     title: '摆桌形式',
  //     width: 100,
  //     dataIndex: 'setUpType',
  //   },
  //   {
  //     title: '桌数	',
  //     width: 100,
  //     dataIndex: 'deskCount',
  //   },
  //   {
  //     title: '备用桌数',
  //     width: 100,
  //     dataIndex: 'backupDesk',
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
      // BasicTable,
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
      const banquetId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/banquet/banquet');
      }

      const [register] = useDescription({
        title: '信息列表',
        data: mockData,
        schema: schema,
      });

      async function handleData(id: string) {
        let res = await getBanquetInfo({ id: id });
        mockData.banquetTime = res.banquetTime;
        mockData.scheduleType = res.scheduleType;
        mockData.setUpType = res.setUpType;
        mockData.deskCount = res.deskCount;
        mockData.backupDesk = res.backupDesk;
        mockData.remark = res.remark;
      }

      handleData(banquetId.value);

      // const [registerTimeTable, { reload }] = useTable({
      //   title: '厅房档期',
      //   columns: refundTimeTableSchema,
      //   pagination: false,
      //   api: getBanquetList.bind(null, { roomId: roomId.value }),
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
        banquetId,
        handleData,
        mockData,
        // registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

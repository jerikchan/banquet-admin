<template>
  <PageWrapper title="厅房详细信息" contentBackground @back="goBack">
    <Description
      size="middle"
      title="厅房信息"
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
  import { getRoomInfo, getBanquetList } from '/@/api/admin/banquet';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicColumn } from '/@/components/Table/src/types/table';

  const mockData: Recordable = reactive({});

  const schema: DescItem[] = [
    {
      field: 'roomName',
      label: '厅房名称',
    },
    {
      field: 'banquetType',
      label: '婚宴类型',
    },
    {
      field: 'roomType',
      label: '厅房类型',
    },
    {
      field: 'createTime',
      label: '创建日期',
    },
    {
      field: 'remark',
      label: '备注',
    },
  ];

  const refundTimeTableSchema: BasicColumn[] = [
    {
      title: '档期日期',
      width: 100,
      dataIndex: 'banquetTime',
    },
    {
      title: '档期类型',
      width: 100,
      dataIndex: 'scheduleType',
    },
    {
      title: '摆桌形式',
      width: 100,
      dataIndex: 'setUpType',
    },
    {
      title: '桌数	',
      width: 100,
      dataIndex: 'deskCount',
    },
    {
      title: '备用桌数',
      width: 100,
      dataIndex: 'backupDesk',
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
      const roomId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/banquet/room');
      }

      const [register] = useDescription({
        title: '信息列表',
        data: mockData,
        schema: schema,
      });

      async function handleData(id: string) {
        let res = await getRoomInfo({ id: id });
        Object.assign(mockData, res);
      }

      handleData(roomId.value);

      const [registerTimeTable, { reload }] = useTable({
        title: '厅房档期',
        columns: refundTimeTableSchema,
        pagination: true,
        api: getBanquetList,
        beforeFetch: function (params) {
          params.roomId = roomId.value;
        },
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
        roomId,
        handleData,
        mockData,
        registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

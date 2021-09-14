<template>
  <PageWrapper title="客户详情" contentBackground @back="goBack">
    <Description size="middle" :column="3" title="客户详情" :data="desData" :schema="schema" />
    <BasicTable @register="registerCommentTable" @success="handleSuccess">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              onClick: handleCommentDetail.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description, DescItem } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { getCustomer, getCommentList } from '/@/api/admin/customer';
  import { columns as commentColumns } from '/@/views/admin/customer/comment/comment.data';
  // import { BasicColumn } from '/@/components/Table/src/types/table';

  const desData: Recordable = reactive({});

  const schema: DescItem[] = [
    {
      label: '客户名',
      field: 'customerName',
    },
    {
      label: '客户类型',
      field: 'customerTypeStr',
    },
    {
      label: '客户状态',
      field: 'statusStr',
    },
    {
      label: '是否已邀约进店',
      field: 'isFirstStr',
    },
    {
      label: '跟进销售',
      field: 'salesManagerName',
    },
    {
      label: '意向厅',
      field: 'banquetRoom',
    },
    {
      label: '意向时间',
      field: 'purposeTime',
    },
    {
      label: '桌数',
      field: 'deskNo',
    },
    {
      label: '联系电话',
      field: 'customerMobile',
    },
    {
      label: '第二联系人',
      field: 'secondMan',
    },
    {
      label: '第二联系人号码',
      field: 'secondManMobile',
    },
    {
      label: '餐标',
      field: 'canBiao',
    },
    {
      label: '流失去向',
      field: 'cancelDirection',
      show: (data) => data.customerType === '3',
    },
    {
      label: '流失原因',
      field: 'cancelReason',
      show: (data) => data.customerType === '3',
    },
    {
      label: '无效原因',
      field: 'invalidReason',
      show: (data) => data.customerType === '6',
    },
  ];

  export default defineComponent({
    name: 'OrderDetail',
    components: {
      BasicTable,
      Description,
      PageWrapper,
      TableAction,
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
      const idRef = ref(route.params?.id);
      const currentKey = ref('detail');
      // const [register] = useDescription({
      //   title: '客户详情',
      //   data: desData,
      //   schema: schema,
      // });

      function goBack() {
        go('/customer/list');
      }

      async function handleData(id: string) {
        const res = await getCustomer({ id: id });
        Object.assign(desData, res);
      }

      handleData(idRef.value as string);

      function handleSuccess() {
        // reload();
      }

      const [registerCommentTable] = useTable({
        title: '跟进记录',
        columns: commentColumns,
        pagination: false,
        api: getCommentList.bind(null, { customerId: idRef.value }),
        showIndexColumn: false,
        scroll: { y: 300 },
        actionColumn: {
          width: 200,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCommentDetail(record: Recordable) {
        console.log(record);
        go('/customer/comment_detail/' + record.id);
      }

      return {
        schema,
        // register,
        goBack,
        currentKey,
        idRef,
        handleData,
        desData,
        registerCommentTable,
        handleSuccess,
        handleCommentDetail,
      };
    },
  });
</script>

<template>
  <PageWrapper title="订单的详细信息" contentBackground @back="goBack">
    <Description size="middle" title="BEO订单" :column="3" :data="desData" :schema="schema" />
    <!-- <BasicTable @register="registerTimeTable" @success="handleSuccess" /> -->
    <template v-for="task in desData.taskList || []" :key="task.id">
      <Description
        size="middle"
        :title="task.deptName"
        :column="3"
        :data="task"
        :schema="taskSchema"
      />
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, h } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { getOrder } from '/@/api/admin/beo';
  // import { BasicColumn } from '/@/components/Table/src/types/table';

  const desData: Recordable = reactive({});

  const schema: DescItem[] = [
    {
      field: 'orderCode',
      label: '订单编号',
    },
    {
      field: 'agreementCode',
      label: '合同编号',
    },
    {
      field: 'createTime',
      label: '创建时间',
    },
    {
      field: 'banquetTheme',
      label: '宴会主题',
    },
    {
      field: 'extraPrice',
      label: '额外费用',
    },
    {
      field: 'beforeDiscountTotal',
      label: '优惠前总价',
    },
    {
      field: 'afterDiscountTotal',
      label: '优惠后总价',
    },
    {
      field: 'frontMoney',
      label: '定金',
    },
  ];

  const taskSchema: DescItem[] = [
    {
      label: '任务编号',
      field: 'taskCode',
    },
    {
      label: '执行时间',
      field: 'taskTime',
    },
    {
      label: '任务状态',
      field: 'taskStatus',
      render: (val) => {
        return h('span', null, val === '1' ? '已完成' : '未完成');
      },
    },
    {
      label: '创建时间',
      field: 'createTime',
    },
  ];

  export default defineComponent({
    name: 'OrderDetail',
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
      const idRef = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        go('/beo/order');
      }

      const [register] = useDescription({
        title: '订单详情',
        data: desData,
        schema: schema,
      });

      async function handleData(id: string) {
        const res = await getOrder({ id: id });
        Object.assign(desData, res);
      }

      handleData(idRef.value);

      function handleSuccess() {
        // reload();
      }

      return {
        schema,
        register,
        goBack,
        currentKey,
        idRef,
        handleData,
        desData,
        // registerTimeTable,
        handleSuccess,
        taskSchema,
      };
    },
  });
</script>

<template>
  <PageWrapper title="BEO单的详细信息" contentBackground @back="goBack">
    <!-- <Description size="middle" title="BEO单" :column="3" :data="desData" :schema="schema" />
    <template v-for="task in desData.taskList || []" :key="task.id">
      <Description
        size="middle"
        :title="task.deptName"
        :column="3"
        :data="task"
        :schema="taskSchema"
      />
    </template> -->
    <Description
      title="BEO基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: 'beo信息' }"
      :column="2"
      :data="beoBasicInfoData"
      :schema="beoBasicInfoSchema"
    />
    <Description
      title="档期信息"
      :collapseOptions="{ canExpand: false, helpMessage: '档期信息' }"
      :column="2"
      :data="roomScheduleDetailInfoData"
      :schema="roomScheduleDetailSchema"
    />
    <Description
      title="菜品信息"
      :collapseOptions="{ canExpand: false, helpMessage: '菜品信息' }"
      :column="2"
      :data="foodsDetalInfoData"
      :schema="foodsDetailInfoFormSchema"
    />
    <BasicTable
      @register="registerFoodsTable"
      @success="handleSuccess"
      v-if="foodsDetalInfoData.isStandard"
    />
    <Description
      title="beo单详情补充"
      :collapseOptions="{ canExpand: false, helpMessage: 'beo单详情补充' }"
      :column="1"
      :data="beoBasicInfoData"
      :schema="beoDetailsInfoSchema"
    />
    <Description
      title="应收款信息"
      :collapseOptions="{ canExpand: false, helpMessage: '应收款信息' }"
      :column="2"
      :data="receivableInfoData"
      :schema="receivableInfoFormSchema"
    />
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

  import {
    beoBasicInfoSchema,
    roomScheduleDetailSchema,
    foodsDetailColumn,
    beoDetailsInfoSchema,
    receivableInfoFormSchema,
  } from './order.data';
  import { getRoomScheduleByAgreementId } from '/@/api/admin/banquet';
  import { getFoodsInfos } from '/@/api/admin/contract';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getReceivablesInfo } from '/@/api/admin/finance';

  const desData: Recordable = reactive({});

  const schema: DescItem[] = [
    {
      field: 'orderCode',
      label: 'BEO单编号',
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
      BasicTable,
    },
    setup() {
      // debugger;
      const route = useRoute();
      const go = useGo();
      // 此处可以得到ID
      const idRef = ref(route.params?.id);
      const currentKey = ref('detail');

      const beoBasicInfoData = reactive({});

      const roomScheduleDetailInfoData = reactive({});

      const foodsDetalInfoData: Recordable = reactive({});

      const receivableInfoData: Recordable = reactive({});

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
        go('/beo/finish');
      }

      const [register] = useDescription({
        title: 'BEO单详情',
        data: desData,
        schema: schema,
      });

      const [registerFoodsTable, { setTableData }] = useTable({
        title: '菜品内容',
        columns: foodsDetailColumn,
        pagination: false,
        showIndexColumn: true,
      });

      async function handleData(id: string) {
        // debugger;
        const res = await getOrder({ id: id });
        const roomScheduleInfo = await getRoomScheduleByAgreementId({ id: res.agreementId });
        const receivableInfo = await getReceivablesInfo({ id: res.agreementId });
        Object.assign(desData, res);
        Object.assign(beoBasicInfoData, res);
        Object.assign(roomScheduleDetailInfoData, roomScheduleInfo);

        Object.assign(foodsDetalInfoData, res);
        Object.assign(receivableInfoData, receivableInfo);

        if (foodsDetalInfoData.isStandard) {
          const foodsRes = await getFoodsInfos({ parentId: res.foodsId });
          setTableData(foodsRes);
        }
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
        beoBasicInfoSchema,
        beoBasicInfoData,
        roomScheduleDetailSchema,
        roomScheduleDetailInfoData,
        foodsDetailInfoFormSchema,
        foodsDetalInfoData,
        registerFoodsTable,
        foodsDetailColumn,
        beoDetailsInfoSchema,
        receivableInfoFormSchema,
        receivableInfoData,
      };
    },
  });
</script>

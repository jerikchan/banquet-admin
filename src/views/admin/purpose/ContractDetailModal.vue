<template>
  <PageWrapper title="合同详情" contentBackground @back="goBack">
    <Description
      title="合同基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: '合同信息' }"
      :column="2"
      :data="agreementInfoData"
      :schema="agreemetnDetailSchema"
    />
    <!-- <BasicTable @register="registerTimeTable" @success="handleSuccess" /> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { getAgreementInfo } from '/@/api/admin/contract';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { agreemetnDetailSchema } from './contract.data';

  const agreementInfoData: Recordable = reactive({});

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
        go('/contract/purpose/list');
      }

      // const [register] = useDescription({
      //   title: '信息列表',
      //   data: mockData,
      //   schema: schema,
      // });

      async function handleData(id: string) {
        let res = await getAgreementInfo({ id: id });
        Object.assign(agreementInfoData, res);
      }

      handleData(banquetId.value);

      function handleSuccess() {
        // reload();
      }

      return {
        agreemetnDetailSchema,
        goBack,
        currentKey,
        banquetId,
        handleData,
        agreementInfoData,
        // registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

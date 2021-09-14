<template>
  <PageWrapper title="跟进记录详情" contentBackground @back="goBack">
    <Description
      title="跟进信息"
      :collapseOptions="{ canExpand: false, helpMessage: '跟进信息' }"
      :column="2"
      :data="agreementInfoData"
      :schema="customerChatRecordInfoDetailSchema"
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
  import { getChatRecordInfo } from '/@/api/admin/customer';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { customerChatRecordInfoDetailSchema } from './customer.data';

  const agreementInfoData: Recordable = reactive({});

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
        go('/customer/customer_detail/' + agreementInfoData.customerId);
      }

      // const [register] = useDescription({
      //   title: '信息列表',
      //   data: mockData,
      //   schema: schema,
      // });

      async function handleData(id: string) {
        let res = await getChatRecordInfo({ id: id });
        Object.assign(agreementInfoData, res);
      }

      handleData(banquetId.value);

      function handleSuccess() {
        // reload();
      }

      return {
        customerChatRecordInfoDetailSchema,
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

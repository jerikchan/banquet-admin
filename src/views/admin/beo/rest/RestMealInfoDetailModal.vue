<template>
  <PageWrapper title="余留餐详情" contentBackground @back="goBack">
    <Description
      title="基本信息"
      :collapseOptions="{ canExpand: false, helpMessage: '基本信息' }"
      :column="2"
      :data="restMealInfoDetailData"
      :schema="restMealDetailFormSchema"
    />
    <Description
      title="用餐信息"
      :collapseOptions="{ canExpand: false, helpMessage: '用餐信息' }"
      :column="2"
      :data="restMealInfoDetailData"
      :schema="restUserMealDetailFormSchema"
    />
    <Description
      title="余留餐菜单"
      :collapseOptions="{ canExpand: false, helpMessage: '余留餐菜单' }"
      :column="1"
      :data="restMealInfoDetailData"
      :schema="restFoodsMealDetailFormSchema"
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
  import { getRestMealInfo } from '/@/api/admin/beo';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import {
    restMealDetailFormSchema,
    restUserMealDetailFormSchema,
    restFoodsMealDetailFormSchema,
  } from './rest.data';

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
      const restMealInfoDetailData: Recordable = reactive({});
      // 此处可以得到ID
      const banquetId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/beo/rest');
      }

      // const [register] = useDescription({
      //   title: '信息列表',
      //   data: mockData,
      //   schema: schema,
      // });

      async function handleData(id: string) {
        let res = await getRestMealInfo({ id: id });
        Object.assign(restMealInfoDetailData, res);
      }

      handleData(banquetId.value);

      function handleSuccess() {
        // reload();
      }

      return {
        restMealDetailFormSchema,
        restUserMealDetailFormSchema,
        restFoodsMealDetailFormSchema,
        goBack,
        currentKey,
        banquetId,
        handleData,
        restMealInfoDetailData,
        // registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

<template>
  <PageWrapper title="余留餐新增" contentBackground @back="goBack">
    <a-card title="基本信息" :bordered="true">
      <BasicForm @register="register" />
    </a-card>

    <a-card title="用餐信息" :bordered="true">
      <BasicForm @register="registerFirst" />
    </a-card>
    <!-- 
    <a-card title="二次用餐信息" :bordered="ture">
      <BasicForm @register="registerSecond" />
    </a-card> -->

    <a-card title="余留餐菜单" :bordered="ture">
      <BasicForm @register="registerRestFood" />
    </a-card>

    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>&nbsp;
      <!-- <a-button type="primary" @click="resetAll"> 重置 </a-button> -->
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, reactive, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  // import { schemas, taskSchemas } from './data';
  import { Card } from 'ant-design-vue';
  import {
    basicFormInfoSchema,
    firstFormSchema,
    // secondFormSchema,
    restFoodFormSchema,
  } from './rest.data';
  // import { getSiYiChatFormDetail } from '/@/api/admin/manager';

  import { useGo } from '/@/hooks/web/usePage';
  // import { useRoute } from 'vue-router';
  import { addOrUpdateRestMeal } from '/@/api/admin/beo';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'RestMealInfoOperModal',
    components: { BasicForm, PageWrapper, [Card.name]: Card },
    setup() {
      // const tableRef = ref<{ getDataSource: () => any } | null>(null);
      ref('oper');
      const go = useGo();
      // const route = useRoute();
      // const deptId = ref(route.params?.id);
      const { createMessage } = useMessage();
      let res;
      const [register, { setFieldsValue, getFieldsValue }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
        schemas: basicFormInfoSchema,
        showActionButtonGroup: false,
      });

      const [registerFirst, { getFieldsValue: getFirstValues }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
        schemas: firstFormSchema,
        showActionButtonGroup: false,
      });

      // const [registerSecond, { setFieldsValue: setSecondValues, getFieldsValue: getSecondValues }] =useForm({
      //   labelCol: {
      //     span: 8,
      //   },
      //   wrapperCol: {
      //     span: 10,
      //   },
      //   schemas: secondFormSchema,
      //   showActionButtonGroup: false,
      // });

      const [registerRestFood, { getFieldsValue: getRestFoodsValues }] = useForm({
        labelCol: {
          span: 2,
        },
        // wrapperCol: {
        //   span: 10,
        // },
        schemas: restFoodFormSchema,
        showActionButtonGroup: false,
      });

      async function submitAll() {
        try {
          const submitValues = reactive({});
          const basicValues = getFieldsValue();
          const firstValues = getFirstValues();
          // const secondValues = getSecondValues();
          const restFoodsValues = getRestFoodsValues();
          Object.assign(submitValues, basicValues);
          Object.assign(submitValues, firstValues);
          // Object.assign(submitValues, secondValues);
          Object.assign(submitValues, restFoodsValues);
          await addOrUpdateRestMeal(submitValues);
          createMessage.success('操作成功');
          go('/beo/rest');
        } catch (error) {}
      }

      function resetAll() {
        setFieldsValue({
          ...res,
        });
      }

      async function handleData(id: string) {
        // res = await getSiYiChatFormDetail({ id: id });
        // setFieldsValue({
        //   ...res,
        // });
        console.log(id);
      }

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/beo/rest');
      }

      // handleData(deptId.value);

      return {
        register,
        submitAll,
        goBack,
        handleData,
        resetAll,
        registerFirst,
        // registerSecond,
        registerRestFood,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>

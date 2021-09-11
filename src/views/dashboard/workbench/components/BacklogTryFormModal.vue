<template>
  <PageWrapper title="试妆记录修改" contentBackground @back="goBack">
    <a-card title="信息修改" :bordered="false">
      <BasicForm @register="register" />
    </a-card>

    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>&nbsp;
      <a-button type="primary" @click="resetAll"> 重置 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  // import { schemas, taskSchemas } from './data';
  import { Card } from 'ant-design-vue';
  import { tryOnMakeUpFormSchema } from './data';
  import { getTryOnMakeUpFormDetail, updateTryOnMakeUpForm } from '/@/api/admin/manager';

  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'FormHightPageTryOn',
    components: { BasicForm, PageWrapper, [Card.name]: Card },
    setup() {
      // const tableRef = ref<{ getDataSource: () => any } | null>(null);
      ref('oper');
      const go = useGo();
      const route = useRoute();
      const deptId = ref(route.params?.id);
      const { createMessage } = useMessage();
      let res;
      const [register, { setFieldsValue, getFieldsValue }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
        schemas: tryOnMakeUpFormSchema,
        showActionButtonGroup: false,
      });

      async function submitAll() {
        try {
          let submitValues = getFieldsValue();
          console.log(submitValues);
          submitValues.id = deptId.value;
          await updateTryOnMakeUpForm(submitValues);
          handleData(submitValues.id);
          createMessage.success('修改成功');
        } catch (error) {}
      }

      function resetAll() {
        setFieldsValue({
          ...res,
        });
      }

      async function handleData(id: string) {
        res = await getTryOnMakeUpFormDetail({ id: id });
        setFieldsValue({
          ...res,
        });
      }

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/dashboard/workbench');
      }

      handleData(deptId.value);

      return { register, submitAll, goBack, handleData, resetAll };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>

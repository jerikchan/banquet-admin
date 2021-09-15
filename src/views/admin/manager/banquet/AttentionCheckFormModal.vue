<template>
  <PageWrapper title="婚礼注意事项筛查记录修改" contentBackground @back="goBack">
    <a-card title="信息修改" :bordered="false">
      <BasicForm @register="register">
        <!-- <template #[fileInfo.key] v-for="fileInfo in fileInfos" :key="fileInfo.key">
          <a-upload
            listType="picture-card"
            v-model:fileList="fileInfo.data"
            :customRequest="uploadPicApiCustom"
            @change="onFileChange(fileInfo, $event)"
          >
            <div v-if="fileInfo.data.length < 1">
              <PlusOutlined />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
        </template> -->
      </BasicForm>
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
  import { attentionCheckFormSchema } from './manager.data';
  import { getAttentionCheckFormDetail, updateAttentCheckForm } from '/@/api/admin/manager';

  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  import { useMessage } from '/@/hooks/web/useMessage';
  // import { PlusOutlined } from '@ant-design/icons-vue';
  import { uploadPicApiCustom } from '/@/api/sys/upload';

  export default defineComponent({
    name: 'FormHightPage',
    components: { BasicForm, PageWrapper, [Card.name]: Card },
    setup() {
      // const tableRef = ref<{ getDataSource: () => any } | null>(null);
      ref('oper');
      const go = useGo();
      const route = useRoute();
      const deptId = ref<any>(route.params?.id);
      const { createMessage } = useMessage();
      // const fileInfos = reactive<any>(
      //   [
      //     'siYiCaiPaiTimeId',
      //     'siYiDaoDaTimeId',
      //     'huaZhuangShiTimeId',
      //     'sheYingShiTimeId',
      //     'sheXiangShiTimeId',
      //     'xinRenDiZhiId',
      //     'hunCheTimeId',
      //     'xiWeiContentId',
      //     'haiBaoId',
      //     'taiKaId',
      //     'zhiShiPaiId',
      //     'midMoneyId',
      //     'yiShiDaoJuId',
      //     'hunCheHuaTimeId',
      //     'qinPengCaiYiId',
      //     'daJianTimeId',
      //   ].map((key) => {
      //     return {
      //       key,
      //       data: [],
      //     };
      //   })
      // );

      let res;
      const [register, { setFieldsValue, getFieldsValue }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
        schemas: attentionCheckFormSchema,
        showActionButtonGroup: false,
      });

      function onFileChange(fileInfo, { fileList }) {
        fileInfo.data = fileList.map((fileInfo) => fileInfo.response || fileInfo);
      }

      async function submitAll() {
        try {
          let submitValues = getFieldsValue();
          console.log(submitValues);
          submitValues.id = deptId.value;
          // const fileInfoRecord = fileInfos.reduce((acc, fileInfo) => {
          //   const data = unref(fileInfo.data);
          //   acc[fileInfo.key] =
          //     data && Array.isArray(data) && data.length
          //       ? data.map((info) => info?.response?.uid || info.uid)
          //       : null;
          //   return acc;
          // }, {});
          await updateAttentCheckForm({
            ...submitValues,
            // ...fileInfoRecord,
          });
          handleData(submitValues.id);
          createMessage.success('修改成功');
        } catch (error) {
          createMessage.error('修改失败');
          throw error;
        }
      }

      function resetAll() {
        setFieldsValue({
          ...res,
        });
        // fileInfos.forEach((fileInfo) => {
        //   if (res[fileInfo.key]) {
        //     fileInfo.data = res[fileInfo.key];
        //   }
        // });
      }

      async function handleData(id: string) {
        res = await getAttentionCheckFormDetail({ id: id });
        setFieldsValue({
          ...res,
        });
        // fileInfos.forEach((fileInfo) => {
        //   if (res[fileInfo.key]) {
        //     fileInfo.data = res[fileInfo.key];
        //   }
        // });
      }

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/master/manager');
      }

      handleData(deptId.value);

      return {
        register,
        submitAll,
        goBack,
        handleData,
        resetAll,
        uploadPicApiCustom,
        // fileInfos,
        onFileChange,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>

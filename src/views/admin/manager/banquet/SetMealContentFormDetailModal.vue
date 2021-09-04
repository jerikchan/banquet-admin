<template>
  <PageWrapper title="套餐内容登记表详情" contentBackground @back="goBack">
    <template #extra>
      <div class="flex">
        <a-button class="mr-2" type="primary" @click="exportForm"> 导出表格 </a-button>
        <BasicUpload
          :maxSize="20"
          :maxNumber="10"
          @change="handleUploadChange"
          :api="uploadSetmelFormWord"
          :showPreviewNumber="false"
          @success="handleSuccess"
        />
      </div>
    </template>
    <Description
      size="middle"
      title="信息"
      :bordered="false"
      :column="2"
      :data="mockData"
      :schema="schema"
    />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, h } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  // import { getDeptInfo, getAccountList } from '/@/api/admin/system';
  import { getSetMealContentFormDetail, uploadSetmelFormWord } from '/@/api/admin/manager';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicUpload } from '/@/components/Upload';

  import { useGlobSetting } from '/@/hooks/setting';
  import { Upload } from 'ant-design-vue';

  const mockData: Recordable = reactive({
    userName: '',
  });

  const schema: DescItem[] = [
    {
      field: 'agreementCode',
      label: '合同编号',
    },
    {
      field: 'name',
      label: '表格名称',
    },
    {
      field: 'project',
      label: '项目',
    },
    {
      field: 'siYi',
      label: '司仪',
    },
    {
      field: 'genZhuang',
      label: '跟妆',
    },
    {
      field: 'sheYing',
      label: '摄影',
    },
    {
      field: 'sheXiang',
      label: '摄像',
    },
    {
      field: 'kuaiJian',
      label: '快剪',
    },
    {
      field: 'yanYi',
      label: '演绎',
    },
    {
      field: 'otherPerson',
      label: '其他人员',
    },
    {
      field: 'daPing',
      label: '大屏',
    },
    {
      field: 'dengGuang',
      label: '灯光',
    },
    {
      field: 'zhuiGuangDengShuLiang',
      label: '追光灯数量',
    },
    {
      field: 'yinXiang',
      label: '音响',
    },
    {
      field: 'yaoBi',
      label: '摇臂',
    },
    {
      field: 'yingBinQu',
      label: '迎宾区',
    },
    {
      field: 'yingBinQuId',
      label: '迎宾区凭证',
      render: (val) =>
        h(Upload, {
          listType: 'picture-card',
          showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
          fileList: val,
        }),
    },
    {
      field: 'qianDaoQu',
      label: '签到区',
    },
    {
      field: 'qianDaoQuId',
      label: '签到区凭证',
      render: (val) =>
        h(Upload, {
          listType: 'picture-card',
          showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
          fileList: val,
        }),
    },
    {
      field: 'yiShiQu',
      label: '仪式区',
    },
    {
      field: 'yiShiQuId',
      label: '仪式区凭证',
      render: (val) =>
        h(Upload, {
          listType: 'picture-card',
          showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
          fileList: val,
        }),
    },
    {
      field: 'wuTaiQu',
      label: '舞台区',
    },
    {
      field: 'wuTaiQuId',
      label: '舞台区凭证',
      render: (val) =>
        h(Upload, {
          listType: 'picture-card',
          showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
          fileList: val,
        }),
    },
    {
      field: 'caoPing',
      label: '草坪',
    },
    {
      field: 'caoPingId',
      label: '草坪凭证',
      render: (val) =>
        h(Upload, {
          listType: 'picture-card',
          showUploadList: {
            showPreviewIcon: true,
            showRemoveIcon: false,
          },
          fileList: val,
        }),
    },
    {
      field: 'xianHuaHuaYi',
      label: '鲜花花艺',
    },
    {
      field: 'tianPin',
      label: '甜品',
    },
  ];

  export default defineComponent({
    components: {
      Description,
      PageWrapper,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      [Divider.name]: Divider,
      [Card.name]: Card,
      BasicUpload,
    },
    setup() {
      // debugger;
      const route = useRoute();
      const go = useGo();
      // 此处可以得到ID
      const deptId = ref(route.params?.id);
      const currentKey = ref('detail');
      const { devUrl } = useGlobSetting();

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/master/manager');
      }

      const [register] = useDescription({
        title: '信息列表',
        data: mockData,
        schema: schema,
      });

      async function handleData(id: string) {
        let res = await getSetMealContentFormDetail({ id: id });
        Object.assign(mockData, res);
      }

      handleData(deptId.value);

      function exportForm() {
        // getCustomerFollowFormWord({ agreementId: mockData.agreementId });
        window.location.href =
          devUrl + '/file/downloadSetMealContentFormTemplate?agreementId=' + mockData.agreementId;
      }

      function handleUploadChange() {
        // createMessage.info(`已上传文件${JSON.stringify(list)}`);
        // reload();
      }

      function handleSuccess() {
        // reload();
        handleData(deptId.value);
      }

      return {
        schema,
        register,
        goBack,
        currentKey,
        deptId,
        handleData,
        mockData,
        handleSuccess,
        exportForm,
        handleUploadChange,
        uploadSetmelFormWord,
        // uploadCustoemrFollowForm,
      };
    },
  });
</script>

<template>
  <PageWrapper title="婚礼注意事项筛查表详情" contentBackground @back="goBack">
    <template #extra>
      <div class="flex">
        <a-button class="mr-2" type="primary" @click="exportForm"> 导出表格 </a-button>
        <BasicUpload
          :maxSize="20"
          :maxNumber="10"
          @change="handleUploadChange"
          :api="uploadAttentionCheckForm"
          :showPreviewNumber="false"
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
  import { defineComponent, ref, reactive } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  // import { getDeptInfo, getAccountList } from '/@/api/admin/system';
  import { getAttentionCheckFormDetail, uploadAttentionCheckForm } from '/@/api/admin/manager';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicUpload } from '/@/components/Upload';

  import { useGlobSetting } from '/@/hooks/setting';
  // import { Upload } from 'ant-design-vue';

  const mockData: Recordable = reactive({});

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
      field: 'siYiCaiPaiTime',
      label: '司仪彩排时间',
    },
    // {
    //   field: 'siYiCaiPaiTimeId',
    //   label: '司仪彩排时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'siYiDaoDaTime',
      label: '司仪到达现场的时间',
    },
    // {
    //   field: 'siYiDaoDaTimeId',
    //   label: '司仪到达现场的时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'huaZhuangShiTime',
      label: '化妆师到达家里时间',
    },
    // {
    //   field: 'huaZhuangShiTimeId',
    //   label: '化妆师到达家里时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'sheYingShiTime',
      label: '摄影师到达家里时间',
    },
    // {
    //   field: 'sheYingShiTimeId',
    //   label: '摄影师到达家里时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'sheXiangShiTime',
      label: '摄像师到达家里时间',
    },
    // {
    //   field: 'sheXiangShiTimeId',
    //   label: '摄像师到达家里时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'xinRenDiZhi',
      label: '新人地址确认',
    },
    // {
    //   field: 'xinRenDiZhiId',
    //   label: '新人地址确认凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'hunCheTime',
      label: '婚车到达时间',
    },
    // {
    //   field: 'hunCheTimeId',
    //   label: '婚车到达时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'xiWeiContent',
      label: '席位图制作情况',
    },
    // {
    //   field: 'xiWeiContentId',
    //   label: '席位图制作情况凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'haiBao',
      label: '海报制作情况',
    },
    // {
    //   field: 'haiBaoId',
    //   label: '海报制作情况凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'taiKa',
      label: '台卡制作情况',
    },
    // {
    //   field: 'taiKaId',
    //   label: '台卡制作情况凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'zhiShiPai',
      label: '指示牌制作情况',
    },
    // {
    //   field: 'zhiShiPaiId',
    //   label: '指示牌制作情况凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'midMoney',
      label: '中期款收取情况',
    },
    // {
    //   field: 'midMoneyId',
    //   label: '中期款收取情况凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'yiShiDaoJu',
      label: '仪式道具准备情况',
    },
    // {
    //   field: 'yiShiDaoJuId',
    //   label: '仪式道具准备情况凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'hunCheHuaTime',
      label: '婚车花扎花时间',
    },
    // {
    //   field: 'hunCheHuaTimeId',
    //   label: '婚车花扎花时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'qinPengCaiYi',
      label: '亲朋才艺音乐准备情况',
    },
    // {
    //   field: 'qinPengCaiYiId',
    //   label: '亲朋才艺音乐准备情况凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
    {
      field: 'daJianTime',
      label: '搭建团队搭建时间',
    },
    // {
    //   field: 'daJianTimeId',
    //   label: '搭建团队搭建时间凭证',
    //   render: (val) =>
    //     h(Upload, {
    //       listType: 'picture-card',
    //       showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
    //       fileList: val,
    //     }),
    // },
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
        let res = await getAttentionCheckFormDetail({ id: id });
        Object.assign(mockData, res);
      }

      handleData(deptId.value);

      function exportForm() {
        // getCustomerFollowFormWord({ agreementId: mockData.agreementId });
        window.location.href =
          devUrl + '/file/downloadAttentionCheckForm?agreementId=' + mockData.agreementId;
      }

      function handleUploadChange() {
        // createMessage.info(`已上传文件${JSON.stringify(list)}`);
        // reload();
      }

      function handleSuccess() {
        // reload();
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
        uploadAttentionCheckForm,
        // uploadCustoemrFollowForm,
      };
    },
  });
</script>

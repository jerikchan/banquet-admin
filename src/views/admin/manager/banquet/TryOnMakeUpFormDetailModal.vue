<template>
  <PageWrapper title="试妆登记表详情" contentBackground @back="goBack">
    <template #extra>
      <div class="flex">
        <a-button class="mr-2" type="primary" @click="exportForm"> 导出表格 </a-button>
        <BasicUpload
          :maxSize="20"
          :maxNumber="10"
          @change="handleUploadChange"
          :api="uploadTryOnMakeUpForm"
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
  import { getTryOnMakeUpFormDetail, uploadTryOnMakeUpForm } from '/@/api/admin/manager';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicUpload } from '/@/components/Upload';

  import { useGlobSetting } from '/@/hooks/setting';

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
      field: 'huaZhuangShi',
      label: '化妆师',
    },
    {
      field: 'mobile',
      label: '联系方式',
    },
    {
      field: 'shiZhuangTime',
      label: '试妆时间',
    },
    {
      field: 'shiZhuangResult',
      label: '试妆结果登记',
    },
    {
      field: 'secondShiZhuangResult',
      label: '二次试妆结果登记',
    },
    {
      field: 'sheXiangYaoQiu',
      label: '摄像拍摄要求',
    },
    {
      field: 'sheYingYaoQiu',
      label: '摄影拍摄要求',
    },
    {
      field: 'zhuShaCode',
      label: '主纱编号',
    },
    {
      field: 'xiuHeCode',
      label: '秀禾编号',
    },
    {
      field: 'chuMenShaCode',
      label: '出门纱编号',
    },
    {
      field: 'lifuCode',
      label: '礼服编号',
    },
    {
      field: 'banNiangFuCode',
      label: '伴娘服编号',
    },
    {
      field: 'remark',
      label: '新人要求备注',
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
        let res = await getTryOnMakeUpFormDetail({ id: id });
        Object.assign(mockData, res);
      }

      handleData(deptId.value);

      function exportForm() {
        // getCustomerFollowFormWord({ agreementId: mockData.agreementId });
        window.location.href =
          devUrl + '/file/downloadTryOnMakeUpForm?agreementId=' + mockData.agreementId;
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
        uploadTryOnMakeUpForm,
        // uploadCustoemrFollowForm,
      };
    },
  });
</script>

<template>
  <PageWrapper title="司仪沟通登记表详情" contentBackground @back="goBack">
    <template #extra>
      <div>
        <a-button type="primary" @click="exportForm"> 导出表格 </a-button>
      </div>
      <BasicUpload
        :maxSize="20"
        :maxNumber="10"
        @change="handleUploadChange"
        :api="uploadSiYiChatForm"
        :showPreviewNumber="false"
      />
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
  import { getSiYiChatFormDetail, uploadSiYiChatForm } from '/@/api/admin/manager';
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
      field: 'siYi',
      label: '司仪',
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
      field: 'yiShiLiuCheng',
      label: '仪式流程',
    },
    {
      field: 'zhengHunRen',
      label: '证婚人',
    },
    {
      field: 'jiaZhangDaiBiao',
      label: '家长代表',
    },
    {
      field: 'yiShiDaoJu',
      label: '仪式道具',
    },
    {
      field: 'binXiangTuan',
      label: '傧相团',
    },
    {
      field: 'qinPengCaiYi',
      label: '亲朋才艺',
    },
    {
      field: 'yiShiXianHua',
      label: '仪式鲜花定版',
    },
    {
      field: 'dianZiQingTie',
      label: '电子请帖是否需要制作',
    },
    {
      field: 'xiWeiTu',
      label: '席位图是否需要制作',
    },
    {
      field: 'haiBao',
      label: '海报是否需要制作',
    },
    {
      field: 'dianZiXiangCe',
      label: '电子相册是否需要制作',
    },
    {
      field: 'taiKa',
      label: '台卡是否需要制作',
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
        let res = await getSiYiChatFormDetail({ id: id });
        Object.assign(mockData, res);
      }

      handleData(deptId.value);

      function exportForm() {
        // getCustomerFollowFormWord({ agreementId: mockData.agreementId });
        window.location.href =
          devUrl + '/file/downloadSiYiChatForm?agreementId=' + mockData.agreementId;
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
        uploadSiYiChatForm,
        // uploadCustoemrFollowForm,
      };
    },
  });
</script>

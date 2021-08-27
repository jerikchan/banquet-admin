<template>
  <PageWrapper title="人员派单登记表详情" contentBackground @back="goBack">
    <template #extra>
      <div>
        <a-button type="primary" @click="exportForm"> 导出表格 </a-button>
      </div>
      <BasicUpload
        :maxSize="20"
        :maxNumber="10"
        @change="handleUploadChange"
        :api="uploadSendPersonForm"
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
  import { getSendPersonFormDetail, uploadSendPersonForm } from '/@/api/admin/manager';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicUpload } from '/@/components/Upload';

  import { useGlobSetting } from '/@/hooks/setting';

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
      field: 'siYi',
      label: '司仪',
    },
    {
      field: 'siYiTime',
      label: '司仪派单时间',
    },
    {
      field: 'genZhuang',
      label: '跟妆',
    },
    {
      field: 'genZhuangTime',
      label: '跟妆派单时间',
    },
    {
      field: 'sheYing',
      label: '摄影',
    },
    {
      field: 'sheYingTime',
      label: '摄影派单时间',
    },
    {
      field: 'sheXiang',
      label: '摄像',
    },
    {
      field: 'sheXiangTime',
      label: '摄像派单时间',
    },
    {
      field: 'kuaiJian',
      label: '快剪',
    },
    {
      field: 'kuaiJianTime',
      label: '快剪派单时间',
    },
    {
      field: 'yanYi',
      label: '演绎',
    },
    {
      field: 'yanYiTime',
      label: '演绎派单时间',
    },
    {
      field: 'trussJia',
      label: 'TRUSS架',
    },
    {
      field: 'trussJiaTime',
      label: 'TRUSS架派单时间',
    },
    {
      field: 'daPing',
      label: '大屏',
    },
    {
      field: 'daPingTime',
      label: '大屏时间',
    },
    {
      field: 'dengGuang',
      label: '灯光',
    },
    {
      field: 'dengGuangTime',
      label: '灯光派单时间',
    },
    {
      field: 'zhuiGuangDeng',
      label: '追光灯',
    },
    {
      field: 'zhuiGuangDengTime',
      label: '追光灯时间',
    },
    {
      field: 'yinXiang',
      label: '音响',
    },
    {
      field: 'yinXiangTime',
      label: '音响派单时间',
    },
    {
      field: 'yaoBi',
      label: '摇臂',
    },
    {
      field: 'yaoBiTime',
      label: '摇臂派单时间',
    },
    {
      field: 'hunChe',
      label: '婚车',
    },
    {
      field: 'hunCheTime',
      label: '婚车派单时间',
    },
    {
      field: 'gongRen',
      label: '工人',
    },
    {
      field: 'gongRenTime',
      label: '工人派单时间',
    },
    {
      field: 'qiQiu',
      label: '气球',
    },
    {
      field: 'qiQiuTime',
      label: '气球派单时间',
    },
    {
      field: 'yiShiXianHua',
      label: '仪式鲜花',
    },
    {
      field: 'yiShiXianHuaTime',
      label: '仪式鲜花派单时间',
    },
    {
      field: 'huiChangeHuaYi',
      label: '会场花艺',
    },
    {
      field: 'yiShiXianHuaTime',
      label: '会场花艺派单时间',
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
        let res = await getSendPersonFormDetail({ id: id });
        Object.assign(mockData, res);
      }

      handleData(deptId.value);

      function exportForm() {
        // getCustomerFollowFormWord({ agreementId: mockData.agreementId });
        window.location.href =
          devUrl + '/file/downloadSendPersonForm?agreementId=' + mockData.agreementId;
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
        uploadSendPersonForm,
        // uploadCustoemrFollowForm,
      };
    },
  });
</script>

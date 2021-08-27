<template>
  <PageWrapper title="客户跟进记录表详情" contentBackground @back="goBack">
    <template #extra>
      <div>
        <a-button type="primary" @click="exportForm"> 导出表格 </a-button>
      </div>
      <BasicUpload
        :maxSize="20"
        :maxNumber="10"
        @change="handleUploadChange"
        :api="uploadCustoemrFollowForm"
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
  import { getCustomerFollowFormDetail, uploadCustoemrFollowForm } from '/@/api/admin/manager';
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
      field: 'setMealTime',
      label: '套餐内容登记时间',
    },
    {
      field: 'sendPersonTime',
      label: '人员派单情况表登记时间',
    },
    {
      field: 'shiZhuangTime',
      label: '试妆表登记时间',
    },
    {
      field: 'siYiTime',
      label: '司仪沟通表登记时间',
    },
    {
      field: 'familyMeetingTime',
      label: '家庭会议表登记时间',
    },
    {
      field: 'attentionTime',
      label: '婚礼注意事项筛查登记时间',
    },
    {
      field: 'createTime',
      label: '创建时间',
    },
    {
      field: 'remark',
      label: '备注',
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
        let res = await getCustomerFollowFormDetail({ id: id });
        Object.assign(mockData, res);
      }

      handleData(deptId.value);

      function exportForm() {
        // getCustomerFollowFormWord({ agreementId: mockData.agreementId });
        console.log(devUrl);
        window.location.href =
          devUrl + '/file/downloadCustomerFollowFormTemplate?agreementId=' + mockData.agreementId;
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
        uploadCustoemrFollowForm,
      };
    },
  });
</script>

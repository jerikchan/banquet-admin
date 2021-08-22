<template>
  <PageWrapper title="部门的详细信息" contentBackground @back="goBack">
    <Description
      size="middle"
      title="部门信息"
      :bordered="false"
      :column="2"
      :data="mockData"
      :schema="schema"
    />
    <BasicTable @register="registerTimeTable" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { getDeptInfo, getAccountList } from '/@/api/admin/system';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicColumn } from '/@/components/Table/src/types/table';

  const mockData: Recordable = reactive({
    userName: '',
  });

  const schema: DescItem[] = [
    {
      field: 'deptName',
      label: '部门名称',
    },
    {
      field: 'createTime',
      label: '创建时间',
    },
    {
      field: 'leaderName',
      label: '部门负责人',
    },
    {
      field: 'leaderManMobile',
      label: '联系电话',
    },
    {
      field: 'remark',
      label: '备注',
    },
  ];

  const refundTimeTableSchema: BasicColumn[] = [
    {
      title: '名称',
      width: 100,
      dataIndex: 'realName',
    },
    {
      title: '角色名',
      width: 100,
      dataIndex: 'roleName',
    },
    {
      title: '联系方式	',
      width: 100,
      dataIndex: 'mobile',
    },
    {
      title: 'email',
      width: 100,
      dataIndex: '电子邮箱',
    },
    {
      title: 'remark',
      width: 200,
      dataIndex: '备注',
    },
  ];

  export default defineComponent({
    components: {
      Description,
      PageWrapper,
      BasicTable,
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
      // 此处可以得到ID
      const deptId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/system/dept');
      }

      const [register] = useDescription({
        title: '信息列表',
        data: mockData,
        schema: schema,
      });

      async function handleData(id: string) {
        let res = await getDeptInfo({ id: id });
        mockData.deptName = res.deptName;
        mockData.createTime = res.createTime;
      }

      handleData(deptId.value);

      const [registerTimeTable, { reload }] = useTable({
        title: '部门成员',
        columns: refundTimeTableSchema,
        pagination: false,
        api: getAccountList.bind(null, { deptId: deptId.value }),
        showIndexColumn: true,
      });

      function handleSuccess() {
        reload();
      }

      return {
        schema,
        register,
        goBack,
        currentKey,
        deptId,
        handleData,
        mockData,
        registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

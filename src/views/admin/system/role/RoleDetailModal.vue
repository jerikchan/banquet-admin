<template>
  <PageWrapper title="角色的详细信息" contentBackground @back="goBack">
    <Description
      size="middle"
      title="角色信息"
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
  import { getRoleInfo, getAccountList } from '/@/api/admin/system';
  import { Divider, Card, Descriptions, Steps } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicColumn } from '/@/components/Table/src/types/table';

  const mockData: Recordable = reactive({
    userName: '',
  });

  const schema: DescItem[] = [
    {
      field: 'roleName',
      label: '角色名称',
    },
    {
      field: 'value',
      label: '角色值',
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
      title: '所属部门',
      width: 100,
      dataIndex: 'deptName',
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
      const roleId = ref(route.params?.id);
      const currentKey = ref('detail');

      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/system/role');
      }

      const [register] = useDescription({
        title: '信息列表',
        data: mockData,
        schema: schema,
      });

      async function handleData(id: string) {
        let res = await getRoleInfo({ id: id });
        mockData.roleName = res.roleName;
        mockData.createTime = res.createTime;
      }

      handleData(roleId.value);

      const [registerTimeTable, { reload }] = useTable({
        title: '角色下成员',
        columns: refundTimeTableSchema,
        pagination: false,
        api: getAccountList.bind(null, { roleId: roleId.value }),
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
        roleId,
        handleData,
        mockData,
        registerTimeTable,
        handleSuccess,
      };
    },
  });
</script>

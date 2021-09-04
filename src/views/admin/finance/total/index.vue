<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.SALES]">
          <a-button type="primary" @click="handleCreate">新增应收款</a-button>
        </Authority>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此应收款',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER],
            },
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看应收款详情',
              onClick: handleView.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: '发起回款',
              ifShow: !record.returnTime,
              onClick: handleAccept.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <TotalModal @register="registerModal" @success="handleSuccess" />
    <AcceptModal @register="registerAcceptModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getTotalList } from '/@/api/admin/finance';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import TotalModal from './TotalModal.vue';
  import AcceptModal from '/@/views/admin/finance/total/AcceptModal.vue';

  import { columns, searchFormSchema } from './total.data';
  import { deleteTotal } from '/@/api/admin/finance';
  import { useGo } from '/@/hooks/web/usePage';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'TotalManagement',
    components: { BasicTable, PageWrapper, TotalModal, TableAction, AcceptModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerAcceptModal, { openModal: openAcceptModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const go = useGo();
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '应收款列表',
        api: getTotalList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteTotal({ id: record.id });
        reload();
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        // globalThis.deptInfo = record;
        go('/finance/total_detail/' + record.id);
      }

      function handleAccept(record: Recordable) {
        openAcceptModal(true, { ...record });
        reload();
      }

      return {
        registerTable,
        registerModal,
        registerAcceptModal,
        handleCreate,
        handleDelete,
        handleSuccess,
        handleAccept,
        handleSelect,
        handleView,
        searchInfo,
        RoleEnum,
      };
    },
  });
</script>

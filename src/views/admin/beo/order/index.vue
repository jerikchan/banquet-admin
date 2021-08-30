<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <!-- <template #toolbar>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.SALES]">
          <a-button type="primary" @click="handleCreate">新增BEO单</a-button>
        </Authority>
      </template> -->
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              onClick: handleView.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑',
              onClick: handleEdit.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此BEO单',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
          ]"
          :dropDownActions="[
            {
              label: '新增BEO任务',
              onClick: handleTaskModalOpen.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
          ]"
        />
      </template>
    </BasicTable>
    <OrderModal @register="registerModal" @success="handleSuccess" />
    <TaskModal @register="registerTaskModal" @success="handleTaskSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getOrderList } from '/@/api/admin/beo';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import OrderModal from './OrderModal.vue';

  import { columns, searchFormSchema } from './order.data';
  import { deleteOrder } from '/@/api/admin/beo';
  import { useGo } from '/@/hooks/web/usePage';

  import TaskModal from '/@/views/admin/beo/task//TaskModal.vue';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'OrderManagement',
    components: { BasicTable, PageWrapper, OrderModal, TableAction, TaskModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const go = useGo();
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: 'BEO单',
        api: getOrderList,
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
          width: 200,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const [registerTaskModal, { openModal: openTaskModal }] = useModal();

      function handleTaskModalOpen(record: Recordable) {
        openTaskModal(true, {
          isUpdate: false,
          record,
          isFrom: true,
        });
      }

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteOrder({ id: record.id });
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

      function handleTaskSuccess() {
        reload();
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        // openModal(true, {
        //   isUpdate: false,
        //   isView: true,
        //   record,
        // });
        go('/beo/order_detail/' + record.id);
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          isUpdate: true,
          record,
        });
      }

      return {
        registerTable,
        registerModal,
        handleTaskModalOpen,
        registerTaskModal,
        handleCreate,
        handleDelete,
        handleSuccess,
        handleTaskSuccess,
        handleSelect,
        handleView,
        handleEdit,
        searchInfo,
        RoleEnum,
      };
    },
  });
</script>

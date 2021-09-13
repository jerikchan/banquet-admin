<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.SALES]">
          <a-button type="primary" @click="handleCreate">新增余留餐</a-button>
        </Authority>
      </template>
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
              disabled: record.status === '1' || record.beoStatus === '99',
              auth: [
                RoleEnum.SUPER,
                RoleEnum.SALES,
                RoleEnum.HOUSEKEEPER_MANAGER,
                RoleEnum.HOUSEKEEPER,
              ],
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除余留餐',
              disabled: record.status === '1' || record.beoStatus === '99',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER],
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- <OrderModal @register="registerModal" @success="handleSuccess" />
    <BeoOrderAllocationManagerModal @register="registerManagerModal" @success="handleSuccess" />
    <TaskModal @register="registerTaskModal" @success="handleTaskSuccess" /> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { createManagerFlow, getRestMealList, deleteRestMeal } from '/@/api/admin/beo';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  // import OrderModal from './OrderModal.vue';

  import { columns, searchFormSchema } from './rest.data';
  // import { deleteOrder } from '/@/api/admin/beo';
  import { useGo } from '/@/hooks/web/usePage';

  // import TaskModal from '/@/views/admin/beo/task//TaskModal.vue';
  import { RoleEnum } from '/@/enums/roleEnum';

  import { useMessage } from '/@/hooks/web/useMessage';

  // import BeoOrderAllocationManagerModal from './BeoOrderAllocationModal.vue';

  export default defineComponent({
    name: 'RestMealManagement',
    components: {
      BasicTable,
      PageWrapper,
      // OrderModal,
      TableAction,
      // TaskModal,
      // BeoOrderAllocationManagerModal,
    },
    setup() {
      const [registerModal, {}] = useModal();
      const searchInfo = reactive<Recordable>({});
      const go = useGo();
      const { createMessage } = useMessage();
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '余留餐列表',
        api: getRestMealList,
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
        beforeFetch: function (params) {
          // params.beoType = '执行beo单';
          console.log(params);
        },
        actionColumn: {
          width: 200,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      // const [registerTaskModal, { openModal: openTaskModal }] = useModal();

      // const [registerManagerModal, { openModal: openManagerModal }] = useModal();

      function handleTaskModalOpen(record: Recordable) {
        // openTaskModal(true, {
        //   isUpdate: false,
        //   record,
        //   isFrom: true,
        // });
        console.log(record);
      }

      function handleCreate() {
        // openModal(true, {
        //   isUpdate: false,
        // });
        go('/beo/rest_meal_info_oper/');
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteRestMeal({ id: record.id });
        createMessage.success('删除成功!');
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
        go('/beo/rest_meal_info_detail/' + record.id);
      }

      function handleEdit(record: Recordable) {
        // openModal(true, {
        //   isUpdate: true,
        //   record,
        // });
        go('/beo/rest_meal_info_edit/' + record.id);
      }

      async function handleReplenish(record: Recordable) {
        // go('/beo/order_replenish/' + record.id);
        await createManagerFlow(record);
        createMessage.success('操作成功');
        reload();
      }

      function handleManager(record: Recordable) {
        // openManagerModal(true, {
        //   isUpdate: false,
        //   record,
        // });
        console.log(record);
      }

      function handleFinisnBeo(record: Recordable) {
        go('/beo/send_finish_order/' + record.id);
        console.log(record);
      }

      return {
        registerTable,
        registerModal,
        handleTaskModalOpen,
        // registerTaskModal,
        // registerManagerModal,
        handleCreate,
        handleDelete,
        handleSuccess,
        handleTaskSuccess,
        handleSelect,
        handleView,
        handleEdit,
        handleReplenish,
        handleManager,
        searchInfo,
        RoleEnum,
        handleFinisnBeo,
      };
    },
  });
</script>

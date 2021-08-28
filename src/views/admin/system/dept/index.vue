<template>
  <div id="deptMainList">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.MANAGER]">
          <a-button type="primary" @click="handleCreate"> 新增部门 </a-button>
        </Authority>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.MANAGER],
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: [RoleEnum.SUPER, RoleEnum.MANAGER],
            },
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看部门详情',
              onClick: handleDeptView.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <DeptModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteDept, getDeptList } from '/@/api/admin/system';

  import { useModal } from '/@/components/Modal';
  import DeptModal from './DeptModal.vue';

  import { columns, searchFormSchema } from './dept.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'DeptManagement',
    components: { BasicTable, DeptModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '部门列表',
        api: getDeptList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        pagination: false,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteDept({
          id: record.id,
        });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      function handleDeptView(record: Recordable) {
        // globalThis.deptInfo = record;
        go('/system/dept_detail/' + record.id);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleDeptView,
        RoleEnum,
      };
    },
  });
</script>

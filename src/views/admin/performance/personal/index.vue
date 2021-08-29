<template>
  <div id="personalPerformanceMainList">
    <BasicTable @register="registerTable">
      <!-- <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.HOUSEKEEPER_MANAGER],
            },
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看部门详情',
              onClick: handleDeptView.bind(null, record),
            },
          ]"
        />
      </template> -->
    </BasicTable>
    <!-- <DeptModal @register="registerModal" @success="handleSuccess" /> -->
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';
  // import { deleteDept, getDeptList } from '/@/api/admin/system';
  import { getPersonalPerformance } from '/@/api/admin/performance';

  import { useModal } from '/@/components/Modal';
  // import DeptModal from './DeptModal.vue';

  import { columns, searchFormSchema } from './personal.data';
  // import { useGo } from '/@/hooks/web/usePage';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'PersonalPerformanceTable',
    components: { BasicTable },
    setup() {
      const [registerModal, { openModal }] = useModal();
      // const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '个人业绩列表',
        api: getPersonalPerformance,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        pagination: true,
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

      // async function handleDelete(record: Recordable) {
      //   // console.log(record);
      //   // await deleteDept({
      //   //   id: record.id,
      //   // });
      //   // reload();
      // }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        // handleDelete,
        handleSuccess,
        RoleEnum,
      };
    },
  });
</script>

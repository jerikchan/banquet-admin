<template>
  <div id="deptPerformanceMainList">
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
  import { getPerformances } from '/@/api/admin/performance';

  import { useModal } from '/@/components/Modal';
  // import DeptModal from './DeptModal.vue';

  import { columns, searchFormSchema } from './performance.data';
  // import { useGo } from '/@/hooks/web/usePage';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'PerformanceTable',
    components: { BasicTable },
    setup() {
      const [registerModal, { openModal }] = useModal();
      // const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '部门业绩列表',
        api: getPerformances,
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
        beforeFetch(params) {
          // params.value = '402881847b45dac1017b45df80470002';
          console.log(params);
        },
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

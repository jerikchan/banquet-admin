<template>
  <div id="ratioPerformanceMainList">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.BOOKER]">
          <a-button type="primary" @click="handleCreate">新增系数</a-button>
        </Authority>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.HOUSEKEEPER_MANAGER],
            },
          ]"
        />
      </template>
    </BasicTable>
    <RatioModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getRatioInfos } from '/@/api/admin/performance';

  import RatioModal from './RatioModal.vue';

  import { columns, searchFormSchema } from './ratio.data';
  import { RoleEnum } from '/@/enums/roleEnum';

  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    name: 'PerformanceRatioTable',
    components: { BasicTable, TableAction, RatioModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      // const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '业绩系数列表',
        api: getRatioInfos,
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
          // params.deptId = '402881847b45dac1017b45df80470002';
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

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleSuccess,
        handleEdit,
        RoleEnum,
      };
    },
  });
</script>

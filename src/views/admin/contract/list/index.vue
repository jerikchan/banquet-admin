<template>
  <div>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此合同',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getContractList, deleteContract } from '/@/api/admin/contract';

  import { columns, searchFormSchema } from './contract.data';

  export default defineComponent({
    name: 'ContractManagement',
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '合同列表',
        api: getContractList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleSuccess() {
        reload();
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteContract({ id: record.id });
        reload();
      }

      return {
        registerTable,
        handleSuccess,
        handleDelete,
      };
    },
  });
</script>

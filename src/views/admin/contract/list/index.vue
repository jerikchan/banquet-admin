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
            {
              icon: 'ant-design:swap-outlined',
              tooltip: '下BEO单',
              onClick: handleOrder.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <OrderModal @register="registerOrderModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getContractList, deleteContract } from '/@/api/admin/contract';

  import { useModal } from '/@/components/Modal';

  import { columns, searchFormSchema } from './contract.data';
  import OrderModal from '/@/views/admin/beo/order/OrderModal.vue';

  export default defineComponent({
    name: 'ContractManagement',
    components: { BasicTable, TableAction, OrderModal },
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

      const [registerOrderModal, { openModal }] = useModal();

      function handleSuccess() {
        reload();
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteContract({ id: record.id });
        reload();
      }

      function handleOrder(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: false,
        });
      }

      return {
        registerTable,
        handleSuccess,
        handleDelete,
        registerOrderModal,
        handleOrder,
      };
    },
  });
</script>

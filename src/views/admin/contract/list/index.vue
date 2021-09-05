<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看合同详情',
              onClick: handleAgreementInfoView.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此合同',
              disabled: record.status === '1' || record.finishStatus === '5',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER],
            },
          ]"
          :dropDownActions="[
            {
              label: '下BEO单',
              disabled:
                record.status === '1' || record.status === '3' || record.finishStatus === '5',
              onClick: handleOrder.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
            {
              label: '下完成BEO单',
              disabled:
                record.status === '1' || record.status === '3' || record.finishStatus === '5',
              onClick: handleFinishOrder.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- <OrderModal @register="registerOrderModal" @success="handleSuccess" /> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getContractList, deleteContract } from '/@/api/admin/contract';

  // import { useModal } from '/@/components/Modal';

  import { columns, searchFormSchema } from './contract.data';
  // import OrderModal from '/@/views/admin/beo/order/OrderModal.vue';

  import { RoleEnum } from '/@/enums/roleEnum';

  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'ContractManagement',
    components: { PageWrapper, BasicTable, TableAction },
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
        showIndexColumn: true,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const go = useGo();

      // const [registerOrderModal, { openModal }] = useModal();

      function handleSuccess() {
        reload();
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteContract({ id: record.id });
        reload();
      }

      function handleOrder(record: Recordable) {
        // openModal(true, {
        //   record,
        //   isUpdate: false,
        // });
        go('/beo/order_oper/' + record.id);
      }

      function handleAgreementInfoView(record: Recordable) {
        go('/contract/contract_detail/' + record.id);
      }

      function handleFinishOrder(record: Recordable) {
        go('/beo/order_edit_finish/' + record.id);
      }

      return {
        registerTable,
        handleSuccess,
        handleDelete,
        handleAgreementInfoView,
        // registerOrderModal,
        handleOrder,
        handleFinishOrder,
        RoleEnum,
      };
    },
  });
</script>

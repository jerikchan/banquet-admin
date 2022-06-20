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
              icon: 'clarity:note-edit-line',
              tooltip: '修改合同',
              onClick: handleUpdate.bind(null, record),
              disabled:
                record.status === '1' ||
                record.beoStatus === '5' ||
                record.finishStatus === '5' ||
                record.status === '6',
              auth: [RoleEnum.SUPER],
            },
          ]"
          :dropDownActions="[
            {
              label: '分配管家',
              onClick: handleManager.bind(null, record),
              disabled:
                record.status === '1' ||
                record.beoStatus === '5' ||
                record.managerId ||
                record.finishStatus === '5' ||
                record.status === '6',
              auth: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER, RoleEnum.SALES_MANAGER],
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- <OrderModal @register="registerOrderModal" @success="handleSuccess" /> -->
    <ContractModal @register="registerContractModal" @success="handleContractSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getPurposeAgreementList } from '/@/api/admin/contract';
  import ContractModal from './ContractModal.vue';
  import { useModal } from '/@/components/Modal';

  import { columns, searchFormSchema } from './contract.data';
  // import OrderModal from '/@/views/admin/beo/order/OrderModal.vue';

  import { RoleEnum } from '/@/enums/roleEnum';

  import { useGo } from '/@/hooks/web/usePage';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'ContractManagement',
    components: {
      PageWrapper,
      BasicTable,
      TableAction,
      ContractModal,
    },
    setup() {
      const [registerContractModal, { openModal: openContractModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '意向合同列表',
        api: getPurposeAgreementList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        // beforeFetch: function () {},
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const go = useGo();
      const { createMessage } = useMessage();

      const [registerManagerModal, { openModal: openManagerModal }] = useModal();
      const [registerReloadModal, { openModal: openReloadModal }] = useModal();

      // const [registerOrderModal, { openModal }] = useModal();

      function handleSuccess() {
        createMessage.success('操作成功');
        reload();
      }

      // async function handleDelete(record: Recordable) {
      //   console.log(record);
      //   await deleteContract({ id: record.id });
      //   reload();
      // }

      // async function handleCancelAgreement(record: Recordable) {
      //   await cancelContract({ id: record.id });
      //   createMessage.success('退订成功');
      //   reload();
      // }

      function handleUpdate(record: Recordable) {
        openContractModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleContractSuccess() {
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

      function handleManager(record: Recordable) {
        openManagerModal(true, {
          isUpdate: false,
          record,
        });
      }

      // async function handleCnacelManager(record: Recordable) {
      //   await cancelAllocationManager({ id: record.id });
      //   handleSuccess();
      // }

      async function handleReloadSales(record: Recordable) {
        openReloadModal(true, {
          isUpdate: false,
          record,
        });
      }

      return {
        registerTable,
        handleSuccess,
        handleAgreementInfoView,
        handleOrder,
        handleFinishOrder,
        RoleEnum,
        handleUpdate,
        registerContractModal,
        handleContractSuccess,
        handleManager,
        registerManagerModal,
        handleReloadSales,
        registerReloadModal,
      };
    },
  });
</script>

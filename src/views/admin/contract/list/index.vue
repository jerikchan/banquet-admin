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
            {
              label: '撤销管家',
              onClick: handleCnacelManager.bind(null, record),
              disabled:
                record.status === '1' ||
                record.beoStatus === '5' ||
                !record.managerId ||
                record.finishStatus === '5' ||
                record.status === '6',
              auth: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER, RoleEnum.SALES_MANAGER],
            },
            {
              label: '重新分配销售',
              onClick: handleReloadSales.bind(null, record),
              disabled:
                record.status === '1' ||
                record.beoStatus === '5' ||
                record.finishStatus === '5' ||
                record.status === '6' ||
                record.hasExcuteBeo === '1' ||
                record.hasMidStatus === '1',
              auth: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER, RoleEnum.SALES_MANAGER],
            },
            {
              label: '下BEO单',
              disabled:
                record.status === '1' ||
                record.status === '3' ||
                record.finishStatus === '5' ||
                (record.banquetType === '婚宴' && record.managerId === null) ||
                record.midStatus === '0' ||
                record.hasExcuteBeo === '1' ||
                record.status === '6',
              onClick: handleOrder.bind(null, record),
              auth: [
                RoleEnum.SUPER,
                RoleEnum.SALES,
                RoleEnum.SALES_OFFICER,
                RoleEnum.SALES_MANAGER,
              ],
            },
            {
              label: '退订',
              popConfirm: {
                title: '是否进行退订操作，该操作无需审核，请谨慎操作',
                confirm: handleCancelAgreement.bind(null, record),
              },
              disabled:
                record.status === '1' ||
                record.finishStatus === '5' ||
                record.finishStatus === '33' ||
                record.status === '6',
              auth: [RoleEnum.SUPER],
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- <OrderModal @register="registerOrderModal" @success="handleSuccess" /> -->
    <ContractModal @register="registerContractModal" @success="handleContractSuccess" />
    <ContractAllocationManagerModal @register="registerManagerModal" @success="handleSuccess" />
    <ContractReloadSalesModal @register="registerReloadModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    getContractList,
    deleteContract,
    cancelAllocationManager,
    cancelContract,
    // reloadAgreementSales,
  } from '/@/api/admin/contract';
  import ContractModal from './ContractModal.vue';
  import { useModal } from '/@/components/Modal';

  import { columns, searchFormSchema } from './contract.data';
  // import OrderModal from '/@/views/admin/beo/order/OrderModal.vue';

  import { RoleEnum } from '/@/enums/roleEnum';

  import { useGo } from '/@/hooks/web/usePage';

  import { useMessage } from '/@/hooks/web/useMessage';

  import ContractAllocationManagerModal from './ContractAllocationManagerModal.vue';
  import ContractReloadSalesModal from './ContractReloadSalesModal.vue';

  export default defineComponent({
    name: 'ContractManagement',
    components: {
      PageWrapper,
      BasicTable,
      TableAction,
      ContractModal,
      ContractAllocationManagerModal,
      ContractReloadSalesModal,
    },
    setup() {
      const [registerContractModal, { openModal: openContractModal }] = useModal();
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

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteContract({ id: record.id });
        reload();
      }

      async function handleCancelAgreement(record: Recordable) {
        await cancelContract({ id: record.id });
        createMessage.success('退订成功');
        reload();
      }

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

      async function handleCnacelManager(record: Recordable) {
        await cancelAllocationManager({ id: record.id });
        handleSuccess();
      }

      async function handleReloadSales(record: Recordable) {
        openReloadModal(true, {
          isUpdate: false,
          record,
        });
      }

      return {
        registerTable,
        handleSuccess,
        handleDelete,
        handleAgreementInfoView,
        handleCancelAgreement,
        // registerOrderModal,
        handleOrder,
        handleFinishOrder,
        RoleEnum,
        handleUpdate,
        registerContractModal,
        handleContractSuccess,
        handleManager,
        registerManagerModal,
        handleCnacelManager,
        handleReloadSales,
        registerReloadModal,
      };
    },
  });
</script>

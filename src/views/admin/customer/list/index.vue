<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <CustomerTypeTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增客户</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑客户资料',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:swap-outlined',
              tooltip: '转为意向',
              disabled: record.status === '1',
              ifShow: record.customerType === '1',
              onClick: handleTypeUpdate.bind(null, record, '2'),
            },
            {
              icon: 'ant-design:swap-outlined',
              tooltip: '转为成交',
              disabled: record.status === '1',
              ifShow: record.customerType === '2',
              onClick: handleTypeUpdate.bind(null, record, '5'),
            },
            {
              icon: 'ant-design:swap-outlined',
              tooltip: '合同下单',
              disabled: record.status === '1',
              ifShow: record.customerType === '2',
              onClick: handleContractOpen.bind(null, record, '5'),
            },
            {
              icon: 'ant-design:swap-outlined',
              tooltip: '分配销售',
              onClick: handleAllocation.bind(null, record),
            },
            {
              icon: 'ant-design:swap-outlined',
              tooltip: '转为流失',
              disabled: record.status === '1',
              ifShow: record.customerType === '1' || record.customerType === '2',
              onClick: handleTypeUpdate.bind(null, record, '3'),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此客户',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <CustomerModal @register="registerModal" @success="handleSuccess" />
    <CustomerTypeModal @register="registerTypeModal" @success="handleTypeSuccess" />
    <ContractModal @register="registerContractModal" @success="handleContractSuccess" />
    <CustomerAllocationSalesModal @register="registerAllocationModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getCustomerList, deleteCustomer } from '/@/api/admin/customer';
  import { PageWrapper } from '/@/components/Page';
  import CustomerTypeTree from './CustomerTypeTree.vue';

  import { useModal } from '/@/components/Modal';
  import CustomerModal from './CustomerModal.vue';
  import CustomerTypeModal from './CustomerTypeModal.vue';
  import ContractModal from './ContractModal.vue';
  import CustomerAllocationSalesModal from './CustomerAllocateModal.vue';

  import { columns, searchFormSchema } from './customer.data';

  export default defineComponent({
    name: 'AccountManagement',
    components: {
      BasicTable,
      PageWrapper,
      CustomerTypeTree,
      CustomerModal,
      ContractModal,
      TableAction,
      CustomerTypeModal,
      CustomerAllocationSalesModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTypeModal, { openModal: openTypeModal }] = useModal();
      const [registerContractModal, { openModal: openContractModal }] = useModal();

      const [registerAllocationModal, { openModal: openAllocaitonModal }] = useModal();

      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '客户列表',
        api: getCustomerList,
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
        actionColumn: {
          width: 200,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleTypeUpdate(record: Recordable, toType) {
        openTypeModal(true, {
          record,
          toType,
        });
      }

      function handleAllocation(record: Recordable) {
        openAllocaitonModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleContractOpen(record: Recordable, toType) {
        openContractModal(true, {
          record,
          isUpdate: false,
          toType,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteCustomer({ id: record.id });
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

      function handleTypeSuccess(values) {
        console.log(values);
      }

      function handleSelect(customerType = '') {
        searchInfo.customerType = customerType;
        reload();
      }

      function handleContractSuccess(values) {
        console.log(values);
      }

      return {
        registerTable,
        registerModal,
        registerTypeModal,
        registerContractModal,
        registerAllocationModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleTypeSuccess,
        handleContractSuccess,
        handleSelect,
        searchInfo,
        handleTypeUpdate,
        handleContractOpen,
        handleAllocation,
      };
    },
  });
</script>

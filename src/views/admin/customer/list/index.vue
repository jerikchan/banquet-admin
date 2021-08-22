<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <CustomerTypeTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增客户</a-button>
        <BasicUpload
          :maxSize="20"
          :maxNumber="10"
          @change="handleUploadChange"
          :api="uploadCustomer"
          :showPreviewNumber="false"
        />
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              disabled: true,
              onClick: handleCustomerDetail.bind(null, record),
              ifShow: false,
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑客户资料',
              onClick: handleEdit.bind(null, record),
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
          :dropDownActions="[
            {
              label: '分配销售',
              onClick: handleAllocation.bind(null, record),
              disabled: record.status === '1',
            },
            {
              label: '转为意向',
              onClick: handleTypeUpdate.bind(null, record, '2'),
              ifShow: !(!(record.customerType === '1') || record.status === '1'),
            },
            {
              label: '合同下单',
              ifShow: !(!(record.customerType === '2') || record.status === '1'),
              onClick: handleContractOpen.bind(null, record, '5'),
            },
            {
              label: '转为流失',
              disabled:
                !(record.customerType === '1' || record.customerType === '2') ||
                record.status === '1',
              onClick: handleTypeUpdate.bind(null, record, '3'),
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
  import { getCustomerList, deleteCustomer, uploadCustomer } from '/@/api/admin/customer';
  import { PageWrapper } from '/@/components/Page';
  import CustomerTypeTree from './CustomerTypeTree.vue';

  import { useModal } from '/@/components/Modal';
  import CustomerModal from './CustomerModal.vue';
  import CustomerTypeModal from './CustomerTypeModal.vue';
  import ContractModal from './ContractModal.vue';
  import CustomerAllocationSalesModal from './CustomerAllocateModal.vue';

  import { useGo } from '/@/hooks/web/usePage';

  import { columns, searchFormSchema } from './customer.data';

  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicUpload } from '/@/components/Upload';

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
      BasicUpload,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTypeModal, { openModal: openTypeModal }] = useModal();
      const [registerContractModal, { openModal: openContractModal }] = useModal();

      const [registerAllocationModal, { openModal: openAllocaitonModal }] = useModal();
      const go = useGo();
      const { createMessage } = useMessage();
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
        reload();
      }

      function handleSelect(customerType = '') {
        searchInfo.customerType = customerType;
        reload();
      }

      function handleContractSuccess(values) {
        console.log(values);
      }

      function handleCustomerDetail(record: Recordable) {
        // globalThis.deptInfo = record;
        go('/approval/review_detail/' + record.id);
      }

      function handleUploadChange (list: string[]) {
        createMessage.info(`已上传文件${JSON.stringify(list)}`);
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
        handleCustomerDetail,
        uploadCustomer,
        handleUploadChange,
      };
    },
  });
</script>

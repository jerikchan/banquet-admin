<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <CustomerTypeTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.BOOKER]">
          <a-button type="primary" @click="handleCreate">新增客户</a-button>
        </Authority>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.BOOKER]">
          <a-button type="primary" @click="handleExportExpectSuccess"
            >导出客资（不包含成交）</a-button
          >
          <a-button type="primary" @click="handleExportSuccess">导出成交客资</a-button>
        </Authority>
        <!-- <Authority :value="[RoleEnum.SUPER, RoleEnum.BOOKER]">
          <BasicUpload
            :maxSize="20"
            :maxNumber="10"
            @change="handleUploadChange"
            :api="uploadCustomer"
            :showPreviewNumber="false"
          />
        </Authority> -->
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              onClick: handleCustomerDetail.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑客户资料',
              disabled:
                record.status === '1' ||
                record.customerType === '3' ||
                record.customerType === '6' ||
                record.customerType === '5',
              onClick: handleEdit.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此客户',
              disabled: record.status === '1',
              ifShow: false,
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: [RoleEnum.SUPER],
            },
          ]"
          :dropDownActions="[
            {
              label: '新增记录',
              onClick: handleCommentAdd.bind(null, record),
              disabled:
                record.salesManagerId === null ||
                record.customerType === '3' ||
                record.status === '1' ||
                record.customerType === '6',
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
            {
              label: '分配跟进',
              onClick: handleAllocation.bind(null, record),
              ifShow: record.customerType === '1' && !record.salesManagerId,
              disabled: record.status === '1',
              auth: [RoleEnum.SUPER, RoleEnum.BOOKER],
            },
            {
              label: '撤销分配',
              onClick: handleUnallocation.bind(null, record),
              ifShow:
                !!record.salesManagerId &&
                (record.customerType === '1' ||
                  !record.customerType === '2' ||
                  !record.customerType === '5'),
              disabled:
                record.status === '1' || record.customerType === '3' || record.customerType === '5',
              auth: [RoleEnum.SUPER, RoleEnum.BOOKER],
            },
            {
              label: '转为意向',
              ifShow: record.customerType === '1' && !!record.salesManagerId,
              onClick: handleTypeUpdate.bind(null, record, '2'),
              disabled: record.status === '1',
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
            {
              label: '合同下单',
              ifShow: record.customerType === '2',
              onClick: handleContractOpen.bind(null, record, '5'),
              disabled: record.status === '1',
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
            {
              label: '转为流失',
              ifShow:
                (record.customerType === '2' || record.customerType === '5') &&
                !!record.salesManagerId,
              disabled: record.hasBeoOrder === '1' || record.status === '1',
              onClick: handleTypeUpdateCancel.bind(null, record, '3'),
              auth: [RoleEnum.SUPER, RoleEnum.SALES],
            },
            {
              label: '转为无效',
              ifShow:
                record.customerType === '1' ||
                record.customerType === '0' ||
                record.customerType === '2',
              onClick: handleInvalid.bind(null, record, '6'),
              disabled: record.status === '1',
              auth: [RoleEnum.SUPER, RoleEnum.BOOKER],
            },
          ]"
        />
      </template>
    </BasicTable>
    <CustomerModal @register="registerModal" @success="handleSuccess" />
    <CustomerCancelModal @register="registerCancelModal" @success="handleSuccess" />
    <CustomerTypeModal @register="registerTypeModal" @success="handleTypeSuccess" />
    <ContractModal @register="registerContractModal" @success="handleContractSuccess" />
    <CustomerAllocationSalesModal
      @register="registerAllocationModal"
      @success="handleAllocationSuccess"
    />
    <CommentModal @register="registerCommentAddModal" @success="handleSuccess" />
    <CustomerInvalidModal @register="registerInvalidModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    getCustomerList,
    deleteCustomer,
    uploadCustomer,
    unallocationSales,
  } from '/@/api/admin/customer';
  import { PageWrapper } from '/@/components/Page';
  import CustomerTypeTree from './CustomerTypeTree.vue';
  import { useModal } from '/@/components/Modal';
  import CustomerModal from './CustomerModal.vue';
  import CustomerTypeModal from './CustomerTypeModal.vue';
  import ContractModal from '/@/views/admin/contract/list/ContractModal.vue';
  import CustomerAllocationSalesModal from './CustomerAllocateModal.vue';
  import CommentModal from '/@/views/admin/customer/comment/CommentModal.vue';
  import CustomerCancelModal from './CustomerCancelModal.vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { columns, searchFormSchema } from './customer.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  // import { BasicUpload } from '/@/components/Upload';
  import { RoleEnum } from '/@/enums/roleEnum';
  import CustomerInvalidModal from './CustomerInvalidModal.vue';
  import { useGlobSetting } from '/@/hooks/setting';

  export default defineComponent({
    name: 'CustomerManagement',
    components: {
      BasicTable,
      PageWrapper,
      CustomerTypeTree,
      CustomerModal,
      ContractModal,
      TableAction,
      CustomerTypeModal,
      CustomerAllocationSalesModal,
      // BasicUpload,
      CommentModal,
      CustomerCancelModal,
      CustomerInvalidModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTypeModal, { openModal: openTypeModal }] = useModal();
      const [registerContractModal, { openModal: openContractModal }] = useModal();
      const [registerAllocationModal, { openModal: openAllocationnModal }] = useModal();
      const [registerCancelModal, { openModal: openCancelModal }] = useModal();
      const [registerCommentAddModal, { openModal: openCommentAddnModal }] = useModal();
      const [registerInvalidModal, { openModal: openInvalidModal }] = useModal();

      const go = useGo();
      const { createMessage, createConfirm } = useMessage();
      const { devUrl } = useGlobSetting();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload }] = useTable({
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

      function handleTypeUpdateCancel(record: Recordable, toType) {
        openCancelModal(true, {
          record,
          toType,
        });
      }

      function handleAllocation(record: Recordable) {
        openAllocationnModal(true, {
          record,
          isUpdate: true,
        });
      }
      function handleUnallocation(record: Recordable) {
        createConfirm({
          iconType: 'warning',
          title: '是否确认撤销',
          onOk: async () => {
            try {
              await unallocationSales({ customerId: record.id });
              reload();
              createMessage.success('撤销分配成功');
            } catch {
              createMessage.error('撤销分配失败');
            }
          },
        });
      }
      function handleContractOpen(record: Recordable, toType) {
        openContractModal(true, {
          record: {
            ...record,
            id: '',
            customerId: record.id,
          },
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
        // if (isUpdate) {
        //   // 演示不刷新表格直接更新内部数据。
        //   // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
        //   const result = updateTableDataRecord(values.id, values);
        //   console.log(result);
        // } else {
        //   createMessage.success('操作成功');
        //   reload();
        // }
        console.log(isUpdate);
        console.log(values);
        createMessage.success('操作成功');
        reload();
      }

      function handleExportExpectSuccess() {
        window.location.href = devUrl + '/excel/exportExcelSimpleCustomer';
      }

      function handleExportSuccess() {
        window.location.href = devUrl + '/excel/exportExcelSuccessCustomer';
      }

      function handleAllocationSuccess() {
        createMessage.success('分配销售成功!');
        reload();
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
        reload();
      }
      function handleCustomerDetail(record: Recordable) {
        go('/customer/customer_detail/' + record.id);
      }
      function handleUploadChange(list: string[]) {
        createMessage.info(`已上传文件${JSON.stringify(list)}`);
        reload();
      }
      function handleCommentAdd(record: Recordable) {
        openCommentAddnModal(true, {
          record,
          isUpdate: false,
        });
      }
      function handleInvalid(record: Recordable, toType) {
        openInvalidModal(true, {
          record,
          toType,
          isUpdate: false,
        });
      }

      return {
        registerTable,
        registerModal,
        registerTypeModal,
        registerContractModal,
        registerAllocationModal,
        registerCommentAddModal,
        registerCancelModal,
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
        handleUnallocation,
        handleCustomerDetail,
        uploadCustomer,
        handleUploadChange,
        handleCommentAdd,
        handleAllocationSuccess,
        handleTypeUpdateCancel,
        RoleEnum,
        handleInvalid,
        registerInvalidModal,
        handleExportExpectSuccess,
        handleExportSuccess,
      };
    },
  });
</script>

<style>
  .ant-table-row-cell-ellipsis,
  .ant-table-row-cell-ellipsis .ant-table-column-title {
    overflow: initial;
    white-space: initial;
    text-overflow: ellipsis;
  }
</style>

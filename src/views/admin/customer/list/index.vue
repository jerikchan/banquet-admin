<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <!-- <CustomerTypeTree class="w-1/4 xl:w-1/5" @select="handleSelect" /> -->
    <BasicTable @register="registerTable" class="" :searchInfo="searchInfo">
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
              label: '正式合同下单',
              ifShow: record.customerType === '2',
              onClick: handleContractOpen.bind(null, record, '5'),
              disabled: record.status === '1' || record.hasPurposeAgreement === 'true',
              auth: [
                RoleEnum.SUPER,
                RoleEnum.SALES,
                RoleEnum.SALES_OFFICER,
                RoleEnum.SALES_MANAGER,
              ],
            },
            {
              label: '意向合同下单',
              ifShow: record.customerType === '2',
              onClick: handlePurposeContract.bind(null, record, '5'),
              disabled: record.status === '1' || record.hasPurposeAgreement === 'true',
              auth: [
                RoleEnum.SUPER,
                RoleEnum.SALES,
                RoleEnum.SALES_OFFICER,
                RoleEnum.SALES_MANAGER,
              ],
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
              disabled: record.status === '1' || record.hasPurposeAgreement === 'true',
              auth: [RoleEnum.SUPER, RoleEnum.BOOKER],
            },
            {
              label: '流失无效再分配',
              ifShow: record.customerType === '3' || record.customerType === '6',
              onClick: handleLostReSales.bind(null, record, '6'),
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
    <PurposeContractModal @register="registPurposeContractModal" @success="handleContractSuccess" />
    <CustomerAllocationSalesModal
      @register="registerAllocationModal"
      @success="handleAllocationSuccess"
    />
    <CommentModal @register="registerCommentAddModal" @success="handleSuccess" />
    <CustomerInvalidModal @register="registerInvalidModal" @success="handleSuccess" />
    <CustomerLostReAllocateModal @register="registerLostReAllocateModal" @success="handleSuccess" />
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
    updateCustomerReadStatuts,
  } from '/@/api/admin/customer';
  import { PageWrapper } from '/@/components/Page';
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
  import { RoleEnum } from '/@/enums/roleEnum';
  import CustomerInvalidModal from './CustomerInvalidModal.vue';
  import { useGlobSetting } from '/@/hooks/setting';
  import { unreadCustomerStatus } from '/@/views/admin/customer/list/unreadCustomerStatus';
  import CustomerLostReAllocateModal from './CustomerLostReAllocateModal.vue';
  import PurposeContractModal from '/@/views/admin/purpose/ContractModal.vue';

  export default defineComponent({
    name: 'CustomerManagement',
    components: {
      BasicTable,
      PageWrapper,
      CustomerModal,
      ContractModal,
      TableAction,
      CustomerTypeModal,
      CustomerAllocationSalesModal,
      // BasicUpload,
      CommentModal,
      CustomerCancelModal,
      CustomerInvalidModal,
      CustomerLostReAllocateModal,
      PurposeContractModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTypeModal, { openModal: openTypeModal }] = useModal();
      const [registerContractModal, { openModal: openContractModal }] = useModal();
      const [registPurposeContractModal, { openModal: openPurposeContractModal }] = useModal();
      const [registerAllocationModal, { openModal: openAllocationnModal }] = useModal();
      const [registerCancelModal, { openModal: openCancelModal }] = useModal();
      const [registerCommentAddModal, { openModal: openCommentAddnModal }] = useModal();
      const [registerInvalidModal, { openModal: openInvalidModal }] = useModal();
      const [registerLostReAllocateModal, { openModal: openLostReAllocateModal }] = useModal();

      const [, { reload: reloadStatus }] = unreadCustomerStatus();

      // const route = useRoute();
      // const flag = ref(route.params?.flag);
      // const strArr = currentRef.value != null ? (currentRef.value as string).split('&') : null;
      // const newPage = strArr[0] === undefined ? null : parseInt(strArr[0] as string);
      // const newPageSize = strArr[1] === undefined ? null : parseInt(strArr[1] as string);
      // const realCurrent = newPage !== newPage ? null : newPage;
      // const realPageSize = newPageSize !== newPageSize ? null : newPageSize;

      // debugger;
      // console.log(flag.value);
      // const boolFlag = (flag.value as string) !== 'flag' ? true : false;

      // if (boolFlag) {
      //   sessionStorage.removeItem('customerListPage');
      // }

      // console.log(sessionStorage.getItem('customerListPage'));

      const go = useGo();
      const { createMessage, createConfirm } = useMessage();
      const { devUrl } = useGlobSetting();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, getPaginationRef, setPagination, getForm }] = useTable({
        title: '客户列表',
        // api: getCustomerList.bind(null, {
        //   page: sessionStorage.getItem('customerListPage'),
        //   pageSize: 10,
        // }),
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
          console.log('getPaginationRef', getPaginationRef());
          console.log(getForm().getFieldsValue());
          let formData = getForm().getFieldsValue();
          let queryData = {
            customerTypeSearch: '',
            customerName: '',
            salesNameSearch: '',
            customerMobile: '',
            customerSourceSearch: '',
            isFirst: '',
            createTimeStart: '',
            createTimeEnd: '',
          };
          if (formData['customerType']) {
            for (let i = 0; i < formData['customerType'].length; i++) {
              if (i !== formData['customerType'].length - 1) {
                queryData.customerTypeSearch += formData['customerType'][i] + ',';
              } else {
                queryData.customerTypeSearch += formData['customerType'][i];
              }
            }
          }
          if (formData['customerName']) {
            queryData.customerName = formData['customerName'];
          }

          if (formData['customerMobile']) {
            queryData.customerMobile = formData['customerMobile'];
          }

          if (formData['isFirst']) {
            queryData.isFirst = formData['isFirst'];
          }

          if (formData['createTime']) {
            queryData.createTimeStart = formData['createTime'][0];
            queryData.createTimeEnd = formData['createTime'][1];
          }

          if (formData['salesName']) {
            for (let i = 0; i < formData['salesName'].length; i++) {
              if (i !== formData['salesName'].length - 1) {
                queryData.salesNameSearch += formData['salesName'][i] + ',';
              } else {
                queryData.salesNameSearch += formData['salesName'][i];
              }
            }
          }

          if (formData['customerSource']) {
            for (let i = 0; i < formData['customerSource'].length; i++) {
              if (i !== formData['customerSource'].length - 1) {
                queryData.customerSourceSearch += formData['customerSource'][i] + ',';
              } else {
                queryData.customerSourceSearch += formData['customerSource'][i];
              }
            }
          }

          sessionStorage.setItem(
            'customerListSearchFields',
            JSON.stringify(getForm().getFieldsValue())
          );
          sessionStorage.setItem('customerListSearchParams', JSON.stringify(queryData));
          return info;
        },
        beforeFetch(info) {
          console.log('查找以前');
          console.log(info);
          debugger;

          if (sessionStorage.getItem('customerListSearchParams') !== null) {
            let currentPage = info.page;
            let rowsPerpage = info.pageSize;
            info = JSON.parse(sessionStorage.getItem('customerListSearchParams'));
            info.page = currentPage;
            info.pageSize = rowsPerpage;
          }

          // sessionStorage.setItem('customerListPage', JSON.stringify(getPaginationRef()));
          console.log(sessionStorage.getItem('customerListPage'));
          // console.log(sessionStorage.key('customerListPage'));
          if (sessionStorage.getItem('customerListPage') !== null) {
            setPagination(JSON.parse(sessionStorage.getItem('customerListPage')));
            info.page = JSON.parse(sessionStorage.getItem('customerListPage'))['current'];
            info.pageSize = JSON.parse(sessionStorage.getItem('customerListPage'))['pageSize'];
          }
          return info;
        },
        afterFetch(info) {
          if (sessionStorage.getItem('customerListSearchFields') !== null) {
            getForm().setFieldsValue(
              JSON.parse(sessionStorage.getItem('customerListSearchFields'))
            );
          }

          console.log('查找以后');
          // console.log('getPaginationRef', getPaginationRef());
          console.log(info);
          // debugger;
          if (sessionStorage.getItem('customerListPage') !== null) {
            // setPagination(JSON.parse(sessionStorage.removeItem('customerListPage')));
            sessionStorage.removeItem('customerListPage');
          }
        },
        actionColumn: {
          width: 200,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
        // pagination: JSON.parse(sessionStorage.getItem('customerListPage')),
      });

      // reload({ current: realCurrent, pageSize: realPageSize});
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

      function handlePurposeContract(record: Recordable, toType) {
        openPurposeContractModal(true, {
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

      async function handleCustomerDetail(record: Recordable) {
        // debugger;
        await updateCustomerReadStatuts({ id: record.id });
        await reloadStatus();
        console.log('详情跳转前', getPaginationRef());
        sessionStorage.setItem('customerListPage', JSON.stringify(getPaginationRef()));
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

      function handleLostReSales(record: Recordable, toType) {
        openLostReAllocateModal(true, {
          record,
          toType,
          isUpdate: true,
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
        handlePurposeContract,
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
        handleLostReSales,
        registerLostReAllocateModal,
        registPurposeContractModal,
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

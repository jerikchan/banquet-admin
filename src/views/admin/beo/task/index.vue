<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <Authority :value="[RoleEnum.SUPER, RoleEnum.SALES]">
          <a-button type="primary" @click="handleCreate">新增BEO任务</a-button>
        </Authority>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此BEO任务',
              disabled: true,
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER],
            },
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              onClick: handleView.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: '接收任务',
              onClick: acceptTask.bind(null, record),
              disabled: record.status === '1' || record.taskStatus === '1',
            },
            {
              label: '完成任务',
              onClick: finishTask.bind(null, record),
              disabled: record.status === '1' || record.taskStatus === '5',
            },
          ]"
        />
      </template>
    </BasicTable>
    <TaskModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getTaskList } from '/@/api/admin/beo';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import TaskModal from './TaskModal.vue';

  import { columns, searchFormSchema } from './task.data';
  import { deleteTask, updateTask } from '/@/api/admin/beo';
  import { RoleEnum } from '/@/enums/roleEnum';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'TaskManagement',
    components: { BasicTable, PageWrapper, TaskModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const { createMessage } = useMessage();
      const go = useGo();
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: 'BEO任务列表',
        api: getTaskList,
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
          width: 120,
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

      async function handleDelete(record: Recordable) {
        console.log(record);
        await deleteTask({ id: record.id });
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

      async function acceptTask(record: Recordable) {
        await updateTask({ id: record.id, taskStatus: '1' });
        createMessage.success('接收任务成功');
      }

      async function finishTask(record: Recordable) {
        await updateTask({ id: record.id, taskStatus: '5' });
        createMessage.success('操作成功');
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        // openModal(true, {
        //   isUpdate: false,
        //   isView: true,
        //   record,
        // });
        go('/beo/task_detail/' + record.id);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleDelete,
        handleSuccess,
        handleSelect,
        acceptTask,
        finishTask,
        handleView,
        searchInfo,
        RoleEnum,
      };
    },
  });
</script>

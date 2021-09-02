<template>
  <Card title="待办事项" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small" @click="handleView">更多</a-button>
    </template>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '标记为完成',
              ifShow: record.status === '0',
              popConfirm: {
                title: '是否确认',
                confirm: handleFinish.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { groupItems } from './data';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  // import { getReviewList } from '/@/api/admin/approval';
  import { getBacklogs, updateBackLogStatus } from '/@/api/admin/system';
  import { backlogColumns } from './data';
  import { Card } from 'ant-design-vue';
  // import { useGo } from '/@/hooks/web/usePage';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: {
      Card,
      BasicTable,
      TableAction,
    },
    setup() {
      // const go = useGo();
      const { createMessage } = useMessage();
      const [registerTable, { reload }] = useTable({
        api: getBacklogs,
        rowKey: 'id',
        columns: backlogColumns,
        beforeFetch: function (params) {
          params.today = true;
        },
        formConfig: {
          labelWidth: 120,
          autoSubmitOnEnter: true,
        },
        actionColumn: {
          width: 50,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
        pagination: true,
      });

      function handleView() {
        // go('/approval/review');
        console.log('handleView');
      }

      function handleViewDetail(record: Recordable) {
        // go('/approval/review_detail/' + record.id);
        console.log(record);
      }

      async function handleFinish(record: Recordable) {
        await updateBackLogStatus({ id: record.id, status: '1' });
        createMessage.success('已标记为完成');
        reload();
      }

      return {
        items: groupItems,
        handleView,
        handleViewDetail,
        handleFinish,
        registerTable,
      };
    },
  });
</script>

<template>
  <Card title="昨日呈报" v-bind="$attrs">
    <!-- <template #extra>
      <a-button type="link" size="small" @click="handleView">更多</a-button>
    </template> -->
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看详情',
              onClick: handleViewDetail.bind(null, record),
            },
            {
              icon: 'grommet-icons:document-performance',
              tooltip: '批注',
              onClick: handleEndorse.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.BOOKER],
            },
          ]"
        />
      </template>
    </BasicTable>
  </Card>
  <EndorseModal @register="registerEndorseModal" @success="handleSuccess" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { groupItems, submitReportColumn } from './data';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  // import { getReviewList } from '/@/api/admin/approval';
  // import { columns } from '/@/views/admin/approval/review/review.data';
  // import { submitReportColumn } from './d'
  import { getBacklogsInfoByBookerYesterday } from '/@/api/admin/system';
  import { Card } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { RoleEnum } from '/@/enums/roleEnum';
  import EndorseModal from './EndorseModal.vue';
  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    components: {
      Card,
      BasicTable,
      TableAction,
      EndorseModal,
    },
    setup() {
      const go = useGo();
      const [registerEndorseModal, { openModal: openEndorseModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        api: getBacklogsInfoByBookerYesterday,
        rowKey: 'id',
        columns: submitReportColumn,
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
        beforeFetch: function (params) {
          params.today = 'today';
        },
      });

      async function handleEndorse(record: Recordable) {
        console.log(record);
        openEndorseModal(true, {
          isUpdate: false,
          ...record,
        });
      }

      function handleView() {
        go('/approval/review');
      }

      function handleViewDetail(record: Recordable) {
        go('/dashboard/submit_report_customer_detail/' + record.customerId);
      }

      function handleSuccess() {
        reload();
      }

      return {
        items: groupItems,
        handleView,
        handleViewDetail,
        registerTable,
        submitReportColumn,
        handleEndorse,
        RoleEnum,
        registerEndorseModal,
        handleSuccess,
      };
    },
  });
</script>

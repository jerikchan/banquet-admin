<template>
  <Card title="销售排行榜" v-bind="$attrs">
    <BasicTable @register="registerTable" class="overflow-hidden h-200px" />
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getAccountList } from '/@/api/admin/system';
  import { salesColumns } from '../data';
  import { Card } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: {
      Card,
      BasicTable,
    },
    setup() {
      const go = useGo();
      const [registerTable] = useTable({
        api: getAccountList,
        rowKey: 'id',
        columns: salesColumns,
        pagination: false,
        // canResize: true,
        showIndexColumn: false,
      });

      function handleView() {
        go('/approval/review');
      }

      function handleViewDetail(record: Recordable) {
        go('/approval/review_detail/' + record.id);
      }

      return {
        handleView,
        handleViewDetail,
        registerTable,
      };
    },
  });
</script>

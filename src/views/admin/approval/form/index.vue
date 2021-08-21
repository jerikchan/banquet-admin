<template>
  <div>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看部门详情',
              onClick: handleFlowView.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getFormList } from '/@/api/admin/approval';

  import { columns, searchFormSchema } from './form.data';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'FormManagement',
    components: { BasicTable, TableAction },
    setup() {
      const go = useGo();
      const [registerTable] = useTable({
        title: '与我相关',
        api: getFormList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleFlowView(record: Recordable) {
        // globalThis.deptInfo = record;
        go('/approval/form_detail/' + record.id);
      }

      return {
        registerTable,
        handleFlowView,
      };
    },
  });
</script>

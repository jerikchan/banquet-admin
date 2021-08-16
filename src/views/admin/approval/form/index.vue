<template>
  <div>
    <BasicTable @register="registerTable"/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';
  import { getFormList } from '/@/api/admin/approval';

  import { columns, searchFormSchema } from './form.data';

  export default defineComponent({
    name: 'FormManagement',
    components: { BasicTable },
    setup() {
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
      return {
        registerTable,
      };
    },
  });
</script>

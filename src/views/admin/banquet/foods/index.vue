<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增菜单菜品 </a-button>
        <BasicUpload
          :maxSize="20"
          :maxNumber="10"
          @change="handleUploadChange"
          :api="uploadFoods"
          :showPreviewNumber="false"
        />
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              ifShow: false,
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              ifShow: record.child,
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <FoodTypeDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getFoodTypeList, deleteFoodType, uploadFoods } from '/@/api/admin/banquet';

  import { useDrawer } from '/@/components/Drawer';
  import FoodTypeDrawer from './FoodTypeDrawer.vue';

  import { columns, searchFormSchema } from './foodType.data';

  import { BasicUpload } from '/@/components/Upload';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'FoodTypeManagement',
    components: { BasicTable, FoodTypeDrawer, TableAction, BasicUpload },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const { createMessage } = useMessage();
      const [registerTable, { reload }] = useTable({
        title: '菜单菜品列表',
        api: getFoodTypeList,
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

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        // await addFoodType({
        //   id: record.id,
        // });
        await deleteFoodType({ id: record.id });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      function handleUploadChange(list: string[]) {
        createMessage.info(`已上传文件${JSON.stringify(list)}`);
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleUploadChange,
        uploadFoods,
      };
    },
  });
</script>

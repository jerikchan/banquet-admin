<template>
  <div id="managerMainList">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              auth: [RoleEnum.SUPER, RoleEnum.HOUSEKEEPER_MANAGER],
            },
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看部门详情',
              onClick: handleDeptView.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- <DeptModal @register="registerModal" @success="handleSuccess" /> -->
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  // import { deleteDept, getDeptList } from '/@/api/admin/system';
  import { getFormList } from '/@/api/admin/manager';

  import { useModal } from '/@/components/Modal';
  // import DeptModal from './DeptModal.vue';

  import { columns, searchFormSchema } from './manager.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'DeptManagement',
    components: { BasicTable, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '表单列表',
        api: getFormList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        pagination: true,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        defaultExpandAllRows: true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        if (record.name === '客户跟进记录') {
          go('/master/customer_follow_oper/' + record.id);
        } else if (record.name === '套餐内容登记') {
          go('/master/set_meal_content_form_oper/' + record.id);
        } else if (record.name === '人员派单情况') {
          go('/master/send_person_form_oper/' + record.id);
        } else if (record.name === '试妆') {
          go('/master/try_on_make_uo_oper/' + record.id);
        } else if (record.name === '司仪沟通') {
          go('/master/si_yi_chat_form_oper/' + record.id);
        } else if (record.name === '家庭会议') {
          go('/master/family_meeting_form_oper/' + record.id);
        } else if (record.name === '婚礼注意事项筛查') {
          go('/master/attention_check_form_oper/' + record.id);
        }
      }

      // async function handleDelete(record: Recordable) {
      //   // console.log(record);
      //   // await deleteDept({
      //   //   id: record.id,
      //   // });
      //   // reload();
      // }

      function handleSuccess() {
        reload();
      }

      function handleDeptView(record: Recordable) {
        // globalThis.deptInfo = record;
        console.log(record);
        if (record.name === '客户跟进记录') {
          go('/master/customer_follow_detail/' + record.id);
        } else if (record.name === '套餐内容登记') {
          go('/master/setmeal_content_detail/' + record.id);
        } else if (record.name === '人员派单情况') {
          go('/master/send_person_detail/' + record.id);
        } else if (record.name === '试妆') {
          go('/master/tryon_makeup_detail/' + record.id);
        } else if (record.name === '司仪沟通') {
          go('/master/siyi_chat_detail/' + record.id);
        } else if (record.name === '家庭会议') {
          go('/master/family_meeting_form_detail/' + record.id);
        } else if (record.name === '婚礼注意事项筛查') {
          go('/master/attention_check_form_detail/' + record.id);
        }
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        // handleDelete,
        handleSuccess,
        handleDeptView,
        RoleEnum,
      };
    },
  });
</script>

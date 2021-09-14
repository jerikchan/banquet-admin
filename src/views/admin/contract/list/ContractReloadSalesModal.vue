<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { customerReloadFormSchema } from './contract.data';
  import { reloadAgreementSales } from '/@/api/admin/contract';

  export default defineComponent({
    name: 'ContractReloadSalesModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');

      const [registerForm, { resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: customerReloadFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        // if (unref(isUpdate)) {
        //   idRef.value = data.record.id;
        //   setFieldsValue({
        //     ...data.record,
        //   });
        // }
        debugger;
        idRef.value = data.record.id;

        // const treeData = await getCustomerTypeList();
        // updateSchema([
        //   {
        //     field: 'customerType',
        //     componentProps: { treeData, disabled: unref(isUpdate) },
        //     required: !unref(isUpdate),
        //   },
        // ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '重新分配销售' : '重新分配销售'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          // if (isUpdate.value) {
          //   await allocationManager({
          //     ...values,
          //     beoOrderId: idRef.value,
          //   });
          // }
          // debugger;
          await reloadAgreementSales({
            ...values,
            id: idRef.value,
          });
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: idRef.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit, customerReloadFormSchema };
    },
  });
</script>

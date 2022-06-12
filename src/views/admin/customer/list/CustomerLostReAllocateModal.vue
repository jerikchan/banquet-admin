<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { lostReSalesFormSchema } from './customer.data';
  import { lostReSales } from '/@/api/admin/customer';

  export default defineComponent({
    name: 'LostReSalesModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');
      const customerTypeRef = ref('');

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: lostReSalesFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          idRef.value = data.record.id;
          customerTypeRef.value = data.record.customerType;
          setFieldsValue({
            ...data.record,
          });
        }

        // const treeData = await getCustomerTypeList();
        // updateSchema([
        //   {
        //     field: 'customerType',
        //     componentProps: { treeData, disabled: unref(isUpdate) },
        //     required: !unref(isUpdate),
        //   },
        // ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '重新分配' : '重新分配'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (isUpdate.value) {
            await lostReSales({
              ...values,
              id: idRef.value,
              customerType: customerTypeRef.value,
            });
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: idRef.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>

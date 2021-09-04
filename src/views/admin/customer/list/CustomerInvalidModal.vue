<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { InvalidReasonFormSchema } from './customer.data';
  import { updateCustomerType } from '/@/api/admin/customer';

  export default defineComponent({
    name: 'CustomerCancelModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const record = ref<any>({});
      const idRef = ref('');
      const toType = ref('');

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: InvalidReasonFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        record.value = data.record;
        toType.value = data.toType;

        if (unref(isUpdate)) {
          idRef.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => '转为无效');

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          await updateCustomerType({
            customerId: record.value.id,
            invalidReason: values.invalidReason,
            type: unref(toType),
          });
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

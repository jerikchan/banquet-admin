<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { contractFormSchema } from './customer.data';
  import { addContract } from '/@/api/admin/contract';
  import { useMessage } from '/@/hooks/web/useMessage';
  
  export default defineComponent({
    name: 'ContractModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');
      const recordRef = ref({});
      const { createMessage } = useMessage();

      const [registerForm, { setFieldsValue, resetFields, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: contractFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (!unref(isUpdate)) {
          setFieldsValue({
            status: '0',
          });
        }
        recordRef.value = data.record;
        setFieldsValue({
          customerId: data.record.id,
        });
      });

      const getTitle = computed(() => isUpdate.value ? '修改合同' : '新增合同');

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (!unref(isUpdate)) {
            await addContract({
              customerId: values.customerId,
              remark: values.remark,
            });
            createMessage.success('新增合同成功');
          } else {
            createMessage.success('修改合同成功');
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

<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    :useWrapper="true"
    width="700px"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { orderFormSchema } from './order.data';
  import { addOrder } from '/@/api/admin/beo';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'OrderModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const isView = ref(false);
      const idRef = ref('');
      const { createMessage } = useMessage();

      const [registerForm, { setFieldsValue, resetFields, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: orderFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        isView.value = !!data?.isView;

        if (unref(isUpdate) || unref(isView)) {
          idRef.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }

        updateSchema(
          orderFormSchema.map((s) => ({
            field: s.field,
            componentProps: { disabled: unref(isView) },
          }))
        );
      });

      const getTitle = computed(() =>
        !unref(isView) ? (!unref(isUpdate) ? '新增BEO单' : '编辑BEO单') : '查看BEO单'
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (!isView.value) {
            if (isUpdate.value) {
              // await updateOrder({
              //   ...values,
              //   id: unref(idRef),
              // });
            } else {
              await addOrder(values);
              createMessage.success('新增BEO单成功');
            }
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

<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { acceptFormSchema } from './total.data';
  import { addAccept } from '/@/api/admin/finance';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'ReceivableAcceptModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');
      const { createMessage } = useMessage();
      const receivable = reactive({ id: '' });

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: acceptFormSchema,
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
          setFieldsValue({
            ...data.record,
          });
        }

        if (data.id) {
          Object.assign(receivable, data);
          setFieldsValue({
            ...data,
          });
        }

        // const treeData = await getAcceptTypeList();
        // updateSchema([
        //   {
        //     field: 'type',
        //     componentProps: { treeData },
        //   },
        // ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增回款' : '编辑回款'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (isUpdate.value) {
            // await updateAccept({
            //   ...values,
            //   id: unref(idRef),
            // });
            createMessage.success('编辑回款成功');
          } else {
            if (receivable.id) {
              values.receivableId = receivable.id;
            }
            await addAccept(values);
            createMessage.success('新增回款成功');
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

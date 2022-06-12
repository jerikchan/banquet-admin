<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { endorseFormSchema } from './data';
  import { addEndorse } from '/@/api/admin/system';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'EndorseModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');
      const { createMessage } = useMessage();
      // const receivable = reactive({ receivableId: '' });
      let backlogId;

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: endorseFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        backlogId = data.id;
        if (unref(isUpdate)) {
          idRef.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }

        if (data) {
          // Object.assign(receivable, data);
        }

        if (data.receivableId) {
          setFieldsValue({
            // receivableId: receivable.receivableId,
            // agreementCode: data.agreementCode,
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

      const getTitle = computed(() => (!unref(isUpdate) ? '编辑批注' : '编辑批注'));

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
            createMessage.success('编辑批注成功');
          } else {
            values.backlogId = backlogId;
            console.log(values);
            await addEndorse(values);
            createMessage.success('编辑批注成功');
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

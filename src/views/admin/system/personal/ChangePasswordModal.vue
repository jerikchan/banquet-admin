<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="修改密码" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { pwdSchema } from './data';
  import { updatePassword } from '/@/api/admin/system';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { encryptByMd5 } from '/@/utils/cipher';

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const rowId = ref('');
      const { createMessage } = useMessage();

      const [registerForm, { validate, resetFields }] = useForm({
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: pwdSchema,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });

        rowId.value = data.record.id;
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);

          await updatePassword({
            oldPwd: encryptByMd5(values.oldPwd),
            newPwd: encryptByMd5(values.newPwd),
          });
          createMessage.success('修改密码成功');
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, handleSubmit };
    },
  });
</script>

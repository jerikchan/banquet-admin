<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { customerTypeFormSchema } from './customer.data';
  import { getCustomerTypeList, updateCustomerType } from '/@/api/admin/customer';

  export default defineComponent({
    name: 'CustomerModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const record = ref({});
      const idRef = ref('');
      const toType = ref('');

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: customerTypeFormSchema,
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

        if (data.record.isFirst === 'true' || data.record.isFirst === true) {
          updateSchema([
            {
              field: 'isFirst',
              ifShow: false,
            },
          ]);
        } else {
          updateSchema([
            {
              field: 'isFirst',
              ifShow: true,
            },
          ]);
        }

        const treeData = await getCustomerTypeList();
        updateSchema([
          {
            field: 'customerType',
            componentProps: { treeData, disabled: unref(isUpdate) },
            required: !unref(isUpdate),
          },
        ]);

        if (unref(toType) === '2') {
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() =>
        toType.value === '2'
          ? '转为意向'
          : toType.value === '3'
          ? '转为流失'
          : toType.value === '5'
          ? '转为成交'
          : ''
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (unref(toType) === '2') {
            await updateCustomerType({
              customerId: record.value.id,
              nodeRemark: values.nodeRemark,
              chatType: values.chatType,
              chatRealTime: values.chatRealTime,
              preNextChatTime: values.preNextChatTime,
              banquetRoomId: values.roomId,
              banquetType: values.banquetType,
              canBie: values.canBie,
              isFirst: values.isFirst,
              // isToDone: values.isToDone,
              banquetTime: values.banquetTime,
              canBiao: values.canBiao,
              floorsDeskCount: values.floorsDeskCount,
              type: unref(toType),
            });
          } else {
            await updateCustomerType({
              customerId: record.value.id,
              nodeRemark: values.remark,
              type: unref(toType),
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

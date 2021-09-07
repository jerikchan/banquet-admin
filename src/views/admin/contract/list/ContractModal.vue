<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm">
      <template #[fileInfo.key] v-for="fileInfo in fileInfos" :key="fileInfo.key">
        <a-upload
          listType="picture-card"
          v-model:fileList="fileInfo.data"
          :customRequest="uploadPicApiCustom"
          @change="onFileChange(fileInfo, $event)"
        >
          <div v-if="fileInfo.data.length < 4">
            <PlusOutlined />
            <div class="ant-upload-text">上传</div>
          </div>
        </a-upload>
      </template></BasicForm
    >
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { contractFormSchema } from './contract.data';
  import { addContract, updateContract } from '/@/api/admin/contract';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { uploadPicApiCustom } from '/@/api/sys/upload';

  export default defineComponent({
    name: 'ContractModal',
    components: { BasicModal, BasicForm, PlusOutlined },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');
      const recordRef = ref<any>({});
      const { createMessage } = useMessage();
      const fileInfos = reactive<any>(
        ['file'].map((key) => {
          return {
            key,
            data: [],
          };
        })
      );
      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
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
        debugger;
        if (!unref(isUpdate)) {
          setFieldsValue({
            status: '0',
          });
        }
        if (unref(isUpdate)) {
          idRef.value = data.record.id;
        }

        recordRef.value = data.record;
        const values = Object.entries(data.record).reduce((acc, cur) => {
          if (cur[1] !== null) {
            acc[cur[0]] = cur[1];
          }
          return acc;
        }, {});
        setFieldsValue(values);

        fileInfos.forEach((fileInfo) => {
          if (data.record[fileInfo.key]) {
            fileInfo.data = data.record[fileInfo.key];
          }
        });
      });

      const getTitle = computed(() => (isUpdate.value ? '修改合同' : '新增合同'));

      function onFileChange(fileInfo, { fileList }) {
        fileInfo.data = fileList.map((fileInfo) => fileInfo.response || fileInfo);
      }

      async function handleSubmit() {
        try {
          const fileInfoRecord = fileInfos.reduce((acc, fileInfo) => {
            const data = unref(fileInfo.data);
            acc[fileInfo.key] =
              data && Array.isArray(data) && data.length
                ? data.map((info) => info?.response?.uid || info.uid)
                : null;
            return acc;
          }, {});
          setFieldsValue(fileInfoRecord);
          const values = await validate();
          values.customerId = recordRef.value.customerId;
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (!unref(isUpdate)) {
            await addContract(values);
            createMessage.success('新增合同成功');
          } else {
            await updateContract({
              ...values,
              id: idRef.value,
            });
            createMessage.success('修改合同成功');
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: idRef.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        fileInfos,
        uploadPicApiCustom,
        onFileChange,
      };
    },
  });
</script>

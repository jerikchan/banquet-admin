<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <!-- <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :replaceFields="{ title: 'menuName', key: 'id' }"
          checkable
          toolbar
          title="菜单分配"
        />
      </template> -->
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './foodType.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

  import { updateFoodType, addFoodType } from '/@/api/admin/banquet';

  export default defineComponent({
    name: 'FoodTypeDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const idRef = ref('');

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 120,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });

        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
          idRef.value = data.record.id;
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增菜单菜品' : '编辑菜单菜品'));

      async function handleSubmit() {
        try {
          const values = await validate();
          if (!values.isChild) {
            values.isChild = 0;
          }
          setDrawerProps({ confirmLoading: true });
          // TODO custom api
          if (isUpdate.value) {
            await updateFoodType({
              ...values,
              id: unref(idRef),
            });
          } else {
            await addFoodType(values);
          }
          console.log(values);
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>

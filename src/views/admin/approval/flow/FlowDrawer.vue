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
      <template #nodes>
        <template v-for="(node, i) in nodeList" :key="node">
          <div style="margin-bottom: 15px">
            <div style="display: inline-block; width: 90px">第{{ i + 1 }}审批人：</div>
            <ACascader
              v-model:value="node.value"
              :options="nodeOptions"
              placeholder="please input domain"
              style="width: 60%; margin-right: 8px"
            />
            <MinusCircleOutlined
              v-if="i > 0"
              class="dynamic-delete-button"
              @click="removeNode(node)"
            />
          </div>
        </template>
      </template>
      <template #add>
        <AButton type="dashed" style="width: 60%" @click="addNode">
          <PlusOutlined />
          新增审批人
        </AButton>
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './flow.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

  import { updateFlow, addFlow, getFlowNodes } from '/@/api/admin/approval';
  import { getRoleList, getAccountList } from '/@/api/admin/system';
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'FlowDrawer',
    components: { BasicDrawer, BasicForm, MinusCircleOutlined, PlusOutlined },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const nodeList = ref<[{ value: string[] }]>([{ value: [] }]);
      const roleList = ref([]);
      const accountList = ref([]);
      const idRef = ref('');
      const { createMessage } = useMessage();

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });

        roleList.value = (await getRoleList()) as any;
        accountList.value = (await getAccountList()) as any;

        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
          idRef.value = data.record.id;

          const nodes = (await getFlowNodes({ templateId: unref(idRef) })) as any;
          const _nodes = nodes.map((node) => {
            const { userId, roleId } = node;
            return {
              value: [userId ? 'account' : 'role', userId ? userId : roleId],
            };
          });
          nodeList.value = _nodes.length ? _nodes : [{ value: [] }];
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增审批流程' : '编辑审批流程'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          // TODO custom api
          if (isUpdate.value) {
            await updateFlow({
              ...values,
              nodes: nodeList.value.map((node) => ({
                [node.value[0] === 'role' ? 'roleId' : 'userId']: node.value[1],
              })),
              templateId: idRef.value,
            });
            createMessage.success('编辑审批流程成功');
          } else {
            await addFlow({
              ...values,
              nodes: nodeList.value.map((node) => ({
                [node.value[0] === 'role' ? 'roleId' : 'userId']: node.value[1],
              })),
            });

            createMessage.success('新增审批流程成功');
          }
          console.log(values);
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      function addNode() {
        nodeList.value.push({
          value: [],
        });
      }

      function removeNode(node) {
        const index = nodeList.value.indexOf(node);
        if (index > -1) {
          nodeList.value.splice(index, 1);
        }
      }

      const nodeOptions = computed(() => {
        return [
          {
            value: 'role',
            label: '角色',
            children: (unref(roleList) as any).map((role) => ({
              value: role.id,
              label: role.roleName,
            })),
          },
          {
            value: 'account',
            label: '员工',
            children: (unref(accountList) as any).map((account) => ({
              value: account.id,
              label: account.realName,
            })),
          },
        ];
      });

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
        nodeList,
        addNode,
        removeNode,
        nodeOptions,
      };
    },
  });
</script>

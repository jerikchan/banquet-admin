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
          <ACascader
            v-model:value="node.value"
            :options="nodeOptions"
            placeholder="please input domain"
            style="width: 60%; margin-right: 8px"
          />
          <MinusCircleOutlined
            v-if="i > 1"
            class="dynamic-delete-button"
            :disabled="i === 1"
            @click="removeNode(node)"
          />
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

  export default defineComponent({
    name: 'FlowDrawer',
    components: { BasicDrawer, BasicForm, MinusCircleOutlined, PlusOutlined },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const nodeList = ref<[{ value: string[] }]>([{ value: [] }]);
      const roleList = ref([]);
      const accountList = ref([]);
      const flowId = ref('');

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
          flowId.value = data.record.id;
          const nodes = await getFlowNodes({ templateId: flowId.value });
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
              templateId: flowId.value,
            });
          } else {
            await addFlow({
              ...values,
              nodes: nodeList.value.map((node) => ({
                [node.value[0] === 'role' ? 'roleId' : 'userId']: node.value[1],
              })),
            });
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

      const nodeOptions = computed(() => {
        return [
          {
            value: 'role',
            label: '角色',
            children: roleList.value.map(role => ({
              value: role.roleId,
              label: role.roleName
            })),
          },
          {
            value: 'account',
            label: '员工',
            children: accountList.value.map(account => ({
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
        nodeOptions,
      };
    },
  });
</script>

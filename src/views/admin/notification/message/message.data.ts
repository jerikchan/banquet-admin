import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { updateMessage } from '/@/api/admin/notification';
import { useMessage } from '/@/hooks/web/useMessage';

export const columns: BasicColumn[] = [
  {
    title: '内容',
    dataIndex: 'content',
    width: 180,
  },
  {
    title: '类型',
    dataIndex: 'status',
    width: 180,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === '1',
        checkedChildren: '已读',
        unCheckedChildren: '未读',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? '1' : '0';
          const { createMessage } = useMessage();
          updateMessage({ id: record.id, status: newStatus })
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改消息状态`);
            })
            .catch(() => {
              createMessage.error('修改消息状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'status',
    label: '类型',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: [
        { label: '已读', value: '1' },
        { label: '未读', value: '0' },
      ],
    },
  },
];

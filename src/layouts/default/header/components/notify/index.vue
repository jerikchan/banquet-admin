<template>
  <div :class="prefixCls">
    <Popover title="" trigger="click" :overlayClassName="`${prefixCls}__overlay`">
      <Badge :count="count" dot :numberStyle="numberStyle">
        <BellOutlined />
      </Badge>
      <template #content>
        <Tabs>
          <template v-for="item in listData" :key="item.key">
            <TabPane>
              <template #tab>
                {{ item.name }}
                <span v-if="item.list.length !== 0">({{ item.list.length }})</span>
              </template>
              <!-- 绑定title-click事件的通知列表中标题是“可点击”的-->
              <NoticeList :list="item.list" v-if="item.key === '1'" @title-click="onNoticeClick" />
              <NoticeList :list="item.list" v-else />
            </TabPane>
          </template>
        </Tabs>
      </template>
    </Popover>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onUnmounted, ref } from 'vue';
  import { Popover, Tabs, Badge } from 'ant-design-vue';
  import { BellOutlined } from '@ant-design/icons-vue';
  import { tabListData, ListItem } from './data';
  import NoticeList from './NoticeList.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getMessageList, updateMessage } from '/@/api/admin/notification';
  import headerImg from '/@/assets/images/header.jpg';

  export default defineComponent({
    components: { Popover, BellOutlined, Tabs, TabPane: Tabs.TabPane, Badge, NoticeList },
    setup() {
      const { prefixCls } = useDesign('header-notify');
      const { createMessage } = useMessage();
      const listData = ref(tabListData);
      let pollingTimer = null;

      const count = computed(() => {
        let count = 0;
        for (let i = 0; i < listData.value.length; i++) {
          count += listData.value[i].list.filter((n) => !n.titleDelete).length;
        }
        return count;
      });

      async function onNoticeClick(record: ListItem) {
        if (!record.titleDelete) {
          await updateMessage({ id: record.id, status: '1' });
          // record.titleDelete = !record.titleDelete;
          await updateMessageList();

          createMessage.success('已标记为已读消息');
        }
      }

      async function updateMessageList() {
        clearTimeout(pollingTimer);

        const list = await getMessageList();
        listData.value[0].list = list.map((n) => {
          return {
            id: n.id,
            avatar: n.avatar || headerImg,
            title: n.content,
            datetime: n.createTime,
            type: '2',
            clickClose: true,
            // status: n.status,
            titleDelete: n.status === '1',
          };
        });

        // 轮询
        pollingTimer = setTimeout(() => {
          updateMessageList();
        }, 30 * 1000);
      }

      onUnmounted(() => {
        clearTimeout(pollingTimer);
      });

      updateMessageList();

      return {
        prefixCls,
        listData,
        count,
        onNoticeClick,
        numberStyle: {},
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-header-notify';

  .@{prefix-cls} {
    padding-top: 2px;

    &__overlay {
      max-width: 360px;
    }

    .ant-tabs-content {
      width: 300px;
    }

    .ant-badge {
      font-size: 18px;

      .ant-badge-multiple-words {
        padding: 0 4px;
      }

      svg {
        width: 0.9em;
      }
    }
  }
</style>

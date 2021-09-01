<template>
  <Card title="最新动态" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small" @click="handleView">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="items">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>
              {{ item.createTime }}
            </template>
            <!-- eslint-disable-next-line -->
            <template #title> {{ item.name }} <span v-html="item.content"> </span> </template>
            <template #avatar>
              <!-- <Icon :icon="headerImg" :size="30" /> -->
              <Avatar :src="headerImg" />
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card, List, Avatar } from 'ant-design-vue';
  import headerImg from '/@/assets/images/header.jpg';
  // import { Icon } from '/@/components/Icon';
  import { getMessageList } from '/@/api/admin/notification';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: { Card, List, ListItem: List.Item, ListItemMeta: List.Item.Meta, Avatar, },
    setup() {
      const go = useGo();
      const items = ref([]);
      (async () => {
        const list = await getMessageList({
          pageSize: 5,
          page: 1,
        });
        items.value = list as any;
      })();

      function handleView() {
        go('/notification/message');
      }

      return { items, headerImg, handleView };
    },
  });
</script>

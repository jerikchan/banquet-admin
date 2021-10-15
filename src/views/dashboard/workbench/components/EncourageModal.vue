<template>
  <Card title="每日一言" v-bind="$attrs">
    <template #extra>
      <!-- <a-button type="link" size="small" @click="handleView">更多</a-button> -->
    </template>
    <div> 人生重要的不是所站的位置，而是所朝的方向。 </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card } from 'ant-design-vue';
  import headerImg from '/@/assets/images/header.jpg';
  // import { Icon } from '/@/components/Icon';
  // import { getMessageList } from '/@/api/admin/notification';
  import { getLatestTrendsInfo } from '/@/api/admin/system';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: { Card },
    setup() {
      const go = useGo();
      const items = ref([]);
      (async () => {
        const list = await getLatestTrendsInfo({
          pageSize: 5,
          page: 1,
        });
        items.value = list.items as any;
      })();

      function handleView() {
        go('/notification/message');
      }

      return { items, headerImg, handleView };
    },
  });
</script>

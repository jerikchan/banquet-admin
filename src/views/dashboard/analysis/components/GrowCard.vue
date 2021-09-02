<template>
  <div class="md:flex">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <Card
        size="small"
        :loading="$attrs.loading"
        :title="item.title"
        class="md:w-1/4 w-full !md:mt-0 !mt-4"
        :class="[index + 1 < 4 && '!md:mr-4']"
        :canExpan="false"
      >
        <template #extra>
          <Tag :color="item.color">{{ item.action }}</Tag>
        </template>

        <div class="flex justify-between px-4 py-4">
          <CountTo :suffix="item.unit" :startVal="0" :endVal="item.value || 0" class="text-2xl" />
          <Icon :icon="item.icon" :size="40" />
        </div>

        <div class="flex justify-between p-2 px-4">
          <span>{{ item.totalTitle }}</span>
          <CountTo :suffix="item.unit" :startVal="0" :endVal="item.total || 0" />
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { CountTo } from '/@/components/CountTo/index';
  import { Icon } from '/@/components/Icon';
  import { Tag, Card } from 'ant-design-vue';

  import { getGrowListAnalysis } from '/@/api/admin/analysis';

  export default defineComponent({
    components: { CountTo, Tag, Card, Icon },
    setup() {
      const growCardList = reactive([]);

      async function findGrowCardList() {
        const list: [] = await getGrowListAnalysis();
        growCardList.push(...list);
      }
      findGrowCardList();

      return { growCardList, findGrowCardList };
    },
  });
</script>

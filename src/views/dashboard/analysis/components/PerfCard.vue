<template>
  <Card
    size="small"
    :loading="$attrs.loading"
    :title="perfCard.title"
    class="w-full !md:mt-0 !mt-4 flex flex-col"
    :canExpan="false"
  >
    <template #extra>
      <Tag :color="perfCard.color">{{ perfCard.action }}</Tag>
    </template>

    <div class="flex items-center justify-between px-8 py-8">
      <CountTo :suffix="perfCard.unit" :startVal="1" :endVal="perfCard.value" class="text-4xl" />
      <Icon :icon="perfCard.icon" :size="80" />
    </div>

    <div class="flex items-center justify-between p-4 px-8">
      <span class="text-1xl">{{ perfCard.totalTitle }}</span>
      <CountTo :suffix="perfCard.unit" :startVal="1" :endVal="perfCard.total" class="text-2xl" />
    </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { CountTo } from '/@/components/CountTo/index';
  import { Icon } from '/@/components/Icon';
  import { Tag, Card } from 'ant-design-vue';

  import { getPrefCard } from '/@/api/admin/analysis';

  // import { perfCard } from '../data';
  export default defineComponent({
    components: { CountTo, Tag, Card, Icon },
    setup() {
      const perfCard = reactive({});
      async function handleData() {
        let data = await getPrefCard();
        Object.assign(perfCard, data);
      }

      handleData();

      return { perfCard, handleData };
    },
  });
</script>

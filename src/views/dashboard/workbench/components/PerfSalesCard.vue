<template>
  <Card
    size="small"
    :loading="loading"
    :title="perfCard.title"
    class="w-full !md:mt-0 !mt-4 flex flex-col"
    :canExpan="false"
  >
    <template #extra>
      <!-- <Authority :value="[RoleEnum.SALES_OFFICER, RoleEnum.MANAGER, RoleEnum.SUPER]">
        <a-button class="mr-4" @click="handleTargetSet">设置</a-button>
      </Authority> -->
      <Tag :color="perfCard.color">{{ perfCard.action }}</Tag>
    </template>

    <div class="flex items-center justify-between px-8 py-30">
      <CountTo :suffix="perfCard.unit" :startVal="1" :endVal="perfCard.value" class="text-4xl" />
      <Icon :icon="perfCard.icon" :size="80" />
    </div>

    <!-- <div class="flex items-center justify-between p-4 px-8">
      <span class="text-1xl">{{ perfCard.totalTitle }}</span>
      <CountTo :suffix="perfCard.unit" :startVal="1" :endVal="perfCard.total" class="text-2xl" />
    </div> -->
    <!-- <a-modal v-model:visible="visible" title="设置" @ok="handleOk">
      <div class="pt-5 pb-5 pl-5"> 目标营业额：<a-input-number v-model:value="total" /> </div>
    </a-modal> -->
  </Card>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, unref } from 'vue';

  import { CountTo } from '/@/components/CountTo/index';
  import { Icon } from '/@/components/Icon';
  import { Tag, Card } from 'ant-design-vue';

  import { getSingleSalesSignMoney, updateTotal } from '/@/api/admin/analysis';
  import { RoleEnum } from '/@/enums/roleEnum';

  // import { perfCard } from '../data';
  export default defineComponent({
    components: { CountTo, Tag, Card, Icon },
    setup() {
      const perfCard = reactive<any>({});
      const visible = ref(false);
      const total = ref(0);
      const loading = ref(true);
      async function handleData() {
        loading.value = true;
        let data = await getSingleSalesSignMoney();
        Object.assign(perfCard, data);
        loading.value = false;
      }

      handleData();

      function handleTargetSet() {
        visible.value = true;
        total.value = perfCard.total;
      }

      async function handleOk() {
        await updateTotal({ money: unref(total) });
        visible.value = false;
        await handleData();
      }

      return { perfCard, handleData, RoleEnum, visible, handleTargetSet, handleOk, total, loading };
    },
  });
</script>

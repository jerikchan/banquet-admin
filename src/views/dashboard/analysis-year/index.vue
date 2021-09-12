<template>
  <div class="p-4">
    <ApiLineAnalysis :api="getDealCountYearAnalysis" title="签单额月份同比" class="w-full" />
    <ApiLineAnalysis
      :api="getSkipOrderYearAnalysis"
      title="滑单数量月份同比"
      class="w-full !my-4"
    />
    <ApiLineAnalysis
      :api="getNewCustomerYearAnalysis"
      title="新增客资月份同比"
      class="w-full !my-4"
    />
    <ApiBarStackAnalysis
      :api="getChannelYearAnalysis"
      title="各渠道获客数量月份同比"
      class="w-full !my-4"
    />
    <ApiLineAnalysis
      :api="getDealYearAnalysis"
      title="成交率月份同比"
      isPercent
      class="w-full !my-4"
    />
    <ApiLineAnalysis
      :api="getInviteYearAnalysis"
      title="邀约率月份同比"
      isPercent
      class="w-full !my-4"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import ApiLineAnalysis from '/@/components/Analysis/ApiLineAnalysis.vue';
  import ApiBarStackAnalysis from '/@/components/Analysis/ApiBarStackAnalysis.vue';

  import {
    getDealCountYearAnalysis,
    getSkipOrderYearAnalysis,
    getNewCustomerYearAnalysis,
    getChannelYearAnalysis,
    getDealYearAnalysis,
    getInviteYearAnalysis,
  } from '/@/api/admin/analysis';

  export default defineComponent({
    components: {
      ApiLineAnalysis,
      ApiBarStackAnalysis,
    },
    setup() {
      return {
        getDealCountYearAnalysis,
        getSkipOrderYearAnalysis,
        getNewCustomerYearAnalysis,
        getChannelYearAnalysis,
        getDealYearAnalysis,
        getInviteYearAnalysis,
      };
    },
  });
</script>

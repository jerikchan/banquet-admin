<template>
  <PageWrapper contentClass="flex flex-col" title="年度分析页">
    <div class="p-3 mb-4 bg-white">
      <span class="ml-4 mr-2">当前年份：</span>
      <a-date-picker
        mode="year"
        class="w-50"
        :value="yearValue"
        @panelChange="onChange"
        format="YYYY"
      />
    </div>
    <ApiLineAnalysis
      :dateValue="dateValue"
      :api="getDealCountYearAnalysis"
      title="签单额月份同比"
      class="w-full"
    />
    <ApiLineAnalysis
      :dateValue="dateValue"
      :api="getSkipOrderYearAnalysis"
      title="滑单数量月份同比"
      class="w-full !my-4"
    />
    <ApiLineAnalysis
      :dateValue="dateValue"
      :api="getNewCustomerYearAnalysis"
      title="新增客资月份同比"
      class="w-full !my-4"
    />
    <ApiBarStackAnalysis
      :dateValue="dateValue"
      :api="getChannelYearAnalysis"
      title="各渠道获客数量月份同比"
      class="w-full !my-4"
      tag="年"
    />
    <ApiLineAnalysis
      :dateValue="dateValue"
      :api="getDealYearAnalysis"
      title="成交率月份同比"
      isPercent
      class="w-full !my-4"
    />
    <ApiLineAnalysis
      :dateValue="dateValue"
      :api="getInviteYearAnalysis"
      title="邀约率月份同比"
      isPercent
      class="w-full !my-4"
    />
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import ApiLineAnalysis from '/@/components/Analysis/ApiLineAnalysis.vue';
  import ApiBarStackAnalysis from '/@/components/Analysis/ApiBarStackAnalysis.vue';
  import { PageWrapper } from '/@/components/Page';
  import moment, { Moment } from 'moment';

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
      PageWrapper,
    },
    setup() {
      const yearValue = ref<Moment>(moment());
      const dateValue = computed(() => {
        return [yearValue.value.clone(), yearValue.value.clone()];
      });
      const onChange = (val) => {
        yearValue.value = val;
      };

      return {
        onChange,
        yearValue,
        dateValue,
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

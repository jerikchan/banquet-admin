<template>
  <div class="p-4">
    <GrowCard :loading="loading" class="enter-y" />
    <div class="!my-4 md:flex enter-y">
      <PerfCard :loading="loading" class="w-full md:w-1/3 !md:mr-4" />
      <SalesCard :loading="loading" class="w-full md:w-2/3 !md:mr-4 !md:mt-0 !mt-4" />
    </div>

    <div class="p-3 mb-4 bg-white">
      <span class="ml-4 mr-2">选择时间：</span>
      <a-date-picker
        mode="month"
        class="w-50"
        :value="yearValue"
        @panelChange="onChange"
        format="YYYY-MM"
      />
    </div>

    <Authority
      :value="[
        RoleEnum.SUPER,
        RoleEnum.SALES_OFFICER,
        RoleEnum.SALES_MANAGER,
        RoleEnum.MANAGER,
        RoleEnum.BOOKER,
        RoleEnum.ANALYST,
        RoleEnum.LOOK_ABOUT_ANLYLSIS,
        RoleEnum.FINANCE_MANAGER,
      ]"
    >
      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis
          :dateValue="dateValue"
          :api="getChannelAnalysisByMonthSelected"
          title="各渠道获客数量"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getCompleteTableAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="已完成桌单"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#91cc75"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getSkipOrderAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="滑单数数量"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
          color="#fac858"
        />
        <ApiBarAnalysis
          :api="getGoWhereAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="滑单去向"
          dataKey="directionNum"
          categoryKey="directionName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#ee6666"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis
          :api="getBanquetTypeDealAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="各宴会类型签单金额占比"
          class="w-full md:w-1/2"
        />
        <ApiBarStackAnalysis
          :api="getBanquetTypeBookAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="各销售宴会类型签单金额"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getTableNumberDealAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="已签单桌数"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#73c0de"
        />
        <ApiBarAnalysis
          :api="getTableMoneyDealAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="已签单均桌价统计"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#3ba272"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getRoomBookAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="各宴会厅预定数"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#fc8452"
        />
        <ApiBarAnalysis
          :api="getFoodBookAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="各餐标预定数"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#9a60b4"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getBanquetTypeNumBookAnalysisBySelectedMonth"
          :dateValue="dateValue"
          title="各宴会类型签单数"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#ea7ccc"
        />
        <ApiBarAnalysis
          :api="getDealMoneyAnalysisMonth"
          :dateValue="dateValue"
          title="已签单均单价"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#91cc75"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getDealDiscountAnalysisMonth"
          :dateValue="dateValue"
          title="本月签单优惠"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#5470c6"
        />
        <ApiBarAnalysis
          :api="getDealDiscountPercentAnalysisMonth"
          :dateValue="dateValue"
          title="签单优惠比率"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          isPercent
          color="#ea7ccc"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getDealPercentAnalysisMonth"
          :dateValue="dateValue"
          title="成交率"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          isPercent
          color="#fac858"
        />
        <ApiBarAnalysis
          :api="getInviteAnalysisMonth"
          :dateValue="dateValue"
          title="邀约率"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          isPercent
          color="#91cc75"
        />
      </div>
    </Authority>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import ApiPieAnalysis from '/@/components/Analysis/ApiPieAnalysis.vue';
  import ApiBarAnalysis from '/@/components/Analysis/ApiBarAnalysis.vue';
  import ApiBarStackAnalysis from '/@/components/Analysis/ApiBarStackAnalysis.vue';
  import moment, { Moment } from 'moment';
  import GrowCard from './components/GrowCard.vue';
  import PerfCard from './components/PerfCard.vue';
  import SalesCard from './components/SalesCard.vue';

  import {
    getChannelAnalysisByMonthSelected,
    getDealDiscountPercentAnalysisMonth,
    getSkipOrderAnalysisBySelectedMonth,
    getGoWhereAnalysisBySelectedMonth,
    getBanquetTypeDealAnalysisBySelectedMonth,
    getBanquetTypeBookAnalysisBySelectedMonth,
    getTableNumberDealAnalysisBySelectedMonth,
    getTableMoneyDealAnalysisBySelectedMonth,
    getRoomBookAnalysisBySelectedMonth,
    getFoodBookAnalysisBySelectedMonth,
    getBanquetTypeNumBookAnalysisBySelectedMonth,
    getDealMoneyAnalysisMonth,
    getDealDiscountAnalysisMonth,
    getInviteAnalysisMonth,
    getDealPercentAnalysisMonth,
    getChannelCompareAnalysis,
    getCompleteTableAnalysisBySelectedMonth,
  } from '/@/api/admin/analysis';

  export default defineComponent({
    components: {
      ApiPieAnalysis,
      ApiBarAnalysis,
      ApiBarStackAnalysis,
      GrowCard,
      PerfCard,
      SalesCard,
    },
    setup() {
      const loading = ref(false);

      const yearValue = ref<Moment>(moment());
      const dateValue = computed(() => {
        return [yearValue.value.clone(), yearValue.value.clone()];
      });
      const onChange = (val) => {
        yearValue.value = val;
      };

      return {
        loading,
        RoleEnum,
        onChange,
        yearValue,
        dateValue,
        getChannelAnalysisByMonthSelected,
        getDealDiscountPercentAnalysisMonth,
        getSkipOrderAnalysisBySelectedMonth,
        getGoWhereAnalysisBySelectedMonth,
        getBanquetTypeDealAnalysisBySelectedMonth,
        getBanquetTypeBookAnalysisBySelectedMonth,
        getTableNumberDealAnalysisBySelectedMonth,
        getTableMoneyDealAnalysisBySelectedMonth,
        getRoomBookAnalysisBySelectedMonth,
        getFoodBookAnalysisBySelectedMonth,
        getBanquetTypeNumBookAnalysisBySelectedMonth,
        getDealMoneyAnalysisMonth,
        getDealDiscountAnalysisMonth,
        getInviteAnalysisMonth,
        getDealPercentAnalysisMonth,
        getChannelCompareAnalysis,
        getCompleteTableAnalysisBySelectedMonth,
      };
    },
  });
</script>

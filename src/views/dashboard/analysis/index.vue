<template>
  <div class="p-4">
    <GrowCard :loading="loading" class="enter-y" />
    <div class="!my-4 md:flex enter-y">
      <PerfCard :loading="loading" class="h-300px w-full md:w-1/3 !md:mr-4" />
      <SalesCard :loading="loading" class="w-full md:w-2/3 !md:mr-4 !md:mt-0 !mt-4" />
    </div>
    <!-- <SiteAnalysis class="!my-4 enter-y" :loading="loading" /> -->
    <!-- <VisitRadar class="w-full md:w-1/3" :loading="loading" /> -->

    <Authority :value="[RoleEnum.SUPER, RoleEnum.SALES_OFFICER, RoleEnum.SALES_MANAGER]">
      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis
          :api="getChannelAnalysis"
          title="获客渠道各渠道获客数量统计"
          seriesName="获客渠道"
          class="w-full md:w-1/2"
        />
        <ApiPieAnalysis
          :api="getDealDiscountPercentAnalysis"
          title="统计本月签单优惠比率"
          seriesName="获客渠道"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getSkipOrderAnalysis"
          title="滑单数数量统计"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getGoWhereAnalysis"
          title="滑单去向统计"
          dataKey="customerNum"
          categoryKey="salesName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis
          :api="getBanquetTypeDealAnalysis"
          title="本月各宴会类型签单金额占比"
          seriesName="获客渠道"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getBanquetTypeBookAnalysis"
          title="各宴会类型预定金额"
          dataKey="customerNum"
          categoryKey="salesName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getTableNumberDealAnalysis"
          title="本月已签单桌数"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getTableMoneyDealAnalysis"
          title="本月已签单均桌价统计"
          dataKey="customerNum"
          categoryKey="salesName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getRoomBookAnalysis"
          title="各宴会厅预定数"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getFoodBookAnalysis"
          title="本月各餐标预定数"
          dataKey="customerNum"
          categoryKey="salesName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getBanquetTypeNumBookAnalysis"
          title="各宴会类型预定数"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getDealMoneyAnalysis"
          title="本月已签单均单价"
          dataKey="customerNum"
          categoryKey="salesName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getDealDiscountAnalysis"
          title="统计本月签单优惠"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getInviteAnalysis"
          title="邀约率"
          dataKey="customerNum"
          categoryKey="salesName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getDealPercentAnalysis"
          title="成交率"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
        />
        <div class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"></div>
      </div>
    </Authority>

    <Authority :value="[RoleEnum.SUPER, RoleEnum.SALES]">
      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis
          :api="getChannelAnalysis"
          title="获客渠道各渠道获客数量统计"
          seriesName="获客渠道"
          class="w-full md:w-1/2"
        />
        <ApiPieAnalysis
          :api="getBanquetTypeDealAnalysis"
          title="本月各宴会类型签单金额占比"
          seriesName="获客渠道"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getSkipOrderAnalysis"
          title="滑单数数量统计"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
        />
        <ApiBarAnalysis
          :api="getGoWhereAnalysis"
          title="滑单去向统计"
          dataKey="customerNum"
          categoryKey="salesName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>
    </Authority>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import PerfCard from './components/PerfCard.vue';
  import SalesCard from './components/SalesCard.vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import ApiPieAnalysis from './components/ApiPieAnalysis.vue';
  import ApiBarAnalysis from './components/ApiBarAnalysis.vue';
  import {
    getChannelAnalysis,
    getDealDiscountPercentAnalysis,
    getSkipOrderAnalysis,
    getGoWhereAnalysis,
    getBanquetTypeDealAnalysis,
    getBanquetTypeBookAnalysis,
    getTableNumberDealAnalysis,
    getTableMoneyDealAnalysis,
    getRoomBookAnalysis,
    getFoodBookAnalysis,
    getBanquetTypeNumBookAnalysis,
    getDealMoneyAnalysis,
    getDealDiscountAnalysis,
    getInviteAnalysis,
    getDealPercentAnalysis,
  } from '/@/api/admin/analysis';

  export default defineComponent({
    components: {
      GrowCard,
      PerfCard,
      SalesCard,
      ApiPieAnalysis,
      ApiBarAnalysis,
    },
    setup() {
      const loading = ref(false);
      return {
        loading,
        RoleEnum,
        getChannelAnalysis,
        getDealDiscountPercentAnalysis,
        getSkipOrderAnalysis,
        getGoWhereAnalysis,
        getBanquetTypeDealAnalysis,
        getBanquetTypeBookAnalysis,
        getTableNumberDealAnalysis,
        getTableMoneyDealAnalysis,
        getRoomBookAnalysis,
        getFoodBookAnalysis,
        getBanquetTypeNumBookAnalysis,
        getDealMoneyAnalysis,
        getDealDiscountAnalysis,
        getInviteAnalysis,
        getDealPercentAnalysis,
      };
    },
  });
</script>

<template>
  <div class="p-4">
    <GrowCard :loading="loading" class="enter-y" />
    <div class="!my-4 md:flex enter-y">
      <PerfCard :loading="loading" class="w-full md:w-1/3 !md:mr-4" />
      <SalesCard :loading="loading" class="w-full md:w-2/3 !md:mr-4 !md:mt-0 !mt-4" />
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
      ]"
    >
      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis :api="getChannelAnalysis" title="各渠道获客数量" class="w-full md:w-1/2" />
        <ApiBarAnalysis
          :api="getCompleteTableAnalysis"
          title="已完成桌单"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#91cc75"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getSkipOrderAnalysis"
          title="滑单数数量"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
          color="#fac858"
        />
        <ApiBarAnalysis
          :api="getGoWhereAnalysis"
          title="滑单去向"
          dataKey="directionNum"
          categoryKey="directionName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#ee6666"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis
          :api="getBanquetTypeDealAnalysis"
          title="各宴会类型签单金额占比"
          class="w-full md:w-1/2"
        />
        <ApiBarStackAnalysis
          :api="getBanquetTypeBookAnalysis"
          title="各销售宴会类型签单金额"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getTableNumberDealAnalysis"
          title="已签单桌数"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#73c0de"
        />
        <ApiBarAnalysis
          :api="getTableMoneyDealAnalysis"
          title="已签单均桌价统计"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#3ba272"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getRoomBookAnalysis"
          title="各宴会厅预定数"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#fc8452"
        />
        <ApiBarAnalysis
          :api="getFoodBookAnalysis"
          title="各餐标预定数"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#9a60b4"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getBanquetTypeNumBookAnalysis"
          title="各宴会类型签单数"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#ea7ccc"
        />
        <ApiBarAnalysis
          :api="getDealMoneyAnalysis"
          title="已签单均单价"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#91cc75"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getDealDiscountAnalysis"
          title="本月签单优惠"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          color="#5470c6"
        />
        <ApiBarAnalysis
          :api="getDealDiscountPercentAnalysis"
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
          :api="getDealPercentAnalysis"
          title="成交率"
          dataKey="value"
          categoryKey="name"
          class="w-full md:w-1/2"
          isPercent
          color="#fac858"
        />
        <ApiBarAnalysis
          :api="getInviteAnalysis"
          title="邀约率"
          dataKey="value"
          categoryKey="name"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          isPercent
          color="#91cc75"
        />
      </div>
    </Authority>

    <!-- <Authority :value="[RoleEnum.SALES]">
      <div class="!my-4 md:flex enter-y">
        <ApiPieAnalysis :api="getChannelAnalysis" title="各渠道获客数量" class="w-full md:w-1/2" />
        <ApiPieAnalysis
          :api="getBanquetTypeDealAnalysis"
          title="各宴会类型签单金额占比"
          class="w-full md:w-1/2"
        />
      </div>

      <div class="!my-4 md:flex enter-y">
        <ApiBarAnalysis
          :api="getSkipOrderAnalysis"
          title="滑单数数量"
          dataKey="customerNum"
          categoryKey="salesName"
          class="w-full md:w-1/2"
          color="#fac858"
        />
        <ApiBarAnalysis
          :api="getGoWhereAnalysis"
          title="滑单去向"
          dataKey="directionNum"
          categoryKey="directionName"
          class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
          color="#ee6666"
        />
      </div>
    </Authority> -->
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import PerfCard from './components/PerfCard.vue';
  import SalesCard from './components/SalesCard.vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import ApiPieAnalysis from '/@/components/Analysis/ApiPieAnalysis.vue';
  import ApiBarAnalysis from '/@/components/Analysis/ApiBarAnalysis.vue';
  // import ApiBarDatasetAnalysis from '/@/components/Analysis/ApiBarDatasetAnalysis.vue';
  import ApiBarStackAnalysis from '/@/components/Analysis/ApiBarStackAnalysis.vue';

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
    getChannelCompareAnalysis,
    getCompleteTableAnalysis,
  } from '/@/api/admin/analysis';

  export default defineComponent({
    components: {
      GrowCard,
      PerfCard,
      SalesCard,
      ApiPieAnalysis,
      ApiBarAnalysis,
      // ApiBarDatasetAnalysis,
      ApiBarStackAnalysis,
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
        getChannelCompareAnalysis,
        getCompleteTableAnalysis,
      };
    },
  });
</script>

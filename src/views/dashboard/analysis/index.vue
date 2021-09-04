<template>
  <div class="p-4">
    <GrowCard :loading="loading" class="enter-y" />
    <div class="!my-4 md:flex enter-y">
      <PerfCard :loading="loading" class="h-300px w-full md:w-1/3 !md:mr-4" />
      <SalesCard :loading="loading" class="w-full md:w-2/3 !md:mr-4 !md:mt-0 !mt-4" />
    </div>
    <!-- <SiteAnalysis class="!my-4 enter-y" :loading="loading" /> -->
    <!-- <VisitRadar class="w-full md:w-1/3" :loading="loading" /> -->

    <div class="!my-4 md:flex enter-y">
      <ChannelAnalysis class="w-full md:w-1/2" :loading="loading" />
      <!-- <ChannelAnalysis2 class="w-full md:w-1/2 !md:mx-4 !md:my-0 !my-4" :loading="loading" /> -->
      <DealDiscountPercentAnalysis
        class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
        :loading="loading"
      />
    </div>

    <div class="!my-4 md:flex enter-y">
      <SkipOrderAnalysis class="w-full md:w-1/2" :loading="loading" />
      <SkipGoWhere class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
    </div>

    <div class="!my-4 md:flex enter-y">
      <BanquetTypeDealAnalysis class="w-full md:w-1/2" :loading="loading" />
      <BanquetTypeBookAnalysis class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
    </div>

    <div class="!my-4 md:flex enter-y">
      <TableNumberDealAnalysis class="w-full md:w-1/2" :loading="loading" />
      <TableMoneyDealAnalysis class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
    </div>

    <div class="!my-4 md:flex enter-y">
      <RoomBookAnalysis class="w-full md:w-1/2" :loading="loading" />
      <FoodBookAnalysis class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
    </div>

    <div class="!my-4 md:flex enter-y">
      <BanquetTypeNumBookAnalysis class="w-full md:w-1/2" :loading="loading" />
      <DealMoneyAnalysis class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
    </div>

    <div class="!my-4 md:flex enter-y">
      <DealDiscountAnalysis class="w-full md:w-1/2" :loading="loading" />
      <InviteAnalysis class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
    </div>

    <div class="!my-4 md:flex enter-y">
      <DealPercentAnalysis class="w-full md:w-1/2" :loading="loading" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import PerfCard from './components/PerfCard.vue';
  import SalesCard from './components/SalesCard.vue';
  import ChannelAnalysis from './components/ChannelAnalysis.vue';
  // import ChannelAnalysis2 from './components/ChannelAnalysis2.vue';
  import SkipOrderAnalysis from './components/SkipOrderAnalysis.vue';
  import SkipGoWhere from './components/SkipGoWhere.vue';
  import BanquetTypeDealAnalysis from './components/BanquetTypeDealAnalysis.vue';
  import BanquetTypeBookAnalysis from './components/BanquetTypeBookAnalysis.vue';
  import TableNumberDealAnalysis from './components/TableNumberDealAnalysis.vue';
  import TableMoneyDealAnalysis from './components/TableMoneyDealAnalysis.vue';
  import RoomBookAnalysis from './components/RoomBookAnalysis.vue';
  import FoodBookAnalysis from './components/FoodBookAnalysis.vue';
  import BanquetTypeNumBookAnalysis from './components/BanquetTypeNumBookAnalysis.vue';
  import DealMoneyAnalysis from './components/DealMoneyAnalysis.vue';
  import DealDiscountAnalysis from './components/DealDiscountAnalysis.vue';
  import DealDiscountPercentAnalysis from './components/DealDiscountPercentAnalysis.vue';
  import DealPercentAnalysis from './components/DealPercentAnalysis.vue';
  import InviteAnalysis from './components/InviteAnalysis.vue';

  export default defineComponent({
    components: {
      GrowCard,
      PerfCard,
      SalesCard,
      ChannelAnalysis,
      // ChannelAnalysis2,
      SkipOrderAnalysis,
      SkipGoWhere,
      BanquetTypeDealAnalysis,
      BanquetTypeBookAnalysis,
      TableNumberDealAnalysis,
      TableMoneyDealAnalysis,
      RoomBookAnalysis,
      FoodBookAnalysis,
      BanquetTypeNumBookAnalysis,
      DealMoneyAnalysis,
      DealDiscountAnalysis,
      DealDiscountPercentAnalysis,
      DealPercentAnalysis,
      InviteAnalysis,
    },
    setup() {
      const loading = ref(false);

      // setTimeout(() => {
      //   loading.value = false;
      // }, 1500);
      return { loading };
    },
  });
</script>

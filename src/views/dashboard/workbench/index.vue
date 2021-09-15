<template>
  <PageWrapper>
    <template #headerContent> <WorkbenchHeader ref="workBeanch" /> </template>
    <div class="lg:flex">
      <div class="lg:w-7/10 w-full !mr-4 enter-y">
        <Authority
          :value="[
            RoleEnum.SUPER,
            RoleEnum.SALES_OFFICER,
            RoleEnum.SALES_MANAGER,
            RoleEnum.MANAGER,
          ]"
        >
          <ProjectCard :loading="loading" class="enter-y" />
        </Authority>
        <Authority
          :value="[
            RoleEnum.SUPER,
            RoleEnum.MANAGER,
            RoleEnum.HOUSEKEEPER,
            RoleEnum.SALES,
            RoleEnum.HOUSEKEEPER_MANAGER,
          ]"
        >
          <BacklogCard :loading="loading" class="!my-4 enter-y" />
        </Authority>
      </div>
      <div class="w-full lg:w-3/10 enter-y">
        <EncourageModal :loading="loading" class="enter-y" />
        <DynamicInfo :loading="loading" class="!my-4 enter-y" />
      </div>
    </div>
    <!-- <div class="my-4 lg:flex">
      <div class="w-full lg:w-7/10 !mr-4 enter-y">
      </div>
      <div class="w-full lg:w-3/10 enter-y">
      </div>
    </div> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  // import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import WorkbenchHeader from './components/WorkbenchHeader.vue';
  import ProjectCard from './components/ProjectCard.vue';
  // import QuickNav from './components/QuickNav.vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  // import SaleRadar from './components/SaleRadar.vue';
  import BacklogCard from './components/BacklogCard.vue';
  import EncourageModal from './components/EncourageModal.vue';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    components: {
      PageWrapper,
      WorkbenchHeader,
      ProjectCard,
      // QuickNav,
      DynamicInfo,
      // SaleRadar,
      // Card,
      BacklogCard,
      EncourageModal,
    },
    setup() {
      const loading = ref(true);

      setTimeout(() => {
        loading.value = false;
      }, 1500);

      // setInterval(() => {
      //   // BacklogCard.countBacklogNum();
      //   // this.$refs['workBeanch'].countBacklogNum();
      // }, 5000);

      return {
        loading,
        RoleEnum,
      };
    },
  });
</script>

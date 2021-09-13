<template>
  <PageWrapper contentClass="flex" title="业绩系数设置">
    <div class="p-1">
      <a-spin :spinning="loading">
        <Authority :value="[RoleEnum.SUPER, RoleEnum.BOOKER]">
          <div class="flex justify-end p-3 mb-4 bg-gray-50">
            <a-button type="primary" @click="handleCreate">新增系数</a-button>
          </div>
        </Authority>
        <a-calendar v-model:value="dateValue" class="bg-gray-50" mode="month">
          <template #dateCellRender="{ current: value }">
            <ul class="events">
              <li
                class="flex mt-1 flex-nowrap"
                v-for="item in getListData(value)"
                :key="item.content"
              >
                <!-- <a-badge :status="item.type" :text="item.content" /> -->
                <div class="mr-1 truncate" :title="item.modifyName">{{ item.modifyName }}</div>
                <a-tag v-if="item.ratio" color="#108ee9">{{ item.ratio }}</a-tag>
              </li>
            </ul>
          </template>
        </a-calendar>
      </a-spin>
    </div>
    <RatioModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, watch, unref } from 'vue';
  import moment, { Moment } from 'moment';
  import { PageWrapper } from '/@/components/Page';
  import { getRatioInfos } from '/@/api/admin/performance';
  import { useModal } from '/@/components/Modal';
  import RatioModal from './RatioModal.vue';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    components: { PageWrapper, RatioModal },
    setup() {
      const dateValue = ref<Moment>(moment());
      // const roomOptions = ref<any>([]);
      // const roomValue = ref<string>('');
      const loading = ref(false);
      const canlendarData = ref<any>([]);
      const [registerModal, { openModal }] = useModal();

      const _getCalendarData = async () => {
        try {
          // loading.value = true;
          const data = await getRatioInfos({
            // roomId: unref(roomValue),
            startTime: dateValue.value,
          });
          canlendarData.value = data;
        } finally {
          loading.value = false;
        }
      };

      _getCalendarData();

      const getListData = (value: Moment) => {
        const listData = unref(canlendarData).filter((item) => {
          const isSameDay = value.isSame(item.modifyTime, 'days');
          return isSameDay;
        });
        return listData || [];
      };

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      async function handleSuccess() {
        await _getCalendarData();
      }

      watch(() => dateValue.value, _getCalendarData);

      return {
        dateValue,
        getListData,
        canlendarData,
        loading,
        handleCreate,
        registerModal,
        RoleEnum,
        handleSuccess,
      };
    },
  });
</script>

<style>
  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }

  .notes-month {
    text-align: center;
    font-size: 28px;
  }

  .notes-month section {
    font-size: 28px;
  }

  .ant-fullcalendar-fullscreen .ant-fullcalendar-header .ant-radio-group {
    display: none;
  }
</style>

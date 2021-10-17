<template>
  <PageWrapper contentClass="flex" title="档期列表">
    <div class="p-1">
      <a-spin :spinning="loading">
        <div class="p-3 mb-4 bg-orange-50">
          <span class="ml-4 mr-2">厅房名称</span>
          <a-select
            class="w-50"
            placeholder="请选择厅房"
            v-model:value="roomValue"
            :options="roomOptions"
          />
          <Authority :value="[RoleEnum.SUPER, RoleEnum.BOOKER]">
            <a-button type="primary" @click="handleExportSchedule" style="float: right"
              >导出所有档期</a-button
            >
          </Authority>
        </div>
        <a-calendar :value="dateValue" class="bg-orange-50" mode="month" @panelChange="onChange">
          <template #dateCellRender="{ current: value }">
            <ul class="events">
              <li
                class="flex justify-between mt-1"
                v-for="item in getRatioListData(value)"
                :key="item.content"
              >
                <!-- <a-badge :status="item.type" :text="item.content" /> -->
                <a-tag :title="item.name" color="#108ee9">{{ item.name }}</a-tag>
                <!-- <a-tag v-if="item.ratio" color="#108ee9">{{ item.ratio }}</a-tag> -->
              </li>
              <li
                class="flex justify-between mt-1"
                v-for="item in getListData(value)"
                :key="item.content"
              >
                <!-- <a-badge :status="item.type" :text="item.content" /> -->
                <a-tag
                  class="truncate"
                  :title="item.banquetType"
                  :color="getColors(item.scheduleType)"
                  >{{ item.scheduleTypeStr }}</a-tag
                >
                <a-tag v-if="item.banquetType" color="#108ee9">{{ item.banquetType }}</a-tag>
              </li>
            </ul>
          </template>
        </a-calendar>
      </a-spin>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, watch, unref } from 'vue';
  import moment, { Moment } from 'moment';
  import { PageWrapper } from '/@/components/Page';
  import { getRoomList, getBanquetList } from '/@/api/admin/banquet';
  import { getRatioInfosByYearAndMonth } from '/@/api/admin/performance';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useGlobSetting } from '/@/hooks/setting';

  const COLOR_LIST = ['pink', 'orange', 'green', 'cyan', 'blue', 'purple'];

  export default defineComponent({
    components: { PageWrapper },
    setup() {
      const dateValue = ref<Moment>(moment());
      const roomOptions = ref<any>([]);
      const roomValue = ref<string>('');
      const canlendarData = ref<any>([]);
      const loading = ref(true);
      const banquetOptions = ref<any>([]);
      const { devUrl } = useGlobSetting();

      const getColors = (id) => {
        const i = parseInt(id) || 0;
        return COLOR_LIST[i % COLOR_LIST.length];
      };

      const _getRoomList = async () => {
        // debugger;
        const data = await getRoomList();
        const roomList = (data as any).map(({ id, roomName }) => ({
          value: id,
          label: roomName,
        }));
        // debugger;
        roomOptions.value = roomList;
        roomValue.value = roomOptions.value?.[0]?.value;
        loading.value = false;
      };

      _getRoomList();

      const _getBanquetList = async () => {
        loading.value = true;
        const banquetList = await getBanquetList({
          roomId: unref(roomValue),
          startTime: dateValue.value,
        });
        banquetOptions.value = banquetList;
        loading.value = false;
      };

      const _getCalendarData = async () => {
        try {
          // loading.value = true;
          const data = await getRatioInfosByYearAndMonth({
            // roomId: unref(roomValue),
            startTime: dateValue.value,
          });
          canlendarData.value = data;
        } finally {
          loading.value = false;
        }
      };

      _getCalendarData();

      watch(() => roomValue.value, _getBanquetList);
      watch(
        () => dateValue.value,
        (val, oldVal) => {
          if (!val.isSame(oldVal, 'month')) {
            _getCalendarData();
            _getBanquetList();
          }
        }
      );

      const getListData = (value: Moment) => {
        // debugger;
        const listData = unref(banquetOptions).filter((item) => {
          // debugger;
          const isSameDay = value.isSame(item.banquetTime, 'days');
          return isSameDay;
        });
        return listData || [];
      };

      const getRatioListData = (value: Moment) => {
        const listData = unref(canlendarData).filter((item) => {
          // debugger;
          const isSameDay = value.isSame(item.banquetDate, 'days');
          return isSameDay;
        });
        return listData || [];
      };

      const onChange = (val) => {
        dateValue.value = val;
      };

      function handleExportSchedule() {
        window.location.href = devUrl + '/excel/exportExcelScheduleInfo';
      }

      return {
        onChange,
        dateValue,
        getListData,
        roomOptions,
        roomValue,
        canlendarData,
        getRatioListData,
        loading,
        getColors,
        RoleEnum,
        handleExportSchedule,
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

<template>
  <PageWrapper contentClass="flex" title="业绩系数设置">
    <div class="p-1">
      <a-spin :spinning="loading">
        <!-- <Authority :value="[RoleEnum.SUPER, RoleEnum.BOOKER]">
          <div class="flex justify-end p-3 mb-4 bg-orange-50">
            <a-button type="primary" @click="handleCreate">新增系数</a-button>
          </div>
        </Authority> -->
        <a-calendar
          :value="dateValue"
          @panelChange="onChange"
          class="bg-orange-50"
          mode="month"
          @select="onSelect"
        >
          <template #dateCellRender="{ current: value }">
            <ul class="events">
              <li
                class="flex justify-between mt-1"
                v-for="item in getListData(value)"
                :key="item.content"
              >
                <!-- <a-badge :status="item.type" :text="item.content" /> -->
                <a-tag class="truncate" :title="item.name" :color="getColors(item.ratioType)">{{
                  item.name
                }}</a-tag>
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
  import { defineComponent, ref, watch, unref, reactive } from 'vue';
  import moment, { Moment } from 'moment';
  import { PageWrapper } from '/@/components/Page';
  import { getRatioInfosByYearAndMonth, getRatioInfo } from '/@/api/admin/performance';
  import { useModal } from '/@/components/Modal';
  import RatioModal from './RatioModal.vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  const COLOR_LIST = ['pink', 'blue', 'green', 'orange', 'cyan', 'red', 'purple'];

  export default defineComponent({
    components: { PageWrapper, RatioModal },
    setup() {
      const dateValue = ref<Moment>(moment());
      // const roomOptions = ref<any>([]);
      // const roomValue = ref<string>('');
      const loading = ref(false);
      const canlendarData = ref<any>([]);
      const [registerModal, { openModal }] = useModal();
      const tempData = reactive({});
      // let flag = false;

      const getColors = (id) => {
        const i = parseInt(id) || 0;
        return COLOR_LIST[i % COLOR_LIST.length];
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

      const getListData = (value: Moment) => {
        const listData = unref(canlendarData).filter((item) => {
          // debugger;
          const isSameDay = value.isSame(item.banquetDate, 'days');
          return isSameDay;
        });
        return listData || [];
      };

      function handleCreate(value: any) {
        console.log(value);
        openModal(true, {
          isUpdate: false,
          ...value,
        });
      }

      async function handleSuccess() {
        await _getCalendarData();
      }

      watch(
        () => dateValue.value,
        (val, oldVal) => {
          if (!val.isSame(oldVal, 'month')) {
            _getCalendarData();
          }
        }
      );

      const onChange = (val) => {
        dateValue.value = val;
      };

      const onSelect = async (val) => {
        console.log('点击日期，准备打开弹窗');
        // debugger;
        console.log(moment(val).format('YYYY-MM-DD'));
        const detailInfo = await getRatioInfo({ banquetDate: moment(val).format('YYYY-MM-DD') });
        console.log(detailInfo);
        if (null === detailInfo) {
          tempData.banquetDate = moment(val).format('YYYY-MM-DD');
          handleCreate(tempData);
        } else {
          // Object.assign(tempData, detailInfo);
          // console.log(tempData);
          handleCreate(detailInfo);
        }
        // handleCreate(moment(val).format('YYYY-MM-DD'));
      };

      return {
        onSelect,
        onChange,
        dateValue,
        getListData,
        canlendarData,
        loading,
        handleCreate,
        registerModal,
        RoleEnum,
        handleSuccess,
        getColors,
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

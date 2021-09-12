<template>
  <Card :title="title" :loading="loading">
    <template #extra v-if="showTag">
      <Tag :color="color">{{ '月' }}</Tag>
    </template>
    <!-- 查询日期：<a-range-picker v-model:value="dateValue" placeholder="请选择日期" /> -->
    <!-- <a-button class="ml-2">查询</a-button> -->
    <div ref="chartRef" class="flex items-center justify-center my-10" :style="{ width, height }">
      <a-empty v-if="!data.list" />
    </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref, unref, watch } from 'vue';

  import { Card, Tag } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import moment, { Moment } from 'moment';

  export default defineComponent({
    components: { Card, Tag },
    props: {
      color: {
        type: String as PropType<string>,
        default: '#019680',
      },
      title: {
        type: String as PropType<string>,
        default: '柱状图统计',
      },
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: '300px',
      },
      api: {
        type: Function as PropType<(any) => {}>,
        required: true,
      },
      seriesName: {
        type: String as PropType<string>,
      },
      categoryKey: {
        type: String as PropType<string>,
        default: 'salesName',
      },
      dataKey: {
        type: String as PropType<string>,
        default: 'customerNum',
      },
      dateValue: {
        type: Array as PropType<Moment[]>,
        default() {
          return [moment().startOf('month'), moment().endOf('month')];
        },
      },
      showTag: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
      isPercent: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup(props: any) {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const data = ref<any>({});
      const loading = ref(false);

      async function getData() {
        loading.value = true;
        const _data =
          (await props.api({
            startTime: props.dateValue[0],
            endTime: props.dateValue[1],
          })) || {};
        data.value = _data;
        loading.value = false;
      }

      getData();

      watch(
        () => props.dateValue,
        () => {
          getData();
        }
      );

      watch(
        () => data.value,
        () => {
          if (!unref(data).list) {
            return;
          }
          setOptions({
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                label: {
                  show: false,
                },
              },
              formatter: (params: any) =>
                props.isPercent
                  ? `${params[0].name}<br/>${params[0].marker}&nbsp;&nbsp;&nbsp;&nbsp${params[0].value}%`
                  : `${params[0].name}<br/>${params[0].marker}&nbsp;&nbsp;&nbsp;&nbsp${params[0].value}`,
            },
            grid: { left: '1%', right: '1%', top: '10%', bottom: 0, containLabel: true },
            xAxis: {
              type: 'category',
              data: data.value.list.map((item: any) => item[props.categoryKey]),
            },
            yAxis: {
              type: 'value',
              // max(value) {
              //   return value.max + Math.ceil(value.max / 5);
              // },
              splitNumber: 5,
              minInterval: 1,
              axisLabel: {
                formatter: props.isPercent ? '{value}%' : undefined,
              },
            },
            series: [
              {
                data: data.value.list.map((item: any) => item[props.dataKey]),
                type: 'bar',
                barMaxWidth: 80,
                color: props.color,
                label: {
                  show: true,
                  position: 'top',
                  color: '#666',
                  fontSize: 14,
                  formatter: props.isPercent ? '{c}%' : undefined,
                },
              },
            ],
          });
        },
        { immediate: true }
      );
      return { chartRef, data, loading };
    },
  });
</script>

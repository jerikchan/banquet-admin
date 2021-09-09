<template>
  <Card :title="title" :loading="loading">
    查询日期：<a-range-picker v-model:value="dateValue" placeholder="请选择日期" />
    <!-- <a-button class="ml-2">查询</a-button> -->
    <div ref="chartRef" class="flex items-center justify-center my-10" :style="{ width, height }">
      <a-empty v-if="!data.list" />
    </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref, unref, watch } from 'vue';

  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import moment, { Moment } from 'moment';

  export default defineComponent({
    components: { Card },
    props: {
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
    },
    setup(props) {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const data = ref<any>({});
      const dateValue = ref<Moment[]>([moment().startOf('month'), moment().endOf('month')]);
      const loading = ref(false);

      async function getData() {
        loading.value = true;
        data.value = await props.api({
          startTime: dateValue.value[0],
          endTime: dateValue.value[1],
        });
        loading.value = false;
      }

      getData();

      watch(
        () => dateValue.value,
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
                lineStyle: {
                  width: 1,
                  color: '#019680',
                },
              },
            },
            grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
            xAxis: {
              type: 'category',
              data: data.value.list.map((item) => item[props.categoryKey]),
            },
            yAxis: {
              type: 'value',
              max: data.value.max,
              splitNumber: data.value.splitNumber,
            },
            series: [
              {
                data: data.value.list.map((item) => item[props.dataKey]),
                type: 'bar',
                barMaxWidth: 80,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: '#666',
                        fontSize: 14,
                      },
                    },
                  },
                },
              },
            ],
          });
        },
        { immediate: true }
      );
      return { chartRef, data, dateValue };
    },
  });
</script>

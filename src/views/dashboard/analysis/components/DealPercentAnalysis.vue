<template>
  <Card title="成交率" :loading="loading">
    <div ref="chartRef" :style="{ height, width }"></div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, watch, ref, unref, Ref } from 'vue';

  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { getDealPercentAnalysis } from '/@/api/admin/analysis';

  import { basicProps } from './props';
  export default defineComponent({
    components: { Card },
    props: basicProps,
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const data = ref<any>({});
      (async () => {
        data.value = await getDealPercentAnalysis();
      })();

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
              data: data.value.list.map(({ salesName }) => salesName),
            },
            yAxis: {
              type: 'value',
              max: data.value.max,
              splitNumber: data.value.splitNumber,
            },
            series: [
              {
                data: data.value.list.map(({ customerNum }) => customerNum),
                type: 'bar',
                barMaxWidth: 80,
              },
            ],
          });
        }
      );
      return { chartRef };
    },
  });
</script>

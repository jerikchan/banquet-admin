<template>
  <Card title="获客渠道获客数量" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref, unref, watch } from 'vue';

  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { getChannelAnalysis } from '/@/api/admin/analysis';

  export default defineComponent({
    components: { Card },
    props: {
      loading: Boolean,
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: '300px',
      },
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const data = ref<any>({});

      (async () => {
        data.value = await getChannelAnalysis();
      })();

      watch(
        () => data.value,
        () => {
          if (!unref(data).list) {
            return;
          }
          setOptions({
            tooltip: {
              trigger: 'item',
            },

            series: [
              {
                name: '获客渠道',
                type: 'pie',
                radius: '80%',
                center: ['50%', '50%'],
                color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
                data: [
                  ...unref(data).list,
                  // { value: 500, name: '电子产品' },
                  // { value: 310, name: '服装' },
                  // { value: 274, name: '化妆品' },
                  // { value: 400, name: '家居' },
                ].sort(function (a, b) {
                  return a.value - b.value;
                }),
                roseType: 'radius',
                animationType: 'scale',
                animationEasing: 'exponentialInOut',
                animationDelay: function () {
                  return Math.random() * 400;
                },
                label: {
                  show: true, //饼图上的数据是否展示true展示false不展示
                  position: 'outer', //饼图上的数据展示位置inner是展示在内部
                  formatter: '{b} {c}', //饼图上展示的数据格式
                  color: '#666',
                  fontSize: 14,
                },
              },
            ],
          });
        },
        { immediate: true }
      );
      return { chartRef };
    },
  });
</script>

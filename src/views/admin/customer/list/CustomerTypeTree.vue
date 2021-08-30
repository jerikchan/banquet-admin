<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="客户类型"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      :replaceFields="{ key: 'value', title: 'label' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { getCustomerTypeList } from '/@/api/admin/customer';

  export default defineComponent({
    name: 'CustomerTypeTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        treeData.value = (await getCustomerTypeList()) as unknown as TreeItem[];
        console.log(treeData.value);
      }

      function handleSelect(keys: string, e) {
        emit('select', keys[0]);
        console.log(keys, e);
      }

      onMounted(() => {
        fetch();
      });
      return { treeData, handleSelect };
    },
  });
</script>

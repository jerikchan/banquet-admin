<template>
  <PageWrapper
    title="前端权限示例"
    contentBackground
    contentClass="p-4"
    content="由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"
  >
    <!-- <CurrentPermissionMode /> -->

    <p>
      当前角色: <a> {{ userStore.getRoleList }} </a>
    </p>
    <Alert class="mt-4" type="info" message="点击后请查看左侧菜单变化" show-icon />

    <div class="mt-4">
      权限切换(请先切换权限模式为前端角色权限模式):
      <a-button-group>
        <a-button
          v-for="key in roleKeys"
          :key="key"
          @click="changeRole(RoleEnum[key])"
          :type="hasPermission(RoleEnum[key]) ? 'primary' : 'default'"
        >
          {{ RoleEnum[key] }}
        </a-button>
      </a-button-group>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { useUserStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { Alert, PageWrapper },
    setup() {
      const { changeRole, hasPermission } = usePermission();
      const userStore = useUserStore();
      const roleKeys = Object.keys(RoleEnum);

      return {
        userStore,
        RoleEnum,
        roleKeys,
        changeRole,
        hasPermission,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>

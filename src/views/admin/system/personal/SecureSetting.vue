<template>
  <CollapseContainer title="安全设置" :canExpan="false">
    <List>
      <template v-for="item in list" :key="item.key">
        <ListItem>
          <ListItemMeta>
            <template #title>
              {{ item.title }}
              <div class="extra" v-if="item.extra" @click="onExTraClick(item.key)">
                {{ item.extra }}
              </div>
            </template>
            <template #description>
              <div>{{ item.description }}</div>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
    <ChangePasswordModal @register="registerModal" @success="handleSuccess" />
  </CollapseContainer>
</template>
<script lang="ts">
  import { List } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';

  import { secureSettingList } from './data';
  import ChangePasswordModal from './ChangePasswordModal.vue';
  import { useModal } from '/@/components/Modal';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      CollapseContainer,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      ChangePasswordModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const userStore = useUserStore();

      function onExTraClick(key) {
        if (key === '1') {
          handleChangePassword();
        }
      }

      function handleChangePassword() {
        openModal(true);
      }

      function handleSuccess() {
        debugger;
        userStore.logout(true);
      }

      return {
        list: secureSettingList,
        onExTraClick,
        registerModal,
        handleSuccess,
      };
    },
  });
</script>
<style lang="less" scoped>
  .extra {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    font-weight: normal;
    color: #1890ff;
    cursor: pointer;
  }
</style>

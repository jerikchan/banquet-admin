<template>
  <h2
    :class="`${prefixCls}-form-title`"
    class="mb-3 text-2xl font-bold text-center text-white xl:text-3xl enter-x xl:text-left"
  >
    {{ getFormTitle }}
  </h2>
</template>
<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { LoginStateEnum, useLoginState } from './useLogin';
  import { useDesign } from '/@/hooks/web/useDesign';

  export default defineComponent({
    name: 'LoginFormTitle',
    setup() {
      const { t } = useI18n();

      const { prefixCls } = useDesign('login');
      const { getLoginState } = useLoginState();

      const getFormTitle = computed(() => {
        const titleObj = {
          [LoginStateEnum.RESET_PASSWORD]: t('sys.login.forgetFormTitle'),
          [LoginStateEnum.LOGIN]: t('sys.login.signInFormTitle'),
          [LoginStateEnum.REGISTER]: t('sys.login.signUpFormTitle'),
          [LoginStateEnum.MOBILE]: t('sys.login.mobileSignInFormTitle'),
          [LoginStateEnum.QR_CODE]: t('sys.login.qrSignInFormTitle'),
        };
        return titleObj[unref(getLoginState)];
      });

      return {
        getFormTitle,
        prefixCls,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-login-form-title';

  .@{prefix-cls} {
    @media (max-width: @screen-xl) {
      color: rgba(0, 0, 0, 0.85);
    }
  }
</style>

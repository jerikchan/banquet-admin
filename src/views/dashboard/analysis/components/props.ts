import { PropType } from 'vue';

export interface BasicProps {
  width: string;
  height: string;
  loading: Boolean;
}
export const basicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '280px',
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

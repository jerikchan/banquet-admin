import type { App } from 'vue';
// import { Icon } from './Icon';
import { Button } from './Button';
import {
  // Need
  Button as AntButton,
  Input,
  Layout,
  Cascader,
  Upload,
  Empty,
  DatePicker,
} from 'ant-design-vue';

import { Authority } from '/@/components/Authority';

const compList = [AntButton.Group];

export function registerGlobComp(app: App) {
  compList.forEach((comp) => {
    app.component(comp.name || comp.displayName, comp);
  });

  app.use(Input).use(Button).use(Layout).use(Cascader).use(Upload).use(Empty).use(DatePicker);

  app.use(Authority);
}

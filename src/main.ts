import 'ant-design-vue/dist/antd.min.css';
import 'element-plus/dist/index.css';
import '@kunlun/vue-ui-antd/dist/kunlun-vue-ui-antd.css';
import '@kunlun/vue-ui-el/dist/kunlun-vue-ui-el.css';
import '@kunlun/designer-common/dist/kunlun-designer-common.css';
import '@kunlun/model-designer/dist/kunlun-model-designer.css';

import 'reflect-metadata';
import { VueOioProvider } from '@kunlun/dependencies';

// 设计器
import '@kunlun/ui-designer-dependencies';
import '@kunlun/model-designer';

VueOioProvider({
  http: {
    url: window.location.origin,
    enableTranslate: true
  },
  browser: {
    title: 'Oinone - 构你想象!',
    favicon: 'https://pamirs.oss-cn-hangzhou.aliyuncs.com/pamirs/image/default_favicon.ico'
  }
});

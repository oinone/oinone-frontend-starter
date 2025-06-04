import 'ant-design-vue/dist/antd.min.css';
import 'element-plus/dist/index.css';
import '@oinone/kunlun-vue-ui-antd/dist/oinone-kunlun-vue-ui-antd.css';
import '@oinone/kunlun-vue-ui-el/dist/oinone-kunlun-vue-ui-el.css';

import 'reflect-metadata';
import { VueOioProvider } from '@oinone/kunlun-dependencies';

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

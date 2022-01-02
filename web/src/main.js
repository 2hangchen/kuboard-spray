import { createApp } from 'vue'
import router from './router/index.js'
import {initKuboardMfe} from './micro-front-end.js'

import ElementPlus from 'element-plus';
import './styles/element-variables.scss'
import './styles/element-ui.css'
import icons from './styles/el-icons'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import store from './store'
import i18n from './i18n'
import initAxios from './utils/axios.js'
import openUrlInBlank from './utils/open-in-blank.js'

import components from './components/index.js'

import { VueClipboard } from '@soerenmartius/vue3-clipboard'

import App from './App.vue'

import axios from 'axios'

axios.get("./version.json").then(resp => {
  window.KuboardSpray = { version: resp.data}
  const app = createApp(App)
  app.use(ElementPlus, {size: 'mini', locale: zhCn})
  app.use(store)
  app.use(router)
  app.use(i18n)
  icons(app)
  app.use(components)
  app.use(initAxios)
  app.use(openUrlInBlank)
  app.use(VueClipboard)
  app.config.unwrapInjectedRef = true
  initKuboardMfe(app)
  app.mount('#app')
})


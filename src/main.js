import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/icon/iconfont.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App).use(ElementPlus,{size:'small',zIndex:3000}).use(router).mount('#app')

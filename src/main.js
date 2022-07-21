import { createApp } from 'vue'
import App from './App.vue'

// 引入图标
import '@/assets/icon/iconfont.css'

// 引入elment框架
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 配置路由
import router from './router'

// 配置axios
import axios from 'axios'
import VueAxios from "vue-axios";

createApp(App).use(ElementPlus,{size:'small',zIndex:3000})
    .use(router)
    .use(VueAxios,axios)
    .mount('#app')
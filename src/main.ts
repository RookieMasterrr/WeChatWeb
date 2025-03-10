import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/reset.css'
import '@/assets/icon/iconfont.css'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

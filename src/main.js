import { createApp } from 'vue'
import App from './App.vue'
import addStudent from './components/addStudent.vue'
import logger from './plugins/logger'
import apiPlugin from './plugins/apiPlugin'
import router from './router'
const app = createApp(App)
app.component('AddStudent', addStudent)
app.use(logger, {prefix: 'MyVueApp'})
app.use(apiPlugin, { baseURL: 'https://684997f345f4c0f5ee72230e.mockapi.io/v1' })
app.use(router)
app.mount('#app')

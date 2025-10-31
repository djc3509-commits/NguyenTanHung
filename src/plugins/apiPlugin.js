// plugins/apiPlugin.js
import axios from 'axios'

export default {
  install(app, options) {
    // Tạo 1 instance axios riêng (dễ quản lý, thay baseURL nhanh)
    const api = axios.create({
      baseURL: options.baseURL ?? 'https://684997f345f4c0f5ee72230e.mockapi.io/v1'
    })

    // Thêm 1 số tiện ích nếu muốn (log, header, interceptors,…)
    api.interceptors.request.use(config => {
      console.log('[API Request]', config.url)
      return config
    })

    // Gắn vào toàn bộ Vue app
    app.config.globalProperties.$api = api
  }
}

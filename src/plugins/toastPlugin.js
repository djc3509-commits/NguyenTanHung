import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default {
  install(app, options) {
    const toast = useToast()

    // Thêm vào globalProperties
    app.config.globalProperties.$toast = {
      success(msg) {
        toast.success(msg, { timeout: options?.timeout ?? 2000 })
      },
      error(msg) {
        toast.error(msg, { timeout: options?.timeout ?? 2000 })
      }
    }
  }
}

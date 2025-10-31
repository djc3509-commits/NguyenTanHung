export default {
    install(app, options) {
      const prefix = options?.prefix ?? 'APP'
      
      app.config.globalProperties.$log = (msg) => {
        console.log(`[${prefix}]`, msg)
      }
    }
  }
  
import links from './links.js'
import navbar from './navbar.js'
import website from './website.js'
const app = {
  data() {
    return {
      item: {
        title: '',
        text: '',
        logo: '',
        navbar,
        label: [website, links],
        footer: '',
      },
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.item.title = document.title
      this.item.text = document.getElementsByName('description')[0].content
      const currentYear = new Date().getFullYear()
      const icons = document
      .getElementsByTagName('head')[0]
      .getElementsByTagName('link')
      let favicon = '/favicon.ico'
      for (let i = 0; i < icons.length; i++) {
        if (icons[i].getAttribute('rel') === 'icon') {
          favicon = icons[i].getAttribute('href')
        }
      }
      this.item.logo = favicon
      this.footer = `&copy; 2020-${currentYear} <a href='/'>qcyblm</a>`
    })
  }
}
Vue.createApp(app).mount('#app')

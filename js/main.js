import links from './links.js'
import navbar from './navbar.js'
import website from './website.js'
const title = document.title
const text = document.getElementsByName('description')[0].content
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
const app = {
  data() {
    return {
      item: {
        title,
        text,
        logo: favicon,
        navbar,
        label: [website, links],
        footer: `&copy; 2020-${currentYear} <a href='/'>qcyblm</a>`,
      },
    }
  },
}
Vue.createApp(app).mount('#app')

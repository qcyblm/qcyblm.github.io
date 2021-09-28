import navbar from "./navbar.js";
import website from "./website.js";
import links from "./links.js";
var currentYear = new Date().getFullYear();
var icons = document.getElementsByTagName('head')[0].getElementsByTagName('link');
var favicon = "/favicon.ico";
for (var i = 0; i < icons.length; i++) {
  if (icons[i].getAttribute("rel") == "icon") {
    favicon = icons[i].getAttribute("href");
  }
};
const app = {
  data() {
    return {
      item: {
        title: document.title,
        text: document.getElementsByName('description')[0].content,
        logo: favicon,
        navbar,
        label: [
          website,
          links
        ],
        footer: "&copy; 2020-" + currentYear + " <a href='/'>qcyblm</a>"
      }
    };
  }
};
Vue.createApp(app).mount("#app");

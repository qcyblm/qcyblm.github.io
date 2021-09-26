import navbar from "./navbar.js";
import website from "./website.js";
import links from "./links.js";
var currentYear = new Date().getFullYear();
const app = {
    data() {
        return {
            item: {
                title: document.title,
                text: document.getElementsByName('description')[0].content,
                logo: "/vuepress/favicon.ico",
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

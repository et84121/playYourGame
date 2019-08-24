import Vue from "vue";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(MuseUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

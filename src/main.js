import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import i18n from "./i18n";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vue2Editor);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = 'de'
  }

  i18n.locale = language;
  next()
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

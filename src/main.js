import Vue from 'vue'
import App from './App.vue'

// const ocjui = require("@ocj/common-components");

import { Button } from "@ocj/common-components";

window.console.log(Button);

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

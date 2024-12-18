import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { clickOutside } from "./common/directives";

const app = createApp(App);

app.directive("click-outside", clickOutside);
app.use(createPinia());
app.use(router);

app.mount("#app");

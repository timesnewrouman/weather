import { createApp } from 'vue';
import { store } from "@/store";
import App from '@/App.vue';
import router from '@/router/router';

import '@/assets/styles/main.scss';

const app = createApp(App).use(store).use(router);

app.mount("#app");

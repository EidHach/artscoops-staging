import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// Vuetify
import 'vuetify/styles';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import DropZone from 'dropzone-vue';
import 'dropzone-vue/dist/dropzone-vue.common.css';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const vuetify = createVuetify({
  components,
  directives,
});

const options = {
  confirmButtonColor: '#fff',
  cancelButtonColor: '#000',
};

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(DropZone)
  .use(VueSweetalert2, options)
  .mount('#app');

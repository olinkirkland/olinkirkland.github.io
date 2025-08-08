import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n/locale';
import Button from './components/global/Button.vue';

const app = createApp(App);
app.use(i18n);

// Register global components
app.component('Button', Button);

app.mount('#app');

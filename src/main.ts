import { createApp } from 'vue';
import App from './App.vue';
import Button from './components/global/Button.vue';
import Card from './components/global/Card.vue';
import Marker from './components/global/Marker.vue';
import i18n from './i18n/locale';

const app = createApp(App);
app.use(i18n);

// Register global components
app.component('Button', Button);
app.component('Marker', Marker);
app.component('Card', Card);

app.mount('#app');

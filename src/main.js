import { createApp } from 'vue';
import App from './App.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseSearch from './components/UI/BaseSearch.vue';
const app = createApp(App);

app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);

app.mount('#app');

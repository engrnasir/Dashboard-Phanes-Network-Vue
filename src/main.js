import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faTwitterSquare, faDiscord, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { faBullhorn, faBars} from "@fortawesome/free-solid-svg-icons";
library.add(faFacebookSquare);
library.add(faTwitterSquare);
library.add(faDiscord);
library.add(faTelegram);
library.add(faBullhorn);
library.add(faBars);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).component("fonts-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
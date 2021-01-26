import { createApp } from "vue"
import App from "./App.vue"
import "@/assets/css/main.sass"
import router from "./router"
import store from "./store"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faTimesCircle,
    faSave,
    faPlus,
    faFileCsv,
} from "@fortawesome/free-solid-svg-icons"

library.add(faTimesCircle, faPlus, faSave, faFileCsv)

createApp(App)
    .use(store)
    .use(router)
    .mount("#app")
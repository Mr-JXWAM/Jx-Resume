import { createApp } from 'vue'
import App from './App.vue'
import './index.css'    
 
import {createWebHistory,createRouter, useRoute} from 'vue-router'
import NineBoxImage from './views/NineBoxImage.vue' 


const  history = createWebHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:App}, 
        {path:'/NineBoxImage',component:NineBoxImage}
    ]
})
 const app = createApp(App)
 app.use(router)
 app.mount('#app')
 

 const router1 = useRoute();
 router1.push('/home')

 
// createApp(App).mount('#app')

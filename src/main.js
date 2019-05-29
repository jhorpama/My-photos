import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'

Vue.use(VueRouter);

const router = new VueRouter({
   routes
})


router.beforeEach((to, from, next) => {
  const key = localStorage.getItem('key');
  //console.log('la key es:'+key);
  const autorizacion = to.matched.some(record => record.meta.requiresAuth);

  if(autorizacion === true && key === null){
    next('login');
    //console.log('entro1');
  }else if(autorizacion === true && key === undefined){
    next('login');
    //console.log('entro4');
  }else if(autorizacion === true && key !== null || autorizacion === true && key !== undefined){
    next();
    //console.log('entro2');
  }else{
    next();
    //console.log('entro3');
  }

});

Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

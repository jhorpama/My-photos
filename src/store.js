import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        imag: null,
        numero: 12,
        id: null,
        name: null,
        usuario: null
    },
    mutations: {
        cargarImages(state, imagenesAccion){
          state.imag = imagenesAccion
        },
        cargarDatos(state, usuario){
            state.usuario = usuario
        }
    },
    actions: {
      obtenerImages({ commit }){
          axios.get('http://localhost:3000/')
               .then(response => {
                commit('cargarImages', response.data);
               })
               .catch(err => {
                   console.error(err);
               });
          
       },
       loginUser({ commit }, valor){
          //commit('cargarDatos', valor);
          //console.log(valor.email,valor.password);
          if(valor.email !== null && valor.password !== null){
            axios.post('http://localhost:3000/login', {
                email: valor.email,
                password: valor.password
            }).then(res => {
                commit('cargarDatos', res.data);
            }).catch(err => {
                console.error(err);
            }) 
          }
       }
    },
    getters: {
        myToken(state){
            if(state.usuario !== null && state.usuario !== undefined){ 
                let key = localStorage.setItem('key', state.usuario.token);
                return key
            }
        }
    }
   
})
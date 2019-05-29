<template>
      <div>
          <Header></Header>
          <b-container>
               <b-row>
                   <b-col>
                        <b-card class="mt-5">
                            <b-form-group>
                                <b-form-input
                                v-model="email"
                                label="Email address:"
                                placeholder="Email"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                v-model="password"
                                label="Password"
                                placeholder="Password"
                                ></b-form-input>
                            </b-form-group>
                            <b-button @click="loginUser({ email: email, password: password })" class="btn-block" variant="primary">Login</b-button>
                        </b-card>
                        <h4>{{ myToken }}</h4>
                   </b-col>
               </b-row>
          </b-container>
      </div>
</template>
<script>
   const axios = require('axios');
   import { mapState, mapActions, mapGetters } from 'vuex';
   import Header from '../components/Header';
   export default {
       name: 'Login',
       components: {
           Header,
       },
       computed: {
          ...mapState([
              'usuario'
          ]),
          ...mapGetters([
              'myToken'
          ])
       },
       data() {
           return {
               email: null,
               password: null,
               login: null,
           }
       },
       watch:{ 
          
       },
       updated() {
          this.comprobarUser();
       },
       created() {
           //console.log('creado');
       },
       methods: {
           ...mapActions([
               'loginUser'
           ]),
           comprobarUser() {
                const key = localStorage.getItem('key');
                if(key !== null && key !== undefined)
                {   
                    this.$router.push({ name: 'imagenes' });
                } else{
                    
                    console.log('le json web token no existe');
                    
                }
          }
       },
       mounted() {
           
       },
   }
</script>
<style>
</style>
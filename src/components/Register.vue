<template>
     <div>
         <Header></Header>
         <b-container>
                <b-row>
                    <b-col>
                        <b-card class="mt-5">
                            <b-form-group>
                                <b-form-input
                                label="Email"
                                v-model="email"
                                required
                                placeholder="Type Your Email"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                label="Name"
                                v-model="name"
                                required
                                placeholder="Type your Name"
                                ></b-form-input>        
                            </b-form-group>
                            <b-form-group>
                                <b-input
                                type="password"
                                placeholder="Type Your Password"
                                v-model="password"
                                required
                                ></b-input>
                            </b-form-group>
                            
                            <b-button variant="primary" class="btn-block" @click="userRegister">Register</b-button>
                        </b-card>
                        <h2>{{ message }}</h2>
                    </b-col>
                </b-row>
         </b-container>
        <!-- <pre>{{ $data }}</pre>-->
     </div>
</template>
<script>
    import Header from '../components/Header'
    const axios = require('axios');
    export default{
        name: 'Register',
        components: {
            Header
        },
        data(){
            return{
                email: null,
                password: null,
                name: null,
                message: null
            }
        },
        methods: {
            userRegister(){
                axios.post('http://localhost:3000/register',{
                    email: this.email,
                    password: this.password,
                    name: this.name
                }).then(res => {               
                    this.message = 'Registered user successfully'+res.data.email;
                    this.email = null
                    this.password = null
                    this.name = null
                }).catch(err => {
                    console.error(err);
                })
            }
        },
    }
</script>
<style>
</style>
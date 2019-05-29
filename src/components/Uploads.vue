<template>
     <div>
         <HeaderLogin></HeaderLogin>
         <b-container>
              <b-row>
                  <b-col class="mt-4">
                      <h2>Upload Pictures</h2>
                      <b-card>
                          <input type="file" @change="onImg" />
                          <b-button variant="success" @click="onUpload">Upload</b-button>
                      </b-card>
                      <b-progress class="mt-3" :value="value" :max="max" show-progress animated></b-progress>
                      <h2>{{ message }}</h2>
                  </b-col>
              </b-row>
         </b-container>
     </div>
</template>
<script>
   const axios = require('axios');
   import HeaderLogin from '../components/HeaderLogin'
   import { mapState } from 'vuex'
import { setTimeout } from 'timers';
   export default{
       name: 'Uploads',
       components: {
          HeaderLogin
       },
       computed: {
           ...mapState([
               'usuario'
           ])
       },
       data(){
           return {
             img: null,
             value: 0,
             max: 100,
             message: null
           }
       },
       methods: {
           onImg(e) {
            this.img = e.target.files[0];
           },
           onUpload() {
               console.log(this.usuario.email);
               const fd = new FormData();
               fd.append('image', this.img);
               fd.append('email', this.usuario.email);
               fd.append('name', this.usuario.name);
               const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                axios.post('http://localhost:3000/api/picture',fd,{
                    onUploadProgress: progressEvent => {
                        let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                        this.value = percentCompleted;
                    }
                })
                    .then(res => { 
                        this.message = 'Image rise with success!'
                     })
                    .catch(err => { console.error(err) });
           }

       }
   }
</script>
<style>
</style>
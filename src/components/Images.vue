<template>
    <div>
         <!--Header-->
         <HeaderLogin></HeaderLogin>
         <b-container>
            <b-row>
                <b-col>
                    <b-card-group columns class="mt-3">
                            <b-card  v-for="image in imag" :key="image._id" class="animated jackInTheBox" title="Picture" img-alt="Picture" img-top
                                :img-src="`http://localhost:3000/${image.path}`">
                                 <b-card-text>
                                      <h2 style="font-size: 16px;">Author: {{image.author}}</h2>
                                     <b-row class="mt-2">
                                         <b-col>
                                            {{numero}}
                                           <!-- <router-link :to="{ name: 'profile', params: { id: image._id} }" class="btn btn-primary">Profile</router-link>-->
                                           <router-link :to="{ name: 'profile', params: { id: image._id} }" class="btn btn-primary">Profile</router-link>
                                         </b-col>
                                     </b-row>
                                 </b-card-text>
                                 <div slot="footer">
                                    <small class="text-muted" v-text="timePicture(image.create_at)"></small>
                                 </div>
                            </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
        <pre>{{ $data }}</pre>
    </div>
</template>
<script>
    const axios = require('axios');
    import { format } from 'timeago.js';
    import { mapState, mapMutations, mapActions } from 'vuex'
    import { constants } from 'fs';
    import HeaderLogin from '../components/HeaderLogin';
    export default{
        name: 'Images',
        components: {
           HeaderLogin
        },
        computed: {
           ...mapState(
               [
                   'imag',
                   'numero'
               ]
           )
        },
        data(){
            return {
               
            }
        },
        mounted: function(){
            //Run function
            this.timePicture
            this.obtenerImages()
        },
        methods: {
            ...mapMutations(['']),
            ...mapActions(['obtenerImages']),
            timePicture(time) {
               return format(time);
            }
        }
    }
</script>
<style>
</style>
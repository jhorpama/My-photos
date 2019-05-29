<template>
     <div>
         <HeaderLogin></HeaderLogin>
         <b-container>
             <b-row>
                 <b-col md-5>
                     <b-card class="mt-2"
                       :img-src="`http://localhost:3000/${imgs}`"
                     >
                     </b-card>
                 </b-col>
                 <b-col md-5>
                    <h2>Comments</h2>
                    <b-card>
                        <b-alert  v-for="comment in usercomment" :key="comment._id" show variant="info">
                            <h3 style="color: #818182; font-size: 16px">{{comment.name }}</h3>
                            <h3 style="font-size: 16px">{{comment.create_at}}</h3>
                            <h3 style="color: #818182; font-size: 16px">{{comment.comment}}</h3>
                        </b-alert>
                        <b-form-group>
                             <b-form-textarea
                                v-model="comment"
                                placeholder="What is your Comment?"
                                rows="3"
                                max-rows="4"
                            ></b-form-textarea>
                        </b-form-group>
                        <b-button variant="success" class="btn-block" @click="setComment">Comment</b-button>
                    </b-card>
                 </b-col>
             </b-row>
         </b-container>
         <pre>{{ $data }}</pre>
     </div>
</template>
<script>
   const axios = require('axios');
   import HeaderLogin from '../components/HeaderLogin';
    import { mapState } from 'vuex';
   export default {
       name: 'Profile',
       computed: {
           ...mapState([
               'usuario'
           ])
       },
       components: {
         HeaderLogin
       },
       data(){
           return {
               imgs: null,
               comment: null,
               usercomment: null,
           }
       },
       props: ['id'],
       mounted(){
            axios.get(`http://localhost:3000/${this.id}`)
                 .then(res => {
                     this.imgs = res.data.path;
                     console.log(res.data)
                 })
                 .catch(err => { console.log(err) });

            this.getComment();
       },
       methods: {
           setComment(){
               console.log(this.usuario.email);
               console.log(this.id);
               axios.post('http://localhost:3000/comment', {
                   email: this.usuario.email,
                   name: this.usuario.name,
                   comment: this.comment,
                   idimage: this.id
               }).then(res => {
                   this.usercomment.push(res.data);
                   this.comment = null;
               }).catch(err => {
                   console.error(err);
               })
           },
           getComment(){
              axios.get('http://localhost:3000/api/comment')
                   .then(res => {

                       //const comments = res.data;
                       const comentarios = res.data.filter(comment => comment.idimage === this.id);
                       this.usercomment = comentarios;
                   }).catch(err => {
                       console.error(err);
                   })
           }
       }
   }
</script>
<style>
</style>
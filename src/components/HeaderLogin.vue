<template>
      <div>
           <b-navbar style="background: #1F7DE6" type="light">
                <b-navbar-brand>Uploads</b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link style="color: #fff" to="/images">Pictures</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link style="color: #fff" to="/upload">Upload</router-link>
                    </b-nav-item>
                    <b-button variant="danger" @click="Salir">Salir</b-button>
                </b-navbar-nav>
            </b-navbar>
      </div>
</template>
<script>
   export default {
       name: 'HeaderLogin',
       methods: {
           Salir(){
                localStorage.removeItem('key');
                this.$router.push({ name: 'login' });
           }
       }
   }
</script>
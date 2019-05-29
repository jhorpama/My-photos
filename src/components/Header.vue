<template>
  <div>
    <b-navbar style="background: #1F7DE6" type="light">
        <b-navbar-brand>Uploads</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item>
                 <router-link style="color: #fff" to="/">Home</router-link> 
            </b-nav-item>
            <!--<b-nav-item>
                <router-link style="color: #fff" to="/uploads">Uploads</router-link>
            </b-nav-item>-->
            <b-nav-item>
                <router-link style="color: #fff" to="/login">Login</router-link>
            </b-nav-item>
            <b-nav-item>
                 <router-link style="color: #fff" to="/register">Register</router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<template>
      <div>
         <Header></Header>
         <h2>    
             hey
         </h2>
      </div>
</template>
<script>
   import Header from '../components/Header';
   export default{
       name: 'Home',
       components: {
           Header
       },
       data(){
           return {
                Header
           }
       }
   }
</script>
<style>
</style>
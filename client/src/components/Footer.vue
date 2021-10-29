<template>
  <footer class="d-flex justify-content-center">
     <router-link to="https://github.com/matthCorvo"> 
     <h4 class="text-white"><i class="fab fa-github"></i></h4> 
      <h4 class="text-white">MatthC &copy; {{new Date().getFullYear()}} &nbsp;</h4>
     </router-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
      background-image: linear-gradient(62deg, #8ed9fa 0%, #b8e3f5 100%);
}
footer a:hover{
      text-decoration: none;
}

</style>
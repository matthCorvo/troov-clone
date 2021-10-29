<template>
  <div id="app">
    <Navigation
		:nav-links="navLinks"
		:image-path="require('./assets/logo-light.png')"
		background="#2A3042"
    />
    <!-- notification -->
    <Errors v-if="error" :msg="error"/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from '@/components/Navigation';
import Errors from "@/components/Errors";
import Footer from "@/components/Footer";

export default {
  components: {
    Navigation,
    Errors,
    Footer
  },
  data: () => ({
    navLinks: [
    {
    title: 'Signaler un objet',
		path: '/add',
		icon: 'fas fa-plus-circle'
    },

    {
    title: 'Mes objets',
		path: '/',
		icon: 'fas fa-briefcase'
    },
    ]
  }),
    computed: {
    ...mapGetters(["error"])
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Anton');
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');


body {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

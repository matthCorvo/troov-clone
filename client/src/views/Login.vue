<template>
<div class="register">
  <div class="card">
    <h1 class="card__title">Connexion</h1>
    <p class="card__subtitle" >Tu n'as pas encore de compte ? <router-link to="register" ><span class="card__action">Créer un compte</span></router-link></p>
    <p class="card__subtitle" >ou </p>
    <p class="card__subtitle font-italic font-weight-bold" >
    Nom : test - Mot de passe : test </p>

    <form @submit.prevent="loginUser">
      <div class="form-row">
          <input 
          id="name"
          type="text"
          placeholder="Nom"
          name="name"
          v-model="name"
          class="form-row__input" 
          >
      </div>
      <div class="form-row">
          <input
          id="password"
          type="password"
          placeholder="Mot de passe"
          name="password"
          v-model="password" 
          class="form-row__input" 
          >
      </div>

      <div class="form-row">
        <button  class="button" type="submit">
          <span >Connexion</span>
        </button>
    </div>
    </form>
  </div>
</div>
</template>
    

<script>
import { mapActions } from "vuex";

export default {
  data () {
    return {
      name: "",
      password: "",
    }
  },

 methods: {
...mapActions(["login"]),
 async loginUser(){
 let user = {
        name: this.name,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
 }
}
</script>

<style lang="scss" scoped>
// Inscription.vue

</style>
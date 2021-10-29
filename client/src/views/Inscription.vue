<template>
<div class="register">
  <div class="card">
    <h1 class="card__title" >Inscription</h1>
    <p class="card__subtitle" >Tu as déjà un compte ? <router-link to="login" ><span class="card__action" >Se connecter</span></router-link></p>
   
    <form @submit.prevent="registerUser">
      <div class="form-row" >
          <input 
          name="name"
          v-model="name"  
          class="form-row__input"
          id="name" 
          type="text" 
          placeholder="Nom"
          >
      </div>
      <div class="form-row">
          <input 
          name="email"
          v-model="email" 
          class="form-row__input" 
          id="email" 
          type="email" 
          placeholder="Adresse email"
          >
      </div>
      <div class="form-row">
          <input 
          name="password"
          v-model="password"  
          class="form-row__input" 
          id="password" 
          type="password" 
          placeholder="Mot de passe"
          >
      </div>
      <div class="form-row">
          <input
          name="confirm_password"
          v-model="confirm_password"  
          class="form-row__input" 
          id="confirm_password" 
          type="password" 
          placeholder="Confirmez votre mot de passe"
          >
      </div>
    <div class="form-row">
     <button  class="button mt-3" type="submit" >
        <span  >Créer mon compte</span>
      </button>
    </div>
    </form>
  </div>
  </div>
</template>
    

<script>
import { mapActions } from "vuex";

export default {
  data(){
    return{
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    }
  },
methods: {
  ...mapActions(["register"]),
 registerUser() {
      let user = {
        name: this.name,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("login");
        }
      });
  }
 }
}
</script>

<style lang="scss" >
.register{
  background-image: linear-gradient(62deg, #8ed9fa 0%, #b8e3f5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding:32px;
}

.card {
  max-width: 100%;
  width: 540px;
  background:white;
  border-radius: 16px;
  padding:32px;
}

.card__title {
  text-align:center;
  font-weight: 800;
}

.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
}
  .button {
    background:#49d493;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: .4s background-color;
  }
  .card__action {
    color:#2196F3;
    text-decoration: underline;
  }
  .card__action:hover {
    cursor:pointer;
  }


  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }
  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }
  .form-row__input::placeholder {
    color:#000000;
  }

  button:hover {
  -webkit-transform: translate(0px, -5px) scale(1);
          transform: translate(0px, -5px) scale(1);
}
</style>
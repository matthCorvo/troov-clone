<template>
<div class="register">
  <div class="card"  v-if="user">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Mes informations de connexion...</p>
    <p>Photo de profil</p>
    <div class="d-flex justify-content-center">
    <img class=" image--cover" src="https://source.unsplash.com/user/erondu/1600x900" alt="photo de profil">
    </div>
    <br>
    <p>Email: {{ user.email }}</p>
    <p>Name: {{ user.name }}</p>
   
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"])
  },
  created() {
    this.getProfile();
  },
       
};
</script>

<style scoped>
.button {
    background:#d47c49;
  }

  .image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;

  object-fit: cover;
  object-position: center right;
}
</style>
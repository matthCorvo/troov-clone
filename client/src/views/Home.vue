<template>
<div class="bg-box">
  <div class="container  mt-5 pb-5">
    
        <div class=" m-3 mt-4 page-title d-flex flex-column flex-sm-row flex-sm-wrap justify-content-sm-between align-items-center align-items-sm-center">
         
          <h4 class="title">Mes objets</h4>
              <div class="page-title-right">
                  <h4>La liste complète de tous vos objets</h4>
              </div>
        </div>

        <div class="alert alert-success alert-dismissible show " role="alert" v-if="this.$route.params.message">
          <button type="button" class="btn-close fade " data-bs-dismiss="alert" aria-label="Close"></button>
          {{this.$route.params.message}}
        </div>

    <div class="row p-3">
      <div class="col-md-4 mt-4" v-for="post in posts" :key="post._id">
       
         <div class="card item-card" > 
        <router-link :to="{ name: 'items', params: { id: post._id}}"  style="text-decoration: none; color: inherit;">
            <div class="card-img-block">
                <h4 class="text-left p-2 category">{{post.category}}</h4>
                <img class=" image--cover" src="https://via.placeholder.com/150" alt="photo de item">
                <!-- <img class="card-img-top" :src="`/${post.image}`" alt="image objet "> -->
            </div>

          <div class="card-body pt-0">
              <h3 class="card-title">{{post.title}}</h3>
              <h5>{{post.created}}</h5>
              <p class="card-text">
              <i class="fas fa-map-marker-alt"></i>
              {{post.adresse }}
              </p>
             <!-- date -->
            <button  class="button" >
            Plus d'infos!</button>

          </div>
        </router-link>
       
        </div>

    		</div>
      </div>
    </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
  name:"mesObjets",
  data(){
    return {
      posts: [],
    };
  },
async mounted(){
        const response = await axios.get('/api/post/');
        this.posts = response.data;
},

        
};
</script>

<style lang="scss">
 
// bg
.bg-box{
  background-image: linear-gradient(62deg, #8ed9fa 0%, #b8e3f5 100%);
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 100vh;
  padding:32px;
}
// Title 
.container{
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  @media screen and (max-width: 768px) {
  max-width: 620px !important;
  }
  @media screen and (max-width: 575px) {
  max-width: 320px !important;
  }
  @media screen and (max-width: 425px) {
  max-width: 220px !important;
  }
}

.title{
  text-transform: uppercase;
  font-weight: 700;
}

.page-title {
    padding-bottom: 24px;
}

// Card
.item-card{
    margin-top:20px;
    box-shadow:0 0 5px rgba(0,0,0,0.63);
}
.item-card {
    border-radius:2px;
    text-transform:uppercase;
    font-size:12px;
    padding:7px 20px;
}
.item-card .card-img-block {
    width: 91%;
    margin: 0 auto;
    position: relative;
    top: -20px;
}
.item-card .card-img-block img{
    border-radius:5px;
    box-shadow:0 0 10px rgba(0,0,0,0.63);
}
.item-card h4 {
  position:absolute;
  border-right: 5px solid #ff0000;
  border-left: none;
  font-weight:700;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 17px;
  @media screen and (max-width: 426px) {
  border-right: 3px solid #ff0000;
  font-size: 12px;
  }
}
.item-card h5{
    color:#5f6357;
    font-weight:600;
}
.item-card p{
    font-size:14px;
    font-weight:300;
}
.item-card {
    background-color:#C8EDFD;
    border-color:#C8EDFD;
    color: black;
    font-weight: 700;
}
</style>

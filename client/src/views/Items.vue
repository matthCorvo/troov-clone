<template>
<div class="bg-box">
  <div class="container  mt-5 pb-5">
    
        <div class=" m-3 mt-4 page-title d-flex flex-column flex-sm-row flex-sm-wrap justify-content-sm-between align-items-center align-items-sm-center">
          <h4 class="title">Fiche objet</h4>
              <div class="page-title-right">
                  <h4>Détails</h4>
              </div>
        </div>

        <!-- notification -->
        <div class="alert alert-success alert-dismissible show " role="alert" v-if="this.$route.params.message">
          <button type="button" class="btn-close fade " data-bs-dismiss="alert" aria-label="Close"></button>
          {{this.$route.params.message}}
        </div>

        <div  class="row">
        <div  class="col-12 col-md">
        <div  class=" flex-column flex-md-row align-items-center">
        <div  class="align-self-center align-self-md-start align-self-start">
            <div  class="p-2 card-img-box">
                <img class=" image--cover" src="https://via.placeholder.com/150" alt="photo de item">
                <!-- <img :src="`/${post.image}`" alt="image objet " class="card-img-top" > -->
            </div>
        </div>
        </div>
        
        </div> 
        
        <div  class="mt-2 m-3">
            <button @click="deleteItem(post._id)" class="button red mb-3">
                supprimer
              </button>
            <router-link :to="{name: 'edit', params:{id: post._id} }">  <button class="button" >
                Modifier
              </button></router-link>
              </div>
              </div>
              
              <hr > 

        <div  class="text-center ">
        <h4 class="mb-4"> {{post.title}} </h4> 
        
        <div class="mb-2">
            <strong >Etat :</strong> 
            <h5 class="d-inline">
                <span class="badge  ml-2 badge-light">
                   {{post.category}}
                  </span>
            </h5>
            </div> 

            <div class="mb-2">
            <strong >Date :</strong> 
            <h5 class="d-inline">
                <span class="badge  ml-2 badge-light">
                    {{post.created}}
                  </span>
            </h5>
            </div>

            <div class="mb-2">
            <strong >Adresse :</strong> 
            <h5 class="d-inline">
                <span class="badge  ml-2 badge-light">
                    {{post.adresse}}
                  </span>
            </h5>
            </div>  

             <div class="mb-2">
            <strong >Détails :</strong> 
            <h5 class="d-inline">
                <span class="badge  ml-2 badge-light">
                    {{post.content}}
                  </span>
            </h5>
            </div>

           
      </div>
      </div>
      </div>
    
</template>

<script>
import axios from "axios";
import API from "../api";

export default {
  data(){
    return {
      post: {},
    };
  },
  async mounted(){
      const response = await axios.get('api/post/'+this.$route.params.id);
      this.post = response.data;    
    },
    methods: {
      async deleteItem(id){
      const response = await API.deletePost(id);
      this.$router.push({name:'mesObjets', params: {message:response.message}})
      }
    }
}

</script>

<style lang="scss" scoped>

.card-img-box {
    width: 51%;
    margin: 0 auto;
    position: relative;
    top: -20px;
}

.button.red{
  background-color: rgb(224, 71, 71);
}

</style>
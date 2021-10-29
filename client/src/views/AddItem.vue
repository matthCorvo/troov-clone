<template>
<div class="bg-box">
  <div class="container  mt-5 pb-5">
    
        <div class=" m-3 mt-4 page-title d-flex flex-column flex-sm-row flex-sm-wrap justify-content-sm-between align-items-center align-items-sm-center">
          <h4 class="title">Signaler un objet</h4>
              <div class="page-title-right">
                  <h4>Remplissez le formulaire pour déclarer votre objet</h4>
              </div>
        </div>

        
        <form  id="form" >
                <div class="box">
                    <label class="title label card__title">Nom de l'objet</label>
                    <input type="text"  class="mb-3 form-row__input" name="title" v-model="post.title" placeholder="( Veuillez noter le nom de l'objet )"  >
                    
                    <label class="title label card__title">état</label>
                    <input type="text"  class="mb-3 form-row__input" name="category" v-model="post.category" placeholder="( perdu / trouvé )"  > 
                      
                    <label class="title label card__title">adresse</label>
                    <input type="text"  class="mb-3 form-row__input" name="adresse" v-model="post.adresse" placeholder="( Adresse )"  > 
                   
                    <label class="title label card__title">Détails</label>
                    <textarea type="text"  class="form-row__input" name="content" v-model="post.content" placeholder="( Veuillez noter un détails importants )" ></textarea>
                    
                       <button type="button" v-on:click="addPost"  class="btn btn-outline-info mt-2" >
          Ajouter mon Annonce !
          </button>
                    </div>
                </form>
        </div>   
       </div>

</template>


<script>
import axios from "axios";
import API from "../api";

export default {
  name:'add',
  data() {
    return {
      post:{
        title: "",
        category:"",
        adresse: "",
        content: "",
      }
    }
  },

  methods: {
  async addPost(){
     console.warn(this.post)
     const result = await axios.post("/api/post/" ,{
       title:this.post.title,
       category:this.post.category,
       adresse:this.post.adresse,
       content:this.post.content,
     });
     if(result.status==201){
      const response = await API.addPost();
       this.$router.push({name:'mesObjets', params: { message :response.message} })
     }
     console.warn('result', result)
   }

  },
  
};

</script>

<style>

/* EditItems.vue */

</style>





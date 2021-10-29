<template>
<div class="bg-box">
  <div class="container  mt-5 pb-5">
        <!-- notification -->
        <div class=" m-3 mt-4 page-title d-flex flex-column flex-sm-row flex-sm-wrap justify-content-sm-between align-items-center align-items-sm-center">
          <h4 class="title">Modifier votre signalement   </h4>
        </div>

        
        <form id="form" >
                <div class="box">
                    <label class="title label card__title">Nom de l'objet</label>
                    <input type="text"  class="mb-3 form-row__input" name="title" v-model="post.title" placeholder="( Veuillez noter le nom de l'objet )"  >
                    
                    <label class="title label card__title">état</label>
                    <input type="text"  class="mb-3 form-row__input" name="category" v-model="post.category" placeholder="( perdu / trouvé )"  > 
                
                    <label class="title label card__title">adresse</label>
                    <input type="text"  class="mb-3 form-row__input" name="adresse" v-model="post.adresse" placeholder="( Adresse )"  > 
                   
                    <label class="title label card__title">Détails</label>
                    <textarea type="text" class=" form-row__input" name="content" v-model="post.content" placeholder="( Veuillez noter un détails importants )" ></textarea>
                    
                    <button type="button"  v-on:click="updateItem" class="btn btn-outline-info mt-2" >
          Modifier mon Annonce !
          </button>
                    </div>         
        </form>
        
        </div>   
       </div>

</template>


<script>
import axios from "axios";

export default {
  name:'edit',
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
methods:{
        async updateItem() {
            console.warn(this.post)
         const result = await axios.patch("/api/post/"+this.$route.params.id ,{
           title:this.post.title,
           category:this.post.category,
           adresse:this.post.adresse,
           content:this.post.content,
       })
        if(result.status==200){
           this.$router.push({name:'items' , params: { message :"modifier avec succès!"} })
         }
       }
    },
    async mounted() {
     const result = await axios.get('/api/post/'+this.$route.params.id)
     console.warn(result.data)
     this.post = result.data
   
     },
  
}


</script>

<style lang="scss">
    #form {
    position: relative;
    margin-top: 30px;

    .box{
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;
    position: relative;
}

input,  textarea {
    padding: 15px;
    border-radius: 0px;
    margin-bottom: 10px;
    width: 100%;
    color: #2C3E50;
    font-weight: 700;
    font-size: 20px;
    color: rgb(0, 0, 0);
    box-shadow: 0 0 5px 1px rgba(75, 76, 77, 0.151);
}

.label{
    font-size: 24px;
}
 textarea {
    resize: vertical;
    min-height: 50px
}

::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.651);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
}

button {
  border: none;
  margin: 2px;
  font-weight: 700;
  background: #49D4BE;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  padding: 20px 30px;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
}
button:hover {
  box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(0px, -10px) scale(1.2);
          transform: translate(0px, -10px) scale(1.2);
}

}

</style>
<template>
  <router-link
    :to="{ name: routeName, params: { recipeId: recipe.id } }"
    class="recipe-preview">
    <div class="card" style="width: 20rem;" id="mb-3">
      <img v-if="image_load" :src="recipe.image" class="recipe-image">
      <div class="card-body">
        <h8 v-if="!recipe.wasWatchedByUserBefore" :title="recipe.title" class="recipe-title"><strong>{{recipe.title}}</strong></h8>
        <h8 v-else class="wachtedRecipe" :title="recipe.title" style="color:blueviolet"><strong>{{recipe.title}}</strong></h8>
        &nbsp;
        <b-button id="unsave" v-if="recipe.wasSavedByUser" @click="saveRecipe(recipe.id)">unSave</b-button>
        <b-button id="save" v-else pill variant="secondary" @click="saveRecipe(recipe.id)">Save</b-button>

      </div>
      <ul class="list-group list-group-flush">
        <li id="infoData" class="list-group-item" >
          <img src="..\assets\heart-icon.png" width="20px" height="20px">
          {{ recipe.aggregateLikes }} likes |
          <img src="..\assets\timer.png" width="25px" height="20px">
          {{ recipe.readyInMinutes }} minutes 
        </li>
        <li class="list-group-item" v-if="recipe.vegan || recipe.glutenFree || recipe.vegetarian">
          <b-button class="infoBtn" variant="info" v-if="recipe.vegetarian">vegetarian</b-button>
          <b-button class="infoBtn" variant="info" v-if="recipe.vegan">vegan</b-button>
          <b-button class="infoBtn" variant="info" v-if="recipe.glutenFree">gluten free</b-button>
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  mounted() {
    if(this.recipe.image===undefined || !this.recipe.image){
      this.recipe.image = 'https://media.istockphoto.com/photos/baby-making-dough-for-baking-picture-id125141936'
    }
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods:{
    async saveRecipe(recipe_id){
      let response;
      try{
      response = await this.axios.post(
            "https://wikirecipe.cs.bgu.ac.il/users/addFavorites",
            {
              recipeId:recipe_id
            },
            { withCredentials: true }
          );
    }
    catch(err){console.log(err)}
  }
  },
  computed:{
    routeName(){
      if(this.recipe.private){return 'userRecipe'}
      return 'recipe'
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
/* .recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
} */

.recipe-preview .recipe-body #recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1000px;
  margin-bottom: 300px;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
}

/* .recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
} */

/* .recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
} */
/* 
.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 20px;
  display: table-cell;
  text-align: center;
} */
#wachtedRecipe{
  color: rgb(58, 2, 109);
}

#mb-3:hover {
  filter: brightness(95%);
}
#save{
  border-radius: 50px;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: 2px solid #555555;
  float: right;
}
#save:hover {
  background-color: #555555;
  color: white;
}
#unsave{
  border-radius: 50px;
  border: none;
  color: white;
  padding: 5px 15;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  background-color:  black;
  border: 2px solid #555555;
  float: right;
}
#unsave:hover {
  background-color:white;
  color: #555555;
}

.infoBtn{
  border-radius: 50px;
  border: none;
  color: white;
  padding: 3px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  background-color:#008CBA;
  color: rgb(255, 255, 255);
  border: 2px solid #a6dbf6;
}
.card{
  background-color: rgb(254, 246, 235);
}
#infoData{
  background-color: rgb(255, 250, 244);
}
</style>

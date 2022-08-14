<template>
  <div class="container">
    <div v-if="recipe">
    <h1>{{recipe.title}}</h1>
      <img :src="recipe.image" class="center" style="border-radius:15px;border: 1px solid blue;"/>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="center">
            <div class="mb-3">
              <div id="likesMinMeals">
                <img src="..\assets\timer.png" width="30px" height="25px">
                {{ recipe.readyInMinutes }} minutes |
                <img src="..\assets\heart-icon.png" width="26px" height="26px">
                {{ recipe.aggregateLikes }} likes |
                <img src="..\assets\serving.png" width="30px" height="30px">
                {{ recipe.servings }} meals
              </div>
              <b-button class="infoBtn" variant="info" v-if="recipe.vegetarian">vegetarian</b-button>
              <b-button class="infoBtn" variant="info" v-if="recipe.vegan">vegan</b-button>
              <b-button class="infoBtn" variant="info" v-if="recipe.glutenFree">gluten free</b-button>
            </div>
            <table>
              <th>Ingredients:</th>
              <tr v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                <td><li>{{r.original}}</li></td>
              </tr>
            </table>
            <br><br>
            <h5><strong>Instructions:</strong></h5>
            <ul class="list-group" style="line-height:160%">
                <span>{{recipe.instructions}}</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  methods:{
    async saveRecipe(recipe_id){
      response = await this.axios.post(
            this.$root.store.server_domain+"/addFavorites",{ withCredentials: true },
            {params:{recipeId:recipe_id}}
          );
    }
  },
  async created() {
    try {
      let response;
      try {
        response = await this.axios.get(
          "https://wikirecipe.cs.bgu.ac.il/users/getLocalRecipeFromClick",
          {
            params: { recipeId: this.$route.params.recipeId }
          }
        );
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      let {
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        glutenFree,
        vegetarian,
        vegan,
        servings
        } = response.data.message;
            console.log(response.data.message)

      let _recipe = {
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        glutenFree,
        vegetarian,
        vegan,
        servings
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.infoBtn{
  border-radius: 50px;
  border: none;
  color: white;
  padding: 4.5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  background-color:#008CBA;
  color: rgb(255, 255, 255);
  border: 2px solid #a6dbf6;
}
#likesMinMeals{
  font-size: 16px;
  font-family: "Lucida Console", "Courier New", monospace;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
td {
  text-align: left;
  padding: 8px;
  font-size: medium;
  
}
th {
  text-align: left;
  padding: 8px;
  font-size: large;
}
tr:nth-child(even) {
  background-color: #D6EEEE;
}
h1{
  font-weight: bold;
  text-align:center;
}
.li-instruction{ 
   margin-bottom: 20px;  
}

ul.list-group {
  list-style-type: none;
}
ul.list-group .badge {
  background-color: #008CBA;
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  padding: 5px 10px;
  text-align: center;
  margin-left: 5px;
  border:rgb(127, 161, 207);
  font-size: large;
}
p {
  border-bottom: 0.5px solid rgb(226, 224, 224);
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
</style>

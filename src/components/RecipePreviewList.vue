<template>
  <b-container>
    <div v-if="recipes.length <= 3">
      <b-col v-for="r in recipes" :key="r.id" md="5">
        <div>
          <RecipePreview class="recipePreview" :recipe="r"/>
        </div>
      </b-col>
    </div>
    <div v-else>
      <b-col v-for="n in evens_numbers" :key="n" md="5">
        <b-row md="5">
          <div>
            <RecipePreview class="recipePreview" :recipe="recipes[n]"/>
          </div>
          <div v-if="(n + 1) < recipes.length">
            <RecipePreview class="recipePreview" :recipe="recipes[n + 1]"/>
          </div>
        </b-row>
      </b-col>
    </div>
  </b-container>
</template>

<script>
import { stringify } from "querystring";
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    random:{
      type: String,
      required: true
    },
    query: {
      type:String,
      required:false
    },
    searchAmount: {
      type:String,
      required:false
    },
    searchSort: {
      type:String,
      required:false
    },
    searchCuisine: {
      type:String,
      required:false
    },
    searchDiet: {
      type:String,
      required:false
    },
    searchIntol: {
      type:String,
      required:false
    }
  },
  data() {
    return {
      recipes: [],
      randomReq:"recipes/getRandomRecipes",
      lastWatchedReq:"users/threelastWatched",
      searchRecipes:"recipes/searchForRecipe",
      favoriteRecipes:"users/getFavorites",
      familyRecipes: "users/familyRecipes",
      privateRecipes: "users/getUserRecipe",
      lastSearch: "users/lastSearch"
    };
  },
  async mounted() {
    await this.updateRecipes();
    this.$emit('recipes_length',this.recipes.length)
  },
  methods: {
    getLen(){
      return this.recipes.length
    },
    sort(by){
      console.log(by)
      if(by == "likes"){
        this.recipes = this.recipes.sort((a, b) => (a.aggregateLikes > b.aggregateLikes)? -1 : 1)
      }
      else{
        this.recipes = this.recipes.sort((a, b) => (a.readyInMinutes > b.readyInMinutes)? 1 : -1)
      }
      console.log(this.recipes)
    },

    async updateRecipes() {
      try {
        // if(this.random=="search" && this.query==""){return}
        let response
        let url = "https://wikirecipe.cs.bgu.ac.il/"
        if(this.random== "true"){url += this.randomReq;}
        else if(this.random == "search"){url += this.searchRecipes;}
        else if(this.random == "favorite"){url += this.favoriteRecipes;}
        else if(this.random == "family"){url += this.familyRecipes;}
        else if(this.random == "private"){url += this.privateRecipes;}
        else if(this.random == "lastSearch"){url += this.lastSearch;}
        else{url+= this.lastWatchedReq;}
        if (this.random != "search"){
          response = await this.axios.get(
            url,{ withCredentials: true }
          );
        }
        else{
          console.log(this.searchAmount)
          response = await this.axios.get(
          url,
          {
            params:{
              query:this.query,
              cuisine: this.searchCuisine,
              intolerances: this.searchIntol,
              diet: this.searchDiet,
              amount: this.searchAmount
              }}
          );
        }
        if(response == null){
          this.recipes = [];
          return
        }
        console.log("response amount")
        // console.log( response)
        console.log( response.data)
        if (this.random == "lastSearch" && response.data.length > 0){
          response = await this.axios.get(
            "https://wikirecipe.cs.bgu.ac.il/recipes/searchForRecipe",
            {
              params:{
                query:response.data[0],
                amount:5
                }}
          );
        }
        console.log(response)
        const d = response.data;
        let recipes;
        if(this.random == "true" || this.random == "search" || this.random == "lastSearch"){recipes = d.message}
        else{recipes=d}
        this.recipes = [];
        this.recipes.push(...recipes);
        if(this.random == "search"){
          console.log(this.recipes)
        }
      } catch (error) {
        console.log(error);
        // console.log(response);
      }
    }
  },
  computed:{
    evens_numbers(){
      var l = []
      for(var i=0;i<=this.recipes.length;i = i + 2){
        l.push(i)
      }
      return l
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.recipePreview{
  margin-inline: 50px;
}
</style>

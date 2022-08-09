<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div v-if="recipes.length <= 3">
      <b-col v-for="r in recipes" :key="r.id">
        <div>
          <RecipePreview class="recipePreview" :recipe="r"/>
        </div>
      </b-col>
    </div>
    <div v-else>
      <b-col v-for="n in evens_numbers" :key="n">
        <b-row>
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
    title: {
      type: String,
      required: true
    },
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
      searchRecipes:"recipes/searchForRecipe"
    };
  },
  mounted() {
    this.updateRecipes();
    // this.searchAmount = 5
    // this.searchCuisine = ""
    // this.searchDiet = ""
    // this.searchIntol = ""
    // this.searchSort = null
  },
  methods: {
    async updateRecipes() {
      try {
        // if(this.random=="search" && this.query==""){return}
        let response
        let url = "http://127.0.0.1:3000/"
        if(this.random== "true"){url += this.randomReq;}
        else if(this.random == "search"){url += this.searchRecipes;}
        else{url+= this.lastWatchedReq;}
        if (this.random != "search"){
          response = await this.axios.get(
            // this.$root.store.state.server_domain + "/recipes/getRandomRecipes",
            url
            // "https://test-for-3-2.herokuapp.com/recipes/random"
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
        console.log(response)
        if(response == null){
          this.recipes = [];
          return
        }
        const d = response.data;
        let recipes;
        if(this.random == "true" || this.random == "search"){recipes = d.message}
        else{recipes=d}
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed:{
    evens_numbers(){
      var l = []
      console.log(this.recipes.length)
      for(var i=0;i<=this.recipes.length;i = i + 2){
        console.log(i)
        l.push(i)
      }
      console.log(l)
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

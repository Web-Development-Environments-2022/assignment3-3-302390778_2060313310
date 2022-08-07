<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
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
            response = await this.axios.get(
            url,
            {
              params:{
                query:this.query}}
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
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

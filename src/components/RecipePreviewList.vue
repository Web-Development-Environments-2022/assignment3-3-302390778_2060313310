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
    }
  },
  data() {
    return {
      recipes: [],
      randomReq:"recipes/getRandomRecipes",
      lastWatchedReq:"users/threelastWatched"
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        let url = "http://127.0.0.1:3000/"
        if(this.random== "true"){url += this.randomReq}
        else{url+= this.lastWatchedReq}
        const response = await this.axios.get(
          // this.$root.store.state.server_domain + "/recipes/getRandomRecipes",
          url
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        const d = response.data;
        let recipes;
        if(this.random == "true"){recipes = d.message}
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

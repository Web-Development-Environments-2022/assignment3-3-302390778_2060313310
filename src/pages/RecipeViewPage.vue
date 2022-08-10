<template>
  <div class="container">
    <div v-if="recipe">
      <div>
        <h1 id="title">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center"/>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="center">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Popularity: {{ recipe.aggregateLikes }} likes</div>
              <div>Servings: {{ recipe.servings }} meals</div>
              <div v-if="recipe.vegan">
                vegan
              </div>
              <div v-if="recipe.vegetarian">
                vegetarian
              </div>
              <div v-if="recipe.glutenFree">
                gluten Free
              </div>
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
              <!-- {{ recipe.instructions }} -->
            </ol>
            <b-button pill variant="outline-primary" @click="saveRecipe(recipe.id)">Save recipe</b-button>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  data() {
    return {
      recipe: null
      // image_load: false
    };
  },
  methods:{
    async saveRecipe(recipe_id){
      response = await this.axios.post(
            "http://127.0.0.1:3000//addFavorites",{ withCredentials: true },
            {
              params:{
                recipeId:recipe_id
                }}
          );
    }
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          //this.$root.store.state.server_domain + "/recipes/getRecipeDescription/",
          "http://localhost:3000/recipes/getRecipeFromClick",
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
        analyzedInstructions,
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

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
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
</style>

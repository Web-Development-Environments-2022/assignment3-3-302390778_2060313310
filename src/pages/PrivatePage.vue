<template>
  <div class="container">
    <h1>{{$root.store.username}} recipes</h1>
    <createRecipeModel></createRecipeModel>
    <RecipePreviewList id="result"
      random="private"
      ref="rpl">
    </RecipePreviewList>
  </div>
</template>

<script>
  import RecipePreviewList from "../components/RecipePreviewList";
  import createRecipeModel from "../components/createRecipeModel"
  export default {
    components: {
      RecipePreviewList,
      createRecipeModel
    }
  }
</script>

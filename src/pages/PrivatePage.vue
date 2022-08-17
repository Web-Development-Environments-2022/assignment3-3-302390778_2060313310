<template>
  <div class="container" align="center">
    <h1><strong>{{$root.store.username}}'s recipes</strong></h1>
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

<template>
  <div class="container">
    <h1>Favorites recipes</h1>
      <RecipePreviewList id="result" 
      random="favorite"
      ref="rpl">
    </RecipePreviewList>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList,
  }
}
</script>

<template>
  <div class="container" align="center">
    <h1><strong>{{$root.store.username}}'s Favorites recipes</strong></h1>
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

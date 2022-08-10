<template>
  <div class="container">
    <h1>Family recipes</h1>
      <RecipePreviewList id="result"
      random="family"
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

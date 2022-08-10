<template>
  <div class="container">
    <h1>{{$root.store.username}} recipes</h1>
    <b-button pill variant="outline-primary" :to="{ name: 'createNew' }">+ New Recipe</b-button>
    <RecipePreviewList id="result"
      random="private"
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

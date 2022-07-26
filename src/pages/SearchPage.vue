<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <input v-model="query" placeholder="Enter Query">
    <br>
    <b-button @click="search">Search</b-button>
    <RecipePreviewList v-if="show" :key="searchKey" title="Recipes that found" random="search" v-bind:query="query"></RecipePreviewList>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
  export default{
    name: "searchPage",
      components: {
    RecipePreviewList
  },
    data(){
      return{
        query:"",
        show:false,
        searchKey:0
      };
    },
    created(){
      this.show=false;
      this.query="";
      this.searchKey = 0;
    },
    methods: {
    search() {
      this.show=false
      if (this.query != ""){
        this.show=true;
        this.searchKey++;
      }
    }
  }
  }
</script>

<!-- <style>
#s{
    height: 50px;
    width: 50px;
}

</style> -->


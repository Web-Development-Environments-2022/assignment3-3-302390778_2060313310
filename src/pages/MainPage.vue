<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <h2 v-if="!$root.store.username">Hello guest</h2>
    <h2 v-else>Hello {{ $root.store.username }}</h2>
    <b-row>
      <b-col>
        <h2>
          Random recipes
        </h2>
      </b-col>
      <b-col v-if="$root.store.username">
        <h2>
          Last viewed recipes
        </h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <RecipePreviewList random="true" class="RandomRecipes center" ref="rpl">
            
          </RecipePreviewList>
          <b-button id="btn" variant="outline-secondary" @click="changeRandoms()"><strong>More</strong></b-button>
        </div>
        
      </b-col>
      <b-col>
        <div v-if="!$root.store.username">
          <br><br><br>
          <LoginPageVue routNext="true"></LoginPageVue>
        </div>
      <div v-else>
        <!-- <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link> -->
        <RecipePreviewList
          random="false"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled>
        </RecipePreviewList>
      </div>
      </b-col>
    </b-row>
    
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPageVue from "./LoginPage.vue";
export default {
  components: {
    RecipePreviewList,
    LoginPageVue
  },
  mounted(){
    // console.log(this.$root.store.login)
  },
  methods:{
    changeRandoms(){
      this.$refs.rpl.updateRecipes()
    }
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
#btn{
  margin-left: 180px;
  padding: 16px 32px;
  font-size: large;
}
</style>
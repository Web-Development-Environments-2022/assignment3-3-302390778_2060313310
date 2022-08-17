<template>
  <div id="app">
      <div id="nav" style="background-color:aliceblue;border-bottom: 1px solid lightblue;box-shadow: 0px 0px 20px #888888;">
        <b-row
        align-v="stretch"
        style="font-size: 1.85rem;">
          <b-col>
            <img src="https://flyclipart.com/thumb2/fork-and-knife-transparent-png-pictures-910116.png" width="84" height="51">
            <!-- Logo -->
          </b-col>
          <b-col>
            <router-link :to="{ name: 'main' }">Home</router-link>
          </b-col>
          <b-col>
            <router-link :to="{ name: 'search' }">Search</router-link> 
          </b-col>
          <b-col>
            <router-link :to="{ name: 'about' }">About</router-link>
          </b-col>
          <b-col>
            <div v-if="!$root.store.username">Hello guest</div>
            <div v-else>Hello {{$root.store.username}}</div>
          </b-col>
          <b-col>
            <router-link :to="{ name: 'register' }" v-if="!$root.store.username">Register</router-link> 
          </b-col>
          <b-col>
            <router-link :to="{ name: 'login' }" v-if="!$root.store.username">Login</router-link>
          </b-col>
          <b-col>
            <b-button variant="outline-secondary" class="btn" @click="Logout" :disabled="!$root.store.username">Logout</b-button> 
          </b-col>
          <div>
            <b-dropdown v-if="$root.store.username" id="dropdown-1" text="Private Zone" class="drop-down">
            <!-- TODO: need to handle the rights links -->
             <b-dropdown-item :to="{ name: 'favorite' }">Favorites rcipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'private' }">Private rcipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'family' }">Family rcipes</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-row>
      </div>
    <router-view />
  </div>
</template>

<script>
// import { ref } from 'vue';
export default {
  name: "app",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  margin-bottom: 10px;
}

#nav a {
  font-weight: bold;
  
  color: #2c3e50;
}

#nav a.router-link-exact-active {
   color: #3abead;
}
</style>
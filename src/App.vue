<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <HelloWorld /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    this.$http.get("https://randomuser.me/api").then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
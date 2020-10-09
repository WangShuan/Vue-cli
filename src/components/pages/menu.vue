<template>
  <div class="hello">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/page/">Card1</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/card2">Card2</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/card3">Card3</router-link>
      </li>
      <li class="nav-item">
        <a href="" v-on:click.prevent="updatePath" class="nav-link">
          切換到指定頁面</a
        >
      </li>
      <li class="nav-item">
        <a href="" v-on:click.prevent="beforePath" class="nav-link">
          回到前一個頁面</a
        >
      </li>
      <li class="nav-item">
        <a href="" v-on:click.prevent="nextPath" class="nav-link">
          前往下一個頁面</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    updatePath() {
      this.$router.push("/page/card2");
    },
    beforePath() {
      this.$router.back();
    },
    nextPath() {
      this.$router.go(1);
    },
  },
};
</script>

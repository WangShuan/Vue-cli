<template>
  <div>
    <img
      src="https://i2.kknews.cc/SIG=1galvfs/2579/4540512389.jpg"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">Card3 title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    var id = this.$route.params.id;
    this.$http.get(`https://randomuser.me/api/?seed=${id}`).then((res) => {
      console.log(res.data);
    });
  },
};
</script>

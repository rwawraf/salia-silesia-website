<template>
  <div class="post-view" v-if="currentPost">
      <div class="container quilWrapper">
          <h2>{{ this.currentPost[0].blogTitle }}</h2>
          <img :src="require(`../assets/blogPhotos/${this.currentPost[0].blogCoverPhoto}.jpg`)" alt="" />
          <div class="post-content" v-html="this.currentPost[0].blogHTML"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ViewPost",
    data() {
        return {
            currentPost: null,
        };
    },
    mounted() {
      this.currentPost = this.$store.state.blogPostArray.filter((post) => {
        return post.blogID === this.$route.params.blogid;
      });
    },
};
</script>

<style lang="scss">

.post-view {
  min-height: 100%;
  
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  img {
    width: 100%;
    margin-bottom: 32px;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}
</style>
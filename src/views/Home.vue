<template>
  <div class="home">
    <Carousel />
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in blogPostArray" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Relevante Posts anschauen</h3><br>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogCardsArray" :key="index" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Carousel from "../components/Carousel";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Carousel
  },
  data() {
    return {
            slides: ['bg-1', 'bg-2', 'bg-3']
        }
  },
  computed: {
    blogCardsArray() {
      return this.$store.state.blogCardsArray;
    },
    blogPostArray() {
      return this.$store.state.blogPostArray;
    },
    welcomeScreen() {
      return this.$store.state.welcomeScreen;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="home">
    <Carousel />
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in blogPostFeed" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>{{ $t('home.showMorePosts') }}</h3><br>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogPostCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="google-map-wrap">
      <div class="container-map">
        <div class="google-map">
          <GoogleMap/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Carousel from "../components/Carousel";
import GoogleMap from "../components/GoogleMap";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Carousel,
    GoogleMap
  },
  data() {
    return {
    }  
  },
  computed: {
    blogPostFeed() {
      return this.$store.getters.blogPostFeed;
    },
    blogPostCards() {
      return this.$store.getters.blogPostCards;
    },
    welcomeScreen() {
      return this.$store.state.welcomeScreen;
    }
  }
};
</script>

<style lang="scss" scoped>
div.home {
  padding-bottom: 0;
  margin-bottom: 0;
}

.google-map-wrap {
  position: relative;
  background-color: #303030;

  .google-map {
    width: 100%;
    height: 400px;
  }
  
}
</style>
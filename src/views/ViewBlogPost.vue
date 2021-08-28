<template>
<div>
  <div class="post-view" v-if="currentPost">
      <div class="container quilWrapper">
          <h2>{{ this.currentPost[0].blogTitle }}</h2>
          <img class="wappen" :src="require(`../assets/blogPhotos/${this.currentPost[0].blogCoverPhoto}.jpg`)" alt="" />
          <div class="post-content" v-html="this.currentPost[0].blogHTML"></div>
      </div>
      <div class="additional-photo-wrap" v-if="this.additionalPhotos">
        <div class="additional-photos">
          <img class="single-photo" v-for="photo in this.additionalPhotos" :key="photo"
            :src="require(`../assets/blogPhotos/blogAdditionalPhotos/${photo}.jpg`)"
          />
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: "ViewPost",
    data() {
        return {
            currentPost: null,
            additionalPhotos: null,        
        };
    },
    mounted() {
      this.currentPost = this.$store.state.blogPostArray.filter((post) => {
        return post.blogID === parseInt(this.$route.params.blogid);
      });
      
      this.additionalPhotos = this.currentPost[0].blogAdditionalPhotos;
    }
};
</script>

<style lang="scss">

.post-view {
  min-height: 100%;
  
  .container {
    max-width: 1200px;
    padding: 60px 10px;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 48px;
  }

  .wappen {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 48px;
  }

  h4 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 24px;
  }

  .additional-photo-wrap {
    position: relative;
    padding: 30px 16px;
    margin: 0px 30px;
    background-color: #fff;
    @media(min-width: 500px) {
    padding: 0px 16px 30px 16px;
    }

    .additional-photos {
      display: grid;
      gap: 16px;
      grid-template-columns: 1fr;


      @media(min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media(min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media(min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
      }
    }

    .single-photo {
      position: relative;
      cursor: pointer;
      display: flex;
      width: 100%;
      margin-bottom: 0px;
    }
  }
}
</style>
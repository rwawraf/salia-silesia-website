<template>
<div>
    <div class="post-view" v-if="currentPost">
      <vue-gallery-slideshow
        :images="this.currentPost[0].slideshowImages" :index="index"
        @close="index = null"
      ></vue-gallery-slideshow>  
      <div class="container quilWrapper">
          <h2>{{ this.currentPost[0].blogTitle }}</h2>
          <img class="wappen" :src="require(`../assets/blogPhotos/${this.currentPost[0].blogCoverPhoto}.jpg`)" alt="" />
          <div class="post-content" v-for="chapter in this.currentPost[0].blogHTML" :key="chapter">
              <div class="chapter-content">
                  <h4 v-if="chapter.chapterTitle">{{ chapter.chapterTitle }}</h4>
                  <p v-html="chapter.chapterHTML"></p>
                  <div class="chapter-photo-wrap">
                    <div class="chapter-photos">
                        <b-img class="chapter-photo" thumbnail fluid v-bind="photoProps" v-for="photo in chapter.chapterPhotos" :key="photo"
                          :src="require(`../assets/blogPhotos/chapterPhotos/${photo}.jpg`)"
                          @click="index = 0"
                        ></b-img>
                    </div>
                  </div>
              </div>            
          </div>
      </div>
      <div class="additional-photo-wrap" v-if="this.additionalPhotos">
        <div class="additional-photos">
          <img class="single-photo" v-for="(photo, i) in this.additionalPhotos" :key="photo"
            :src="require(`../assets/blogPhotos/blogAdditionalPhotos/${photo}.jpg`)"
            @click="this.index = i"
          />
        </div>
      </div>
    </div>
</div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
    name: "ViewPost",
    components: {
      VueGallerySlideshow,
    },
    data() {
        return {
            currentPost: null,
            additionalPhotos: null,
            index: null,
            photoProps: { class: 'm2' },
            thumbnailImages: null,      
        };
    },
    mounted() {
      this.currentPost = this.$store.state.blogPostArray.filter((post) => {
        return post.blogID === parseInt(this.$route.params.blogid);
      });
      
      this.additionalPhotos = this.currentPost[0].blogAdditionalPhotos;

      for (let i = 0; i < this.currentPost[0].blogHTML.length; i++) {
        this.thumbnailImages.push(this.currentPost[0].blogHTML[i].chapterPhotos);
      }

      // this.galleryPhotosTemp = this.currentPost[0].blogHTML[0].chapterPhotos;

      // function createGalleryLinks() {
      //   let galleryLinks = [];
      //   for (let i = 0; i < this.galleryPhotosTemp.length; i++) {
      //     galleryLinks = "../assets/blogPhotos/chapterPhotos/" + this.galleryPhotosTemp[i] + ".jpg"
      //   }
      //   return galleryLinks;
      // }
    }
};
</script>

<style lang="scss">

.post-view {
  min-height: 100%;
  
  .container {
    max-width: 1400px;
    padding: 60px 10px;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 32px;
    font-weight: 600;
    padding: 32px;


    @media(min-width: 500px) {
      font-size: 24px;
    }

    @media(min-width: 900px) {
      font-size: 32px;
    }

    @media(min-width: 1200px) {
      font-size: 48px;
    }
  }

  .wappen {
    display: block;
    max-height: 500px;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 48px;
  }

  .post-content {
    margin: 0 auto;
    max-width: 1000px;
  }

  h4 {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 24px;
    margin-left: 24px;
  }

  p {
    padding: 24px;
    font-size: 18px;
    text-align: justify;
    white-space: pre-line;
  }

  .single-photo {
    position: relative;
    cursor: pointer;
    margin-bottom: 0px;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  
  .chapter-content {
    width: 100%;
    margin: 0 auto;
  }

  .chapter-photo-wrap {
    width: 100%;
    padding: 30px 16px;
    background-color: #fff;
    @media(min-width: 500px) {
    padding: 0px 16px 30px 16px;
    }

    .chapter-photos {
      margin: 0 auto;
      text-align: center;
    }

    .chapter-photo {
      width: 300px;
      height: 300px;
      object-fit: cover;
      margin: 6px;
    }
  }

}
</style>
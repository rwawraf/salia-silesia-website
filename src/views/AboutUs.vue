<template>
    <div id="kotki">
        <img class="image" v-for="(image, i) in thumbnailImages" :src="require(`../assets/blogPhotos/chapterPhotos/${image}.jpg`)" :key="i" @click="index = i">
        <vue-gallery-slideshow :images="slideshowImages" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: "AboutUs",
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
        thumbnailImages: [
          'amicitia',
          'grundung-1',
          'grundung-2',
          'grundung-3',
        ],
        slideshowImages: [
          require("../assets/blogPhotos/chapterPhotos/amicitia.jpg"),
          require("../assets/blogPhotos/chapterPhotos/grundung-1.jpg"),
          require("../assets/blogPhotos/chapterPhotos/grundung-2.jpg"),
          require("../assets/blogPhotos/chapterPhotos/grundung-3.jpg"),
        ],
        index: null
    }  
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
.image {
    width: 100%;
}
</style>


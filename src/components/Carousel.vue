<template>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 1px 1px 2px #333;"
    :interval="5000"
    fade
    controls
    indicators
    label-next=""
    label-prev=""
    background="#000"
    img-width="1024"
    img-height="640"
  >
      <b-carousel-slide
        caption="AV Salia Silesia"
        text="Die Studentenverbindung in Oppeln" 
      >
         <template #img>
          <b-img
            center
            class="d-block carousel-slide"
            src="../assets/carouselPhotos/bg-1.jpg"
          ></b-img>
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="AV Salia Silesia"
        text="Die Studentenverbindung in Oppeln"  
      >
         <template #img>
          <b-img
            center
            class="d-block carousel-slide"
            src="../assets/carouselPhotos/bg-2.jpg"
          ></b-img>
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="AV Salia Silesia"
        text="Die Studentenverbindung in Oppeln" 
      >
         <template #img>
          <b-img 
            center
            class="d-block carousel-slide"
            src="../assets/carouselPhotos/bg-3.jpg"
          ></b-img>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss">
#carousel-fade {
    position: relative;
    display: flex;
    opacity: 0.9;
}

.carousel-slide {
  width: 120vh;

  @media(max-width: 800px) {
    width: 70vh;
  }
}
</style>
<template>
    <div class="contact">
        <div class="google-map-wrap">
            <div class="container-map">
                <div class="google-map">
                    <GoogleMap/>
                </div>
            </div>
        </div>
        <div class="contact-data-wrapper">
          <img class="band-navbar" src="../assets/navbarImages/band.jpg"/>          
          <div class="contact-data-content">
            <div>
              <h2>
                Kontaktdaten
              </h2>
              <p class="contact-data">
                Salia Silesia Gleiwitz zu Oppeln im CV<br>
                ul. Hlouszka 12<br>
                45-772 Opole, Polska<br>
                x@salia-silesia.eu<br>
                +48 693 809 376<br>
              </p>
            </div>
          </div>
          <div class="contact-photo">
            <img :src="require(`../assets/blogPhotos/haus-salia.jpg`)" alt="" />
          </div>
        </div>
        <div class="contact-card-wrap">
            <img class="band-navbar" src="../assets/navbarImages/band.jpg"/> 
            <div class="container">
                <h3>{{ $t('contact.chargesAktivitas') }}</h3><br>
                <div class="contact-cards-aktivitas">
                    <ContactCard :contact="contact" v-for="(contact, index) in contactCardsAktivitas" :key="index" />
                </div>
                <h3>{{ $t('contact.chargesPhilister') }}</h3><br>
                <div class="contact-cards-philister">
                    <ContactCard :contact="contact" v-for="(contact, index) in contactCardsPhilister" :key="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";
import ContactCard from "../components/ContactCard";

export default {
  name: "Contact",
  components: {
    GoogleMap,
    ContactCard,
  },
  data() {
    return {
    }  
  },
  computed: {
      contactCardsAktivitas() {
        return this.$store.getters.contactCardsAktivitas;
      },
      contactCardsPhilister() {
        return this.$store.getters.contactCardsPhilister;
      }
  }
};
</script>

<style lang="scss" scoped>
div.contact {
  padding-bottom: 0;
  margin-bottom: 0;
}

.google-map-wrap {
  position: relative;
  margin-bottom: -10px;

  .google-map {
    width: 100%;
    height: 100%;
  }
}

.contact-data-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  color: #fff;
  background-color: #303030;

  @media(min-width: 700px) {
      min-height: 650px;
      max-height: 650px;
      flex-direction: row;
  }
  
  .band-navbar {
      width: 100%;
      height: 15px;
      left: 0;
      position: absolute;
  }

  .contact-data-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    align-items: center;
    flex: 4;
    order: 2;

    @media(min-width: 700px) {
        order: 2;
    }

    @media(min-width: 800px) {
        flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;

      @media(min-width: 700px) {
          padding: 0 24px;
      }

      h2 {
          font-size: 32px;
          font-weight: 300;
          text-transform: uppercase;
          margin-bottom: 24px;
          @media(min-width: 700px) {
              font-size: 40px;
          }
      }

      p {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
      }

      .contact-data {
          font-size: 18px;
          text-align: center;
      }    
    }
  }

  .contact-photo {
      order: 1;
      flex: 3;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

      @media(min-width: 700px) {
          order: 1;
      }

      @media(min-width: 800px) {
          flex: 4;
      }

      img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
  }
}
</style>
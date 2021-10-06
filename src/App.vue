<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <transition
        name="fade"
      >
        <router-view />
      </transition>
      <Footer />
      <cookie-law theme="blood-orange" buttonText="Ja, ich stimme zu">
        <div slot="message">
          Mit Deinem "Ja, ich stimme zu" erklärst Du Dich einverstanden, dass wir Cookies setzen. Unsere Datenschutzklärung findest Du <router-link :to="{ name: 'ViewBlogPost', params: { blogid: 9 } }">hier</router-link>.
        </div>
      </cookie-law>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieLaw from 'vue-cookie-law'

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
    CookieLaw,
  },
  data() {
    return {
      navigation: null,
    };
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #303030;
  background-color: #fff;
}

.link-light {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background-color: #3030;
}

.link-blogpost {
    cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #303030;
  background-color: #f1f1f1;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media(min-width: 500px) {
    padding: 100px 16px;
  }

  .band-navbar {
    width: 100%;
    height: 15px;
    left: 0;
    top: -10px;
    position: absolute;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media(min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    
  }
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

    @media(min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    
    @media(min-width: 1600px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media(min-width: 2000px) {
      grid-template-columns: repeat(6, 1fr);
    }        
  }
}


.contact-card-wrap {
  text-align: center;
  position: relative;
  padding: 20px 8px;
  background-color: #f1f1f1;
  
  .band-navbar {
      width: 100%;
      height: 15px;
      left: 0;
      top: -10px;
      position: absolute;
  }

  h3 {
    margin: 36px 0px;
    text-transform: uppercase;
  }

  .contact-cards-aktivitas {
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 32px;
    margin-bottom: 100px;

    @media(min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1650px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .contact-cards-philister {
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 32px;
    margin-bottom: 64px;

    @media(min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1650px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <footer>
      <div class="band">
        <img class="band-navbar" src="../assets/navbarImages/band.jpg"/>
      </div>
    <div class="container">
      <div class="left">
          <ul>
            <router-link class="link link-light" :to="`/${$i18n.locale}/`">{{ $t('navigation.home') }}</router-link>
            <router-link class="link link-light" :to="`/${$i18n.locale}/about-us`">{{ $t('navigation.aboutUs') }}</router-link>
            <router-link class="link link-light" :to="`/${$i18n.locale}/program`">{{ $t('navigation.program') }}</router-link>
            <router-link class="link link-light" :to="`/${$i18n.locale}/posts`">{{ $t('navigation.posts') }}</router-link>
            <router-link class="link link-light last-elem" :to="`/${$i18n.locale}/contact`">{{ $t('navigation.kontakt') }}</router-link>
          </ul>
          <ul>
            <a href="https://www.instagram.com/salia_silesia/" target="_blank"><instagram class="svg-icon svg-white"/></a>
            <a href="https://www.facebook.com/AV-Salia-Silesia-Gleiwitz-zu-Oppeln-im-CV-137262049627126/" target="_blank"><facebook class="svg-icon svg-black"/></a>
            <a href="https://www.instagram.com/salia_silesia/" target="_blank"><instagram class="svg-icon svg-orange"/></a>
            <a href="https://www.instagram.com/salia_silesia/" target="_blank"><youtube class="svg-icon svg-white"/></a>
          </ul>
        <img class="brand-logo-footer" alt="salia-wappen" src="../assets/navbarImages/salia-wappen.png"/>
        <p class="wahlspruch">Nec aspera terrent!</p>
        <ul>
          <a class="link link-light link-footer-small" href="https://www.cartellverband.de" target="_blank">Cartellverband (CV)</a>
          <a class="link link-light link-footer-small" href="https://www.opole.pl/" target="_blank">{{ $t('footer.city') }}</a>
          <a class="link link-light link-footer-small" href="https://www.salia-silesia.eu/datenschutzerklaerung" target="_blank">{{ $t('footer.privacyStatement') }}</a>
          <a class="link link-light link-footer-small last-elem" href="https://www.salia-silesia.eu/impressum" target="_blank">Impressum</a>
        </ul>
        <p class="watermark">© A.V. Salia Silesia Gleiwitz zu Oppeln</p>
      </div>
    </div>
  </footer>
</template>

<script>

import instagram from "../assets/Icons/instagram-brands.svg";
import facebook from "../assets/Icons/facebook-brands.svg";
import youtube from "../assets/Icons/youtube-brands.svg";

export default {
  name: "footer",
  components: {
    instagram,
    facebook,
    youtube
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 0px 0px;
  background-color: #303030;

  .band {
    padding-bottom: 25px;
    display: flex;
    
    img {
      width: 100%;
      height: 20px;
      margin: auto;
    }
  }

  .container {
    justify-content: center;

    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    .watermark {
      font-size: 15px;
      margin-bottom: 10px;
    }
    
    .wahlspruch {
      font-size: 20px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .left {
      text-align: center;
      align-items: center;
      color: #fff;

      @media (min-width: 800px) {
        align-items: initial;
        gap: 0;
      }

      .brand-logo-footer {
        height: 15vh;
        width: 15vh;
        margin-bottom: 30px;
      }

      ul {
        padding-bottom: 30px;
        margin: auto;
        gap: 32px;

        .svg-icon {
          width: 40px;
          height: 40px;
          margin-right: 30px;
        }

        .svg-orange {
          color: orange;
        }
      
        .svg-black {
          color: #0e0e0e;
        }

        .svg-white {
          color: #f1f1f1;
        }
      }
    }

    .link {
      margin-left: 15px;
      font-size: 20px;
      list-style-type: circle;

      &:hover {
        color: orange;
        transition: color 0.5s ease;
      }

      &::after {
        margin-left: 10px;
        content: " \2022";

      }

    }

    .last-elem::after {
      content: "";
    }

    .link-footer-small {
      font-size: 15px;
      color: darkorange;

      &:hover {
        color: #f1f1f1;
        transition: color 0.5s ease;
      }
    }
    
  }
}
</style>

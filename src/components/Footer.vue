<template>
  <footer>
      <div class="band">
        <img class="band-navbar" src="../assets/navbarImages/band.jpg"/>
      </div>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }">Salia Silesia</router-link>
          <ul>
            <li>
              <a href="https://www.instagram.com/salia_silesia/" target="_blank"><instagram class="svg-icon"/></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul padding-left="0px">
            <router-link class="link link-light" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link link-light" to="#">Über uns</router-link>
            <router-link class="link link-light" to="#">Programm</router-link>
            <router-link class="link link-light" :to="{ name: 'Posts' }">Beiträge</router-link>
            <router-link class="link link-light" to="#">Kontakt</router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <img class="brand-logo-footer" alt="salia-wappen" src="../assets/navbarImages/salia-wappen.png"/>
        <p>Nec aspera terrent!</p>
      </div>
    </div>
  </footer>
</template>

<script>

import instagram from "../assets/Icons/instagram-brands.svg";

export default {
  name: "footer",
  components: {
    instagram
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
    padding: 25px 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;


    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      flex: 1;
    }
    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }
    p {
      margin-top: auto;
    }
  }

}
</style>

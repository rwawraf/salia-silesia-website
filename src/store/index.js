import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '../i18n';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'de',
    welcomeScreen: {
      title: i18n.t(`welcomeScreen.title`),
      blogPost: i18n.t(`welcomeScreen.blogPost`),
      welcomeScreen: true,
      photo: "old-salia",
    },
    contactCardsArray: [
      { chargeTitle: "Senior \n(x)", chargeName: "Florian Kowol", chargeContact: "xd", chargeMail: "x@salia-silesia.eu", chargePhoto: "florian-kowol" },
      { chargeTitle: "Consenior \n(xx)", chargeName: "Michael Wollny", chargeContact: "xd", chargeMail: "xx@salia-silesia.eu", chargePhoto: "michael-wollny" },
      { chargeTitle: "Fuxmajor \n(FM)", chargeName: "Daniel Gora", chargeContact: "xd", chargeMail: "fm@salia-silesia.eu", chargePhoto: "xd" },
      { chargeTitle: "Scriptor \n(xxx)", chargeName: "Robert Piosek", chargeContact: "xd", chargeMail: "xxx@salia-silesia.eu", chargePhoto: "robert-piosek" },
      { chargeTitle: "Quaestor \n(xxxx)", chargeName: "Thomas Kusiek", chargeContact: "xd", chargeMail: "xxxx@salia-silesia.eu", chargePhoto: "thomas-kusiek" },
      { chargeTitle: "Philister-Senior \n(Phil-x)", chargeName: "Peter Rybczyk", chargeContact: "xd", chargeMail: "phil-x@salia-silesia.eu", chargePhoto: "peter-rybczyk" },
      { chargeTitle: "Philister-Consenior \n(Phil-xx)", chargeName: "Robert Rybczyk", chargeContact: "xd", chargeMail: "phil-xx@salia-silesia.eu", chargePhoto: "xd" },
      { chargeTitle: "Philister-Scriptor \n(Phil-xxx)", chargeName: "Markus Heller", chargeContact: "xd", chargeMail: "phil-xxx@salia-silesia.eu", chargePhoto: "xd" },
      { chargeTitle: "Philister-Quaestor \n(Phil-xxxx)", chargeName: "Franz Ziegler", chargeContact: "xd", chargeMail: "phil-xxxx@salia-silesia.eu", chargePhoto: "xd" },
    ],
    blogCardsArray: [
      { blogID: 5, blogTitle: i18n.t(`blogPostArray[5].blogTitle`), blogCoverPhoto: "haus-salia", blogDate: "August 25, 2021" },
      { blogID: 6, blogTitle: i18n.t(`blogPostArray[6].blogTitle`), blogCoverPhoto: "aktivenfahrt-belgien", blogDate: "August 25, 2021" },
      { blogID: 7, blogTitle: i18n.t(`blogPostArray[7].blogTitle`), blogCoverPhoto: "honigverkostung", blogDate: "Juli 28, 2021" },
      { blogID: 8, blogTitle: i18n.t(`blogPostArray[8].blogTitle`), blogCoverPhoto: "semesterantrittskneipe-emilienhutte", blogDate: "März 16, 2021" },
    ],
    blogPostArray: [
      {
        blogID: 0,
        blogTitle: i18n.t(`blogPostArray[0].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[0].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[0].blogHTML`),
        blogCoverPhoto: "old-salia",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 1,
        blogTitle: i18n.t(`blogPostArray[1].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[1].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[1].blogHTML`),
        blogCoverPhoto: "salia-wappen",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 2,
        blogTitle: i18n.t(`blogPostArray[2].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[2].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[2].blogHTML`),
        blogCoverPhoto: "semesterprogramm",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 3,
        blogTitle: i18n.t(`blogPostArray[3].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[3].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[3].blogHTML`),
        blogCoverPhoto: "geschichte-salia",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 4,
        blogTitle: i18n.t(`blogPostArray[4].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[4].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[4].blogHTML`),
        blogCoverPhoto: "haus-salia",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 5,
        blogTitle: i18n.t(`blogPostArray[5].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[5].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[5].blogHTML`),
        blogCoverPhoto: "haus-salia",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 6,
        blogTitle: i18n.t(`blogPostArray[6].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[6].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[6].blogHTML`),
        blogCoverPhoto: "aktivenfahrt-belgien",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 7,
        blogTitle: i18n.t(`blogPostArray[7].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[7].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[7].blogHTML`),
        blogCoverPhoto: "honigverkostung",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 8,
        blogTitle: i18n.t(`blogPostArray[8].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[8].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[8].blogHTML`),
        blogCoverPhoto: "semesterantrittskneipe-emilienhutte",
        blogAdditionalPhotos: null,
      },
    ],
  },
  getters: {
    blogPostFeed(state) {
      return state.blogPostArray.slice(1, 5);
    },
    blogPostCards(state) {
      return state.blogCardsArray.slice(0, 4);
    },
    contactCardsAktivitas(state) {
      return state.contactCardsArray.slice(0, 5);
    },
    contactCardsPhilister(state) {
      return state.contactCardsArray.slice(5, 10);
    },
/*     translatedBlogCardsArray: (state, getters) => {
      const locale = i18n.locale;
      return state.items.map(item => ({
        title: i18n.t(item.title)
      }))
    } */

    getLanguage: state => state.language
  },
  mutations: {
    changeLanguage (state, data) {
      this.state.language = data
    }
  },
  actions: {
    changeLanguage: ({ commit }, data) => commit('changeLanguage', data)
  },
  modules: {
  }
})

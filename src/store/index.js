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
      { chargeTitle: "Senior \n(x)", chargeName: "Florian Kowol", chargeContact: "+48 693 809 376", chargeMail: "x@salia-silesia.eu", chargePhoto: "florian-kowol" },
      { chargeTitle: "Consenior \n(xx)", chargeName: "Michael Wollny", chargeContact: "+48 886 808 043", chargeMail: "xx@salia-silesia.eu", chargePhoto: "michael-wollny" },
      { chargeTitle: "Fuxmajor \n(FM)", chargeName: "Daniel Gora", chargeContact: "leer", chargeMail: "fm@salia-silesia.eu", chargePhoto: "xd" },
      { chargeTitle: "Scriptor \n(xxx)", chargeName: "Robert Piosek", chargeContact: "+48 692 830 622", chargeMail: "xxx@salia-silesia.eu", chargePhoto: "robert-piosek" },
      { chargeTitle: "Quaestor \n(xxxx)", chargeName: "Thomas Kusiek", chargeContact: "+48 884 120 167", chargeMail: "xxxx@salia-silesia.eu", chargePhoto: "thomas-kusiek" },
      { chargeTitle: "Philister-Senior \n(Phil-x)", chargeName: "Peter Rybczyk", chargeContact: "+48 604 411 265", chargeMail: "phil-x@salia-silesia.eu", chargePhoto: "peter-rybczyk" },
      { chargeTitle: "Philister-Consenior \n(Phil-xx)", chargeName: "Christian Kalisch", chargeContact: "+49 511 22510", chargeMail: "phil-xx@salia-silesia.eu", chargePhoto: "xd" },
      { chargeTitle: "Philister-Scriptor \n(Phil-xxx)", chargeName: "Markus Heller", chargeContact: "leer", chargeMail: "phil-xxx@salia-silesia.eu", chargePhoto: "xd" },
      { chargeTitle: "Philister-Quaestor \n(Phil-xxxx)", chargeName: "Franz Josef Ziegler", chargeContact: "+49 89 42017791", chargeMail: "phil-xxxx@salia-silesia.eu", chargePhoto: "xd" },
    ],
    blogCardsArray: [
      { blogID: 5, blogTitle: i18n.t(`blogPostArray[5].blogTitle`), blogCoverPhoto: "haus-salia", blogDate: "August 25, 2021" },
      { blogID: 6, blogTitle: i18n.t(`blogPostArray[6].blogTitle`), blogCoverPhoto: "aktivenfahrt-belgien", blogDate: "August 25, 2021" },
      { blogID: 7, blogTitle: i18n.t(`blogPostArray[7].blogTitle`), blogCoverPhoto: "honigverkostung", blogDate: "Juli 28, 2021" },
      { blogID: 8, blogTitle: i18n.t(`blogPostArray[8].blogTitle`), blogCoverPhoto: "semesterantrittskneipe-emilienhutte", blogDate: "März 16, 2021" },
      { blogID: 9, blogTitle: i18n.t(`blogPostArray[7].blogTitle`), blogCoverPhoto: "honigverkostung", blogDate: "Juli 28, 2021" },
      { blogID: 10, blogTitle: i18n.t(`blogPostArray[8].blogTitle`), blogCoverPhoto: "semesterantrittskneipe-emilienhutte", blogDate: "März 16, 2021" },
      { blogID: 11, blogTitle: i18n.t(`blogPostArray[7].blogTitle`), blogCoverPhoto: "honigverkostung", blogDate: "Juli 28, 2021" },
      { blogID: 12, blogTitle: i18n.t(`blogPostArray[8].blogTitle`), blogCoverPhoto: "semesterantrittskneipe-emilienhutte", blogDate: "März 16, 2021" },
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
        aboutUs: true,
      },
      {
        blogID: 2,
        blogTitle: i18n.t(`blogPostArray[2].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[2].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[2].blogHTML`),
        blogCoverPhoto: "semesterprogramm",
        blogAdditionalPhotos: null,
        program: true,
      },
      {
        blogID: 3,
        blogTitle: i18n.t(`blogPostArray[3].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[3].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[3].blogHTML`),
        blogCoverPhoto: "geschichte-salia",
        blogAdditionalPhotos: null,
        history: true,
      },
      {
        blogID: 4,
        blogTitle: i18n.t(`blogPostArray[4].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[4].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[4].blogHTML`),
        blogCoverPhoto: "haus-salia",
        blogAdditionalPhotos: null,
        contact: true,
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
      {
        blogID: 9,
        blogTitle: i18n.t(`blogPostArray[7].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[7].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[7].blogHTML`),
        blogCoverPhoto: "honigverkostung",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 10,
        blogTitle: i18n.t(`blogPostArray[8].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[8].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[8].blogHTML`),
        blogCoverPhoto: "semesterantrittskneipe-emilienhutte",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 11,
        blogTitle: i18n.t(`blogPostArray[7].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[7].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[7].blogHTML`),
        blogCoverPhoto: "honigverkostung",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 12,
        blogTitle: i18n.t(`blogPostArray[8].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[8].blogPreview`),
        blogHTML: i18n.t(`blogPostArray[8].blogHTML`),
        blogCoverPhoto: "semesterantrittskneipe-emilienhutte",
        blogAdditionalPhotos: null,
      },
      {
        blogID: 13,
        blogTitle: i18n.t(`blogPostArray[9].blogTitle`),
        blogPreview: i18n.t(`blogPostArray[9].blogPreview`),
        blogHTML: [
          {
            chapterTitle: i18n.t(`blogPostArray[9].blogHTML[0].chapterTitle`),
            chapterHTML: i18n.t(`blogPostArray[9].blogHTML[0].chapterHTML`),
            chapterPhotos: [
              "old-salia",
              "honigverkostung",
              "aktivenfahrt-belgien",
            ],
          },
          {
            chapterTitle: i18n.t(`blogPostArray[9].blogHTML[1].chapterTitle`),
            chapterHTML: i18n.t(`blogPostArray[9].blogHTML[1].chapterHTML`),
            chapterPhotos: [
              "old-salia",
              "honigverkostung",
              "aktivenfahrt-belgien",
              "old-salia",
              "honigverkostung",
              "aktivenfahrt-belgien",
              "old-salia",
              "honigverkostung",
            ],
          },
          {
            chapterTitle: i18n.t(`blogPostArray[9].blogHTML[2].chapterTitle`),
            chapterHTML: i18n.t(`blogPostArray[9].blogHTML[2].chapterHTML`),
            chapterPhotos: [
              "old-salia",
              "honigverkostung",
            ],
          },
        ],
        blogCoverPhoto: "old-salia",
        blogAdditionalPhotos: [
          "coding", "coding", "coding", 
          "coding","coding", "coding", 
        ]
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

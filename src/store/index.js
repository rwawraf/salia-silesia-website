import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import i18n from '../i18n';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    welcomeScreen: {
      title: i18n.t(`welcomeScreen.title`),
      blogPost: i18n.t(`welcomeScreen.blogPost`),
      welcomeScreen: true,
      photo: "old-salia",
    },
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
        blogAdditionalPhotos: [
          "coding", "coding", "coding",
          "coding", "coding", "coding",
          "coding", "coding", "coding",
          "coding", "coding", "coding",
        ],
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
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    blogCardsArray: [
      { blogID: 4, blogTitle: "Zimmer frei!", blogCoverPhoto: "haus-salia", blogDate: "August 25, 2021" },
      { blogID: 2, blogTitle: "Aktivenfahrt nach Belgien", blogCoverPhoto: "aktivenfahrt-belgien", blogDate: "August 25, 2021" },
      { blogID: 3, blogTitle: "Honigvortrag mit Verkostung", blogCoverPhoto: "honigverkostung", blogDate: "Juli 28, 2021" },
      { blogID: 4, blogTitle: "Semesterantrittskneippe bei Jagdschloss Emilienhütte", blogCoverPhoto: "semesterantrittskneipe-emilienhutte", blogDate: "März 16, 2021" },
    ],
    blogPostArray: [
      {
        blogID: 1,
        blogTitle: "Unsere Prinzipien",
        blogHTML: "Für welche Prinzipien bekennen wir uns? Was ist für uns wichtig und motiviert uns jedes Mal?",
        blogCoverPhoto: "salia-wappen",
      },
      {
        blogID: 2,
        blogTitle: "Semesterprogramm",
        blogHTML: "Ob Gottesdienst, Vortrag oder Party – hier finden sich unsere kommenden Veranstaltungstermine.",
        blogCoverPhoto: "semesterprogramm",
      },
      {
        blogID: 3,
        blogTitle: "Geschichte",
        blogHTML: "Möchten Sie mehr über unsere Vereinigung erfahren? Dann sind Sie bei uns genau richtig! Eine interessante Geschichte über Freundschaften zwischen den Generationen wird Ihre Aufmerksamkeit erregen.",
        blogCoverPhoto: "geschichte-salia",
      },
      {
        blogID: 4,
        blogTitle: "Kontakt",
        blogHTML: "Wenn Sie Student oder Mitglied einer anderen Verbindung sind und mit uns Kontakt aufnehmen oder uns besuchen möchten, finden Sie hier alles.",
        blogCoverPhoto: "haus-salia",
      },
    ],
    welcomeScreen: {
      title: "Willkommen!",
      blogPost: "Die Akademische Verbindung AV Salia-Silesia Gleiwitz zu Oppeln im CV wurde am 7. April 1992 durch deutschstämmige schlesische katholische Studenten in Oberschlesien gegründet. 1993 wurde sie zunächst als Freie Vereinigung, 1996 als Vollmitglied in den Cartellverband Katholischer Deutscher Studendenverbindung (CV) aufgenommen. Ihre Verbindungsfarben sind schwarz-orange auf weißem Grund. Als eine schlesische Verbindung vertritt sie ihr vaterländisches Prinzip als die Verbundenheit zur schlesischen Heimat und als ein Streben für ein friedliches Zusammenleben der Völker in Europa.",
      welcomeScreen: true,
      photo: "old-salia",
    },
  },
  mutations: {
    setCurrentPost(state, payload) {
      state.currentPost = payload;
      state.blogPostArray.push(payload);
    },
  },
  actions: {
  },
  modules: {
  }
})

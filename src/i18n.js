import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    de: {
        home: {
            showMorePosts: "Relevante Posts anschauen",
        },
        navigation: {
            home: "Home",
            aboutUs: "Über uns",
            program: "Programm",
            posts: "Beiträge",
            kontakt: "Kontakt",
        },
        footer: {
            city: "Stadt Oppeln",
            privacyStatement: "Datenschutzerklärung",
        },
        carousel: {
            description: "Die Studentenverbindung in Oppeln",
        },
        blogPost: {
            showMoreLink: "Mehr dazu",
        },
        blogCard: {
            postedOn: "Erstellt am: ",
            showPostLink: "Post anschauen",
        },
        welcomeScreen: {
            title: "Wilkommen!",
            blogPost: "Die Akademische Verbindung AV Salia-Silesia Gleiwitz zu Oppeln im CV wurde am 7. April 1992 durch deutschstämmige schlesische katholische Studenten in Oberschlesien gegründet. 1993 wurde sie zunächst als Freie Vereinigung, 1996 als Vollmitglied in den Cartellverband Katholischer Deutscher Studendenverbindung (CV) aufgenommen. Ihre Verbindungsfarben sind schwarz-orange auf weißem Grund. Als eine schlesische Verbindung vertritt sie ihr vaterländisches Prinzip als die Verbundenheit zur schlesischen Heimat und als ein Streben für ein friedliches Zusammenleben der Völker in Europa.",
        },
        blogPostArray: [
            {
              blogTitle: "Willkommen!",
              blogPreview: "Die Akademische Verbindung AV Salia-Silesia Gleiwitz zu Oppeln im CV wurde am 7. April 1992 durch deutschstämmige schlesische katholische Studenten in Oberschlesien gegründet. 1993 wurde sie zunächst als Freie Vereinigung, 1996 als Vollmitglied in den Cartellverband Katholischer Deutscher Studendenverbindung (CV) aufgenommen.",
              blogHTML:
                `
                <div class="text-inner">
                                  <div><div><span class="fs10 cf1"></span></div><div><span class="fs10 cf1"></span></div><div><span class="fs14"><b>Geschichte der Salia-Silesia</b></span></div><div><br></div><div><span class="fs12"><b style="line-height: 23px;" class="ff1">Der CV in Schlesien</b></br></br><b style="line-height: 20px;" class="ff1"></b></span></div><div><span class="fs10 ff1">Der Cartellverband der katholischen Studentenverbindungen CV entsteht in der Mitte des 19. Jh. als Gegenbewegung zum Bestreben des preußischen Staates, den Einfluss der katholischen Kirche zurückzudrängen (Kulturkampf, Akademischer Kulturkampf). Katholische Studenten schließen sich zusammen und gründen katholische Verbindungen (KDStV Bavaria Bonn 1844, KDStV Aenania München 1851, KDStV Winfridia Breslau 1856 (heute in Münster). Aenania sucht Kontakt zu anderen katholischen Verbindungen und geht 1856 ein Cartellverhältnis mit Winfridia ein. Das ist das Gründungsjahr des CV.</span></div><div><span class="fs10 ff1">In Breslau entstehen weitere vier katholische Verbindungen, die sich dem CV anschließen. Aufgrund der stark anwachsenden Winfridia entstehen durch zwei Teilungen die CV-Verb. Rheno-Palatia 1900 (heute in Mainz) und die KDStV Salia 1904 (1975 fusioniert mit der AV Rheinland Köln). 1910 wird die KDStV Marchia (heute Aachen) gegründet und 1924 die KDStV Greiffenstein (heute Frankfurt).</span></div><div><span class="fs10 ff1">Nicht nur in Breslau als einzige Universitätsstadt in Schlesien ist ein blühendes CV-Leben vorhanden, auch im Industriegebiet Oberschlesien und in den ländlichen Provinzen sind CV-Zirkel bis zum Beginn der Auflösungen der CV-Verbindungen ab 1934 und dem endgültigen Ende 1938 aktiv.</span></div><div> &nbsp;</div><div><b><span class="fs12 ff1">Gründung der Aktivitas Salia-Silesia</br></br></span></b></div><div><span class="fs10 ff1">Nach fast 60 jähriger Pause durch das Verbot des CVs im Dritten Reich und der kommunistischen Herrschaft in Polen nach 1945 ist 1992 mit der Gründung der AV Salia-Silesia Gleiwitz das CV-Leben nach Schlesien zurückgekehrt. Kurz nach der Wende 1989 entsteht zunächst in </span><span class="fs10 ff1">Pécs </span><span class="fs10 ff1"> / Fünfkirchen in Ungarn eine CV-Verbindung hinter dem ehemaligen Eisernen Vorhang, die AV Suebo-Danubia. Auf Drängen von ehemaligen Mitgliedern der Salia Breslau wird nach dem Vorbild der Suebo-Danubia die Salia-Silesia in Oberschlesien gegründet. Die Initiative dazu ergreift der CVer Damian Schwider (Rheno-Franconia), der einige Jahre zuvor aus Hindenburg / Zabrze in Oberschlesien ausgesiedelt ist und familiäre Bindungen zur alten Salia hat.</span></div><div><span class="fs10 ff1">Der Altherrenverband Salia wird nach dem Krieg 1949 in Paderborn wiederbegründet, die Aktivitas 1953 in Köln. Allerdings findet sie nicht mehr zur alten Blüte zurück, insbesondere die Zeit nach der 68er Studentenrevolution macht ihr zu schaffen und so fusioniert sie 1975 mit der KDStV Rheinland Köln. In Erinnerung an die aufgelöste Salia übernehmen die Gründer der Salia-Silesia ihre Farben orange-schwarz auf weißem Grund in umgekehrter Reihenfolge, den Wahlspruch „Nec aspera terrent“ (auch Widerwärtigkeiten schrecken nicht) und das Wappen in etwas abgewandelter Form.</span></div><div><span class="fs10 ff1">Die Publikationsfeier findet am 21. November 1992 im Schloss Wiegschütz / Pałac Większyce statt. Über hundert CVer und Gäste sind aus Deutschland angereist, 11 Verbindungen chargieren: Aenania München (1), Winfridia (Breslau) Münster (2), Ferdinandea (Prag) Heidelberg (19), Rheno-Franconia München (24), Borusso-Saxonia Berlin (26), Rheno-Palatia (Breslau) Mainz (28), Nassovia Darmstadt (33), Saxo-Silesia Hannover (48), Tuiskonia München (57), Cheruscia Würzburg (60) und Rheinland Köln (63). (Die Nummer in Klammern ist die CV-Nummer). Die Messe findet vor dem Kommers auf dem Sankt Annaberg statt, erstmals chargieren in der Wallfahrtskirche wieder CV-Verbindungen.</span></div><div><br></div><div><span class="fs10 ff1"><i></i></span></div><div></div></div><div><div></div></div>
                              </div>
                `,
            },
            {
              blogTitle: "Unsere Prinzipien",
              blogPreview: "Für welche Prinzipien bekennen wir uns? Was ist für uns wichtig und motiviert uns jedes Mal?",
              blogHTML: 
              `
              Für welche Prinzipien bekennen wir uns? Was ist für uns wichtig und motiviert uns jedes Mal?
              `,
            },
            {
              blogTitle: "Semesterprogramm",
              blogPreview: "Ob Gottesdienst, Vortrag oder Party – hier finden sich unsere kommenden Veranstaltungstermine.",
              blogHTML: 
              `
              Ob Gottesdienst, Vortrag oder Party – hier finden sich unsere kommenden Veranstaltungstermine.
              `,
            },
            {
              blogTitle: "Geschichte",
              blogPreview: "Möchten Sie mehr über unsere Vereinigung erfahren? Dann sind Sie bei uns genau richtig! Eine interessante Geschichte über Freundschaften zwischen den Generationen wird Ihre Aufmerksamkeit erregen.",
              blogHTML: 
              `
              Möchten Sie mehr über unsere Vereinigung erfahren? Dann sind Sie bei uns genau richtig! Eine interessante Geschichte über Freundschaften zwischen den Generationen wird Ihre Aufmerksamkeit erregen.
              `,
            },
            {
              blogTitle: "Kontakt",
              blogPreview: "Wenn Sie Student oder Mitglied einer anderen Verbindung sind und mit uns Kontakt aufnehmen oder uns besuchen möchten, finden Sie hier alles.",
              blogHTML: 
              `
              Wenn Sie Student oder Mitglied einer anderen Verbindung sind und mit uns Kontakt aufnehmen oder uns besuchen möchten, finden Sie hier alles.
              `,
            },
            {
              blogTitle: "Zimmer frei!",
              blogPreview: "Zimmer sind frei.",
              blogHTML: 
              `
              Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. Zimmer sind frei. 
              `,
            },
            {
              blogTitle: "Aktivenfahrt nach Belgien",
              blogPreview: "Wir sind nach Belgien gefahren.",
              blogHTML: 
              `
              Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. Wir sind nach Belgien gefahren. 
              `,
            },
            {
              blogTitle: "Honigvortrag mit Verkostung",
              blogPreview: "Bei uns fand ein Honigverkostung statt.",
              blogHTML: 
              `
              Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. Bei uns fand ein Honigverkostung statt. 
              `,
            },
            {
              blogTitle: "Semesterantrittskneippe bei Jagdschloss Emilienhütte",
              blogPreview: "Die Zwillinge haben Geburtstag gehabt.",
              blogHTML: 
              `
              Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. Die Zwillinge haben Geburtstag gehabt. 
              `,
            },
        ],
    },
    pl: {
        home: {
            showMorePosts: "Zobacz powiązane posty",
        },
        navigation: {
            home: "Home",
            aboutUs: "O nas",
            program: "Program",
            posts: "Posty",
            kontakt: "Kontakt",
        },
        footer: {
            city: "Miasto Opole",
            privacyStatement: "Ochrona danych osobowych",
        },
        carousel: {
            description: "Korporacja akademicka w Opolu",
        },
        blogPost: {
            showMoreLink: "Dowiedz się więcej",
        },
        blogCard: {
            postedOn: "Utworzono: ",
            showPostLink: "Zobacz post",
        },
        welcomeScreen: {
            title: "Witamy!",
            blogPost: "Serdecznie witamy na stronie Korporacji Akademickiej Salia Silesia Gleiwitz zu Oppeln.",
        },
        blogPostArray: [
            {
              blogTitle: "Witamy!",
              blogPreview: "Serdecznie witamy na stronie Korporacji Akademickiej Salia Silesia Gleiwitz zu Oppeln.",
              blogHTML:
                `
                Tekst artykułu powitalnego.
                `,
            },
            {
              blogTitle: "Nasze zasady (Prinzipien)",
              blogPreview: "Jakie wartości wyznajemy?",
              blogHTML: 
              `
              Jakie wartości wyznajemy? Kim jesteśmy i po co żyjemy?
              `,
            },
            {
              blogTitle: "Program semestralny",
              blogPreview: "Msza, wykład, czy też inne wydarzenie - tutaj znajdziesz wszystkie informacje na ten temat.",
              blogHTML: 
              `
              Msza, wykład, czy też inne wydarzenie - tutaj znajdziesz wszystkie informacje na ten temat.
              `,
            },
            {
              blogTitle: "Historia",
              blogPreview: "Interesuje Cię nasza historia? Chcesz dowiedzieć się jak właściwie powstaliśmy i jak kształtowała się nasza organizacja na przestrzeni lat? Tutaj dowiesz się wszystkiego.",
              blogHTML: 
              `
              Interesuje Cię nasza historia? Chcesz dowiedzieć się jak właściwie powstaliśmy i jak kształtowała się nasza organizacja na przestrzeni lat? Tutaj dowiesz się wszystkiego.
              `,
            },
            {
              blogTitle: "Kontakt",
              blogPreview: "Jeśli chcesz się z nami skontaktować, tutaj znajdziesz wszystkie potrzebne dane.",
              blogHTML: 
              `
              Jeśli chcesz się z nami skontaktować, tutaj znajdziesz wszystkie potrzebne dane.
              `,
            },
            {
              blogTitle: "Wolne pokoje!",
              blogPreview: "Posiadamy wolne pokoje w naszym domu.",
              blogHTML: 
              `
              Posiadamy wolne pokoje w naszym domu.
              `,
            },
            {
              blogTitle: "Wyjazd Aktivitas do Belgii",
              blogPreview: "Pojechaliśmy do Belgii w odwiedziny.",
              blogHTML: 
              `
              Pojechaliśmy do Belgii w odwiedziny do KAV Lovania Löwen.
              `,
            },
            {
              blogTitle: "Wykład o pszczelarstwie",
              blogPreview: "Mieliśmy okazję spróbować różnych rodzajów miodu.",
              blogHTML: 
              `
              Mieliśmy okazję spróbować różnych rodzajów miodu.
              `,
            },
            {
              blogTitle: "Semesterantrittskneippe w Jagdschloss Emilienhütte",
              blogPreview: "Tegoroczna knajpa otwierająca semestr była połączona z podwójnymi 40-tymi urodzinami.",
              blogHTML: 
              `
              Tegoroczna knajpa otwierająca semestr była połączona z podwójnymi 40-tymi urodzinami.
              `,
            },
        ],
    },
};

const i18n = new VueI18n({
    locale: 'pl',
    messages,
});

export default i18n;
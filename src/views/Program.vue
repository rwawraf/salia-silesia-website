<template>
    <div class="program">
        <div class="program-content-wrapper">
          <div class="program-content">
            <div>
              <a href="/Programm-Wintersemester-2021.pdf" download="Salia-Silesia-WS-2021">
                <img class="brand-logo" alt="salia-wappen" src="../assets/navbarImages/salia-wappen.png"/>
              </a>
              <h2>
                {{ $t('program.semestralProgram') }}
              </h2>
              <p class="program-data">
                {{ $t('program.downloadProgramInfo') }}              
              </p>
            </div>
          </div>
          <img class="band-navbar" src="../assets/navbarImages/band.jpg"/>                     
        </div>
        <div class="calendar">         
          <v-calendar
            is-expanded
            :columns="$screens({ default: 1, md: 2, lg: 2, xl: 3 })"
            :rows="$screens({ default: 2, xl: 2 })"
            :attributes='attributes'
            :locale="$t('calendar.language')"
          />
        </div>
        <div class="pdf-viewer">
          <PdfViewer></PdfViewer>
        </div> 
    </div>
</template>

<script>
import PdfViewer from '../components/PdfViewer';

export default {
  name: "Program",
  components: {
      PdfViewer,
  },
  data() {
    return {
    };  
  },
  computed: {
    attributes() {
      return [
        {
          key: 'today',
          highlight: {
            color: 'gray',
            fillMode: 'outline',
          },
          dates: new Date(),
          popover: {
            label: 'Heute'
          }
        },
        {
          key: 'semesterantritt-ws-2021',
          highlight: {
            color: 'orange',
            fillMode: 'solid',
          },
          dates: new Date(2021, 9, 2),
          popover: {
            label: 'Ort: Oppeln adH'
          }
        },
        {
          key: 'semesterantritt-ws-2021-popup-1',
          dot: 'purple',
          dates: new Date(2021, 9, 2),
          popover: {
            label: '19:00 hst ho. 1. Convent AC/BC'
          }
        },
        {
          key: 'semesterantritt-ws-2021-popup-2',
          dot: 'green',
          dates: new Date(2021, 9, 2),
          popover: {
            label: '20:00 hct ho. Semesterantrittskneipe'
          }
        },
        {
          key: 'schiessen-2021',
          highlight: {
            color: 'gray',
            fillMode: 'solid',
          },
          dates: new Date(2021, 9, 16),
          popover: {
            label: 'Ort: Chronstau (Chrząstowice)'
          }
        },
        {
          key: 'schiessen-2021-popup-1',
          dot: 'yellow',
          dates: new Date(2021, 9, 16),
          popover: {
            label: '19:00 hst io. Schießübungen am Schießstand und anschließender Stammtisch'
          }
        },
        {
          key: 'stammtisch-2021',
          highlight: {
            color: 'orange',
            fillMode: 'solid',
          },
          dates: new Date(2021, 9, 29),
          popover: {
            label: 'Ort: Oppeln (genauere Ort wird angegeben)'
          }
        },
        {
          key: 'stammtisch-2021-popup-1',
          dot: 'green',
          dates: new Date(2021, 9, 29),
          popover: {
            label: '19:00 hct io. Stammtisch'
          }
        },
        {
          key: 'guido-2021',
          highlight: {
            color: 'gray',
            fillMode: 'solid',
          },
          dates: new Date(2021, 10, 6),
          popover: {
            label: 'Ort: Hindenburg OS'
          }
        },
        {
          key: 'guido-2021-popup-1',
          dot: 'yellow',
          dates: new Date(2021, 10, 6),
          popover: {
            label: 'io. Besichtigung des Bergwerks (Kopalnia Guido)'
          }
        },
        {
          key: 'convent-2-2021',
          highlight: {
            color: 'orange',
            fillMode: 'solid',
          },
          dates: new Date(2021, 10, 20),
          popover: {
            label: 'Ort: Oppeln adH'
          }
        },
        {
          key: 'convent-2-2021-popup-1',
          dot: 'green',
          dates: new Date(2021, 10, 20),
          popover: {
            label: '19:00 hst ho. 2. Convent AC/BC'
          }
        },                                                  
        {
          key: 'schweinschlachten-2021',
          highlight: {
            start: { fillMode: 'solid', color: 'red' },
            base: { fillMode: 'light', color: 'red' },
            end: { fillMode: 'solid', color: 'red' },
          },
          dates: {
            start: new Date(2021, 10, 26),
            end: new Date(2021, 10, 27),
          },
        },
        {
          key: 'schweinschlachten-2021-popup-1',
          dot: 'gray',
          dates: new Date(2021, 10, 26),
          popover: {
            label: '19:00 hct io. Begrüßungsabend adH'
          }
        },
        {
          key: 'schweinschlachten-2021-popup-2',
          dot: 'blue',
          dates: new Date(2021, 10, 27),
          popover: {
            label: '11:00 hct io. Eventschlachten bei Familie Rybczyk'
          },
        },
        {
          key: 'schweinschlachten-2021-popup-3',
          dot: 'yellow',
          dates: new Date(2021, 10, 27),
          popover: {
            label: '16:30 hct io. Cumulativ Convent'
          },
        },
        {
          key: 'schweinschlachten-2021-popup-4',
          dot: 'green',
          dates: new Date(2021, 10, 27),
          popover: {
            label: '20:30 hct io. Feierliche Andreaskneipe'
          },
        },
        {
          key: 'pokerabend-2021',
          highlight: {
            color: 'yellow',
            fillMode: 'solid',
          },
          dates: new Date(2021, 11, 3),
          popover: {
            label: 'Ort: Oppeln adH'
          }
        },
        {
          key: 'pokerabend-2021-popup-1',
          dot: 'gray',
          dates: new Date(2021, 11, 3),
          popover: {
            label: '19:30 hct io. Pokerabend/Brettspielabend'
          }
        },
        {
          key: 'steakabend-2021',
          highlight: {
            color: 'yellow',
            fillMode: 'solid',
          },
          dates: new Date(2021, 11, 11),
          popover: {
            label: 'Ort: Oppeln adH'
          }
        },
        {
          key: 'steakabend-2021-popup-1',
          dot: 'gray',
          dates: new Date(2021, 11, 11),
          popover: {
            label: '16:00 hct o. Steakabend'
          }
        },
        {
          key: 'lanparty-2021',
          highlight: {
            color: 'yellow',
            fillMode: 'solid',
          },
          dates: new Date(2021, 11, 18),
          popover: {
            label: 'Ort: Oppeln adH'
          }
        },
        {
          key: 'lanparty-2021-popup-1',
          dot: 'gray',
          dates: new Date(2021, 11, 18),
          popover: {
            label: '16:00 hct o. LAN Party'
          }
        },
        {
          key: 'weihnachtsfeier-2021',
          highlight: {
            color: 'orange',
            fillMode: 'solid',
          },
          dates: new Date(2021, 11, 27),
          popover: {
            label: 'Ort: Groß Stein'
          }
        },
        {
          key: 'weihnachtsfeier-2021-popup-1',
          dot: 'green',
          dates: new Date(2021, 11, 27),
          popover: {
            label: '19:00 hct o. Weihnachtsfeier bei Bbr. Arnold Nowak'
          }
        },
        {
          key: 'semesterabschluss-ws-2022',
          highlight: {
            color: 'orange',
            fillMode: 'solid',
          },
          dates: new Date(2022, 0, 14),
          popover: {
            label: 'Ort: Oppeln adH'
          }
        },
        {
          key: 'semesterabschluss-ws-2022-popup-1',
          dot: 'green',
          dates: new Date(2022, 0, 14),
          popover: {
            label: '18:00 hct ho. 3. Convent AC/BC/DC/WC'
          }
        },
        {
          key: 'semesterabschluss-ws-2022-popup-2',
          dot: 'blue',
          dates: new Date(2022, 0, 14),
          popover: {
            label: '20:00 hct ho. Semesterabschlusskneipe'
          }
        },
        {
          key: 'semesterantritt-ss-2022',
          highlight: {
            color: 'orange',
            fillMode: 'solid',
          },
          dates: new Date(2022, 2, 5),
          popover: {
            label: 'Semesterantrittskneipe'
          }
        },
        {
          key: 'stiftungsfest-2022',
          highlight: {
            start: { fillMode: 'solid', color: 'red' },
            base: { fillMode: 'light', color: 'red' },
            end: { fillMode: 'solid', color: 'red' },
          },
          dates: {
            start: new Date(2022, 5, 3),
            end: new Date(2022, 5, 5),
          },
          popover: {
            label: '30. Stiftungsfest'
          }
        },
        {
          key: 'semesterabschluss-ss-2022',
          highlight: {
            color: 'orange',
            fillMode: 'solid',
          },
          dates: new Date(2022, 5, 25),
          popover: {
            label: 'Semesterabschlusskneipe'
          }
        },                                                                     
      ];
    }, 
  },
};
</script>

<style lang="scss" scoped>
div.program {
  padding-bottom: 0;
  margin-bottom: 0;

  .calendar {
    padding: 32px 32px;
  }
}

.program-content-wrapper {
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  background-color: #303030;
  color: #f1f1f1;

  @media(min-width: 700px) {
      min-height: 450px;
      max-height: 650px;
      flex-direction: row;
  }

  
  .band-navbar {
    width: 100%;
    height: 15px;
    left: 0;
    position: absolute;
  }

  .program-content {
    display: flex;
    justify-content: center;
    text-align: justify;
    align-items: center;
  }

  div {
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 72px 24px;

    @media(min-width: 700px) {
        padding: 0 24px;
    }

    img {
      margin: 36px;
    }

    h2 {
        margin: 12px;
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media(min-width: 700px) {
            font-size: 40px;
        }
    }

    p {
        font-weight: 300;
        line-height: 1.7;
    }

    .program-data {
        font-size: 18px;
        text-align: center;
        margin-bottom: 48px;
        white-space: pre-line;
    }    
  }
}
</style>
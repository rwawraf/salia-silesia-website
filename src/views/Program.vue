<template>
    <div class="program">
        <div class="program-content-wrapper">
          <div class="program-content">
            <div>
              <a href="/Semesterprogramm-SS-2020.pdf" download="salia-silesia-semesterprogramm">
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
        </div>
        <div class="calendar">
          <b-calendar 
            block 
            locale="de-DE"
            style="padding: 18px 32px; background-color: #f1f1f1"  
          ></b-calendar>  
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
    }  
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
div.program {
  padding-bottom: 0;
  margin-bottom: 0;
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
    }    
  }
}
</style>
<template>
    <div class="program">
        <div class="program-content-wrapper">
          <div class="program-content">
            <div>
              <img class="brand-logo" alt="salia-wappen" src="../assets/navbarImages/salia-wappen.png"/>
              <PdfViewer></PdfViewer>
              <h2>
                Semesterprogramm
              </h2>
              <p class="contact-data">
                Willst du Semesterprogramm herunterladen?
                <a href="/Semesterprogramm-SS-2020.pdf" download="salia-silesia-semesterprogramm">
                    Hier kannst Du es machen.
                </a>                
              </p>
            </div>
          </div>
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
        currentPage: 1,
        pageCount: 16,
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
  display: flex;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  background-color: #f1f1f1;

  @media(min-width: 700px) {
      min-height: 650px;
      max-height: 1150px;
      flex-direction: row;
  }
  
  .program-content {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex: 4;
    order: 2;

    @media(min-width: 700px) {
        order: 2;
    }

    @media(min-width: 800px) {
        flex: 3;
    }

    div {
      max-width: 575px;
      padding: 48px 24px;

      @media(min-width: 700px) {
          padding: 0 24px;
      }

      h2 {
          font-size: 32px;
          font-weight: 300;
          text-transform: uppercase;
          margin: 24px 0px;
          @media(min-width: 700px) {
              font-size: 40px;
          }
      }

      p {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
      }
    }
  }
}
</style>
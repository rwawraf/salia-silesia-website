<template>
	<div class="pdf-viewer-wrapper">
		<div class="pdf-controls">
			<div class="pdf-controls-title">
				<h3>
					Möchtest Du ausgewählten Semesterprogramm anschauen?
				</h3>
				<p>
					Hier kannst Du den aktuellen und vorherige Semesterprogramme ohne Herunterladen anschauen.
				</p>
			</div>
			<p>
				Wählen Sie bitte den Semesterprogramm aus.
			</p>
			<b-form-select
				v-model="src"
				:options="options"
				class="mb-3"
				value-field="item"
				text-field="name"
			></b-form-select>
			<b-form-spinbutton 
				id="sb-inline" 
				v-model.number="page" 
				inline
				min="1"
				:max="numPages"
				wrap
			></b-form-spinbutton><br>
			<div>
				<b-button class="rotation-button" pill @click="rotate += 90">&#x27F3;</b-button>
				<b-button class="rotation-button" pill @click="rotate -= 90">&#x27F2;</b-button>
			</div>
		</div>
		<div class="pdf-viewer-content">
			<div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
			<pdf 
			style="width: 50%; height: 50%; margin: auto;"
			v-if="show" ref="pdf" 
			:src="src" :page="page" :rotate="rotate" 
			@password="password" @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event">
			</pdf>
		</div>
	</div>
</template>

<script>
import pdf from 'vue-pdf';

export default {
	components: {
		pdf: pdf
	},
	data () {
		return {
			options: [
				{ item: '/Programm-Sommersemester-2020.pdf', name: 'Sommersemester 2020' },
				{ item: '/Programm-Wintersemester-2020.pdf', name: 'Wintersemester 2020' },
				{ item: '/Programm-Wintersemester-2019.pdf', name: 'Wintersemester 2019' },
				{ item: '/Programm-Wintersemester-2018.pdf', name: 'Wintersemester 2018' },
			],
			show: true,
			src: '',
			loadedRatio: 0,
			page: 1,
			numPages: 0,
			rotate: 0,
		}
	},
	methods: {
		error: function(err) {
			console.log(err);
		}
	}
}
</script>

<style lang="scss" scoped>
.pdf-viewer-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 12px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);


  @media(min-width: 700px) {
      min-height: 650px;
      flex-direction: row;
  }
  
  .pdf-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex: 2;
    order: 1;
	background-color: #f8f8f8;

    @media(min-width: 700px) {
        order: 1;
    }

    @media(min-width: 800px) {
        flex: 2;
    }

	.rotation-button {
		margin: 5px;
	}

	.pdf-controls-title {
		padding: 32px;

		h3 {
			text-align: center;
			padding: 0px 32px;
		}

		p {
			text-align: justify;
			padding: 48px;
		}
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

      .program-data {
        font-size: 18px;
        text-align: center;
      }
    }
  }

  .pdf-viewer-content {
    order: 2;
    flex: 4;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	padding: 24px;
	background-color: #f1f1f1;

    @media(min-width: 700px) {
        order: 2;
    }

    @media(min-width: 800px) {
        flex: 4;
    }

  }
}

</style>
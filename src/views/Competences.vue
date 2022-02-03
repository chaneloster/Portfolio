<template>
  <section>
    <h1>MES COMPÉTENCES A VOTRE SERVICE</h1>
    <section class="conteneur">
      <article class="btn">
        <p class="titre">GESTION DE PROJETS WEB</p>
        <p class="sous-titre">Site vitrine</p>
        <p class="titre">
          APPLICATION SPECIFIQUES ET INTERFACE D'ADMINISTRATION
        </p>
        <p class="sous-titre">PHP, MYSQL, SQL, Symfony</p>
        <p class="titre">MISE EN PLACE| MODIFICATION| GESTION DE CMS</p>
        <p class="sous-titre">Wordpress, phpBB</p>
        <p class="titre">INTEGRATION (X)HTML/CSS</p>
        <p class="sous-titre">
          Codage à la main respectueux des standards du web
        </p>
        <p class="titre">DYNAMISE DES PAGES PAR JAVASCRIPT</p>
        <p class="sous-titre">JavaScript, VueJs, ReactJs</p>
        <p class="titre">CONCEPTION MULTI-PLATEFORMES</p>
        <p class="sous-titre">
          Compatible sur tous supports, tablette et application mobile
        </p>
      </article>
      <article class="chart">
        <p class="titre-chart">Compétences en développement</p>
        <bar-chart class="graph" :data="state.competencesData"> </bar-chart>
      </article>
    </section>
  </section>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
import "firebase/database";
import "chartkick/chart.js";
import { productCollection } from "../chart/firebase";

export default {
  methods: {
    refresh() {
      window.location.reload();
    },
  },
  name: "Competences",
  components: {},
  setup() {
    const state = reactive({
      competencesData: {},
    });
    onMounted(async () => {
      let competencesDataSet = await productCollection.once("value");
      state.competencesData = competencesDataSet.val();
    });
    return { state };
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 25px;
  color: #2c3e50;
}
h1::before,
h1::after {
  content: ""; /* Pour visualiser, mettre content */
  /* On crée une ligne blanche avec une largeur de l'élément à 0 */
  width: 0;
  margin: auto;
  height: 5px;
  background: #2c3e50;
  transition: width 0.3s;
}
h1:hover::before,
h1:hover::after {
  /* On étend l'élément à la largeur par défaut du bloc ciblé (ici th)*/
  width: 100%;
}
h1::after {
  /* On peut modifier la transition sur l'un des pseudos éléments*/
  transition: width 1s;
}
.btn {
  color: #2c3e50;
  font-size: 20px;
  margin: 60px;
}
.titre {
  font-weight: bold;
  margin-top: 2%;
}
.sous-titre {
  margin-left: 2%;
}
.conteneur {
  display: flex;
}
.titre-chart {
  margin-left: 15%;
  margin-top: 20%;
  font-weight: bold;
  font-size: 1.5em;
  color: #2c3e50;
}
.chart {
  border: 2px solid #7a7a7ac0;
  border-right: transparent;
  border-top: transparent;
  border-bottom: transparent;
  width: 38%;
}
.graph {
  margin: 5%;
  margin-top: 10%;
}
</style>
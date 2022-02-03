<template>
  <section class="principal">
    <div class="contact">
      <section class="titre">
        <p class="message">CONTACTEZ-MOI</p>
        <a href="" class="question"
          >UNE IDEE ? UN PROJET ? N'HESITEZ PAS A DEMANDER UN DEVIS! [GRATUIT]
        </a>
      </section>

      <section class="contenu">
        <article class="adresse">
          <div>
            <img src="@/assets/img/address.png" alt="" />
            <p>ADRESSE</p>
            <p>9, allée au fil de l'eau 38300 Saint-Savin</p>
          </div>
          <div>
            <img src="@/assets/img/phone.png" alt="" />
            <p>TELEPHONE</p>
            <p>(+33)7.53.10.31.41</p>
          </div>
          <div>
            <img src="@/assets/img/email.png" alt="" />
            <p>E-MAIL</p>
            <a href="" class="mail">osterchanel@gmail.com</a>
          </div>
          <div>
            <img src="@/assets/img/horaire.png" alt="" />
            <p>HORAIRES</p>
            <p>Lundi - Vendredi</p>
            <p>09H00 - 18H00</p>
          </div>
        </article>
        <composant-contact />
      </section>
    </div>
  </section>
</template>

<script>
import ComposantContact from "../components/ComposantContact.vue";
export default {
  name: "Contact",
  components: { ComposantContact },
};
</script>
<style scoped>
.contact {
  color: #2c3e50;
}
.message {
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
}
.question {
  background-color: #026ccf;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  color: #ecececec;
  margin-left: 25%;
  padding: 1%;
}
.contenu {
  display: flex;
  margin: 1.5vw;
}
.principal {
  min-height: 50vh;
}
.adresse {
  font-size: 1.2em;
  margin-left: 5%;
}
.adresse div {
  border-bottom: 0.1px solid #a0a091c0;
  margin-right: 30%;
  margin-bottom: 10px;
}
.mail {
  text-decoration: none;
}
img {
  width: 5%;
}
</style>
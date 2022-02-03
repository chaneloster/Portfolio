<template>
  <!-- navigateur va valider l’adresse email dans le champ type=email avec novalidate en true -->
  <form action="" method="post" novalidate="true">
    <!-- le message d'erreurs -->
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
    </p>

    <p v-bind="error">
      {{ error }}
    </p>

    <div class="identifiant">
      <label for="name">Nom </label>
      <input
        type="text"
        v-model="name"
        placeholder="Entrer Nom"
        class="nom"
        name="nom"
      />
    </div>
    <div class="adresse-mail">
      <label for="mail">E-mail </label>
      <input
        type="email"
        v-model="email"
        placeholder="Entrer E-mail"
        class="nom"
        name="email"
      />
    </div>
    <div class="message">
      <label for="msg">Message </label>
      <textarea class="msg" v-model="message" name="message"></textarea>
    </div>
    <div class="button">
      <button type="submit">Poster le message</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ComposantContact",
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      movie: null,
    };
  },
  methods: {
    sendForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
      return regex.test(email);
    },
    // vérifier si le nom, prenom, téléphone etc sont vide
    // sinon  vérifier si le mail est bien écrit avec regex
    // si tout est bon j'envois le formulaire
    //
  },
};
</script>

<style scoped>
label {
  font-size: 1.2em;
}
.identifiant {
  margin: 10%;
}
.nom {
  padding: 3%;
  width: 20vw;
  box-sizing: border-box;
  border: 2px solid #ccc;
  margin-top: 1em;
}
.adresse-mail {
  margin: 10%;
}
.message {
  margin: 10%;
}
textarea {
  width: 115%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  margin-top: 1em;
}
button {
  padding: 0.8em;
  background-color: #026ccf;
  color: #ecececec;
  font-size: 1.2em;
  border: none;
  border-radius: 0.2em;
  margin-left: 10%;
}
.button {
  margin-top: 20px;
}
</style>

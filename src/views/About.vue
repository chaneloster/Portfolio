<template>
  <section :style="`background-image: url('${image}');`" class="comp">
    <transition
      name="view"
      appear
      enter-active-class="animated zoomInRight delay"
      leave-active-class="animated zoomOutLeft"
    >
      <section class="about">
        <h1 class="hello">
          Hello! c'est chanel OSTER developpeuse web polyvalente.
        </h1>
        <p class="bonne">
          Je suis une programmeuse avec une bonne connaissance des techniques
          front-end.
        </p>
        <p class="ordre">
          J'aime la structure et l'ordre et je défends également la qualité.
        </p>
        <p class="moi">
          Vous apprendrez plus vite à mon sujet en jetant un oeil sur ce site
        </p>
      </section>
    </transition>
  </section>
</template>

<script>
export default {
  name: "About",
  components: {},
  // Stockage de l'objet style de l'image dans la propriété vue data.
  data() {
    return {
      image: require("../assets/img/content.jpg"),
    };
  },
};
</script>
<style scoped>
.about {
  flex-direction: column;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0.541);
  padding: 1em;
  margin: 15%;
  font-family: MontSerrat, Tahoma, Arial, sans-serif;
}
.comp {
  background-size: cover;
  height: 100%;
}
.hello {
  font-size: 1.8em;
}
p {
  font-size: 1.5em;
}
</style>
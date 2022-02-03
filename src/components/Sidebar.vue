<template>
  <span class="sidebar">
    <nav class="menu-items">
      <router-link
        v-bind:class="showMenu ? 'visible' : 'invisible'"
        to="/about"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <section class="link-container">A propos</section>
      </router-link>
      <router-link
        to="/competences"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <section class="link-container">Competences</section>
      </router-link>
      <router-link
        to="/projets"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <section class="link-container">Portfolio</section>
      </router-link>
      <router-link
        to="/contact"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <section class="link-container">Contact</section>
      </router-link>
    </nav>
  </span>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
<style scoped>
/* flexbox sur le menu */
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  z-index: 8;
}
.menu-items > * {
  margin-top: 64px;
}
/* On customise les liens */
.side-btn {
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 10px;
  text-decoration: none;
  color: #8a8a8a;
  font-size: 2em;
  background-color: transparent;
  width: 15vw;
  padding-left: 4vw;
  text-transform: uppercase;
  overflow: hidden;
  font-family: Lato, Helvetica, Arial, sans-serif;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: #fcfcfcce;
  color: #026ccf;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  content: "";
  position: absolute;
  top: -30px;
  right: 0;
  height: 30px;
  width: 30px;
  background-color: #fcfcfc;
}
.side-btn.active::after {
  content: "";
  position: absolute;
  bottom: -30px;
  right: 0;
  height: 30px;
  width: 30px;
  background-color: #fcfcfc;
}
.side-btn.active .link-container::before {
  content: "";
  position: absolute;
  top: -60px;
  right: 0;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: #2a2a2a;
}
.side-btn.active .link-container::after {
  content: "";
  position: absolute;
  bottom: -60px;
  right: 0;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: #2a2a2a;
  z-index: 99;
}
</style>

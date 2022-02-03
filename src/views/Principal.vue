<template>
  <div id="principal">
    <sidebar></sidebar>

    <div class="content">
      <div class="trait">APPLICATION MOBILE</div>
      <router-view />
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "principal",
  components: { Sidebar, Footer },
};
</script>

<style >
#principal {
  display: flex;
  flex-direction: row;
  background-color: #2a2a2a;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  padding: 0;
  font-family: MontSerrat, Tahoma, Arial, sans-serif;
}
.content {
  background-color: #fcfcfcce;
  border-radius: 20px;
  margin: 5px 5px 5px 0px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: MontSerrat, Tahoma, Arial, sans-serif;
}
.trait {
  height: 50px;
  color: #ecececec;
  background-color: #026ccf;
  width: 40%;
  margin-left: 55vw;
  margin-top: 10%;
  transform: rotate(45deg);
  position: absolute;
  justify-content: center;
  font-size: 1.2em;
  line-height: 47px;
  z-index: 901;
  text-align: center;
  text-transform: uppercase;
  font-family: MontSerrat, Tahoma, Arial, sans-serif;
  box-shadow: -2px 3px 1px rgb(0 0 0 / 23%);
}
.trait:hover {
  background-color: #0055a5;
}
</style>

<template>
  <footer class="socials">
    <section class="icone">
      <a
        class="linkedin"
        href="https://www.linkedin.com/in/chanel-osterdeveloppeurweb/"
      >
        <img src="@/assets/img/linkedin.png" alt="" />
      </a>
      <a class="face" href="https://www.facebook.com/joslinechanel.oster.5/">
        <img src="@/assets/img/face.png" alt="" />
      </a>
      <a class="git" href="https://github.com/chaneloster">
        <img src="@/assets/img/15.png" alt="" />
      </a>
      <a class="insta" href="https://www.instagram.com/josline_chanel/">
        <img src="@/assets/img/insta.jpg" alt="" />
      </a>
    </section>
    <p class="pieds">2022 - chanel OSTER - Tous droit réservés</p>
  </footer>
</template>


<script>
export default {};
</script>


<style scoped>
/* animation: appear 1s linear 1.5s; */
/* transform: translateX(90px); */
/* animation-fill-mode: forwards; */
.linkedin img {
  width: 2%;
  min-width: 9%;

  object-fit: contain;
}
.face img {
  width: 2%;
  min-width: 8%;
  object-fit: contain;
  margin-bottom: 0.5%;
}
.git img {
  min-width: 6%;
  width: 2%;
  margin-left: 1.5%;
  margin-bottom: 1.2%;
}
.insta img {
  min-width: 6%;
  width: 1%;
  margin-left: 2%;
  margin-bottom: 1.2%;
}
.icone {
  margin-left: 40%;
}
.pieds {
  margin-left: 40%;
  font-family: MontSerrat, Tahoma, Arial, sans-serif;
}
.socials {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
  height: 15%;
  background-color: #f7f3f3ec;
}
/* 
@keyframes appear {
  from {
    transform: translateX(90px);
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
} */
</style>

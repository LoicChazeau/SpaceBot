<template>
  <div class="footer">
    <div class="footerContenu">
      <div class="info">
        <div class="logo"></div>

        <div class="follow">
          <h1 class="followTitle">Follow us</h1>
          <div class="reseaux">
            <div class="reseauxLogo">
              <Facebook id="facebook" />
            </div>
            <div class="reseauxLogo">
              <Linkedin />
            </div>
            <div class="reseauxLogo">
              <Twitter />
            </div>
            <div class="reseauxLogo">
              <Instagram />
            </div>
            <div class="reseauxLogo">
              <Youtube />
            </div>
          </div>
        </div>

        <div class="roverLogo">
          <Rover />
        </div>

        <div class="menu">
          <a href="#home">Home</a>
          <a href="#bot">Démo</a>
          <a href="#price">Price</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div class="separator"></div>
      <div class="inutil">
        <p>Copyright 2021 Space Dream All - rights reserved.</p>
        <p>Terms of use</p>
        <p>Condition of use</p>
      </div>
    </div>
    <img class="starFooter" src="../assets/svg/star2.svg" alt="star image for footer" />
  </div>
</template>

<script>
import Facebook from "./svg/footer/facebook.vue";
import Instagram from "./svg/footer/instagram.vue";
import Linkedin from "./svg/footer/linkedin.vue";
import Youtube from "./svg/footer/youtube.vue";
import Twitter from "./svg/footer/twitter.vue";
import Rover from "./svg/footer/rover.vue";
export default {
  name: "footer",
  components: {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    Rover,
  },
};
</script>

<style scoped>
.starFooter {
  position: absolute;
  margin-top: -21%;
}
.footerContenu {
  margin-top: 10%;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  color: white;
}
.info {
  z-index: 15;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.logo {
  margin-top: -10%;
  height: 250px;
  width: 250px;
  background: url("../assets/svg/spacedream.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.follow {
  width: 15%;
  margin-top: -4%;
}
.followTitle {
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15%;
}
.reseaux {
  display: flex;
  justify-content: space-between;
}
.reseauxLogo {
  height: 33px;
  width: 33px;
  cursor: pointer;
}
.roverLogo {
  position: inherit;
  margin-left: 10%;
  margin-top: -8%;
  height: 260px;
  width: auto;
}
.menu {
  margin-top: -9%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 250px;
}
a {
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}
a:hover {
  color: #b5c6da;
  text-decoration: none;
}
.separator {
  border: 1px solid white;
  margin: 0px 100px;
}
.inutil {
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
}
</style>

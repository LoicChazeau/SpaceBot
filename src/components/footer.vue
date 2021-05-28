<template>
  <div class="footer">
    <div class="footerContenu">
      <div class="info">
        <div class="logo"></div>

        <div class="follow">
          <h1 class="followTitle">Follow us</h1>
          <div class="reseaux">
            <div class="reseauxLogo">
              <Facebook />
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
          <ul>
            <li>Home</li>
            <li>Démo</li>
            <li>Price</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div class="separator"></div>
      <div class="inutil">
        <p>Copyright 2021 Space Dream All - rights reserved.</p>
        <p>Terms of use</p>
        <p>Condition of use</p>
      </div>
    </div>
  </div>
</template>

<script>
import Facebook from "./svg/footer/facebook.vue"
import Instagram from "./svg/footer/instagram.vue"
import Linkedin from "./svg/footer/linkedin.vue"
import Youtube from "./svg/footer/youtube.vue"
import Twitter from "./svg/footer/twitter.vue"
import Rover from "./svg/footer/rover.vue"
export default {
  name: "footer",
  components: {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    Rover
  }
};
</script>

<style scoped>
.wave {
  position: absolute;
  margin-left: -20px;
  margin-top: auto;
  z-index: -1;
}
.footerContenu {
  margin-top: 10%;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  color: white;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.logo {
  margin-top: -10%;
  height: 250px;
  width: 250px;
  background: url("../assets/spacedream.svg");
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
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90%;
}
ul li {
  font-size: 24px;
  font-weight: 700;
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

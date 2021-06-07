<template>
  <div class="home" id="home">
    <header>
      <Header />
    </header>

    <div class="who">
      <Who />
    </div>

    <div class="stats">
      <Stats />
    </div>

    <div class="spaceBot" id="bot">
      <SpaceBot />
    </div>

    <div class="pricing" id="price">
      <Pricing />
    </div>

    <div class="trusted">
      <Trusted />
    </div>

    <div class="contact" id="contact">
      <Contact />
    </div>

    <footer id="footer">
      <Footer />
    </footer>
    
  </div>
</template>

<script>

import Header from "@/components/header.vue";
import Who from "@/components/who.vue";
import Stats from "@/components/stats.vue";
import SpaceBot from "@/components/spaceBot.vue";
import Pricing from "@/components/pricing.vue";
import Trusted from "@/components/trusted.vue";
import Contact from "@/components/contact.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Who,
    Stats,
    SpaceBot,
    Pricing,
    Trusted,
    Contact,
    Footer,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}
header {
  background-color: #8a9bbc;
  z-index: 2;
}
.who {
  z-index: 1;
}
.footer {
  background: url("../assets/svg/wave.svg"), url("../assets/svg/wave.svg"),
    url("../assets/svg/wave.svg"), url("../assets/svg/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -10px, 0px, 0, -10px;
  background-position-y: 0, 0, 100px, 100px;
}
</style>

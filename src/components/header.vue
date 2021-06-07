<template>
  <div class="header">
    <div :class="{ scroll: navbar }" class="nav" id="home">
      <a href="#home">Home</a>
      <a href="#bot">Démo</a>
      <a href="#price">Prices</a>
      <a class="navEnd" href="#contact">Contact</a>
    </div>
    <div class="deco">
      <div class="logo"></div>
      <div class="bubble">
        <p class="bubbleText">Are you ready to test our chatbot ?</p>
        <a href="#bot" class="bubbleBtn">
          <p>Talk with our SpaceBot</p>
        </a>
      </div>
      <div class="rover"></div>
    </div>
    <img
      class="starHeader"
      src="../assets/svg/star1.svg"
      alt="star image for header"
    />
    <svg xmlns="http://www.w3.org/2000/svg" class="wave" viewBox="0 0 800 350 ">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.3"
          y1="0.4"
          x2="0.6"
          y2="0"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#2c1b7b" />
          <stop offset="1" stop-color="#130b36" />
        </linearGradient>
      </defs>
      <path
        d="M 0 150 C 200 100 300 150 400 200 C 500 250 600 300 800 225 L 800 0 L 0 0 L 0 150"
        fill="url(#linear-gradient)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      navbar: false,
    };
  },
  name: "Header",
  created() {
    window.addEventListener("scroll", this.debounce(this.handleScroll, 100));
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll, 100));
  },
  methods: {
    debounce(callback, delay) {
      var timer;
      return function () {
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
          callback.apply(context, args);
        }, delay);
      };
    },
    handleScroll(event) {
      if (window.scrollY > 620) this.navbar = true;
      else this.navbar = false;
    },
  },
};
</script>

<style scoped>
.wave {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;
}
.starHeader {
  position: absolute;
  margin-top: -28.5%;
  z-index: -1
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1%;
  position: fixed;
  top: -19px;
  padding: 8px;
  width: 100%;
  transition-duration: 1s;
}
.navEnd {
  margin-right: 5% !important;
}
.scroll {
  background: rgba(37, 22, 107, 0.8);
}
.nav a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin: 0 2%;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}
a {
  text-decoration: none;
  color: white;
}
.nav a:hover {
  background: #b5c6da;
  color: #25166b;
}
.deco {
  display: flex;
  margin-top: 3%;
}
.logo {
  width: 220px;
  height: 220px;
  margin-left: 5%;
  margin-top: -2%;
  background: url("../assets/svg/spacebot.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.bubble {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 220px;
  margin-top: 3%;
  margin-left: 23%;
  background: url("../assets/svg/bubble.svg");
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
}
.bubbleText {
  margin: 7% 10% 3% 0%;
  width: 50%;
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
}
.bubbleBtn {
  margin-right: 10%;
  background-color: #b5c6da;
  width: 50%;
  color: white;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  border-radius: 20px;
  padding: 10px 15px;
  transition: 0.1s all ease-in-out;
}
.bubbleBtn:hover {
  transform: translateY(0px) scale(1.1);
}
.rover {
  width: 650px;
  height: 350px;
  margin-top: 7%;
  margin-left: -5%;
  background: url("../assets/svg/rover.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>

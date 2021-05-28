<template>
  <div class="header">
    <div class="nav" id="home">
      <a href="#home">Home</a>
      <a href="#bot">Démo</a>
      <a href="#price">Prices</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="deco">
      <div class="logo"></div>
      <div class="bubble">
        <p class="bubbleText">Are you ready to test our chatbot ?</p>
        <div class="bubbleBtn">Talk with our SpaceBot</div>
      </div>
      <div class="rover"></div>
    </div>
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
  props: {
  },
  name: "Header",
};
</script>

<style scoped>
.wave {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1%;
  margin-right: 8%;
}
.nav a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin: 0 2%;
  border-radius: 100px;
  padding: 15px;
  cursor: pointer;
  transition: all .5s ease;
}
.nav a:hover {
  background: white;
  color: blue; 
}
.deco {
  display: flex;
}
.logo {
  width: 220px;
  height: 220px;
  margin-left: 5%;
  background: url("../assets/spacebot.svg");
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
  background: url("../assets/bubble.svg");
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
}
.rover {
  width: 650px;
  height: 350px;
  margin-top: 7%;
  margin-left: -5%;
  background: url("../assets/rover.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>

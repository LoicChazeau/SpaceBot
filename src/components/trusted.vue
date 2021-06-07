<template>
  <div class="trusted">
    <h1>Trusted Companies</h1>
    <div class="companiesContainer">
      <Spacex class="spacex" />
      <img class="nasa" src="../assets/png/nasa.png" alt="logo de la nasa" />
      <Esa class="esa" />
      <img class="cielEtEspace" src="../assets/png/cieletespace.png" alt="logo de ciel et espace" />
    </div>
  </div>
</template>

<script>
import Spacex from "./svg/trusted/spacex.vue";
import Esa from "./svg/trusted/esa.vue";
export default {
  name: "trusted",
  components: {
    Spacex,
    Esa,
  },
};
</script>

<style scoped>
.trusted {
  background-color: #8a9bbc;
  height: 100%;
  padding: 4% 0%;
}
h1 {
  text-align: center;
  color: white;
  font-size: 50px;
}
.companiesContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  margin: 3.5% auto 0%;
  width: 65%;
}
.spacex {
  height: 30px;
  width: 250px;
  transition: 0.1s all ease-in-out;
}
.spacex:hover {
  transform: translateY(0px) scale(1.2);
}
.nasa {
  height: 100px;
  transition: 0.1s all ease-in-out;
}
.nasa:hover {
  transform: translateY(0px) scale(1.2);
}
.esa {
  height: 60px;
  width: 200px;
  transition: 0.1s all ease-in-out;
}
.esa:hover {
  transform: translateY(0px) scale(1.2);
}
.cielEtEspace {
  height: 80px;
  transition: 0.1s all ease-in-out;
}
.cielEtEspace:hover {
  transform: translateY(0px) scale(1.2);
}
</style>

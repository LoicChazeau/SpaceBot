<template>
  <div class="who">
    <div class="pres">
      <h1>Who are we ?</h1>
      <div class="presCorp">
        <div class="logo"></div>
        <div class="textWho">
          Space Dream was created in 2021 by Guillaume RN.
          and Loïc C. and aims to design projects that will
          help develop the spatial knowledge of everyone.
          <br />
          <br />Several projects have already been launched
          including the SpaceBot project.
        </div>
      </div>
      <div class="textWho2">
        Space Dream was created in 2021 by Guillaume RN.
        and Loïc C. and aims to design projects that will
        help develop the spatial knowledge of everyone.
        <br />
        <br />Several projects have already been launched
        including the SpaceBot project.
      </div>
    </div>
    <div class="cv">
      <h2>Passionate people above all !</h2>
      <div class="cvCorp">
        <div class="separator">
          <div class="tete1"></div>
          <p class="teteText">
            consequatur maxime nostrum quibusdam et id molestiae ipsum provident
            iure, perspiciatis rerum aperiam nam officia!
          </p>
        </div>
        <div class="separator">
          <div class="tete2"></div>
          <p class="teteText">
            erendis nobis labore illum
            recusandae nam eligendi modi deserunt veritatis quas ipsa in quod
            nemo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "who",
};
</script>

<style scoped>
.who {
  display: flex;
  flex-direction: row;
  background-color: #8a9bbc;
  padding-bottom: 4%;
}
h1 {
  text-align: center;
  color: white;
  font-size: 50px;
  margin-bottom: 8%;
}
h2 {
  text-align: center;
  color: white;
  font-size: 40px;
}
.pres {
  width: 100%;
}
.presCorp {
  display: flex;
  flex-direction: row;
}
.logo {
  width: 300px;
  height: 300px;
  background: url("../assets/spacedream.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 8%;
}
.textWho {
  color: white;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 42%;
  align-self: center;
  margin-left: 10%;
}
.textWho2 {
  color: white;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 70%;
  margin-top: 6%;
  margin-left: 15%;
}
.cv {
  margin-top: 8%;
}
.cvCorp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 6%;
}
.separator {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}
.tete1 {
  width: 220px;
  height: 220px;
  background: url("../assets/loic.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.tete2 {
  width: 220px;
  height: 220px;
  background: url("../assets/guillaume.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.teteText {
  color: white;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-top: 8%;
}
</style>

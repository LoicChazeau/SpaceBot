<template>
  <div class="who">
    <div class="pres">
      <h1>Who Are We ?</h1>
      <div class="presCorp">
        <div class="logo"></div>
        <div class="textWho">
          Space Dream was created in 2021 by Guillaume RN. and Loïc C. and aims
          to design projects that will help develop the spatial knowledge of
          everyone.
          <br />
          <br />Several projects have already been launched including the
          SpaceBot project.
        </div>
      </div>
      <div class="textWho2">
        SpaceDream works all over the world so that everyone can develop their
        space knowledge.
        <br />
        <br />SpaceDream works with companies such as : Nasa, Esa, SpaceX or
        Ciel et espace.
      </div>
    </div>
    <div class="cv">
      <h2>Passionate people above all !</h2>
      <div class="cvCorp">
        <div class="separator">
          <div class="tete1"></div>
          <p class="teteText">
            <span class="nameText">Loïc CHAZEAU</span><br /><br />
            <span class="roleText"
              >Co founder<br />
              Front-end developer<br />
              Web designer
            </span>
          </p>
        </div>
        <div class="separator">
          <div class="tete2"></div>
          <p class="teteText">
            <span class="nameText">Guillaume RAVAN NALBANDIAN</span><br /><br />
            <span class="roleText"
              >Co founder <br />
              Full stack developer <br />
              Bot developper</span
            >
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
  margin-right: 10%;
}
h2 {
  text-align: center;
  color: white;
  font-size: 40px;
}
.pres {
  width: 60%;
}
.presCorp {
  display: flex;
  flex-direction: row;
}
.logo {
  width: 300px;
  height: 300px;
  background: url("../assets/svg/spacedream.svg");
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
  margin-right: 3%;
  width: 40%;
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
  width: 50%;
}
.tete1 {
  width: 220px;
  height: 220px;
  background: url("../assets/png/loic.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.tete2 {
  width: 220px;
  height: 220px;
  background: url("../assets/png/guillaume.png");
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
.nameText {
  font-size: 22px;
  font-weight: 700;
  color: #25166b;
  width: 100%;
}
.roleText {
  color: white;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  text-align: left;
}
</style>

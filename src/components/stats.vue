<template>
  <div class="stats">
    <h1>Chatbot Statistics</h1>
    <div class="statsContainer">
      <div class="statsCardCase">
        <div class="statsCard">
          <div class="statsContent">
            <h2>69%</h2>
            <p>Of users find an answer to their question with a chatbot</p>
          </div>
        </div>
        <div class="statsCard">
          <div class="statsContent">
            <h2>80%</h2>
            <p>Of companies want to implement a chatbot by 2021</p>
          </div>
        </div>
        <div class="statsCard">
          <div class="statsContent">
            <h2>$0.70</h2>
            <p>Projected savings for each customer interaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stats",
};
</script>

<style scoped>
.stats {
  background-color: #6f7f9e;
  height: 100%;
  padding: 4% 0%;
}
.statsContainer {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
}
h1 {
  text-align: center;
  color: white;
  font-size: 50px;
}
h2 {
  text-align: center;
  color: #25166b;
  font-size: 44px;
  margin-top: 8%;
}
p {
  text-align: center;
  color: #444444;
  font-size: 26px;
  margin-top: 6%;
  width: 70%;
  align-self: center;
}
.statsCardCase {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin: 0% 10%;
}
.statsCard {
  display: flex;
  flex-direction: row;
  height: 250px;
  width: 27%;
  background-color: #edeef6;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  transition: 0.1s all ease-in-out;
}
.statsCard:hover {
  transform: translateY(8px) scale(1.05);
}
.statsContent {
  display: flex;
  flex-direction: column;
}
</style>

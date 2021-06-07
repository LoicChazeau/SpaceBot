/* eslint-disable */
<template>
  <div class="pricing">
    <h1>Flexible Prices</h1>
    <div class="switchCase">
      <div style="display: flex; flex-direction: column">
        <div class="promoCase">
          <p class="promoTitle">Save 20%</p>
        </div>
        <div @click="toggle()" class="switch">
          <div class="frequency" :class="{ active: yearly }">Yearly</div>
          <div class="frequency" :class="{ active: monthly }">Monthly</div>
        </div>
      </div>
    </div>
    <div class="priceCardCase">
      <div class="priceCard">
        <div class="priceCardHeader">
          <div class="logo">
            <Rocket1 />
          </div>
          <div class="pCHTitle">
            <h2>Basic</h2>
            <p class="price">
              <span v-if="yearly">$48</span>
              <span v-else>$5</span>
              <span class="year">
                <span v-if="yearly">/ year</span>
                <span v-else>/ month</span>
              </span>
            </p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="priceCardBody">
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              Key
              <span class="bold">API</span>
            </p>
          </div>
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              1 000
              <span class="bold">requests</span> per month
            </p>
          </div>
        </div>
        <div class="priceCardBtn">
          <p class="pCBTitle">Get started</p>
          <div class="logo3">
            <Arrow />
          </div>
        </div>
      </div>
      <div class="priceCard">
        <div class="priceCardHeader">
          <div class="logo">
            <Rocket2 />
          </div>
          <div class="pCHTitle">
            <h2>Startup</h2>
            <p class="price">
              <span v-if="yearly">$192</span>
              <span v-else>$20</span>
              <span class="year">
                <span v-if="yearly">/ year</span>
                <span v-else>/ month</span>
              </span>
            </p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="priceCardBody">
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              All features in
              <span class="bold">Basic</span>
            </p>
          </div>
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              15 000
              <span class="bold">requets</span> per month
            </p>
          </div>
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              <span class="bold">Setting up</span> the chatbot
            </p>
          </div>
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              Access to the
              <span class="bold">quiz</span>
            </p>
          </div>
        </div>
        <div class="priceCardBtn">
          <p class="pCBTitle">Get started</p>
          <div class="logo3">
            <Arrow />
          </div>
        </div>
      </div>
      <div class="priceCard">
        <div class="priceCardHeader">
          <div class="logo">
            <Rocket3 />
          </div>
          <div class="pCHTitle">
            <h2>Compagny</h2>
            <p class="price">
              <span v-if="yearly">$480</span>
              <span v-else>$50</span>
              <span class="year">
                <span v-if="yearly">/ year</span>
                <span v-else>/ month</span>
              </span>
            </p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="priceCardBody">
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              All features in
              <span class="bold">Startup</span>
            </p>
          </div>
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              Unlimited
              <span class="bold">requests</span> per month
            </p>
          </div>
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              Ongoing
              <span class="bold">maintenance</span>
            </p>
          </div>
          <div class="line">
            <div class="logo1">
              <Check />
            </div>
            <p class="checkText">
              Chatbot
              <span class="bold">management</span>
            </p>
          </div>
        </div>
        <div class="priceCardBtn">
          <p class="pCBTitle">Get started</p>
          <div class="logo3">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rocket1 from "./svg/pricing/rocket1.vue";
import Rocket2 from "./svg/pricing/rocket2.vue";
import Rocket3 from "./svg/pricing/rocket3.vue";
import Check from "./svg/pricing/check.vue";
import Arrow from "./svg/pricing/arrow.vue";
export default {
  data() {
    return {
      monthly: false,
      yearly: true,
    };
  },
  methods: {
    toggle() {
      this.monthly = !this.monthly;
      this.yearly = !this.yearly;
    },
  },
  name: "pricing",
  components: {
    Rocket1,
    Rocket2,
    Rocket3,
    Check,
    Arrow,
  },
};
</script>

<style scoped>
.pricing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7% 0%;
}
h1 {
  text-align: center;
  color: white;
  font-size: 50px;
}
h2 {
  color: #25166b;
  font-size: 26px;
  font-weight: 700;
  padding-bottom: 5%;
}
.switchCase {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.promoCase {
  width: 30%;
  margin-left: 10%;
  padding: 8px 0px;
  background-color: #b5c6da;
  border-radius: 100px;
  margin-bottom: 5%;
  margin-top: 10%;
}
.promoTitle {
  text-align: center;
  color: #25166b;
  font-size: 12px;
  font-weight: 700;
}
.switch {
  display: flex;
  background: #edeef6;
  padding: 7px;
  border-radius: 100px;
  cursor: pointer;
  margin-bottom: 20%;
}
.frequency {
  padding: 15px 30px;
  color: #98969f;
  font-size: 18px;
  font-weight: 700;
}
.active {
  background-color: white;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));
  color: #25166b;
  border-radius: 100px;
}
.priceCardCase {
  display: flex;
  justify-content: space-between;
  margin: 0% 10%;
}
.priceCard {
  display: flex;
  flex-direction: column;
  min-width: 250px;
  min-height: 380px;
  width: 30%;
  background-color: #edeef6;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  transition: 0.1s all ease-in-out;
}
.priceCard:hover {
  transform: translateY(8px) scale(1.05);
}
.priceCardHeader {
  display: flex;
  padding-top: 5%;
  padding-left: 12%;
}
.logo {
  width: 50px;
  height: 60px;
  display: flex;
  padding-top: 1.5%;
}
.pCHTitle {
  padding-left: 7%;
}
.price {
  font-size: 26px;
  font-weight: 700;
  color: #4d4c54;
}
.year {
  font-size: 18px;
  font-weight: 400;
  color: #4d4c54;
}
.separator {
  height: 1px;
  width: 76%;
  border-radius: 100px;
  background-color: #c9c8d1;
  align-self: center;
  margin-top: 5%;
  margin-bottom: 8%;
}
.line {
  display: flex;
  align-items: center;
  padding-left: 8%;
  margin-bottom: 10%;
}
.checkText {
  padding-left: 10%;
  color: #4d4c54;
  font-size: 18px;
}
.bold {
  font-weight: 700;
}
.logo1 {
  width: 28px;
  height: 22px;
}
.priceCardBtn {
  background-color: #25166b;
  width: 50%;
  padding: 6% 5%;
  border-radius: 15px;
  display: flex;
  align-self: center;
  margin-top: auto;
  margin-bottom: 5%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.pCBTitle {
  color: white;
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 20px;
}
.logo3 {
  width: 23px;
  height: 20px;
  display: flex;
  margin-right: 5%;
  padding-top: 1.5px;
}
</style>

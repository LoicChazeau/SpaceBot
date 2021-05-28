q
<template>
  <div class="contact">
    <div class="information">
      <h1>Contact Information</h1>
      <p class="informationText">
        Contact us by email, phone or fill out the form to send a message to our
        team a response will be provided within 48 hours.
      </p>
      <div class="info">
        <div class="line">
          <div class="logo">
            <Phone />
          </div>
          <p class="infoText">213-509-6995</p>
        </div>
        <div class="line">
          <div class="logo">
            <Mail />
          </div>
          <p class="infoText">space-bot@space.dream</p>
        </div>
        <div class="line">
          <div class="logo">
            <Location />
          </div>
          <p class="infoText">11 Wall St, New York, NY 10005, USA</p>
        </div>
      </div>

      <div class="reseaux">
        <div class="logo1">
          <Facebook />
        </div>
        <div class="logo1">
          <Twitter />
        </div>
        <div class="logo1">
          <Instagram />
        </div>
        <div class="logo1">
          <Linkedin />
        </div>
      </div>
    </div>

    <div class="form">
      <div class="formcontainer">
        <h2>Contact form</h2>
        <p class="formText">Your Name</p>
        <input class="name" placeholder="Name" type="text" name id />
        <p class="formText">Mail</p>
        <input class="mail2" placeholder="Example@gmail.com" type="text" name id />
        <p class="formText">Phone</p>
        <input class="phone2" placeholder="000-000-0000" type="text" name id />
        <p class="formText">Message</p>
        <textarea placeholder="Message" type="textarea" rows="5" name id />
        <button class="formBtn">Send Message</button>
      </div>
    </div>
  </div>
</template>

<script>
import Phone from "./svg/contact/phone.vue";
import Mail from "./svg/contact/mail.vue";
import Location from "./svg/contact/location.vue";
import Facebook from "./svg/contact/facebook.vue";
import Twitter from "./svg/contact/twitter.vue";
import Instagram from "./svg/contact/instagram.vue";
import Linkedin from "./svg/contact/linkedin.vue";
export default {
  name: "contact",
  components: {
    Phone,
    Mail,
    Location,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: space-around;
  padding-top: 7%;
}
h1 {
  color: white;
  font-size: 50px;
}
h2 {
  color: #25166b;
  font-size: 24px;
  margin-bottom: 6%;
}
.information {
  width: 33%;
}
.informationText {
  color: white;
  font-size: 15px;
  font-weight: 400;
  margin-top: 5%;
}
.info {
  margin: 20% 0% 0% 5%;
}
.line {
  display: flex;
  margin-top: 8%;
}
.logo {
  width: 30px;
  height: 30px;
}

.infoText {
  color: white;
  font-size: 22px;
  font-weight: 500;
  margin-left: 8%;
}
.reseaux {
  display: flex;
  margin: 20% 0 0 10%;
  width: 70%;
  justify-content: space-around;
}
.logo1 {
  width: 30px;
  height: 30px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 28%;
  border-radius: 20px;
  filter: drop-shadow(0px 3px 30px rgba(0, 0, 0, 0.6));
  background-color: #edeef6;
  margin: 2% 5% 0% 0%;
}
.formcontainer {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 5% 18% 6% 8%;
}
.formText {
  color: #25166b;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 4%;
}
input {
  width: 91%;
  height: 35px;
  border-radius: 7px;
  border: 1px solid #c5c7cc;
  margin-bottom: 4%;
  padding-left: 12%;
  font-size: 1.1em;
  background-color: #f9f9fb !important;
}
::placeholder {
  color: #98969f;
  font-size: 0.7em;
}
.name {
  background: url(../assets/name.svg);
  background-position-x: 10px;
  background-position-y: center;
  background-size: 15px;
  background-repeat: no-repeat;
}
.mail2 {
  background: url(../assets/mail.svg);
  background-position-x: 10px;
  background-position-y: center;
  background-size: 15px;
  background-repeat: no-repeat;
}
.phone2 {
  background: url(../assets/phone.svg);
  background-size: 15px;
  background-position-x: 10px;
  background-position-y: center;
  background-repeat: no-repeat;
}
textarea {
  width: 100%;
  border-radius: 7px;
  border: 1px solid #c5c7cc;
  margin-bottom: 12%;
  resize: none;
  padding: 2% 0 0 3%;
  font-size: 1.1em;
}
.formBtn {
  background-color: #25166b;
  color: white;
  font-size: 18px;
  font-weight: 700;
  width: 60%;
  padding: 5% 0%;
  border-radius: 10px;
  align-self: flex-end;
  margin-top: auto;
  border-style: none;
  cursor: pointer;
}
.formBtn:active {
  top: -5px;
}
</style>

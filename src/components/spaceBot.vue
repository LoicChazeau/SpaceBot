<template>
  <div class="spaceBot">
    <div class="projet">
      <h1>Space Bot Projet</h1>
      <div class="projetCorp">
        <div class="logo"></div>
        <div class="textWho">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          itaque nam, voluptatibus nostrum quos quam at quas excepturi, tempora
          fuga quae sequi nemo, illum repudiandae maxime commodi fugiat ullam!
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quae.
        Vero nulla aut minus, eum ipsa consequuntur sunt aliquam ex dignissimos
        voluptates explicabo. Quaerat sapiente illo ullam! Non, adipisci
        repellendus!
      </p>
    </div>
    <div class="chatboxCont">
      <div class="chatbox">
        <ul class="chatboxList">
          <li class="message" v-for="(message, idx) in messages" :key="idx" :class="message.author">
            <div v-if="message.author=='server'" class="msgLogo"></div>
            <div v-else></div>
            <p :class="message.author + 'box'">
              <span>{{ message.text }}</span>
            </p>
            <div v-if="message.author=='client'" class="msgLogo"></div>
            <div v-else></div>
          </li>
        </ul>
      </div>
      <div class="inputBox">
        <input class="inputUser" @keydown.enter="send()" v-model="input" type="text" />
        <input class="send" @click="send()" type="button" value="send" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spaceBot",
  data() {
    return {
      input: "",
      api: "",
      messages: [
        {
          author: "client",
          text: "ui alors message client",
        },
        {
          author: "server",
          text: "ui alors message server",
        },
      ],
    };
  },
  mounted() {
    this.apiCall();
  },
  methods: {
    apiCall(input) {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer E6WE7L5RXTOQWXKBJW4ERGAV22OD4BIJ"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      return fetch(
        "https://api.wit.ai/message?v=20210513&q=" + input,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          this.api = JSON.parse(result);
        })
        .catch((error) => console.log("error", error));
    },
    async send() {
      let message = this.input;

      this.messages.push({ author: "client", text: this.input });
      this.input = "";
      console.log("message", message);

      await this.apiCall(message);
      this.respound()
    },
     respound(){
        if (this.api.intents.length != 0) {
          console.log(this.api.intents[0].name)
          switch (this.api.intents[0].name){
            case'Joke':
              this.messages.push({
                author: "server",
                text:
                  "Voila une blague ! " +
                  this.api.intents[0].confidence,
              });
              break
            case'ISS_speed_get':
              this.messages.push({
                author: "server",
                text:
                  "Voila la vitesse de l'ISS ! " +
                  this.api.intents[0].confidence,
              });
              break
            case'ISS_crew_lenght':
              this.messages.push({
                author: "server",
                text:
                  "Voila combien il y a de personne dans l'ISS ! " +
                  this.api.intents[0].confidence,
              });
              break
            case'ISS_altitude_get':
              this.messages.push({
                author: "server",
                text:
                  "Voila a quel alitutde se trouve l'ISS !" +
                  this.api.intents[0].confidence,
              });
              break
            case'greeting':
              this.messages.push({
                author: "server",
                text:
                  "Bonjour à vous ! " +
                  this.api.intents[0].confidence,
              });
              break
          }
        } else {
          this.messages.push({
            author: "server",
            text: "Je n'ai pas compris",
          });
        }
        this.api = "";

        this.$nextTick(() => {
          this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
        });

      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spaceBot {
  background: #8a9bbc;
  display: flex;
  padding-top: 7%;
}
.projet {
  margin-top: -3%;
  width: 35%;
}
h1 {
  text-align: center;
}
.projetCorp {
  display: flex;
}
.logo {
  width: 33%;
  height: 100px;
  border: 1px solid red;
  border-radius: 100%;
}
.chatboxCont {
  margin-left: 20%;
  width: 33%;
  height: 500px;
  border: 3px solid purple;
}
.chatbox {
  width: 100%;
  height: 90%;
  overflow: scroll;
  overflow-x: hidden;
}
.chatboxList {
  display: flex;
  flex-direction: column;
  list-style: none;
}
.message {
  color: white;
}
.client {
  display: flex;
  justify-content: flex-end;
}
.clientbox {
  background: green;
  padding: 5px;
}
.server {
  display: flex;
}
.serverbox {
  background: blue;
  padding: 5px;
}
.msgLogo {
  width: 5%;
  height: 30px;
  border: 1px solid red;
  border-radius: 100px;
}
.inputBox {
  width: 100%;
  height: 10%;
}
.inputUser {
  font-size: 125%;
  height: 100%;
  width: 80%;
}
.send {
  margin-left: 4%;
}
</style>

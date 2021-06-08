<template>
  <div class="spaceBot">
    <div class="projet">
      <h1>Space Bot Projet</h1>
      <div class="projetCorp">
        <div class="logo"></div>
        <p class="textWho">
          The space project got for a goal to to provide to all space themed
          content creator, a smart bot ! It is capable of text recognition and
          therefore adapt itself perfectly to all type of conversation: average,
          familiar or formal, which allows him to fill the role of chatbot.
          Simulate a contact during a sell is highly beneficial to boost them.
          <br />
          <br />
          <br />
          <br />Space bot is easily integrable to any website et answer to
          thousands of questions about space and stuff. His structure allows
          anyone to customize its answers in order to easily adapt itself to any
          kind of content
        </p>
      </div>
      <p class="textWho2">
        Whether you sell reports, documentaries, conferences or simply want to
        offer a fun experience on the theme of space to your users, space bot
        meets your needs! it will answer every questions of the user will prove
        to him that your solution is what they want !
      </p>
    </div>
    <div class="chatboxCont">
      <div class="chatboxHeader">
        <div class="logoHeader"></div>
        <p class="textHeader">Answers 24/7</p>
        <div class="quizzBox">
          <p v-if="quizz == false">Want to test your knowledge ?</p>
          <p v-if="quizz == true">Enough challenge ?</p>
          <div @click="startQuizz()" class="quizzBtn">
            <p v-if="quizz == false">Quizz</p>
            <p v-if="quizz == true">Leave</p>
          </div>
        </div>
      </div>
      <div class="chatbox" ref="chatbox">
        <div class="imessage">
          <div
            v-for="(message, idx) in messages"
            style="display: flex; width: 100%; flex-direction: column"
            :key="idx"
          >
            <p :class="[message.author == 'server' ? 'from-them' : 'from-me']">
              <span v-html="message.text"></span>
            </p>
            <div v-if="message.author == 'server'" class="msgLogo"></div>
            <div v-if="message.author == 'client'" class="msgLogo2"></div>
          </div>
        </div>
      </div>
      <div class="spacer">
        <div v-if="loader" class="loader"></div>
      </div>
      <div class="spacer2"></div>

      <div v-if="quizz == false" class="inputBox">
        <input
          class="inputUser"
          @keydown.enter="send()"
          v-model="input"
          type="text"
          placeholder="Write a message"
        />
        <input class="send" @click="send()" type="button" value />
      </div>
      <div v-else class="answerBox">
        <div class="answer1" @click="answerQuizz(0)">
          <p :class="[arrayClass[0]]">{{ Questions[Question].prop[0] }}</p>
        </div>
        <div class="answer1" @click="answerQuizz(1)">
          <p :class="[arrayClass[1]]">{{ Questions[Question].prop[1] }}</p>
        </div>
        <div class="answer2" @click="answerQuizz(2)">
          <p :class="[arrayClass[2]]">{{ Questions[Question].prop[2] }}</p>
        </div>
        <div class="answer2" @click="answerQuizz(3)">
          <p :class="[arrayClass[3]]">{{ Questions[Question].prop[3] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spaceBot",
  created() {
    window.addEventListener("scroll", this.debounce(this.handleScroll, 100));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll, 100));
  },
  data() {
    return {
      input: "",
      api: "",
      introduced: false,
      loader: false,
      quizz: false,
      counterQuizz: 0,
      Question: null,
      Questions: [
        {
          question: "Combien de personnes sont actuelement à bord de l'ISS ?",
          answer: 2,
          prop: ["9", "13", "11", "26"],
        },
        {
          question:
            "Combien de fois l'ISS fait le tour de la Terre en 24 heures ?",
          answer: 0,
          prop: ["16", "4", "42", "11"],
        },
        {
          question: "Quel est la distance entre l'ISS et la Terre ?",
          answer: 3,
          prop: ["400 m", "1900 km", "20 000 m", "400 km"],
        },
        {
          question: "Quel est l'année du premier lancement reussi d'Ariane ?",
          answer: 1,
          prop: ["1914", "1979", "2018", "1470"],
        },
        {
          question: "Quelle est la distance entre la Terre et la Lune ?",
          answer: 1,
          prop: ["84 000 km", "384 000 km", "384 000 m", "3 678 000 km"],
        },
        {
          question: "Laquelle de ces planètes n'est pas tellurique ?",
          answer: 0,
          prop: ["Uranus", "Vénus", "Terre", "Mars"],
        },
        {
          question: "Qu'appelle-t-on l'étoile du berger ?",
          answer: 3,
          prop: ["La Lune", "L'étoile la plus proche", "Mars", "Vénus"],
        },
        {
          question: "Quel est le diamètre du Soleil ?",
          answer: 2,
          prop: ["10 000 000 m", "812 000 km", "1 392 000 km", "99 999 000 m"],
        },
      ],
      messages: [],
      arrayClass: ["", "", "", ""],
      goodAnswers: 0,
      score: 0,
    };
  },
  mounted() {
    this.apiCall();
  },
  methods: {
    async introduce() {
      if (this.introduced == true) return;
      this.introduced = true;
      this.loader = true;
      await this.timeout(750);
      this.loader = false;
      this.messages.push({
        author: "server",
        text: "Bonjour ! Je suis space Bot le robot d'assistance intelligent !",
      });
      this.loader = true;
      await this.timeout(750);
      this.loader = false;
      this.messages.push({
        author: "server",
        text: "Je sais faire pleins de chose : <br> <br> <ul style='margin-left:35px'> <li>Je peux répondre a toutes vos questions ! </li> <li> Je peux vous aider a tester vos connaissanes avec un quizz ! </li><li>Je peux même faire des blagues ! </li> </ul> ",
      });
    },
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
    handleScroll() {
      if (window.scrollY > 1500) {
        this.introduce();
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
      });
    },
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
      if (this.input) {
        let message = this.input;

        this.messages.push({ author: "client", text: this.input });
        this.input = "";

        this.scrollToBottom();
        await this.apiCall(message);
        this.respound();
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    async respound() {
      if (this.api.intents.length != 0) {
        this.loader = true;
        await this.timeout(2500);
        this.loader = false;
        switch (this.api.intents[0].name) {
          case "Joke":
            let jokes = [
              "Le comble pour un astronote ?",
              "Quel étoile mens le plus ?",
            ];
            let answers = [
              "Etre mal luné.",
              "Proxima du Centaure (du cent torts)",
            ];
            let rand = this.getRandomInt(jokes.length);
            this.loader = true;
            this.messages.push({
              author: "server",
              text: jokes[rand],
            });
            this.scrollToBottom();
            await this.timeout(3000);
            this.messages.push({
              author: "server",
              text: answers[rand],
            });
            this.scrollToBottom();
            this.loader = false;
            break;
          case "ISS_speed_get":
            this.messages.push({
              author: "server",
              text: "L'ISS fait va a une vitesse de 28.000 km heure ! Ce qui fait 16 fois le tour de la Terre en 24h !",
            });
            this.scrollToBottom();
            break;
          case "ISS_crew_lenght":
            this.messages.push({
              author: "server",
              text: "Pour le moment, la station internationale est peuplée de 6 Américains, 2 Russes, 2 Japonais et 1 Français : cela fait 11 personnes au total !",
            });
            this.scrollToBottom();
            break;
          case "ISS_altitude_get":
            this.messages.push({
              author: "server",
              text: "La distance entre la Terre et l'ISS est d'environ 400 km !",
            });
            this.scrollToBottom();
            break;
          case "greeting":
            this.messages.push({
              author: "server",
              text: "Bonjour à vous ! ",
            });
            this.scrollToBottom();
            break;
        }
      } else {
        this.loader = true;
        await this.timeout(2500);
        this.loader = false;
        this.messages.push({
          author: "server",
          text: "Je n'ai pas compris",
        });
        this.scrollToBottom();
      }
      this.api = "";

      this.scrollToBottom();
    },
    async startQuizz() {
      if (this.quizz != true) {
        this.loader = true;
        await this.timeout(1500);
        this.counterQuizz = 0;
        this.messages.push({
          author: "server",
          text: "C'est partie pour un Quizz !",
        });
        this.scrollToBottom();
        await this.timeout(1500);
        this.loader = false;
        this.newQuestion();
      } else {
        this.messages.push({
          author: "server",
          text: "C'était vraiment instructif !",
        });
        this.scrollToBottom();
        this.counterQuizz = 0;
        this.Question = 0;
        this.arrayClass = ["", "", "", ""];
        this.goodAnswers = 0;
      }
      await this.timeout(1500);
      this.quizz = !this.quizz;
      this.scrollToBottom();
    },
    async newQuestion() {
      this.arrayClass = ["", "", "", ""];
      this.counterQuizz++;
      let rand = this.getRandomInt(this.Questions.length);
      this.messages.push({
        author: "server",
        text: "Question " + this.counterQuizz,
      });
      this.Question = rand;
      this.scrollToBottom();
      this.loader = true;
      await this.timeout(1500);
      this.messages.push({
        author: "server",
        text: this.Questions[this.Question].question,
      });
      this.loader = false;
      this.scrollToBottom();
    },
    async answerQuizz(numRep) {
      if (this.loader == true) return;
      let answer = this.Questions[this.Question].answer;
      this.messages.push({
        author: "client",
        text: this.Questions[this.Question].prop[numRep],
      });
      this.scrollToBottom();
      this.loader = true;
      await this.timeout(2000);
      this.loader = false;
      if (numRep != answer) {
        this.arrayClass[numRep] = "error";
        this.arrayClass[this.Questions[this.Question].answer] = "success";
        this.messages.push({
          author: "server",
          text:
            "Dommage ! <br> La bonne réponse était : " +
            this.Questions[this.Question].prop[answer],
        });
        this.scrollToBottom();
      } else {
        this.arrayClass[this.Questions[this.Question].answer] = "success";
        this.goodAnswers++;
        this.messages.push({
          author: "server",
          text: "Bien Joué !",
        });
        this.scrollToBottom();
      }
      this.score = this.goodAnswers / this.counterQuizz;
      if (this.score >= 0.75) {
        this.messages.push({
          author: "server",
          text:
            "Score : <span style=color:#4db741>" +
            this.goodAnswers +
            "/" +
            this.counterQuizz +
            "</span>",
        });
        this.scrollToBottom();
      } else if (0.25 < this.score && this.score < 0.75) {
        this.messages.push({
          author: "server",
          text:
            "Score : <span style=color:orange>" +
            this.goodAnswers +
            "/" +
            this.counterQuizz +
            "</span>",
        });
        this.scrollToBottom();
      } else {
        this.messages.push({
          author: "server",
          text:
            "Score : <span style=color:#FF5555>" +
            this.goodAnswers +
            "/" +
            this.counterQuizz +
            "</span>",
        });
        this.scrollToBottom();
      }
      this.scrollToBottom();
      this.loader = true;
      await this.timeout(2500);
      this.loader = false;
      this.newQuestion();
    },
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>

<style scoped>
.spaceBot {
  background: #8a9bbc;
  display: flex;
  padding: 14.5% 0% 10% 0%;
}
.projet {
  width: 50%;
  margin-left: 3%;
  margin-right: 6%;
}
h1 {
  text-align: center;
  color: white;
  font-size: 50px;
  margin-top: -7%;
}
.projetCorp {
  display: flex;
  margin-top: 12%;
}
.logo {
  width: 220px;
  height: 220px;
  background: url("../assets/svg/spacebot.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.textWho {
  color: white;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 60%;
  align-self: center;
  margin-left: 10%;
}
.textWho2 {
  color: white;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 80%;
  align-self: center;
  margin-top: 12%;
  margin-left: 10%;
}
.chatboxCont {
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 20px;
  filter: drop-shadow(0px 3px 30px rgba(0, 0, 0, 0.6));
  background-color: #edeef6;
  margin-top: -8%;
}
.chatboxHeader {
  display: flex;
  flex-direction: row;
  height: 100px;
  background-color: #25166b;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
}
.logoHeader {
  width: 70px;
  height: 70px;
  background: url("../assets/svg/spacebot.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 15px;
  width: 80px;
}
.textHeader {
  color: white;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  width: 180px;
  margin-left: 5px;
}
.quizzBox {
  display: flex;
  flex-direction: column;
  align-self: center;
  color: white;
  width: 280px;
}
.quizzBtn {
  margin: auto;
  width: 30%;
  border-radius: 25px;
  color: #25166b;
  text-align: center;
  background: #b5c6da;
  margin-top: 5%;
  padding: 7px;
  cursor: pointer;
}
.quizzBtn:hover {
  transform: translateY(0px) scale(1.1);
  transition: 0.1s all ease-in-out;
}
.quizzBox p {
  text-align: center;
  height: 100%;
  align-self: center;
  font-size: 16px;
  font-weight: 700;
}
.quizzBtn p {
  text-align: center;
  height: 100%;
  align-self: center;
  font-size: 16px;
  font-weight: 700;
}
.chatbox {
  width: 100%;
  height: 550px;
  overflow: scroll;
  overflow-x: hidden;
}
.imessage {
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  font-size: 1.15rem;
  margin: 0 auto 1rem;
  max-width: 600px;
  padding: 0.8rem 1.5rem;
}
.imessage p {
  border-radius: 1.15rem;
  line-height: 1.25;
  max-width: 75%;
  padding: 0.5rem 0.875rem;
  position: relative;
  word-wrap: break-word;
}
.imessage p::before,
.imessage p::after {
  bottom: -0.1rem;
  content: "";
  height: 1rem;
  position: absolute;
}
p.from-me {
  align-self: flex-end;
  background-color: #8a9bbc;
  color: #fff;
  margin-right: 8% !important;
}
p.from-me::before {
  border-bottom-left-radius: 0.8rem 0.7rem;
  border-right: 1rem solid #8a9bbc;
  right: -0.35rem;
  transform: translate(0, -0.1rem);
}
p.from-me::after {
  background-color: #edeef6;
  border-bottom-left-radius: 0.5rem;
  right: -40px;
  transform: translate(-30px, -2px);
  width: 10px;
}
p[class^="from-"] {
  margin: 0.5rem 0;
  width: fit-content;
}
p.from-me ~ p.from-me {
  margin: 0.25rem 0 0;
}
p.from-me ~ p.from-me:not(:last-child) {
  margin: 0.25rem 0 0;
}
p.from-me ~ p.from-me:last-child {
  margin-bottom: 0.5rem;
}
p.from-them {
  align-items: flex-start;
  background-color: #25166b;
  color: #fff;
  margin-left: 10%;
}
p.from-them:before {
  border-bottom-right-radius: 0.8rem 0.7rem;
  border-left: 1rem solid #25166b;
  left: -0.35rem;
  transform: translate(0, -0.1rem);
}
p.from-them::after {
  background-color: #edeef6;
  border-bottom-right-radius: 0.5rem;
  left: 20px;
  transform: translate(-30px, -2px);
  width: 10px;
}
.chatbox::-webkit-scrollbar {
  width: 12px;
}
.chatbox::-webkit-scrollbar-track {
  background: #edeef6;
}
.chatbox::-webkit-scrollbar-thumb {
  background-color: #25166b;
  border-radius: 30px;
  border: 3px solid #edeef6;
}
.chatboxList {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 3%;
  margin-bottom: 5%;
}
.msgLogo {
  width: 40px;
  height: 40px;
  background: url("../assets/svg/spacebot.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -6.7%;
  margin-right: -2%;
}
.msgLogo2 {
  width: 40px;
  height: 40px;
  background: url("../assets/png/loic.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -6.7%;
  margin-right: -2%;
  align-self: flex-end;
}
.inputBox {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 70px;
  margin-bottom: 3%;
}
.inputUser {
  display: flex;
  border-style: none;
  border-radius: 15px;
  padding-left: 30px;
  padding-right: 10%;
  font-size: 1.2em;
  margin: 0% auto;
  height: 100%;
  width: 78%;
}
::placeholder {
  color: #25166b;
  font-size: 1em;
  font-weight: 400;
}
.send {
  right: 5%;
  bottom: 30px;
  width: 10%;
  height: 5%;
  background: url("../assets/svg/send.svg");
  background-position: center;
  background-repeat: no-repeat;
  border-style: none;
  position: absolute;
  cursor: pointer;
}
.answerBox {
  background-color: #25166b;
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 0px 0px 20px 20px;
  padding: 0% 5%;
}
.answerBox div {
  width: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.answerBox div p {
  border-radius: 25px;
  color: #25166b;
  text-align: center;
  background: #b5c6da;
  padding: 7px 20px;
  cursor: pointer;
}
.answer1 {
  margin-top: 6px;
}
.answer2 {
  margin-bottom: 6px;
}
.success {
  background: #4db741 !important;
}
.error {
  background: #ff5555 !important;
}
.spacer {
  height: 20px;
}
.spacer2 {
  height: 30px;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 1em;
  height: 1em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  top: -50px;
  color: #25166b;
  font-size: 10px;
  margin-left: 50px;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 0px;
}
.loader:before {
  left: -2em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 2em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>

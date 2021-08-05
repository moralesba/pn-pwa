<template>
  <div id="app">
    <div class="header" />
    <div style="margin-top: 25px">
      <span>Sobre o que você deseja receber notificações?</span>
      <div class="buttons">
        <input type="radio" value="Esportes" v-model="selectedOs" /> Esportes
        <input type="radio" value="Política" v-model="selectedOs" /> Política
      </div>
      <button class="bt" v-on:click="subscribe">Subscribe</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
const fb = require("./services/firebase");

export default {
  name: "App",
  components: {},

  data() {
    return {
      selectedOs: "Esportes",
      token: "",
    };
  },

  mounted() {
    // fb.gerarToken().then((t) => (this.token = t));
  },

  methods: {
     subscribe() {
      axios
        .post(
          "https://fcm.googleapis.com/fcm/notification",
          {
            operation: "create",
            notification_key_name: "Politica",
            registration_ids: [
              "eAC5tdbB8vJCg3o_cOPJDs:APA91bEF7YBPFPC4Eg_Ohd8NwefE1159KVfOWf86hK_6YWjzopVESbl74R1s9w8tPXraIZTsyCIIqowF37XLKtgM0uC5PTG-HsF4OD4-_3btlzAi5juysk5dNtmo9PqqJjmClRz2VIq6",
            ],
          },
          {
            headers: {
              "project_id": "211385459012",
              "Content-Type": "application/json",
              Authorization:
                "key=AAAAMTeOIUQ:APA91bGUb1toWvKggF7arWbnL98oBZHAl-OtW5BasUHXrAl6FAFopOfDxKYYwC-waiO96cpUfZgz9hfcO_8eGHodUfdkLgNCSC0OgNZdGxzXWi5_q2QnJ3rw0FmsDdStLwepz6t-767u",
            },
          }
        )
        .then((r) => console.log("response" + r))
        .catch((e) => console.log(e));
    },
     sendNotification() {
      axios
        .post(
          "https://fcm.googleapis.com/fcm/send",
          {
            to: "APA91bFYohnwG9X51TyJbNKEP_8AhQ1_mSrC6J8HCeM5LFJ54Aq7LASM8fpA4Td61Y3Q7zUHAPI2gDpDTa-pfBlYbMypkeVz0aq_fYEt-Gnj5POQMiN9KD0",
            notification: {
              sound: "default",
              body: `Inscrito para: ${this.selectedOs}`,
              title: "Sucesso",
              content_available: true,
              priority: "high",
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "key=AAAAMTeOIUQ:APA91bGUb1toWvKggF7arWbnL98oBZHAl-OtW5BasUHXrAl6FAFopOfDxKYYwC-waiO96cpUfZgz9hfcO_8eGHodUfdkLgNCSC0OgNZdGxzXWi5_q2QnJ3rw0FmsDdStLwepz6t-767u",
            },
          }
        )
        .then((r) => console.log("response" + r))
        .catch((e) => console.log(e));
    },
  },
};

// "notification_key": "APA91bFYohnwG9X51TyJbNKEP_8AhQ1_mSrC6J8HCeM5LFJ54Aq7LASM8fpA4Td61Y3Q7zUHAPI2gDpDTa-pfBlYbMypkeVz0aq_fYEt-Gnj5POQMiN9KD0" / "notification_key_name": "Esportes"
</script>
<style>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
  font-size: 14px;
  color: #424242;
}

.header {
  background-color: #33cccc;
  height: 10px;
}
#app {
  text-align: center;
}

.buttons {
  margin: 20px 0;
}

.bt {
  outline: none;
  background-color: #33cccc;
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: #ffff;
}
</style>

import Vue from "vue";
import Vuex from "vuex";

const baseUrl = "http://api.steampowered.com/";
const axios = require("axios");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    steamkey: "B4E45E111B03BF6393A1659175625D95",
    games: []
  },
  mutations: {
    setSteamKey(state, payload) {
      state.steamkey = payload.steamkey;
    },
    setGames(state, payload) {
      state.games = payload.games;
    }
  },
  actions: {
    getUserOwnGames({ commit }, payload) {
      axios
        .get(
          `${baseUrl}IPlayerService/GetOwnedGames/v1/?key=${this.state.steamkey}&steamid=${payload.steamid}&include_appinfo=true`
          // { crossdomain: true, headers: { 'Access-Control-Allow-Origin': '*' } }
        )
        .then(response => {
          commit("setGames", { games: response.data.response.games });
        });
    }
  }
});

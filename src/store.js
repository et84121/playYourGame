import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

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
      Axios.get(
        `https://untitled-bxtywstplxg0.runkit.sh/getUserOwnedGame?key=${this.state.steamkey}&steamid=${payload.steamid}`
      ).then(response => {
        commit("setGames", { games: response.data });
      });
    }
  }
});

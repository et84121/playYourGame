import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    steamkey: process.env.VUE_APP_SECRET,
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

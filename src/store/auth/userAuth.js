import axios from "axios";

export default {
  state: { authenticated: false, dataCand: "" },
  getters: {},
  mutations: {
    SET_AUTH(state, auth) {
      state.authenticated = auth;
    },
    SET_DATA_CAND(state, data) {
      state.dataCand = data;
      console.log("dataCand", state.dataCand);
    },
  },
  actions: {
    async userAuth(ctx) {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/candidat/user",
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );

        // console.log("content: ", content.message);
        // console.log("cookiea", document.cookie);
        if (response.status === 500 || response.status === 401) {
          await ctx.commit("SET_AUTH", false);
        } else {
          await ctx.commit("SET_AUTH", true);
        }
        console.log("auth", ctx.state.authenticated);
        ctx.commit("SET_DATA_CAND", response.data);
      } catch (error) {
        console.error("Error during user authentication:", error);
        await ctx.commit("SET_AUTH", false);
      }
    },

    async userAuthr(ctx) {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/recruteur/user",
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );

        // console.log("content: ", content.message);
        // console.log("cookiea", document.cookie);
        if (response.status === 500 || response.status === 401) {
          await ctx.commit("SET_AUTH", false);
        } else {
          await ctx.commit("SET_AUTH", true);
        }
        console.log("auth", ctx.state.authenticated);
        ctx.commit("SET_DATA_CAND", response.data);
      } catch (error) {
        console.error("Error during user authentication:", error);
        await ctx.commit("SET_AUTH", false);
      }
    },
  },
};

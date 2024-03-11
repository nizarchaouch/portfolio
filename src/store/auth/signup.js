import axios from "axios";

export default {
  state: { step: 1, alert: false, message: "" },
  getters: {},
  mutations: {
    incrStep(state) {
      state.step++;
    },
    decrStep(state) {
      state.step--;
    },
    setMes(state, message) {
      state.message = message;
    },
  },
  actions: {
    async SignupCandidat(ctx, data) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/signup",
          JSON.stringify(data),
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        console.log("data", data);
        if (response.status == 201) {
          console.log("inscription réussie");
          ctx.commit("incrStep");
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        if (error.message === "Request failed with status code 400") {
          ctx.state.alert = true;
          ctx.commit("setMes", "candidat existe déjà!");
          setTimeout(() => {
            ctx.state.alert = false;
          }, 2000);
        } else {
          ctx.state.alert = true;
          ctx.commit("setMes", "Erreur lors de l'inscription");
          setTimeout(() => {
            ctx.state.alert = false;
          }, 2000);
        }
      }
    },
  },
};

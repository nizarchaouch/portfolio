import axios from "axios";
export default {
  state: { alert: false, message: "" },
  getters: {},
  mutations: {
    setMes(state, message) {
      state.message = message;
    },
    // setUserData(state, data) {
    //   state.userData = data;
    // },
  },
  actions: {
    async forgotPwd(ctx, mail) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/forgot",
          { mail },
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          console.log("Email envoyé");
          ctx.state.alert = true;
          ctx.commit("setMes", "Email envoyé");
          //   await router.push("/profil");
        }
      } catch (error) {
        console.log("Error during login:", error.message);
        ctx.state.alert = true;
        if (error.response.status === 500) {
          ctx.state.alert = true;
          ctx.commit("setMes", "Échec de l'envoi de l'email");
        } else if (error.response.status === 404) {
          ctx.state.alert = true;
          ctx.commit("setMes", "E-mail non trouvé");
        }
      }
    },

    async resetPwd(ctx, data) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/reset",
          JSON.stringify(data),
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        // message.value = response.data.message;
        console.log(response);
        console.log("response",data);
      } catch (error) {
        console.log(error);
        // message.value = error.response
        //   ? error.response.data.message
        //   : "Erreur lors de la réinitialisation du mot de passe";
      }
    },
  },
};

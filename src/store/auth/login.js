import router from "@/router";
import axios from "axios";

export default {
  state: { alert: false },
  getters: {},
  mutations: {},
  actions: {
    async loginCandidat(ctx, data) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/candidat/login",
          JSON.stringify(data),
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        console.log(data);
        if (response.status === 200) {
          console.log("Login successful");
          await router.push("/");
        }
      } catch (error) {
        console.log("Error during login:", error.message);
        ctx.state.alert = true;
        setTimeout(() => {
          ctx.state.alert = false;
        }, 2000);
      }
    },
    // login recruteur
    async loginRecruteur(ctx, data) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/recruteur/login",
          JSON.stringify(data),
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          console.log("Login successful");
          await router.push("/");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        ctx.state.alert = true;
        setTimeout(() => {
          ctx.state.alert = false;
        }, 2000);
      }
    },

    async Logout() {
      try {
        await axios.post("http://localhost:8000/api/candidat/logout", null, {
          withCredentials: true,
        });
        location.reload();
        console.log("Déconnexion réussie");
      } catch (error) {
        console.error(error);
      }
    },
  },
};

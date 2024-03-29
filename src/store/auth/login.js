import router from "@/router";
import axios from "axios";

export default {
  state: { alert: false },
  getters: {},
  mutations: {},
  actions: {
    async loginUser(ctx, data) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/login",
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
      }
    },

    async Logout() {
      try {
        await axios.post("http://localhost:8000/api/user/logout", null, {
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

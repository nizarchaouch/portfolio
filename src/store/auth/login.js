import router from "@/router";
import axios from "axios";

export default {
  state: { data: "", alert: false },
  getters: {},
  mutations: {
    setData(state, data) {
      state.data = data;
      // console.log("data", data);
    },
  },
  actions: {
    async Submit(ctx) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/login",
          JSON.stringify(ctx.state.data),
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        console.log(ctx.state.data);
        if (response.status !== 200) {
          console.error("Login failed. Status code:", response.status);
          ctx.state.alert = true;
          setTimeout(() => {
            ctx.state.alert = false;
          }, 2000);
        } else {
          console.log("Login successful");
          await router.push("/");
        }
      } catch (error) {
        console.error("Error during login:", error);
        ctx.state.alert = true;
        setTimeout(() => {
          ctx.state.alert = false;
        }, 2000);
        console.log(ctx.state.alert);
      }
    },

    Logout() {
      try {
        axios.post("http://localhost:8000/api/logout", {
          withCredentials: true,
        });
        // location.reload();
        console.log("logout");
      } catch (error) {
        console.error(error);
      }
    },
  },
};

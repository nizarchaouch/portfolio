import axios from "axios";
export default {
  state: {},
  mutations: {},
  actions: {
    async addCandOffer(ctx, data) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/candidature/add",
          JSON.stringify(data),
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        console.log("store",data);
        if (response.status === 200) {
          console.log("postuler successful");
        }
      } catch (error) {
        console.log("Error during login:", error.message);
        // ctx.state.alert = true;
      }
    },
  },
};

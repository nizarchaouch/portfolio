import axios from "axios";
export default {
  state: { alert: false, message: "" },
  mutations: {
    setMes(state, message) {
      state.message = message;
    },
  },
  actions: {
    async updated(ctx, data) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/candidat/update/${data.id}`,
          JSON.stringify(data),
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        console.log("dataa", data);
        if (response.status == 201) {
          console.log("mise à jour réussie");
          ctx.state.alert = true;
          ctx.commit("setMes", "Mise à jour réussie");
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        ctx.state.alert = true;
        ctx.commit("setMes", "Erreur lors de la mise à jour :");
      }
    },
  },
};

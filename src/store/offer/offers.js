import axios from "axios";
export default {
  state: { alert: false, offerData:"" },
  mutations: {
    setOffers(state, offers) {
      state.offerData = offers;
      console.log("data",state.offerData);
    },
  },
  actions: {
    async showOffer(ctx) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/offer/show/all`,
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        // console.log("dataa", response);
        // if (response.status == 201) {
        //   console.log("mise à jour réussie");
        //   ctx.state.alert = true;
          ctx.commit("setOffers", response.data);
        // }
      } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        ctx.state.alert = true;
        ctx.commit("setMes", "Erreur lors de la mise à jour");
      }
    },
  },
};

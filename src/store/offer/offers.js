import axios from "axios";
export default {
  state: { offerData: "" },
  mutations: {
    setOffers(state, offers) {
      state.offerData = offers;
      console.log("data", state.offerData);
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
        ctx.commit("setOffers", response.data);
      } catch (error) {
        console.error("Erreur lors de l'affichage des offres :", error);
      }
    },
  },
};

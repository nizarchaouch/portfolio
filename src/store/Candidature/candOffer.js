import axios from "axios";
export default {
  state: { candData: [], infoData: [] },
  mutations: {
    setCandData(state, candata) {
      state.candData = candata;
    },
    setInfoData(state, infodata) {
      state.infoData = infodata;
    },
  },
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
        console.log("store", data);
        if (response.status === 200) {
          console.log("postuler successful");
        }
      } catch (error) {
        console.log("Error during login:", error.message);
        // ctx.state.alert = true;
      }
    },
    async getAll(ctx, id) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/candidature/showCand/${id}`,
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        // console.log("candOffers",response.data.candOffers);
        // console.log("infOffers",response.data.infOffers);
        ctx.commit("setCandData", response.data.candOffers);
        ctx.commit("setInfoData", response.data.infOffers);
      } catch (error) {
        console.error("Erreur lors de l'affichage des candidateurs :", error);
      }
    },
  },
};

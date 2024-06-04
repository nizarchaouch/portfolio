import axios from "axios";

export default {
  state: {
    candData: [],
    infoData: [],
    countApp: [],
    totalCandOffers: 0,
    totalCandWait: 0,
  },
  mutations: {
    setCandData(state, candata) {
      state.candData = candata;
    },
    setInfoData(state, infodata) {
      state.infoData = infodata;
    },
    setCountApp(state, { id, count, etat }) {
      state.countApp.push({ id, count });
      state.totalCandOffers += count;
      for (let index = 0; index < etat.length; index++) {
        if (etat[index].etat == "En Attend") {
          state.totalCandWait += 1;
          // console.log("count etat attend", etat.length);
        }
      }

      // console.log("Total candOffers count:", state.totalCandOffers);
    },
    RestCountApp(state) {
      state.countApp = [];
      state.totalCandOffers = 0;
      state.totalCandWait = 0;
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
          console.log("Postuler successful");
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
    async getOfferApp(ctx, id) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/candidature/showOfferApp/${id}`,
          {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          }
        );
        const count = response.data.candOffers.length || 0;
        const etat = response.data.candOffers;
        ctx.commit("setCountApp", { id, count, etat });
        console.log("tt", etat);
      } catch (error) {
        console.error("Erreur lors de l'affichage des candidateurs :", error);
      }
    },
  },
};

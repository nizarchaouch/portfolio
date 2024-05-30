import { createStore } from "vuex";
import user from "./auth/userAuth";
import login from "./auth/login";
import signup from "./auth/signup";
import candidat from "./candidat/profil";
import offer from "./offer/offers";
import portfolio from "./portfolio/elements";
import candOffer from "./Candidature/candOffer";
import chartRec from "./recruteur/chart";
import usersUpdate from "./users/profil";

export default createStore({
  state: { apiUrl: "http://localhost:8000/api/" },
  mutations: {},
  actions: {},
  modules: {
    user,
    login,
    signup,
    candidat,
    offer,
    portfolio,
    candOffer,
    chartRec,
    usersUpdate,
  },
});

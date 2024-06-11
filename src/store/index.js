import { createStore } from "vuex";
import user from "./auth/userAuth";
import login from "./auth/login";
import signup from "./auth/signup";
import forgot from "./auth/forgot.js";
import candidat from "./candidat/profil";
import offer from "./offer/offers";
import portfolio from "./portfolio/elements";
import candOffer from "./Candidature/candOffer";
import chartRec from "./recruteur/chart";
import profilRec from "./recruteur/profil";
// import usersUpdate from "./users/profil";

export default createStore({
  state: { apiUrl: "http://localhost:8000/api/" },
  mutations: {},
  actions: {},
  modules: {
    user,
    login,
    signup,
    forgot,
    candidat,
    offer,
    portfolio,
    candOffer,
    chartRec,
    profilRec,
    // usersUpdate,
  },
});

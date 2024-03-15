import { createStore } from "vuex";
import user from "./auth/userAuth";
import login from "./auth/login";
import signup from "./auth/signup";
import candidat from "./candidat/profil";

export default createStore({
  state: { apiUrl: "http://localhost:8000/api/" },
  mutations: {},
  actions: {},
  modules: { user, login, signup, candidat },
});

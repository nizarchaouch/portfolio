import { createStore } from "vuex";
import user from "./auth/userAuth";
import login from "./auth/login";
import signup from "./auth/signup";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, login, signup },
});

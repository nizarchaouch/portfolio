// import axios from "axios";
export default {
  state: { element: [] },
  mutations: {
    addElment(state, element) {
      state.element.push(element);
      console.log("element",state.element);
    },
  },
  actions: {

  },
};

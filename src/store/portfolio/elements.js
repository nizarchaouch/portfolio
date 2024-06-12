export default {
  state: {
    sideBar: false,
    linkNav: ["one", "two", "three"],
    pages: [
      { id: "one", bloc: "nizar" },
      { id: "two", bloc: "chaouch" },
      { id: "three", bloc: "pfe" },
    ],
  },
  mutations: {
    changeSidebar(state) {
      state.sideBar = !state.sideBar;
    },
  },
};

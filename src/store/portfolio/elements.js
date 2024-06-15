export default {
  state: {
    sideBarA: false,
    sideBarM: false,
    linkNav: ["À PROPOS DE MOI", "two", "three"],
    pages: [
      { id: "one", bloc: "nizar" },
      { id: "two", bloc: "chaouch" },
      { id: "three", bloc: "pfe" },
    ],
  },
  mutations: {
    changeSidebarA(state) {
      state.sideBarA = !state.sideBarA;
      state.sideBarM = false;
    },
    changeSidebarM(state) {
      state.sideBarM = !state.sideBarM;
      state.sideBarA = false;
    },
  },
};

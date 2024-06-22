export default {
  state: {
    sideBarA: false,
    sideBarM: true,
    linkNav: [
      { name: "À PROPOS DE MOI" },
      { name: "two" },
      { name: "three" },
      { name: "Gerard" },
    ],
    pages: [
      { id: "one", bloc: "nizar" },
      { id: "two", bloc: "chaouch" },
      { id: "three", bloc: "pfe" },
    ],
    navbar: {
      backgroundImage: false,
      afficheTitre: true,
      fixedNav: false,
      formaTitreNav: [],
      colorTitre:"white",
      colorBackTitre:"#0B242400",
      titre: "Nizar Chaouch",
      selectStyle: "Titer 4", //en px
      sizeTitle: 25,
      selectPolice: "Potta One",
      colorNav: "#0B2424",
      lineImage: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    },
    logo: {
      logo: true,
      image: false,
      logoArr: false,
      colorChoix: "blue",
      sizeLogo: 20,
      lineImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFARC1fuCzw9lIUrY4ZS69QUrSzDi11gKPczV38dtl3ezCQeqjhB6FKd1IXBGULNYzFM&usqp=CAU",
    },
    links: {
      hideSlider: false,
      colorLink: "blue",
      selectPolice: "Poppins",
    },
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

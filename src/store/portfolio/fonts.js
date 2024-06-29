import axios from "axios";
export default {
  state: {
    font: [],
  },
  mutations: {
    SetFonts(state, font) {
      state.font = font;
    },
  },
  actions: {
    async fetchFonts(ctx) {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC2ze0O5eV244cqWMd5iC10rWYmSqdT-EU"
        );
        ctx.commit("SetFonts", response.data.items);
      } catch (error) {
        console.error("Error fetching fonts:", error);
      }
    },
  },
};

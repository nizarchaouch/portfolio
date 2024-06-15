<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";
import CardText from "./bloc/entete/CardText.vue";

export default {
  components: {
    CardText,
  },
  computed: {
    ...mapState(["portfolio"]),
  },
  data: () => ({
    tab: null,
    showButton: false,
    selectedPage: null,
  }),
  methods: {
    ...mapActions([""]),
    ...mapMutations(["changeSidebarA", "changeSidebarM"]),
    findPageById(id) {
      this.selectedPage =
        this.portfolio.pages.find((page) => page.id === id) || {};
    },
  },
  watch: {
    tab(newValue) {
      // Met à jour l'affichage de la page quand l'onglet sélectionné change
      this.$router.push({ name: "portfolio", params: { page: newValue } });
    },
  },
  created() {
    this.selectedPage = this.portfolio.pages[0];
  },
};
</script>

<template>
  <v-toolbar
    @mouseover="showButton = true"
    @mouseleave="showButton = false"
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    color=""
  >
    <v-app-bar-nav-icon
      @click="changeSidebar"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>

    <v-col cols="auto" class="d-flex">
      <v-avatar color="grey" rounded="" size="60">
        <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFARC1fuCzw9lIUrY4ZS69QUrSzDi11gKPczV38dtl3ezCQeqjhB6FKd1IXBGULNYzFM&usqp=CAU"
          cover
        ></v-img>
      </v-avatar>
      <v-tab class="text-none text-white">Nizar chaouch</v-tab>
    </v-col>

    <v-spacer></v-spacer>

    <v-tabs v-model="tab" class="pe-3" height="60">
      <v-tab
        v-for="(item, index) in portfolio.linkNav"
        :key="index"
        :value="item"
        class="text-decoration-none text-white"
        style="font-weight: 600"
        color="red"
        @click="findPageById(item)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-btn
      v-if="showButton"
      color="white"
      prepend-icon="mdi-plus"
      class="btn animation position-fixed text-none bg-blue"
      @click="changeSidebarA"
    >
      Ajouter un bloc
    </v-btn>
    <v-btn
      v-if="showButton"
      color="white"
      icon
      class="animation text-none bg-blue"
      @click="changeSidebarM"
    >
      <v-icon>mdi-pencil</v-icon>
      <v-tooltip activator="parent" location="bottom">Modifier</v-tooltip>
    </v-btn>
  </v-toolbar>
  <v-sheet
    class="addBloc mx-4 my-2"
    height="85"
    color="transparent"
    v-if="portfolio.sideBarA"
    @click="changeSidebarA"
  >
    <p class="text-center pa-7 cursor-pointer text-body-1">
      Choisissez un bloc
    </p>
  </v-sheet>
  <!-- <div v-if="selectedPage">
    <div>
      {{ selectedPage.bloc }}
    </div>
  </div> -->
  <CardText />
</template>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.addBloc {
  border: 2px dashed gray;
}
.v-toolbar {
  &:hover {
    border: 2px solid blue;
  }
  .btn {
    margin-top: 70px;
    left: 40%;
  }
  .animation {
    animation: fadeIn 0.6s;
  }
}
</style>

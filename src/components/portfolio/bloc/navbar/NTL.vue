<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState(["portfolio"]),
  },
  data: () => ({
    tab: null,
    drawer: false,
    showButton: false,
    showBloc: false,
    selectedPage: null,
  }),
  methods: {
    ...mapActions([""]),
    ...mapMutations(["changeSidebarA", "changeSidebarM"]),
    findPageById(id) {
      this.selectedPage =
        this.portfolio.pages.find((page) => page.id === id) || {};
    },
    handleAddBlock() {
      this.changeSidebarA();
      if (this.portfolio.sideBarA) {
        this.showBloc = true;
      } else {
        this.showBloc = false;
      }
    },
    handleModBlock() {
      this.changeSidebarM();
      if (this.portfolio.sideBarA) {
        this.showBloc = true;
      } else {
        this.showBloc = false;
      }
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
    :image="
      portfolio.navbar.backgroundImage ? portfolio.navbar.lineImage : null
    "
    :color="portfolio.navbar.colorNav"
  >
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>
    <v-layout class="hidden-md-and-up">
      <v-navigation-drawer
        v-model="drawer"
        class="mt-15"
        location="top"
        elevation="10"
        temporary
        permanent
      >
        <div class="d-flex flex-row">
          <v-tabs v-model="tab" class="pe-3" direction="vertical">
            <v-tab
              v-for="(item, index) in portfolio.linkNav"
              :key="index"
              :value="item.name"
              class="text-decoration-none"
              style="font-weight: 600"
              color="blue"
              @click="findPageById(item)"
            >
              {{ item.name }}
            </v-tab>
          </v-tabs>
          <v-icon
            @click="drawer = !drawer"
            size="large"
            class="ma-5 ms-auto"
            color="grey"
            >mdi-close-circle</v-icon
          >
        </div>
      </v-navigation-drawer>
    </v-layout>

    <v-tabs v-model="tab" class="pe-3 hidden-md-and-down" height="60">
      <v-tab
        v-for="(item, index) in portfolio.linkNav"
        :key="index"
        :value="item.name"
        :hide-slider="portfolio.links.hideSlider"
        :style="{
          'font-weight': 600,
          fontFamily: portfolio.links.selectPolice,
        }"
        class="text-none"
        :color="portfolio.links.colorLink"
        @click="findPageById(item)"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-col cols="auto" class="d-flex">
      <v-tab
        class="text-none"
        :style="{
          fontFamily: portfolio.navbar.selectPolice,
          'font-size': portfolio.navbar.sizeTitle + 'px',
        }"
      >
        <p
          v-if="portfolio.navbar.afficheTitre"
          :class="portfolio.navbar.formaTitreNav"
          class="py-1"
          :style="{
            color: portfolio.navbar.colorTitre,
            'background-color': portfolio.navbar.colorBackTitre,
          }"
        >
          {{ portfolio.navbar.titre }}
        </p>
        <v-avatar
          v-if="portfolio.logo.logo"
          class="ms-4 mt-1"
          :color="portfolio.logo.colorChoix"
          :rounded="!portfolio.logo.logoArr"
          :size="portfolio.logo.sizeLogo"
        >
          <v-img
            :src="portfolio.logo.image ? portfolio.logo.lineImage : null"
            cover
          ></v-img>
        </v-avatar>
      </v-tab>
    </v-col>

    <v-btn
      v-if="showButton"
      color="white"
      prepend-icon="mdi-plus"
      class="btn animation position-fixed text-none bg-blue"
      @click="handleAddBlock"
    >
      Ajouter un bloc
    </v-btn>
    <v-btn
      v-if="showButton"
      color="white"
      icon
      class="animation text-none bg-blue"
      @click="handleModBlock"
    >
      <v-icon>mdi-pencil</v-icon>
      <v-tooltip activator="parent" location="bottom">Modifier</v-tooltip>
    </v-btn>
  </v-toolbar>
  <v-sheet
    class="addBloc mx-4 my-2"
    height="85"
    color="transparent"
    v-if="showBloc"
    @click="handleAddBlock"
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
    z-index: 3;
    margin-top: 70px;
    left: 38%;
  }
  .animation {
    animation: fadeIn 0.6s;
  }

  @media screen and (max-width: 600px) {
    .btn {
      left: 30%;
    }
  }
}
</style>

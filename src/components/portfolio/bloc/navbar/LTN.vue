<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";
import DialogAjouter from "@/components/portfolio/DialogAjouter.vue";

export default {
  components: { DialogAjouter },
  computed: {
    ...mapState(["portfolio", "portfolioss"]),
    pages() {
      return this.portfolioss.portfolios.pages;
    },
    selectedPage() {
      return this.portfolioss.portfolios.selectedPage;
    },
  },
  data: () => ({
    tab: null,
    drawer: false,
    showButton: false,
    selectedPage: null,
  }),
  methods: {
    ...mapActions([""]),
    ...mapMutations(["changeSidebarA", "changeSidebarM"]),
    findPage(name) {
      this.portfolioss.selectedPage =
        this.pages.find((page) => page.name === name) || {};
    },
  },
  watch: {
    tab(newValue) {
      // Met à jour l'affichage de la page quand l'onglet sélectionné change
      this.$router.push({ name: "portfolio", params: { page: newValue } });
    },
  },
  created() {
    this.portfolioss.selectedPage = this.pages[0];
  },
};
</script>

<template>
  <v-row
    no-gutters
    @mouseover="showButton = true"
    @mouseleave="showButton = false"
  >
    <v-toolbar
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
                v-for="(item, index) in pages"
                :key="index"
                :value="item.name"
                class="text-decoration-none"
                style="font-weight: 600"
                color="blue"
                @click="findPage(item)"
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

      <v-col cols="auto" class="d-flex">
        <v-tab
          :to="this.pages[0].name"
          @click="findPage(this.pages[0].name)"
          class="text-none"
          :style="{
            fontFamily: portfolio.navbar.selectPolice,
            'font-size': portfolio.navbar.sizeTitle + 'px',
          }"
        >
          <v-avatar
            v-if="portfolio.logo.logo"
            class="me-4 mt-1"
            :color="portfolio.logo.colorChoix"
            :rounded="!portfolio.logo.logoArr"
            :size="portfolio.logo.sizeLogo"
          >
            <v-img
              :src="portfolio.logo.image ? portfolio.logo.lineImage : null"
              cover
            ></v-img>
          </v-avatar>
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
        </v-tab>
      </v-col>

      <v-spacer></v-spacer>
      <v-tabs v-model="tab" class="pe-3 hidden-md-and-down" height="60">
        <v-tab
          v-for="(item, index) in pages"
          :key="index"
          :value="item.name"
          :hide-slider="portfolio.links.hideSlider"
          :style="{
            'font-weight': 600,
            fontFamily: portfolio.links.selectPolice,
          }"
          class="text-none"
          :color="portfolio.links.colorLink"
          @click="findPage(item.name)"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
      <v-btn
        v-if="showButton"
        color="grey-darken-2"
        elevation="10"
        icon
        class="animation text-none bg-white"
        @click="portfolio.sideBarM = !portfolio.sideBarM"
      >
        <v-icon>mdi-pencil</v-icon>
        <v-tooltip activator="parent" location="bottom">Modifier</v-tooltip>
      </v-btn>
    </v-toolbar>
    <v-row style="height: 0" justify="center">
      <v-btn
        v-if="showButton"
        color="white"
        class="animation bg-blue text-none rounded-pill"
        prepend-icon="mdi-plus"
        @click="
          (portfolio.dialogA = !portfolio.dialogA) &&
            (portfolio.isnavbar = true)
        "
        style="z-index: 3"
      >
        Ajouter un bloc
      </v-btn>
      <DialogAjouter />
    </v-row>
  </v-row>
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
  .animation {
    animation: fadeIn 0.6s;
  }
}
</style>

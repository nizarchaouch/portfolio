<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";
import LTN from "./bloc/navbar/LTN.vue";
import NTL from "./bloc/navbar/NTL.vue";
import CardText from "./bloc/entete/CardText.vue";
import ITTB from "./bloc/apropos/ITTB.vue";
import TTBI from "./bloc/apropos/TTBI.vue";
export default {
  components: {
    CardText,
    LTN,
    NTL,
    ITTB,
    TTBI,
  },
  computed: {
    ...mapState(["portfolio", "portfolioss"]),
    selectedPage() {
      return this.portfolioss.selectedPage;
    },
    navbar() {
      return this.portfolioss.portfolios.navbar;
    },
    pages() {
      return this.portfolioss.portfolios.pages;
    },
  },
  data: () => ({}),
  methods: {
    ...mapActions([""]),
    ...mapMutations([""]),
  },
  created() {
    this.portfolioss.selectedPage = this.pages[0];
  },
};
</script>

<template>
  <component :is="navbar.type" />
  <div v-for="(bloc, index) in selectedPage.bloc" :key="index">
    <component :is="bloc.type" :id="bloc.id"/>
  </div>
  <!-- {{ pages[0].bloc }} -->
  <!-- {{selectedPage.id }} id page -->
  <!-- <div v-if="portfolio.selectedPage">
    <div>
      {{ portfolioss.selectedPage.bloc }}
    </div>
  </div> -->
  <!-- <LTN /> -->
  <!-- <NTL /> -->
  <!-- <CardText /> -->
  <!-- <TTBI />
  <ITTB /> -->
</template>

<style lang="scss" scoped></style>

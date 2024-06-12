<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["portfolio"]),
  },
  data: () => ({
    tab: null,
    selectedPage: null,
  }),
  methods: {
    ...mapActions(["getPageById"]),
    ...mapMutations(["changeSidebar"]),
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
    // await this.userAuth();
    this.selectedPage = this.portfolio.pages[0];
  },
};
</script>

<template>
  <v-btn color="success">text</v-btn>
  <v-toolbar
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    color="red"
  >
    <v-app-bar-nav-icon
      @click="changeSidebar"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>

    <v-col cols="auto" class="d-flex" >
      <v-avatar color="grey" rounded="" size="60">
        <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFARC1fuCzw9lIUrY4ZS69QUrSzDi11gKPczV38dtl3ezCQeqjhB6FKd1IXBGULNYzFM&usqp=CAU"
          cover
        ></v-img>
      </v-avatar>
      <v-tab>Nizar chaouch</v-tab>
    </v-col>

    <v-spacer></v-spacer>

    <v-tabs v-model="tab" class="pe-3" height="60">
      <v-tab
        v-for="(item, index) in portfolio.linkNav"
        :key="index"
        :value="item"
        class="text-none text-decoration-none text-white"
        style="font-weight: 600"
        @click="findPageById(item)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
  </v-toolbar>
  <div v-if="selectedPage">
    <div>
      {{ selectedPage.bloc }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-toolbar{
  &:hover {
    border: 2px solid red;
  }
}
</style>

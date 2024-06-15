<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState([ "portfolio"]),
  },
  data: () => ({}),
  methods: {
    ...mapMutations(["changeSidebarA"]),
  },
};
</script>

<template>
  <v-layout>
    <v-navigation-drawer
      temporary
      location="right"
      elevation="10"
      permanent
      width="480"
      v-model="portfolio.sideBarA"
      class="animation"
    >
      <!-- <v-container> -->
      <v-row class="mt-15 pa-3 bg-indigo" no-gutters>
        <v-col class="animation d-flex">
          <p class="mt-3 font-weight-bold">Ajouter Bloc</p>
          <v-btn
            variant="text"
            class="text-none ms-auto"
            icon="mdi-window-close"
            @click="changeSidebarA"
          ></v-btn>
        </v-col>
      </v-row>
      <!-- </v-container> -->
       
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped>
@keyframes open {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animation {
  animation: open 0.6s ease-out;
}
</style>

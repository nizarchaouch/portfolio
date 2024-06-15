<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState([ "portfolio"]),
  },
  data: () => ({}),
  methods: {
    ...mapMutations(["changeSidebarB"]),
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
      v-model="portfolio.sideBarB"
    >
      <v-row class="mt-15 pa-3 bg-indigo" no-gutters>
        <v-col class="animation d-flex">
          <p class="mt-3 font-weight-bold">Modification rapide</p>
          <v-btn
            variant="text"
            class="text-none ms-auto"
            icon="mdi-window-close"
            @click="changeSidebarB"
          ></v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped></style>

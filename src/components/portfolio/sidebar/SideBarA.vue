<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["portfolio"]),
  },
  data: () => ({
    tab: 1,
  }),
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
      <v-card class="mt-14" flat>
        <v-toolbar color="indigo" class="px-2">
          <v-toolbar-title class="font-weight-bold">
            Ajouter Bloc
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            class="text-none ms-auto"
            icon="mdi-window-close"
            @click="changeSidebarA"
          ></v-btn>
        </v-toolbar>

        <div class="d-flex flex-row">
          <v-tabs v-model="tab" color="primary" direction="vertical">
            <v-tab
              class="text-none font-weight-bold"
              text="En-tête"
              :value="1"
            ></v-tab>
            <v-tab
              class="text-none font-weight-bold"
              text="À propos"
              :value="2"
            ></v-tab>
            <v-tab
              class="text-none font-weight-bold"
              text="liste"
              :value="3"
            ></v-tab>
          </v-tabs>

          <v-window v-model="tab">
            <v-window-item :value="1">
              <v-card class="mx-auto text-white pa-2" link max-width="400">
                <v-img
                  class="mb-2"
                  :width="400"
                  aspect-ratio="16/9"
                  cover
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&s"
                >
                </v-img>
              </v-card>
              <v-card class="mx-auto text-white pa-2" link max-width="400">
                <v-img
                  class="mb-2"
                  :width="400"
                  aspect-ratio="16/9"
                  cover
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&s"
                >
                </v-img>
              </v-card>
            </v-window-item>
            <v-window-item :value="2">
              <v-card
                class="mx-auto text-white pa-2"
                color="#26c6da"
                max-width="400"
              >
                <v-img
                  width="500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&s"
                >
                </v-img>
              </v-card>
            </v-window-item>
            <v-window-item :value="3"> cc </v-window-item>
          </v-window>
        </div>
      </v-card>
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
.v-img{
  &:hover{
    border: 3px solid blue;
  }
}
</style>

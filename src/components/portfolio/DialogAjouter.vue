<script>
/* eslint-disable */
import { mapState, mapActions } from "vuex";
import TTBI from "./bloc/entete/TTBI.vue";
import ITTB from "./bloc/entete/ITTB.vue";
import CardText from "./bloc/entete/CardText.vue";
export default {
  components: {
    TTBI,
    ITTB,
    CardText,
  },
  computed: {
    ...mapState(["portfolio", "portfolioss"]),
  },
  data: () => ({
    tab: 1,
    entete: ["TTBI", "ITTB", "CardText"],
  }),
  methods: {
    ...mapActions(["addBloc", "addBlocNav"]),
    onClickAddBloc(type) {
      if (this.portfolio.isnavbar) {
        this.addBlocNav({
          pageIndex: this.portfolioss.selectedPage.id,
          blocIndex: 0,
          type: type,
        });
        this.portfolio.isnavbar = false;
        this.portfolio.dialogA = false;
      } else {
        this.addBloc({
          pageIndex: this.portfolioss.selectedPage.id,
          blocIndex: this.portfolio.blocindex,
          type: type,
        });
        this.portfolio.dialogA = false;
      }
    },
  },
};
</script>
<template>
  <div>
    <v-dialog v-model="portfolio.dialogA" max-width="1600" max-height="800">
      <v-card class="mt-14 rounded-lg">
        <v-toolbar class="px-2">
          <v-toolbar-title class="font-weight-bold">
            Ajouter Bloc
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            class="text-none ms-auto"
            icon="mdi-window-close"
            @click="portfolio.dialogA = false"
          ></v-btn>
        </v-toolbar>
        <v-divider class="border-opacity-25"></v-divider>

        <div class="d-flex flex-row">
          <v-tabs
            v-model="tab"
            color="primary"
            direction="vertical"
            style="width: 200px"
          >
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
          <v-divider vertical class="border-opacity-25"></v-divider>

          <v-window v-model="tab">
            <v-window-item :value="1">
              <v-row no-gutters>
                <v-col
                  v-for="(bloc, index) in entete"
                  :key="index"
                  cols="12"
                  @click="onClickAddBloc(bloc)"
                  class="pa-16 pt-3 cursor-pointer"
                >
                 <component :is="bloc"></component>
                </v-col>
              </v-row>
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
    </v-dialog>
  </div>
</template>

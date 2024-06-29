<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  props: { id: Number },
  computed: {
    ...mapState(["portfolio", "portfolioss"]),
  },
  data: () => ({
    tab: null,
    showButton: false,
  }),
  methods: {
    ...mapActions(["delBloc"]),
    ...mapMutations(["changeSidebarA", "changeSidebarM"]),
    onClickDeltBloc() {
      this.delBloc({
        pageIndex: this.portfolioss.selectedPage.id,
        blocIndex: this.id,
      });
    },
  },
};
</script>

<template>
  <v-row
    no-gutters
    @mouseover="showButton = true"
    @mouseleave="showButton = false"
  >
    <v-row style="height: 0" v-if="!portfolio.dialogA">
      <v-btn
        v-if="showButton"
        color="white"
        prepend-icon="mdi-auto-fix"
        class="animation text-none ms-6 mt-5"
        @click="handleAddBlock"
        style="z-index: 3"
      >
        Modifier le desgin
      </v-btn>
      <v-card
        v-if="showButton"
        class="animation ms-sm-auto me-6 mt-5 pa-2 ms-6"
        flat
        elevation="2"
        style="z-index: 3"
      >
        <v-btn
          border
          color="white"
          prepend-icon="mdi-pencil"
          class="text-none"
          elevation="0"
          @click="handleModBlock"
        >
          Modifier le bloc
        </v-btn>
        <v-card class="pa-2 my-1 d-flex justify-space-between" flat border>
          <v-btn variant="text" size="40">
            <v-icon>mdi-content-copy</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >Dupliquer</v-tooltip
            >
          </v-btn>
          <v-btn variant="text" size="40">
            <v-icon>mdi-arrow-up</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >Déplacer vers le haut</v-tooltip
            >
          </v-btn>
          <v-btn variant="text" size="40">
            <v-icon>mdi-arrow-down</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >Déplacer vers le bas</v-tooltip
            >
          </v-btn>
        </v-card>
        <v-btn
          border
          color="white"
          prepend-icon="mdi-trash-can-outline"
          class="text-none text-red"
          elevation="0"
          @click="onClickDeltBloc"
        >
          Supprimer bloc
        </v-btn>
      </v-card>
    </v-row>
    <v-row no-gutters class="bloc">
      <v-parallax
        src="https://as1.ftcdn.net/v2/jpg/06/49/83/90/1000_F_649839048_MYPNu95Aq3fmKI7JK8GoNucX3DYTc1KZ.jpg"
        color=""
        max-height="760"
        min-height="400"
      >
        <div class="d-flex flex-column fill-height justify-center align-center">
          <v-col
            cols="12"
            md="6"
            lg="5"
            class="d-flex flex-column justify-center align-center text-white"
          >
            <h1 class="text-md-h2 font-weight-thin mb-4">Nos clients</h1>
            <h4 class="subheading text-justify mb-4">
              Non occaecat culpa aliquip duis sunt amet qui pariatur quis ut.
              Officia sit adipisicing proident aute veniam veniam. Irure officia
              esse eu quis mollit consectetur aliqua anim nisi et labore do.
              Incididunt ea consequat duis officia commodo fugiat non. Occaecat
              ea velit esse tempor veniam laborum.
            </h4>
            <v-btn color="success" class="text-none">En savoir plus</v-btn>
          </v-col>
        </div>
      </v-parallax>
    </v-row>
    <v-row style="height: 0" justify="center" v-if="!portfolio.dialogA">
      <v-btn
        v-if="showButton"
        color="white"
        prepend-icon="mdi-plus"
        class="animation text-none bg-blue rounded-pill"
        @click="
          (portfolio.dialogA = !portfolio.dialogA) && (portfolio.blocindex = id)
        "
        style="z-index: 3; bottom: 30px"
      >
        Ajouter un bloc
      </v-btn>
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
.animation {
  animation: fadeIn 0.6s;
}
.bloc {
  &:hover {
    border: 2px solid blue;
  }
}
</style>

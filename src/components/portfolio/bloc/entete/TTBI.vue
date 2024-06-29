<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  props: { id: Number },
  computed: {
    ...mapState(["portfolio","portfolioss"]),
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
          <v-btn variant="text" size="40" icon="mdi-content-copy"></v-btn>
          <v-btn variant="text" size="40" icon="mdi-arrow-up"></v-btn>
          <v-btn variant="text" size="40" icon="mdi-arrow-down"></v-btn>
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
    <v-row no-gutters class="bloc" style="background-color: white">
      <v-col cols="12" md="6">
        <v-img
          max-height="760"
          min-height="400"
          cover
          src="https://picsum.photos/500/300?image=232"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex flex-column fill-height justify-center align-center">
          <v-col
            cols="12"
            md="10"
            class="d-flex flex-column justify-center align-center text-black"
          >
            <p class="text-h2 mb-4">Notre Projeta</p>
            <p class="text-justify mb-4">
              Non occaecat culpa aliquip duis sunt amet qui pariatur quis ut.
              Officia sit adipisicing proident aute veniam veniam. Irure officia
              esse eu quis mollit consectetur aliqua anim nisi et labore do.
              Incididunt ea consequat duis officia commodo fugiat non. Occaecat
              ea velit esse tempor veniam laborum.
            </p>
            <v-btn color="success" class="text-none">En savoir plus</v-btn>
          </v-col>
        </div>
      </v-col>
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
.addBloc {
  border: 2px dashed gray;
}
.bloc {
  &:hover {
    border: 2px solid blue;
  }
}
.animation {
  animation: fadeIn 0.6s;
}

@media screen and (max-width: 600px) {
  .btn {
    z-index: 3;
    bottom: 20px;
    left: 7%;
  }
}
</style>

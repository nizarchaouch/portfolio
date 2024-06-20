<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["portfolio"]),
  },
  data: () => ({
    tab: null,
    showButton: false,
    showBloc: false,
  }),
  methods: {
    ...mapActions([""]),
    ...mapMutations(["changeSidebarA", "changeSidebarM"]),
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
};
</script>

<template>
  <v-row
    no-gutters
    @mouseover="showButton = true"
    @mouseleave="showButton = false"
    class="bloc"
    style="background-color: white"
  >
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
            Incididunt ea consequat duis officia commodo fugiat non. Occaecat ea
            velit esse tempor veniam laborum.
          </p>
          <v-btn color="success" class="text-none">En savoir plus</v-btn>
        </v-col>
      </div>
    </v-col>
    <div style="height: 0">
      <v-btn
        v-if="showButton"
        color="white"
        prepend-icon="mdi-plus"
        class="btn animation position-relative text-none bg-blue"
        @click="handleAddBlock"
      >
        Ajouter un bloc
      </v-btn>
      <v-btn
        v-if="showButton"
        color="white"
        prepend-icon="mdi-pencil"
        class="btn animation position-relative text-none bg-grey ms-4"
        @click="handleModBlock"
      >
        Modifier
      </v-btn>
    </div>
  </v-row>
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
  .animation {
    animation: fadeIn 0.6s;
  }
}
.btn {
  z-index: 3;
  bottom: 20px;
  left: 230%;
}

@media screen and (max-width: 600px) {
  .btn {
    z-index: 3;
    bottom: 20px;
    left: 7%;
  }
}
</style>

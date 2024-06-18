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
    class="bloc"
    @mouseover="showButton = true"
    @mouseleave="showButton = false"
  >
    <v-parallax
      src="https://as1.ftcdn.net/v2/jpg/06/49/83/90/1000_F_649839048_MYPNu95Aq3fmKI7JK8GoNucX3DYTc1KZ.jpg"
      color=""
      max-height="760"
      min-height="400"
    >
      <div
        class="d-flex flex-column fill-height justify-center align-center"
      >
        <v-col cols="12" md="6" lg="5" class=" d-flex flex-column justify-center align-center text-white">
          <h1 class="text-md-h2 font-weight-thin mb-4">Nos clients</h1>
          <h4 class="subheading text-justify mb-4">
            Non occaecat culpa aliquip duis sunt amet qui pariatur quis ut.
            Officia sit adipisicing proident aute veniam veniam. Irure officia
            esse eu quis mollit consectetur aliqua anim nisi et labore do.
            Incididunt ea consequat duis officia commodo fugiat non. Occaecat ea
            velit esse tempor veniam laborum.
          </h4>
          <v-btn color="success" class="text-none">En savoir plus</v-btn>
        </v-col>
      </div>
    </v-parallax>
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
  .btn {
    bottom: 13px;
    left: 40%;
  }
  
  .animation {
    animation: fadeIn 0.6s;
  }
  @media screen and (max-width: 600px) {
    .btn {
      bottom: 13px;
      left: 7%;
    }
  }
}
</style>

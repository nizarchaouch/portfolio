<script>
import { mapState, mapActions } from "vuex";
import NavBar from "@/components/public/NavBar.vue";
export default {
  name: "candidatures",
  computed: {
    ...mapState(["user", "candidat"]),
    data() {
      return {};
    },
  },

  components: {
    NavBar,
  },

  methods: {
    ...mapActions(["userAuth", "updated"]),
  },
  mounted() {
    this.userAuth();
  },
};
</script>
<template>
  <NavBar />
  <!-- Candidatures envoyées -->
  <v-container class="mt-16">
    <v-row>
      <v-col cols="12" sm="12" md="10" xl="8" class="mx-auto">
        <h1>Candidatures envoyées</h1>
        <span
          >Vos candidatures envoyées à l'aide de la fonctionnalité postuler sont
          répertoriées ici.</span
        >
      </v-col>
    </v-row>
  </v-container>

</template>

<style lang="scss" scoped></style>

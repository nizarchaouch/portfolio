<script>
import Candidat from "@/components/auth/signupModel/SignupCandidat.vue";
import Recruteur from "@/components/auth/signupModel/SignupRecruteur.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Candidat,
    Recruteur,
  },
  data: () => ({
    tab: 2,
  }),
  computed: {
    ...mapState([ "user"]),
  },
  methods: {
    ...mapActions(["userAuth"]),
  },
  mounted() {
    this.userAuth();
  },
};
</script>
<template>
  <template v-if="this.user.authenticated">
    {{ this.$router.push("/") }}
  </template>
  <v-card class="mx-auto mt-16" max-width="700">
    <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
      <v-tab :value="1"
        >Candidat
        <v-tooltip activator="parent" location="top"
          >Choisissez le type de compte</v-tooltip
        >
      </v-tab>
      <v-tab :value="2"
        >Recruteur
        <v-tooltip activator="parent" location="top"
          >Choisissez le type de compte</v-tooltip
        >
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item :value="1"> <Candidat /> </v-window-item>
    </v-window>
    <v-window v-model="tab">
      <v-window-item :value="2"> <Recruteur /> </v-window-item>
    </v-window>
  </v-card>
</template>

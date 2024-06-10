<script>
import Candidat from "@/components/auth/signupModel/SignupCandidat.vue";
import Recruteur from "@/components/auth/signupModel/SignupRecruteur.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "signup",
  components: {
    Candidat,
    Recruteur,
  },
  data: () => ({
    tab: 1,
  }),
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["userAuth"]),
    goBack() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    await this.userAuth();
    if (this.user.authenticated && this.user.userData.role === "recruteur") {
      this.$router.push("/dashboard");
    }
    if (this.user.authenticated && this.user.userData.role === "candidat") {
      this.$router.push("/profil");
    }
  },
};
</script>
<template>
  <div class="body h-screen w-100">
    <v-btn
      color="white"
      rounded="xl"
      icon="mdi-arrow-left"
      class="ma-3"
      @click="goBack()"
    ></v-btn>
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
        <v-window-item :value="2"> <Recruteur /> </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>
<style lang="scss">
.body {
  background-image: linear-gradient(45deg, #d2001a, #7462ff, #f84e21, #23d5ab);
  background-size: 300% 300%;
  animation: color 12s ease-in-out infinite;
  @keyframes color {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
}
</style>

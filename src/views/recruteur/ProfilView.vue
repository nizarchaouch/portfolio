<script>
import NavBar from "@/components/public/NavBar.vue";
import SideBar from "@/components/user/recruteur/SideBar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { NavBar, SideBar },
  computed: {
    ...mapState(["user"]),
    userData() {
      return this.user.userData;
    },
  },
  data() {
    return {
      drawer: true,
    };
  },
  methods: { ...mapActions(["userAuth"]) },
  mounted() {
    this.userAuth();
    setTimeout(() => {
      if (
        this.user.authenticated === false ||
        this.user.userData.role === "candidat"
      ) {
        this.$router.push("login");
      }
    }, 2);
  },
};
</script>
<template>
  <NavBar />
  <SideBar />
  <v-container fluid>
    <v-row class="mt-16">
      <v-col cols="12" lg="10" xl="10" offset-lg="2">
        <v-row>
          <v-col cols="11">
            <h3>Détails de l'entreprise</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="7" class="mx-auto">
            <v-sheet :elevation="4" class="rounded-lg pa-8">
              <v-row>
                <v-col cols="auto">
                  <v-avatar
                    size="68"
                    rounded="0"
                    class="rounded-lg ms-4"
                    :image="'http://localhost:8000' + this.user.userData.logo"
                  >
                  </v-avatar>
                </v-col>
                <v-col cols="auto">
                  <p class="font-weight-bold text-h6">
                    {{ this.user.userData.nomEntreprise }}
                  </p>
                  <span class="text-subtitle-1 text-medium-emphasis">
                    {{ this.user.userData.secteur }}
                  </span>
                </v-col>
                <v-col cols="auto" class="ms-auto">
                  <v-btn
                    color="blue-darken-4"
                    class="text-none font-weight-bold mt-3"
                    size="large"
                    append-icon="mdi-arrow-right"
                    to="#"
                  >
                    Poster ouvert
                  </v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>

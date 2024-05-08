<script>
import NavBar from "@/components/public/NavBar.vue";
import SideBar from "@/components/user/recruteur/SideBar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { NavBar, SideBar },
  computed: { ...mapState(["user"]) },
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
  <v-container class=" bg-white" fluid>
    <v-row class="h-screen mt-16">
      <v-col cols="2">
        <SideBar />
      </v-col>
      <v-col cols="9">
        <v-row no-gutters>
          <v-col cols="12">
            <h3>Bonjour, Mr Chaouch Nizar</h3>
          </v-col>
          <v-col cols="12">
            <span
              >Voici vos activités quotidiennes et vos opportunités de
              carrière</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-sheet
              :height="105"
              :width="320"
              class="ma-3 rounded-lg mx-auto"
              color="#90c1f2b6"
              rounded
            >
              <v-container>
                <v-row>
                  <v-col cols="9">
                    <v-row>
                      <h2 class="ms-4 mt-4">76</h2>
                    </v-row>
                    <v-row>
                      <span class="ms-4 text-body-2 text-medium-emphasis"
                        >Offres d'emploi</span
                      >
                    </v-row>
                  </v-col>
                  <v-col cols="3">
                    <v-icon size="45" class="mt-3" color="blue"
                      >mdi-briefcase-variant-outline</v-icon
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet
              :height="105"
              :width="320"
              class="ma-3 rounded-lg mx-auto"
              color="#fdf1d7"
            >
              <v-container>
                <v-row>
                  <v-col cols="9">
                    <v-row>
                      <h2 class="ms-4 mt-4">76</h2>
                    </v-row>
                    <v-row>
                      <span class="ms-4 text-body-2 text-medium-emphasis"
                        >Candidats</span
                      >
                    </v-row>
                  </v-col>
                  <v-col cols="3">
                    <v-icon size="45" class="mt-3" color="orange"
                      >mdi-card-account-details-outline</v-icon
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet
              :height="105"
              :width="320"
              class="ma-3 rounded-lg mx-auto"
              color="#ffdbdb"
            >
              <v-container>
                <v-row>
                  <v-col cols="9">
                    <v-row>
                      <h2 class="ms-4 mt-4">76</h2>
                    </v-row>
                    <v-row>
                      <span class="ms-4 text-body-2 text-medium-emphasis"
                        >Candidats en attente</span
                      >
                    </v-row>
                  </v-col>
                  <v-col cols="3">
                    <v-icon size="45" class="mt-3" color="red"
                      >mdi-account-clock</v-icon
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>

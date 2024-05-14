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
      desserts: [
        {
          name: "laraval",
          date: "20/06/2024",
          applications: "4",
        },
        {
          name: "vue js",
          date: "20/06/2024",
          applications: "4",
        },
        {
          name: "react js",
          date: "20/06/2024",
          applications: "4",
        },
        {
          name: "node js",
          date: "20/06/2024",
          applications: "4",
        },
        {
          name: "web",
          date: "20/06/2024",
          applications: "4",
        },
      ],
    };
  },
  methods: { ...mapActions(["userAuth", "initializeChart"]) },
  mounted() {
    this.userAuth();
    this.initializeChart();
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
  <v-container class="bg-white" fluid>
    <v-row class="mt-16">
      <v-col cols="12" lg="9" xl="10" offset-lg="2">
        <v-row no-gutters>
          <v-col cols="12">
            <h3 class="text-capitalize">
              hello, {{ userData.civilite === "homme" ? "Mr" : "Ms" }}
              {{ userData.prenom + " " + userData.nom }}
            </h3>
          </v-col>
          <v-col cols="12">
            <span
              >Voici vos activités quotidiennes et vos opportunités de
              carrière</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-sheet
              :max-height="105"
              :max-width="320"
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
          <v-col cols="12" sm="6" md="4">
            <v-sheet
              :max-height="105"
              :max-width="320"
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
          <v-col cols="12" sm="6" md="4">
            <v-sheet
              :max-height="105"
              :max-width="320"
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
        <!-- charts -->
        <v-row class="mt-10">
          <v-col cols="8">
            <v-sheet class="rounded-lg pa-3 ma-3" rounded border>
              <h4>Graphique à barres</h4>
              <canvas
                id="myChart"
                style="width: 100%; max-height: 400px"
              ></canvas>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet
              :width="auto"
              class="rounded-lg mx-auto pa-3 ma-3"
              rounded
              border
            >
              <h4>Graphique à barres</h4>
              <canvas
                id="myChart2"
                style="max-width: 500px; max-height: 400px"
              ></canvas>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- tableau emploi -->
        <v-row class="d-flex justify-space-between px-4">
          <h4>Emplois récents</h4>
          <v-btn variant="plain" class="text-none" append-icon="mdi-arrow-right">Voir tout</v-btn>
        </v-row>
        <v-row class="mb-16">
          <v-col>
            <v-table>
              <thead>
                <tr class="bg-grey-lighten-2 rounded-pill">
                  <th class="text-left">Emploi</th>
                  <th class="text-left">Date de création</th>
                  <th class="text-left">Applications</th>
                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.applications }}</td>
                  <td><v-btn color="success">text</v-btn></td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.bgchart {
  background-color: rgba(128, 128, 128, 0.079);
}
</style>

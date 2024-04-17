<script>
import { mapState, mapActions } from "vuex";
import NavBar from "@/components/public/NavBar.vue";
export default {
  name: "candidatures",
  computed: {
    ...mapState(["user", "candidat"]),
  },
  data: () => ({
    items: [
      {
        title: " nizar",
        date: "2024-06-20",
        etat: "En Attend",
        reponse: "En Attend",
      },
      {
        title: " Conception et développement plateforme web generate portfolio",
        date: "2024-06-20",
        etat: "Accepte",
        reponse: "Accepte",
      },
      {
        title: " Conception et développement plateforme web generate portfolio",
        date: "2024-06-20",
        etat: "Refuser",
        reponse: "Refuser",
      },
      {
        title: " Conception et développement plateforme web generate portfolio",
        date: "2024-06-20",
        etat: "En Attend",
        reponse: "En Attend",
      },
    ],
    selectedEtat: "Tous",
    search: "",
  }),
  components: {
    NavBar,
  },

  methods: {
    ...mapActions(["userAuth", "updated"]),
    filterItems() {
      return this.items.filter((item) => {
        const matchEtat =
          this.selectedEtat === "Tous" || item.etat === this.selectedEtat;
        const matchSearch = item.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
        return matchEtat && matchSearch;
      });
    },
  },
  mounted() {
    this.userAuth();
    // setTimeout(() => {
    //   if (
    //     this.user.authenticated === false ||
    //     this.user.userData.role === "recruteur"
    //   ) {
    //     this.$router.push("login");
    //   }
    // }, 2);
  },
};
</script>
<template>
  <NavBar />
  <!-- Candidatures envoyées -->
  <v-container class="mt-16" fluid>
    <v-row>
      <v-col cols="12" sm="12" md="10" xl="8" class="mx-auto">
        <h1>Candidatures envoyées</h1>
        <span
          >Vos candidatures envoyées à l'aide de la fonctionnalité postuler sont
          répertoriées ici.</span
        >
      </v-col>
    </v-row>
    <!-- card candid -->
    <v-sheet
      height="auto"
      max-width="1250"
      class="mx-auto pa-1 mt-3"
      rounded="xl"
    >
      <v-row class="ma-6" justify="center">
        <v-col cols="12" sm="4">
          <!-- cherhcer -->
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Recherche"
            append-inner-icon="mdi-magnify"
            style="max-width: 300px; border: 1px solid blue"
            variant="solo"
            class="rounded-pill"
            rounded="xl"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="5">
          <v-select
            label="Etat"
            density="comfortable"
            :items="['Tous', 'En Attend', 'Accepte', 'Refuser']"
            v-model="selectedEtat"
            variant="outlined"
            style="max-width: 300px"
            class="ms-md-auto"
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-expansion-panels
            class="mb-6"
            v-for="(item, index) in filterItems()"
            :key="index"
          >
            <v-expansion-panel>
              <v-expansion-panel-title disable-icon-rotate>
                <v-avatar
                  image="data:image/png;base64,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"
                  class="me-2"
                ></v-avatar>
                <div>
                  <p>
                    {{ item.title }}
                  </p>
                  <br />
                  <p>{{ item.date }}</p>
                </div>
                <template v-slot:actions>
                  <v-chip
                    color=""
                    variant="outlined"
                    v-if="item.etat === 'En Attend'"
                  >
                    <v-icon icon="mdi-timer-sand-complete" start></v-icon>
                    {{ item.etat }}
                  </v-chip>
                  <v-chip
                    color="green"
                    variant="outlined"
                    v-else-if="item.etat === 'Accepte'"
                  >
                    <v-icon icon="mdi-check-circle" start></v-icon>
                    {{ item.etat }}
                  </v-chip>
                  <v-chip color="error" variant="outlined" v-else>
                    <v-icon icon="mdi-alert-circle" start></v-icon>
                    {{ item.etat }}
                  </v-chip>
                  <v-icon icon="mdi-menu-down" class="mt-1"> </v-icon>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<style lang="scss" scoped></style>

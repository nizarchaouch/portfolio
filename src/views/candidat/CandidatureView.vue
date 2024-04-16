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
  <v-container class="mt-16" fluid>
    <v-row>
      <v-col cols="12" sm="12" md="10" xl="8">
        <h1>Candidatures envoyées</h1>
        <span
          >Vos candidatures envoyées à l'aide de la fonctionnalité postuler sont
          répertoriées ici.</span
        >
      </v-col>
    </v-row>
    <!-- card candid -->

    <v-card class="mt-8 bg-transparent" border>
      <v-data-iterator :items="games" :items-per-page="10" :search="search">
        <template v-slot:header>
          <v-row class="ma-6">
            <v-col cols="12" sm="6">
              <v-tabs v-model="nav" color="deep-purple-accent-4">
                <v-tab class="bg-white tab text-none">Tous</v-tab>
                <v-tab class="bg-white tab text-none">En Attend</v-tab>
                <v-tab class="bg-white tab text-none">Accepte</v-tab>
                <v-tab class="bg-white tab text-none">Refuser</v-tab>
              </v-tabs>
              <!-- <v-select
                label="Choisir"
                :items="['Tous', 'En Attend', 'Accepte', 'Refuser']"
                variant="solo-filled"
                class=""
              ></v-select> -->
            </v-col>
            <v-col cols="12" sm="6">
              <!-- cherhcer -->
              <v-text-field
                v-model="search"
                density="comfortable"
                placeholder="Recherche"
                prepend-inner-icon="mdi-magnify"
                style="max-width: 300px"
                variant="solo"
                class="ms-auto"
                clearable
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </template>

        <template v-slot:default="{ items }">
          <v-container class="pa-2" fluid>
            <v-row dense>
              <v-col v-for="item in items" :key="item.title" cols="12" md="4">
                <v-hover v-slot="{ isHovering, props }">
                  <v-card class="mb-6" border flat v-bind="props">
                    <v-img :src="item.raw.img"></v-img>

                    <v-overlay
                      :model-value="isHovering"
                      class="align-center justify-center"
                      scrim
                      contained
                    >
                      <v-btn
                        variant="flat"
                        class="text-none d-flex align-center ma-2 rounded-pill"
                        size="large"
                        color="#5865f2"
                        >Modifier</v-btn
                      >
                      <v-btn
                        variant="outlined"
                        class="text-none d-flex align-center ma-2 ms-6 rounded-pill"
                        size="large"
                        color="white"
                        >Voir</v-btn
                      >
                    </v-overlay>
                  </v-card>
                </v-hover>

                <v-list-item class="mb-2">
                  <div>{{ item.raw.title }}</div>
                </v-list-item>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
          <div class="d-flex align-center justify-center pa-4">
            <v-btn
              :disabled="page === 1"
              density="comfortable"
              icon="mdi-arrow-left"
              variant="tonal"
              rounded
              @click="prevPage"
            ></v-btn>

            <div class="mx-2 text-caption">
              Page {{ page }} sur {{ pageCount }}
            </div>

            <v-btn
              :disabled="page >= pageCount"
              density="comfortable"
              icon="mdi-arrow-right"
              variant="tonal"
              rounded
              @click="nextPage"
            ></v-btn>
          </div>
        </template>
      </v-data-iterator>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.tab {
  border: 1px solid rgb(124, 124, 124);
  font-family: Georgia, Noto Sans, sans-serif;
  font-weight: 700;
}
</style>

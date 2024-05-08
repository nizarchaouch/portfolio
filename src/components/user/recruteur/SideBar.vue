<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
    userData() {
      return this.user.userData;
    },
  },
  data: () => ({
    itemsRec: [
      { text: "Aperçu", icon: "mdi-chart-bar", to: "dashboard" },
      { text: "Poster un emploi", icon: "mdi-plus-circle", to: "" },
      { text: "Mon Profil", icon: "mdi-account-circle", to: "" },
      { text: "Mes emplois", icon: "mdi-briefcase-variant", to: "" },
      { text: "Trouver candidats", icon: "mdi-account-search", to: "" },
      { text: "Paramétres", icon: "mdi-cog", to: "" },
    ],
  }),
};
</script>
<template>
  <v-layout>
    <v-navigation-drawer class="mt-16" elevation="10">
      <v-list-item align="center">
        <v-avatar
          :image="'http://localhost:8000' + userData.imagePath"
          size="100"
        >
        </v-avatar>
        <h3>{{ userData.nomEntreprise }}</h3>
        <p class="text-capitalize">
          <v-icon size="sm" class="mb-1">mdi-map-marker</v-icon>
          {{ userData.adress }}
        </p>
      </v-list-item>
      <v-divider></v-divider>
      <v-list lines="two">
        <v-list-item
          v-for="(item, i) in itemsRec"
          :key="i"
          :value="item"
          color="primary"
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<style lang="scss" scoped></style>

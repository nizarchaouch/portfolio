<script>
import { mapState, mapActions } from "vuex";
import TeleCv from "./TeleCv.vue";

export default {
  components: { TeleCv },
  computed: {
    ...mapState(["login", "user", "portfolio"]),
    portfolioFirstPageLink() {
      return this.portfolio.pages.length > 0
        ? `/portfolio/${this.portfolio.pages[0].id}`
        : "";
    },
    userData() {
      return this.user.userData;
    },
    itemsCand() {
      return [
        { text: "Mon Compte", icon: "mdi-account-settings", to: "/profil" },
        {
          text: "Mon Portfolio",
          icon: "mdi-star",
          to: this.portfolioFirstPageLink,
        },
        {
          text: "Mes Candidatures",
          icon: "mdi-invoice-text-send",
          to: "/candidature",
        },
      ];
    },
    itemsRec() {
      return [
        { text: "Tableau de bord", icon: "mdi-view-dashboard", to: "/dashboard" },
        { text: "Mes emplois", icon: "mdi-briefcase-variant", to: "/MesEmplois" },
        {
          text: "Poster un emploi",
          icon: "mdi-plus-circle",
          to: "/PosterEmploi",
        },
        { text: "Paramétres", icon: "mdi-cog", to: "/ParametreRec" },
      ];
    },
  },
  data: () => ({
    menu: false,
  }),
  methods: {
    ...mapActions(["Logout"]),
  },
};
</script>

<template>
  <div>
    <v-menu v-model="menu" min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" :ripple="false" variant="plain" icon>
          <v-avatar
            :image="'http://localhost:8000' + userData.imagePath"
            size="small"
          >
          </v-avatar>
          <v-icon color="black" class="mt-6">mdi-chevron-down</v-icon>
          <v-tooltip activator="parent" location="bottom">Menu</v-tooltip>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item
            :title="userData.nom + ' ' + userData.prenom"
            :subtitle="userData.mail"
          >
            <template v-slot:prepend>
              <v-avatar :image="'http://localhost:8000' + userData.imagePath">
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>

        <v-divider class="mb-3"></v-divider>

        <v-spacer></v-spacer>
        <!-- menu candidat -->
        <v-list
          density="compact"
          nav
          v-if="this.user.userData.role === 'candidat'"
        >
          <v-list-item
            v-for="(item, i) in itemsCand"
            :key="i"
            color="primary"
            :to="item.to"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>

          <!--  -->
          <v-list-item color="primary" link>
            <template v-slot:prepend>
              <v-icon icon="mdi-upload"></v-icon>
            </template>
            <TeleCv />
          </v-list-item>
        </v-list>
        <!-- menu recruteur -->
        <v-list density="compact" nav v-else>
          <v-list-item
            v-for="(item, i) in itemsRec"
            :key="i"
            color="primary"
            :to="item.to"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <!-- btn logout -->
          <v-btn
            color="red"
            variant="outlined"
            class="ms-3"
            @click="this.Logout()"
          >
            <template v-slot:append>
              <v-icon>mdi-logout</v-icon>
            </template>
            Déconnexion
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<style lang="scss"></style>

<script>
import logo from "@/assets/logo_text.png";
import Avatar from "@/components/user/avatar.vue";
import Notfi from "@/components/user/Notfi.vue";
export default {
  components: { Avatar, Notfi },
  data: () => ({
    logo: logo,
    nav: null,
    drawer: false,
    loading: false,
    toggle: "laptop",
  }),
};
</script>

<template>
  <v-layout>
    <v-app-bar elevation="1" height="55">
      <v-container fluid>
        <!-- logo -->
        <v-row class="justify-space-between" dense>
          <v-col cols="1" class="d-flex">
            <router-link to="/">
              <img :src="logo" alt="Logo" height="35" class="mt-1" />
              <v-tooltip activator="parent" location="end" v-if="!drawer"
                >Aller à la page d'accueil</v-tooltip
              >
            </router-link>
            <v-divider vertical class="border-opacity-25 mx-5"></v-divider>
              <v-tab to="/">accueil</v-tab>
              <v-tab to="template">templates</v-tab>
              <v-tab to="offer">Offres d'emploi</v-tab>
          </v-col>
          <!-- <v-btn-toggle mandatory color="deep-purple" v-model="toggle">
              <v-btn icon="mdi-laptop" value="laptop" ></v-btn>
            </v-btn-toggle>
            <v-btn-toggle mandatory color="deep-purple" v-model="toggle">
              <v-btn icon="mdi-cellphone" value="phone"></v-btn>
            </v-btn-toggle> -->
          <!-- avatar notif -->
          <v-col cols="3" class="d-flex flex-row-reverse">
            <Avatar />
            <Notfi />
            <v-divider vertical class="bo rder-opacity-25 mx-3"></v-divider>
            <!-- sauvegarder & aperçu -->
            <div>
              <v-btn
                color="#651FFF"
                variant="text"
                class="mt-2"
                @click="loading = !loading"
                >aperçu</v-btn
              >
              <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                color="deep-purple-accent-4"
              ></v-progress-linear>
            </div>
            <v-btn variant="text" class="mt-2 text-none" :loading="loading"
              >Sauvegarder</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      temporary
      location="left"
      elevation="2"
      permanent
      width="70"
    >
      <v-btn
        class="ma-4"
        color="#1976D2"
        size="small"
        variant="tonal"
        icon
        @click="drawer = !drawer"
      >
        <v-icon size="25">mdi-plus-circle</v-icon>
        <v-tooltip activator="parent" location="end" v-if="!drawer"
          >Ajouter des éléments</v-tooltip
        >
      </v-btn>
      <!--  -->
      <v-btn class="ma-4" color="#e55039" size="small" variant="tonal" icon>
        <v-icon size="23">mdi-text-box-multiple</v-icon>
        <v-tooltip activator="parent" location="end">Pages portfolio</v-tooltip>
      </v-btn>
      <!--  -->
      <v-btn class="ma-4" color="#f6b93b" size="small" variant="tonal" icon>
        <v-icon size="25">mdi-format-text</v-icon>
        <v-tooltip activator="parent" location="end"
          >Ajouter du texte</v-tooltip
        >
      </v-btn>
      <!--  -->
      <v-btn class="ma-4" color="#4a69bd" size="small" variant="tonal" icon>
        <v-icon size="25">mdi-image-area</v-icon>
        <v-tooltip activator="parent" location="end"
          >Ajouter une image</v-tooltip
        >
      </v-btn>
      <!--  -->
      <v-btn class="ma-4" color="#60a3bc" size="small" variant="tonal" icon>
        <v-icon size="23">mdi-button-cursor</v-icon>
        <v-tooltip activator="parent" location="end"
          >Ajouter un bouton</v-tooltip
        >
      </v-btn>
      <!--  -->
      <v-btn class="ma-4" color="#78e08f" size="small" variant="tonal" icon>
        <v-icon size="23">mdi-card-text</v-icon>
        <v-tooltip activator="parent" location="end"
          >Ajouter des boîtes de conteneur</v-tooltip
        >
      </v-btn>
      <!--  -->
      <v-btn class="ma-4" color="#38ada9" size="small" variant="tonal" icon>
        <v-icon size="23">mdi-minus-box-outline</v-icon>
        <v-tooltip activator="parent" location="end"
          >Ajouter des lignes</v-tooltip
        >
      </v-btn>
    </v-navigation-drawer>
    <v-navigation-drawer
      temporary
      location="left"
      elevation="10"
      permanent
      width="200"
      v-model="drawer"
    >
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped></style>

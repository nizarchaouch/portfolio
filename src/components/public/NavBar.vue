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
  }),
};
</script>

<template>
  <v-layout row wrap>
    <v-app-bar scroll-behavior="hide">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>
      <v-container fluid>
        <!-- logo -->
        <v-row class="justify-space-between">
          <v-col sm="4" md="3" lg="2" class="mt-3">
            <v-img :src="logo" alt="Logo" height="35"></v-img>
          </v-col>
          <!-- tab nav -->
          <v-col md="6" lg="6" class="hidden-sm-and-down">
            <v-tabs
              v-model="nav"
              align-tabs="start"
              color="deep-purple-accent-4"
            >
              <v-tab to="/">accueil</v-tab>
              <v-tab to="">templates</v-tab>
              <v-tab to="">Offres d'emploi</v-tab>
            </v-tabs>
          </v-col>

          <!-- btn login signup -->
          <template v-if="!this.$store.state.user.authenticated">
            <v-col
              xs="1"
              lg="3"
              class="d-flex flex-row d-flex justify-end mt-2"
            >
              <v-btn
                variant="elevated"
                class="text-none ma-1 body"
                rounded="xl"
                color="primary"
                to="login"
              >
                Se connecter
              </v-btn>
              <v-btn
                class="text-none text-subtitle-2 ma-1 pa-0 hidden-xs"
                rounded="xl"
                to="signup"
              >
                S'inscrire
              </v-btn>
            </v-col>
          </template>
          <!-- avatar notif -->
          <template v-else>
            <v-col
              cols="auto"
              xs="1"
              lg="3"
              class="d-flex flex-row-reverse mt-2"
            >
              <Avatar />
              <Notfi />
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-layout>
  <!-- nav drawer -->
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="top"
      elevation="10"
      permanent
    >
      <v-icon @click="drawer = !drawer" class="ma-3">mdi-close</v-icon>
      <v-list density="compact">
        <v-list-item title="accueil" to="/"> </v-list-item>
        <v-list-item title="templates" to=""></v-list-item>
        <v-list-item title="Offres d'emploi" to=""></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped>
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

<script>
import logo from "@/assets/logo_text.png";
import Avatar from "@/components/user/avatar.vue";
import Notfi from "@/components/user/Notfi.vue";
export default {
  components: { Avatar, Notfi },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<template>
  <v-layout row wrap>
    <v-app-bar scroll-behavior="hide">
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon>
      </template>
      <v-container fluid>
        <v-row class="justify-space-between">
          <v-col sm="4" md="3" lg="2" class="mt-2">
            <v-img :src="logo" alt="Logo" height="35"></v-img>
          </v-col>

          <template v-if="!this.$store.state.user.authenticated">
            <v-col xs="1" lg="3" class="d-flex flex-row d-flex justify-end">
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
          <template v-else>
            <v-col cols="auto" class="d-flex">
              <Notfi />
              <Avatar />
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-app-bar>
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

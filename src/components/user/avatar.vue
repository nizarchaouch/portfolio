<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["login", "user"]),
    userData() {
      return this.user.dataCand;
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
          <v-avatar :image="userData.imageUrl"> </v-avatar>
          <v-icon color="black" class="mt-6 bad">mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item
            :title="userData.nom + ' ' + userData.prenom"
            :subtitle="userData.mail"
          >
            <template v-slot:prepend>
              <v-avatar :image="userData.imageUrl"> </v-avatar>
            </template>
          </v-list-item>
        </v-list>

        <v-divider class="mb-3"></v-divider>

        <v-btn
          variant="text"
          rounded
          class="text-none"
          text="Mon Portfolio"
        ></v-btn>
        <v-divider class="mx-4 my-1"></v-divider>
        <v-btn
          variant="text"
          rounded
          class="text-none"
          text="Suivi de mes réponses"
        ></v-btn>
        <v-divider class="mx-4 my-1"></v-divider>
        <v-btn
          variant="text"
          rounded
          class="text-none"
          text="Mon Profil"
        ></v-btn>

        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->

          <!-- <v-btn variant="text" @click="menu = false"> Cancel </v-btn> -->
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

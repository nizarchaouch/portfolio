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
    items: [
      { text: "Mon Profil", icon: "mdi-folder" },
      { text: "Mon Portfolio", icon: "mdi-star" },
      { text: "Mes Candidatures", icon: "mdi-account-multiple" },
      { text: "Uploads CV", icon: "mdi-upload" },
    ],
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
              <v-avatar :image="userData.imageUrl"> </v-avatar>
            </template>
          </v-list-item>
        </v-list>

        <v-divider class="mb-3"></v-divider>

        <v-spacer></v-spacer>
        <v-list density="compact" nav>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <!--  -->
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

<script>
import { mapState, mapActions } from "vuex";
import NavBar from "@/components/public/NavBar.vue";
export default {
  name: "profil",
  computed: {
    ...mapState(["user"]),
  },
  data: () => ({
    items: [],
    items2: [],
  }),

  components: {
    NavBar,
  },

  methods: {
    ...mapActions(["userAuth"]),
  },
  mounted() {
    this.userAuth();

    this.items = [
      { label: "Nom", type: "", vmodel: this.user.dataCand.nom },
      { label: "Prénom", type: "", vmodel: this.user.dataCand.prenom },
      { label: "Téléphone", type: "number", vmodel: this.user.dataCand.tel },
      {
        label: "Date de Naissance",
        type: "date",
        vmodel: this.user.dataCand.dateNais,
      },
      {
        label: "Gouvernorat (Adress)",
        type: "",
        vmodel: this.user.dataCand.adress,
      },
    ];
    this.items2 = [
      { label: "LinkedIn", icon: "mdi-linkedin", vmodel: "" },
      { label: "Github", icon: "mdi-github", vmodel: "" },
      { label: "X(twitter)", icon: "mdi-twitter", vmodel: "" },
      { label: "Instagram", icon: "mdi-instagram", vmodel: "" },
    ];
  },
};
</script>
<template>
  {{ console.log("profil", this.user.dataCand.nom) }}
  <!-- <template v-if="!this.user.authenticated">
    {{ this.$router.push("/") }}
  </template> -->
  <NavBar />
  <!-- container info comptz -->
  <v-container class="mt-16">
    <v-row>
      <v-col cols="12" sm="12" md="10" xl="8" class="mx-auto">
        <h1>Paramètres du compte</h1>
        <span
          >Consultez et mettez à jour vos informations de compte, votre profil
          et bien plus.</span
        >
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="10" xl="8">
        <v-card class="pa-2 ma-2 mx-auto rounded" :loading="false">
          <h3>Informations du compte</h3>
          <v-divider class="border-opacity-25"></v-divider>
          <v-container class="d-flex flex-wrap">
            <!-- photo de profil -->
            <v-col cols="2">
              <label for="file">
                <v-img
                  class="mx-auto my-12"
                  width="150"
                  :src="this.user.dataCand.imageUrl"
                ></v-img>
              </label>
              <input type="file" id="file" class="d-none" />
            </v-col>
            <!-- item de profil -->
            <v-row class="mt-10">
              <v-col
                cols="12"
                sm="4"
                v-for="(item, i) in items.slice(0, 3)"
                :key="i"
              >
                <p class="text-subtitle-2 text-medium-emphasis">
                 {{item.label}}
                </p>
                <v-text-field
                  :type="item.type"
                  v-model="item.vmodel"
                  variant="outlined"
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                v-for="(item, i) in items.slice(3)"
                :key="i"
              >
                <p class="text-subtitle-2 text-medium-emphasis">
                 {{item.label}}
                </p>
                <v-text-field
                  :type="item.type"
                  v-model="item.vmodel"
                  variant="outlined"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- container info de connexion -->
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="5" xl="4">
        <v-card class="pa-2 ma-2 mx-auto rounded">
          <h3 class="d-inline">Informations de connexion</h3>
          <v-divider class="border-opacity-25"></v-divider>
          <v-container>
            <v-row>
              <v-col cols="10">
                <p class="text-subtitle-2 text-medium-emphasis">
                  E-mail du compte
                </p>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  readonly
                  v-model="this.user.dataCand.mail"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="10">
                <p class="text-subtitle-2 text-medium-emphasis">Mot de passe</p>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  readonly
                  value="Mot de passe"
                  type="password"
                >
                </v-text-field>
              </v-col>
              <v-col cols="2" class="mt-5">
                <v-btn color="primary" icon="mdi-form-textbox-password"></v-btn>
                <v-tooltip activator="parent" location="bottom"
                  >Modifier mot de passe</v-tooltip
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <!-- link social media -->
      <v-col cols="12" sm="12" md="5" xl="4">
        <v-card class="pa-2 ma-2 mx-auto rounded">
          <h3 class="d-inline">Lien des réseaux sociaux</h3>
          <v-divider class="border-opacity-25"></v-divider>
          <v-container>
            <v-row>
              <v-col cols="6" v-for="(item, i) in items2.slice(0, 2)" :key="i">
                <p class="text-subtitle-2 text-medium-emphasis">
                  {{ item.label }}
                </p>
                <v-text-field variant="outlined" density="compact">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" v-for="(item, i) in items2.slice(2)" :key="i">
                <p class="text-subtitle-2 text-medium-emphasis">
                  {{ item.label }}
                </p>
                <v-text-field variant="outlined" density="compact">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>

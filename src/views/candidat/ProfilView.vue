<script>
import { mapState, mapActions } from "vuex";
import NavBar from "@/components/public/NavBar.vue";
import DialogPwd from "./DialogPwd.vue";
export default {
  name: "profil",
  computed: {
    ...mapState(["user", "candidat"]),
    data() {
      return {
        id: this.user.userData._id,
        imageUrl: this.user.userData.imageUrl,
        nom: this.user.userData.nom,
        prenom: this.user.userData.prenom,
        dateNais: this.user.userData.dateNais
          ? this.user.userData.dateNais.split("T")[0]
          : "",
        tel: this.user.userData.tel,
        adress: this.user.userData.adress,
        urlfacebook: this.user.userData.urlfacebook,
        urllinkedin: this.user.userData.urllinkedin,
        urltwitter: this.user.userData.urltwitter,
        urlgithub: this.user.userData.urlgithub,
      };
    },
  },

  components: {
    NavBar,
    DialogPwd,
  },

  methods: {
    ...mapActions(["userAuth", "updated"]),
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.data.imageUrl = e.target.result;
          this.userAuth();
          this.updated(this.data);
          this.userAuth();
          console.log("URL de l'image:", this.data.imageUrl);
        };
        reader.readAsDataURL(file);
      }
    },

    updateValue(index, value) {
      this.data[index] = value;
      this.userAuth();
      this.updated(this.data);
      this.userAuth();
    },
  },
  mounted() {
    this.userAuth();
  },
};
</script>
<template>
  <NavBar />
  <!-- container info comptz -->
  <v-container class="mt-16">
    <v-snackbar
      :timeout="7000"
      color="blue-darken-2 mt-16"
      v-model="candidat.alert"
      location="top"
    >
      {{ candidat.message }}
    </v-snackbar>
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
        <v-card class="pa-2 ma-2 mx-auto rounded">
          <h3>Informations du compte</h3>
          <v-divider class="border-opacity-25"></v-divider>
          <v-container class="d-flex flex-wrap">
            <!-- photo de profil -->
            <v-col cols="12" xl="2">
              <label for="file">
                <v-img
                  class="mx-auto my-15 rounded-circle"
                  width="150"
                  :src="data.imageUrl"
                ></v-img>
              </label>
              <input
                type="file"
                id="file"
                class="d-none"
                @change="handleFileChange"
              />
            </v-col>
            <!-- item de profil -->
            <v-row class="mt-10">
              <v-col cols="12" sm="4">
                <p class="text-subtitle-2 text-medium-emphasis">Nom</p>
                <v-text-field
                  variant="outlined"
                  v-model="data.nom"
                  @change="updateValue('nom', $event.target.value)"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <p class="text-subtitle-2 text-medium-emphasis">Prenom</p>
                <v-text-field
                  variant="outlined"
                  v-model="data.prenom"
                  @change="updateValue('prenom', $event.target.value)"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <p class="text-subtitle-2 text-medium-emphasis">Telephone</p>
                <v-text-field
                  variant="outlined"
                  v-model="data.tel"
                  type="number"
                  @change="updateValue('tel', $event.target.value)"
                >
                </v-text-field>
              </v-col>

              <!-- aaa -->
              <v-col cols="12" sm="4">
                <p class="text-subtitle-2 text-medium-emphasis">
                  Date de Naissance
                </p>
                <v-text-field
                  type="date"
                  variant="outlined"
                  v-model="data.dateNais"
                  @change="updateValue('dateNais', $event.target.value)"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <p class="text-subtitle-2 text-medium-emphasis">
                  Gouvernorat (Adress)
                </p>
                <v-text-field
                  variant="outlined"
                  v-model="data.adress"
                  @change="updateValue('adress', $event.target.value)"
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
                  v-model="this.user.userData.mail"
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
                <DialogPwd />
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
              <v-col cols="6">
                <p class="text-subtitle-2 text-medium-emphasis">LinkedIn</p>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="data.urllinkedin"
                  @change="updateValue('urllinkedin', $event.target.value)"
                >
                  <v-icon>mdi-linkedin </v-icon>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <p class="text-subtitle-2 text-medium-emphasis">Github</p>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="data.urlgithub"
                  @change="updateValue('urlgithub', $event.target.value)"
                >
                  <v-icon>mdi-github </v-icon>
                </v-text-field>
              </v-col>
            </v-row>
            <!-- faccebook twitter -->
            <v-row>
              <v-col cols="6">
                <p class="text-subtitle-2 text-medium-emphasis">X(twitter)</p>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="data.urltwitter"
                  @change="updateValue('urltwitter', $event.target.value)"
                >
                  <v-icon>mdi-twitter </v-icon>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <p class="text-subtitle-2 text-medium-emphasis">Facebook</p>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="data.urlfacebook"
                  @change="updateValue('urlfacebook', $event.target.value)"
                >
                  <v-icon>mdi-facebook </v-icon>
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

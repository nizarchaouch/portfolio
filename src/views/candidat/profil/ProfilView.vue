<script>
/* eslint-disable */
import { mapState, mapActions } from "vuex";
import NavBar from "@/components/public/NavBar.vue";
import DialogPwd from "@/components/user/DialogPwd.vue";
export default {
  name: "profil",
  computed: {
    ...mapState(["user", "candidat"]),
    data() {
      return {
        id: this.user.userData._id,
        fileForUpload: null,
        imageUrl: "http://localhost:8000" + this.user.userData.imagePath,
        imagePath: "",
        nom: this.user.userData.nom,
        prenom: this.user.userData.prenom,
        dateNais: this.user.userData.dateNais
          ? this.user.userData.dateNais.split("T")[0]
          : "",
        tel: this.user.userData.tel,
        adress: this.user.userData.adress,
        titre_emploi: this.user.userData.titre_emploi,
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
      if (file && file.type.startsWith("image/")) {
        this.data.fileForUpload = file;
        this.updated(this.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        alert("Veuillez sélectionner un fichier image.");
      }
    },

    updateValue(index, value) {
      this.data[index] = value;
      this.updated(this.data);
      setTimeout(() => {
        this.userAuth();
      }, 10);
    },
  },
  mounted() {
    this.userAuth();
    setTimeout(() => {
      if (
        this.user.authenticated === false ||
        this.user.userData.role === "recruteur"
      ) {
        this.$router.push("login");
      }
    }, 2);
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
      <v-col cols="12" sm="12" md="10" xl="8" class="pa-5 ma-3 ms-8">
        <h1 class="title">Mon Profil</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="9" md="5" xl="3">
        <v-card class="pa-3 ma-3" rounded="xl">
          <!-- image profil -->
          <v-col cols="auto" class="d-flex justify-center">
            <label for="image" class="cursor-pointer">
              <v-tooltip text="Click pour change l'image" location="top">
                <template v-slot:activator="{ props }">
                  <v-badge
                    v-bind="props"
                    color="blue"
                    icon="mdi-image-edit-outline"
                    offset-x="-16"
                    offset-y="12"
                  ></v-badge>
                </template>
              </v-tooltip>
              <v-img
                class="rounded-circle"
                style="border: 2px solid blue"
                width="120"
                :src="data.imageUrl"
              ></v-img>
            </label>
            <input
              type="file"
              id="image"
              class="d-none"
              accept="image/*"
              @change="handleFileChange"
            />
          </v-col>
          <!-- nom & prenom -->
          <v-col cols="auto">
            <h3 class="text-capitalize text-center">
              bienvenue, {{ data.prenom }} {{ data.nom }}
            </h3>
            <h3 class="text-capitalize text-center font-weight-thin">
              {{ data.titre_emploi }}
            </h3>
          </v-col>
          <!--   -->
          <v-col cols="auto" class="ms-3">
            <p class="mt-4 text-capitalize">
              <v-icon>mdi-email-outline</v-icon> {{ this.user.userData.mail }}
            </p>
            <p class="mt-4 text-capitalize">
              <v-icon>mdi-calendar-range</v-icon> {{ data.dateNais }}
            </p>
            <p class="mt-4 text-capitalize">
              <v-icon>mdi-phone-outline</v-icon> +216 {{ data.tel }}
            </p>
            <p class="mt-4 text-capitalize">
              <v-icon>mdi-map-marker</v-icon> {{ data.adress }}
            </p>
            <p class="mt-4 text-capitalize" v-if="data.urlgithub">
              <v-icon>mdi-github</v-icon>
              <a :href="'https://' + data.urlgithub" target="_blank">
                {{ data.urlgithub }}</a
              >
            </p>
            <p class="mt-4 text-capitalize" v-if="data.urllinkedin">
              <v-icon>mdi-linkedin</v-icon>
              <a :href="'https://' + data.urllinkedin" target="_blank">
                {{ data.urllinkedin }}</a
              >
            </p>
            <p class="mt-4 text-capitalize" v-if="data.urltwitter">
              <v-icon>mdi-twitter</v-icon>
              <a :href="'https://' + data.urltwitter" target="_blank">
                {{ data.urltwitter }}</a
              >
            </p>
            <p class="mt-4 text-capitalize" v-if="data.urlfacebook">
              <v-icon>mdi-facebook</v-icon>
              <a :href="'https://' + data.urlfacebook" target="_blank">
                {{ data.urlfacebook }}</a
              >
            </p>
          </v-col>
        </v-card>
      </v-col>
      <!-- card modifier -->
      <v-col cols="12" sm="12" md="7" xl="8">
        <v-card class="pa-6 ma-3" rounded="xl">
          <v-row>
            <v-col cols="9" md="10" xl="11">
              <h1>Paramètres du compte</h1>
              <span
                >Consultez et mettez à jour vos informations de compte, votre
                profil et bien plus.</span
              >
            </v-col>
            <v-col cols="3" md="2" xl="1">
              <DialogPwd />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="4">
              <p class="text-subtitle-2 text-medium-emphasis">Nom</p>
              <v-text-field
                variant="solo-inverted"
                v-model="data.nom"
                @change="updateValue('nom', $event.target.value)"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-subtitle-2 text-medium-emphasis">Prenom</p>
              <v-text-field
                variant="solo-inverted"
                v-model="data.prenom"
                @change="updateValue('prenom', $event.target.value)"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-subtitle-2 text-medium-emphasis">Telephone</p>
              <v-text-field
                variant="solo-inverted"
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
                variant="solo-inverted"
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
                variant="solo-inverted"
                v-model="data.adress"
                @change="updateValue('adress', $event.target.value)"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-subtitle-2 text-medium-emphasis">
                Titre d'emploi
                <v-tooltip text="Votre poste actuel ou profession">
                  <template v-slot:activator="{ props }">
                    <v-icon v-bind="props">mdi-alert-circle</v-icon>
                  </template>
                </v-tooltip>
              </p>
              <v-text-field
                variant="solo-inverted"
                v-model="data.titre_emploi"
                @change="updateValue('titre_emploi', $event.target.value)"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <!-- social profil -->
          <v-row>
            <h3 class="d-inline">Profil Social</h3>
            <v-divider class="border-opacity-25"></v-divider>
            <v-col cols="12" sm="6">
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
            <v-col cols="12" sm="6">
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
          <!-- twitter facebook -->
          <v-row>
            <v-col cols="12" sm="6">
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
            <v-col cols="12" sm="6">
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.title::before {
  content: " ";
  background-color: #233eae;
  width: 6px;
  height: 30px;
  position: absolute;
  left: 5%;
  top: 110px;
  border-radius: 15px;
}
</style>

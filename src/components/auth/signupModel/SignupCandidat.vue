<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    form: false,
    visible: false,
    loading: false,
    passwordcheck: "",
    data: {
      imageUrl: "https://shorter.me/pW1kn",
      nom: "",
      prenom: "",
      dateNais: null,
      tel: null,
      civilite: "",
      adress: "",
      mail: "",
      password: "",
    },
    rules: {
      required: (value) => !!value || "Champ requis.",
      counter: (value) => value.length > 7 || "Minimum 8 caractères",
      mail: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Email invalide.";
      },
      tel: (value) => {
        const pattern = /^[7839452]{1}[0-9]{7}$/;
        return pattern.test(value) || "Numéro invalide.";
      },
      passwordMatch: (value, otherValue) => {
        return (
          value === otherValue || "Les mots de passe ne correspondent pas."
        );
      },
    },
  }),

  computed: {
    ...mapState(["signup"]),

    currentTitle() {
      switch (this.signup.step) {
        case 1:
          return "S'inscrire";
        case 2:
          return "Créer un mot de passe";
        case 3:
          return "Informations du profil";
        default:
          return "Compte créé";
      }
    },
  },
  methods: {
    ...mapActions(["SignupCandidat"]),
    ...mapMutations(["incrStep", "decrStep"]),
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.data.imageUrl = e.target.result;
          console.log("URL de l'image:", this.data.imageUrl);
        };

        reader.readAsDataURL(file);
      }
    },
    onSubmit() {
      if (!this.form) return;
      this.loading = true;
      setTimeout(() => {
        this.SignupCandidat(this.data);
        this.loading = false;
      }, 500);
    },
  },
};
</script>
<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title class="text-h6">
      <v-snackbar
        :timeout="7000"
        color="red-darken-2 mt-16"
        v-model="signup.alert"
        location="top"
      >
        {{ signup.message }}
      </v-snackbar>
      <span class="d-block my-2 text-h5">Créez votre profil candidat</span>
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary"
        size="24"
        v-text="signup.step"
        class="ms-2"
      ></v-avatar>
    </v-card-title>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-window v-model="signup.step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              label="Adresse e-mail"
              placeholder="chaouchnizar@gmail.com"
              autofocus
              v-model="data.mail"
              :rules="[rules.required, rules.mail]"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              C'est l'e-mail que vous utiliserez pour vous connecter à votre
              compte Portfolio xception
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              label="Mot de passe"
              type="password"
              v-model="data.password"
              :rules="[rules.required, rules.counter]"
              autofocus
            ></v-text-field>
            <v-text-field
              label="Confirmez le mot de passe"
              type="password"
              v-model="passwordcheck"
              :rules="[
                rules.required,
                () => rules.passwordMatch(data.password, passwordcheck),
              ]"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              Veuillez entrer un mot de passe pour votre compte
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-card-text>
            <v-container grid-list-xs>
              <v-row>
                <v-col cols="3" class="mx-auto">
                  <label for="file">
                    <img :src="data.imageUrl" alt="img" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    class="d-none"
                    @change="handleFileChange"
                    :disabled="loading"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Nom*"
                    placeholder="Nizar"
                    class="me-2"
                    v-model="data.nom"
                    :rules="[rules.required]"
                    :disabled="loading"
                    autofocus
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Prenom*"
                    placeholder="Chaouch"
                    class="me-2"
                    v-model="data.prenom"
                    :rules="[rules.required]"
                    :disabled="loading"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Date de Naissance*"
                    type="Date"
                    class="me-2"
                    v-model="data.dateNais"
                    :rules="[rules.required]"
                    :disabled="loading"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6"
                  ><v-text-field
                    label="Telephone*"
                    placeholder="52641659"
                    class="me-2"
                    type="number"
                    v-model="data.tel"
                    :rules="[rules.required, rules.tel]"
                    :disabled="loading"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['homme', 'femme']"
                    label="Civilité*"
                    v-model="data.civilite"
                    :rules="[rules.required]"
                    :disabled="loading"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6"
                  ><v-text-field
                    label="Gouvernorat (Adress)*"
                    placeholder="Tunisie"
                    class="me-2"
                    v-model="data.adress"
                    :rules="[rules.required]"
                    :disabled="loading"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <span class="text-caption text-grey-darken-1">
              Ce sont des informations pour créer votre profil
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="4">
          <v-sheet
            class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
            elevation="4"
            height="200"
            max-width="800"
            width="100%"
          >
            <div>
              <h2 class="text-h4 font-weight-black text-blue mb-2">
                Félicitations!
              </h2>

              <div class="font-weight-regular mb-2">
                Veuillez consulter votre boîte de réception/spam ou d'autres
                dossiers pour trouver notre e-mail de vérification.
                <!-- Vous êtes connecté à votre compte. Bonne chance pour votre candidature ! -->
              </div>

              <!-- <v-btn color="blue" variant="text" to="login">Connexion</v-btn> -->
            </div>
          </v-sheet>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          v-if="signup.step > 1 && signup.step < 4"
          variant="text"
          @click="this.decrStep"
        >
          pres
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="signup.step < 3"
          color="primary"
          variant="flat"
          @click="this.incrStep"
          :disabled="!form"
          class="text-none"
          rounded="xl"
        >
          Continuer
        </v-btn>
        <v-btn
          v-if="signup.step === 3"
          color="primary"
          variant="flat"
          class="text-none"
          rounded="xl"
          :loading="loading"
          :disabled="!form"
          type="submit"
        >
          Continuer
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<style lang="scss" scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background: #dfdfdf;
}
</style>

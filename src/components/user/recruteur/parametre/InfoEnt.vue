<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["user", "profilRec"]),
    data() {
      return {
        id: this.user.userData._id,
        logoForUpload: null,
        logoUrl: "http://localhost:8000" + this.user.userData.logoPath,
        nomEntreprise: this.user.userData.nomEntreprise,
        secteur: this.user.userData.secteur,
        description: this.user.userData.description,
        adress: this.user.userData.adress,
        tel: this.user.userData.tel,
        fondee: this.user.userData.fondee || 2016,
        taill_ent: this.user.userData.taill_ent || 500,
      };
    },
  },
  data() {
    return {
      form: false,
      typeEmploi: [],
      rules: {
        required: (value) => !!value || "Champ requis.",
        counter: (value) => value.length >= 2 || "Minimum 200 caractères",
      },
    };
  },
  methods: {
    ...mapActions(["userAuth","updated","upload"]),
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.data.logoForUpload = file;
        this.upload(this.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        alert("Veuillez sélectionner un fichier image.");
      }
    },
  },
  async mounted() {
    await this.userAuth();

    if (
      this.user.authenticated === false ||
      this.user.userData.role === "candidat"
    ) {
      this.$router.push("login");
    }
  },
};
</script>
<template>
  <v-snackbar
    :timeout="7000"
    color="blue-darken-2 mt-16"
    v-model="profilRec.alert"
    location="top"
  >
    {{ profilRec.message }}
  </v-snackbar>
  <v-form v-model="form">
    <v-sheet :elevation="2" class="rounded-lg pa-7">
      <v-row no-gutters>
        <v-col cols="9" md="10" xl="11">
          <h2>Paramètres voter informations sur l'entreprise</h2>
        </v-col>
      </v-row>
      <v-row>
        <!-- col logo -->
        <v-col cols="12" md="3" lg="2">
          <h4 class="mb-4 ms-7 text-medium-emphasis">Image du logo</h4>
          <label for="image" class="cursor-pointer">
            <v-tooltip text="Click pour change l'image" location="left">
              <template v-slot:activator="{ props }">
                <v-badge
                  v-bind="props"
                  class="ms-4"
                  floating
                  color="blue"
                  icon="mdi-image-edit-outline"
                  offset-y="8"
                  offset-x="5"
                >
                  <v-avatar size="150" rounded="0" :image="data.logoUrl">
                  </v-avatar>
                </v-badge>
              </template>
            </v-tooltip>
          </label>
          <input
            type="file"
            id="image"
            class="d-none"
            accept="image/*"
            @change="handleFileChange"
          />
        </v-col>
        <!-- nom & secteur -->
        <v-col cols="12" md="3">
          <h4 class="mb-4 text-medium-emphasis">
            Nom de l'entreprise <span class="text-red">*</span>
          </h4>
          <v-text-field
            v-model="data.nomEntreprise"
            variant="outlined"
            color="blue"
            :rules="[rules.required]"
          >
          </v-text-field>
          <!-- secteur -->
          <h4 class="mb-4 text-medium-emphasis">
            Secteur <span class="text-red">*</span>
          </h4>
          <v-text-field
            v-model="data.secteur"
            variant="outlined"
            color="blue"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
        <!-- fondee & adress -->
        <v-col cols="12" md="3">
          <h4 class="mb-4 text-medium-emphasis">Année de création</h4>
          <v-text-field
            v-model="data.fondee"
            variant="outlined"
            color="blue"
            type="Number"
          >
          </v-text-field>
          <!-- adress -->
          <h4 class="mb-4 text-medium-emphasis">Emplacement de l'entreprise</h4>
          <v-text-field v-model="data.adress" variant="outlined" color="blue">
          </v-text-field>
        </v-col>
        <!-- tail & tel -->
        <v-col cols="12" md="3">
          <h4 class="mb-4 text-medium-emphasis">Taille de l'entreprise</h4>
          <v-text-field
            v-model="data.taill_ent"
            variant="outlined"
            color="blue"
            :rules="[rules.required]"
          >
          </v-text-field>
          <!-- tel -->
          <h4 class="mb-4 text-medium-emphasis">Téléphone</h4>
          <v-text-field
            v-model="data.tel"
            variant="outlined"
            color="blue"
            type="Number"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- decription -->
    <v-sheet :elevation="2" class="rounded-lg pa-7 mt-4">
      <v-row no-gutters>
        <v-col cols="9" md="10" xl="11">
          <h3>À propos de nous</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="data.description"
            color="blue"
            rows="15"
            clearable
            counter
            variant="outlined"
            :rules="[rules.required, rules.counter]"
          ></v-textarea>
        </v-col>
        <!-- btn submit -->
        <v-col cols="12">
          <v-btn
            color="blue"
            type="submit"
            class="text-none font-weight-bold float-right"
            size="large"
          >
            Enregistrer les modifications
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-form>
</template>

<style lang="scss"></style>

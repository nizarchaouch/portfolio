<script>
import { mapState, mapActions } from "vuex";
import DialogPwd from "@/components/user/DialogPwd.vue";
export default {
  components: { DialogPwd },
  computed: {
    ...mapState(["user", "profilRec"]),
  },
  data() {
    return {
      form: false,
      loading: false,
      fileForUpload: null,
      imageUrl: "",
      nom: "",
      prenom: "",
      dateNais: "",
      tel: null,
      mail: "",
    };
  },
  methods: {
    ...mapActions(["userAuth", "updated"]),
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const imagePreviewUrl = URL.createObjectURL(file);
        this.fileForUpload = file;
        this.imagePreviewUrl = imagePreviewUrl;
      } else {
        alert("Veuillez sélectionner un fichier image.");
      }
    },
    onSubmit() {
      if (!this.form) return;
      const data = {
        id: this.user.userData._id,
        fileForUpload: this.fileForUpload,
        imageUrl: this.imageUrl,
        nom: this.nom,
        prenom: this.prenom,
        dateNais: this.dateNais,
        tel: this.tel,
        mail: this.mail,
      };
      this.loading = true;
      this.userAuth();
      this.updated(data);
      this.userAuth();
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
  async created() {
    await this.userAuth();
    this.imageUrl = "http://localhost:8000" + this.user.userData.imagePath;
    this.nom = this.user.userData.nom;
    this.prenom = this.user.userData.prenom;
    this.dateNais = this.user.userData.dateNais.split("T")[0];
    this.tel = this.user.userData.tel;
    this.mail = this.user.userData.mail;
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
  <v-form v-model="form" @submit.prevent="onSubmit">
    <v-sheet :elevation="2" class="rounded-lg pa-7">
      <v-row no-gutters>
        <v-col cols="9" md="10" xl="12" class="d-flex justify-space-between">
          <h2>Paramètres de vote pour les informations personnelles</h2>
          <DialogPwd />
        </v-col>
      </v-row>
      <v-row>
        <!-- Image fond -->
        <v-col cols="12" md="3" lg="2" class="pt-16">
          <label for="image" class="cursor-pointer">
            <v-tooltip text="Click pour change l'image" location="top">
              <template v-slot:activator="{ props }">
                <v-badge
                  v-bind="props"
                  class="ms-4"
                  floating
                  color="blue"
                  icon="mdi-image-edit-outline"
                  offset-y="10"
                  offset-x="25"
                >
                  <v-avatar size="140" :image="imagePreviewUrl || imageUrl">
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
        <!-- nom & prenom -->
        <v-col cols="12" md="3">
          <h4 class="mb-4 text-medium-emphasis">Nom</h4>
          <v-text-field v-model="nom" variant="outlined" color="blue">
          </v-text-field>
          <!-- prenom -->
          <h4 class="mb-4 text-medium-emphasis">Téléphone</h4>
          <v-text-field
            v-model="tel"
            variant="outlined"
            color="blue"
            type="Number"
          >
          </v-text-field>
        </v-col>
        <!-- prenom -->
        <v-col cols="12" md="3">
          <h4 class="mb-4 text-medium-emphasis">Prénom</h4>
          <v-text-field v-model="prenom" variant="outlined" color="blue">
          </v-text-field>
          <!-- mail -->
          <h4 class="mb-4 text-medium-emphasis">E-mail</h4>
          <v-text-field v-model="mail" variant="outlined" color="gray" readonly>
          </v-text-field>
        </v-col>
        <!-- Date de Naissance -->
        <v-col cols="12" md="3">
          <h4 class="mb-4 text-medium-emphasis">Date de Naissance</h4>
          <v-text-field
            v-model="dateNais"
            variant="outlined"
            color="blue"
            type="Date"
          >
          </v-text-field>
        </v-col>
        <!-- btn submit -->
        <v-col cols="12">
          <v-btn
            color="blue"
            type="submit"
            class="text-none font-weight-bold float-right"
            size="large"
            :loading="loading"
          >
            Enregistrer les modifications
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-form>
</template>

<style lang="scss"></style>

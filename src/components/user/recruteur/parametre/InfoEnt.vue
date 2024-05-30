<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
    data() {
      return {
        // id: this.user.userData._id,
        // fileForUpload: null,
        logo: "http://localhost:8000" + this.user.userData.logo,
        imagePath: "",
        nom: this.user.userData.nomEntreprise,
        // dateNais: this.user.userData.dateNais
        //   ? this.user.userData.dateNais.split("T")[0]
        //   : "",
        // tel: this.user.userData.tel,
        // adress: this.user.userData.adress,
        // titre_emploi: this.user.userData.titre_emploi,
        // urlfacebook: this.user.userData.urlfacebook,
        // urllinkedin: this.user.userData.urllinkedin,
        // urltwitter: this.user.userData.urltwitter,
        // urlgithub: this.user.userData.urlgithub,
      };
    },
  },

  methods: {
    ...mapActions(["userAuth"]),
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.data.fileForUpload = file;
        // this.updated(this.data);
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
  <v-sheet :elevation="2" class="rounded-lg pa-7">
    <v-row no-gutters>
      <v-col cols="9" md="10" xl="11">
        <h2>Paramètres voter informations sur l'entreprise</h2>
      </v-col>
    </v-row>
    <v-row>
      <!-- col logo -->
      <v-col cols="auto">
        <h4 class="mb-4 ms-7 text-medium-emphasis">Image du logo</h4>
        <label for="image" class="cursor-pointer">
          <v-tooltip text="Click pour change l'image" location="left">
            <template v-slot:activator="{ props }">
              <v-badge
                v-bind="props"
                floating
                color="blue"
                icon="mdi-image-edit-outline"
                offset-y="8"
                offset-x="5"
              >
                <v-avatar size="180" rounded="0" :image="data.logo"> </v-avatar>
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
      <!--  -->
      <v-col cols="auto">
        <p class="font-weight-bold text-h6">
          {{ this.user.userData.nomEntreprise }}
        </p>
        <span class="text-subtitle-1 text-medium-emphasis">
          <!-- {{ this.user.userData.secteur }} -->
        </span>
        <!-- <v-text-field
          variant="solo-inverted"
          v-model="data.nom"
          @change="updateValue('nom', $event.target.value)"
        >
        </v-text-field> -->
      </v-col>
      <v-col cols="auto"> </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss"></style>

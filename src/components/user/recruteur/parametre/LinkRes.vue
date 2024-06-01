<script>
export default {
  data() {
    return {
      socialLinks: [
        { platform: "Twitter", url: "" },
        { platform: "", url: "" },
      ],
      platformOptions: [
        "Twitter",
        "Facebook",
        "LinkedIn",
        "Instagram",
        "Autre",
      ],
    };
  },
  methods: {
    addLink() {
      this.socialLinks.push({ platform: "", url: "" });
    },
    removeLink(index) {
      this.socialLinks.splice(index, 1);
    },
    saveChanges() {
      // Implémenter la logique pour enregistrer les modifications
      console.log(this.socialLinks);
    },
  },
};
</script>
<template>
  <div>
    <div v-for="(link, index) in socialLinks" :key="index" class="social-link">
      <v-select
        v-model="link.platform"
        :items="platformOptions"
        label="Sélectionner une option"
        dense
        outlined
      ></v-select>
      <v-text-field
        v-model="link.url"
        label="Lien de profil / URL..."
        dense
        outlined
      ></v-text-field>
      <v-btn icon @click="removeLink(index)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-btn @click="addLink" class="mt-4">
      Ajouter un nouveau lien social
    </v-btn>
    <v-btn @click="saveChanges" color="blue" class="mt-4">
      Enregistrer les modifications
    </v-btn>
  </div>
</template>

<style scoped>
.social-link {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.social-link v-select,
.social-link v-text-field {
  flex: 1;
  margin-right: 10px;
}
</style>

<script>
export default {
  data: () => ({
    sheet: true,
    filter: { localite: null, typeContrat: null, langue: null },
  }),
};
</script>
<template>
  <div>
    <v-btn @click="sheet = !sheet" class="text-none">
      <v-icon size="20">mdi-tune</v-icon>
      <p class="ms-2">Filtres</p></v-btn
    >

    <v-layout>
      <v-navigation-drawer
        v-model="sheet"
        :width="320"
        location="start"
        elevation="10"
        class="mt-16"
      >
        <v-row class="ma-4">
          <v-icon size="25" class="mt-1">mdi-tune</v-icon>
          <p class="font-weight-bold text-h6 ms-2">Filtres</p>
          <v-btn
            variant="text"
            icon="mdi-menu-left"
            size="30"
            class="ms-auto"
            @click="sheet = !sheet"
          ></v-btn>
        </v-row>
        <v-divider></v-divider>
        <div class="px-7 py-4">
          <p class="label">Localité</p>
          <v-combobox
            v-model="filter.localite"
            clearable
            chips
            multiple
            density="compact"
            :items="['Tunisie', 'Sousse', 'Monastir', 'Gafsa']"
            variant="outlined"
          ></v-combobox>
        </div>
        <div class="px-7 py-4">
          <p class="label">Type de contrat</p>
          <v-combobox
            v-model="filter.typeContrat"
            clearable
            chips
            multiple
            density="compact"
            :items="['CDI', 'CDD', 'Stage']"
            variant="outlined"
          ></v-combobox>
        </div>
        <div class="px-7 py-4">
          <p class="label">Langue</p>
          <v-combobox
            v-model="filter.langue"
            clearable
            chips
            multiple
            density="compact"
            :items="['Français', 'Anglais']"
            variant="outlined"
          ></v-combobox>
        </div>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped>
.label {
  font-size: medium;
  font-family: sans-serif;
}
</style>

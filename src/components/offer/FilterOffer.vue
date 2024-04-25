<script>
export default {
  data: () => ({
    sheet: false,
    filter: { localite: null, typeContrat: null, langue: null },
  }),
  methods: {
    // Méthode pour émettre un événement lorsqu'un filtre est modifié
    emitFilterUpdate() {
      this.$emit("filter-update", this.filter);
    },
  },
  watch: {
    // Observer les changements dans les filtres et émettre l'événement correspondant
    filter: {
      deep: true,
      handler() {
        this.emitFilterUpdate();
      },
    },
  },
};
</script>
<template>
  <div>
    <button class="bn39 sm-6" @click="sheet = !sheet">
      <span class="bn39span"
        ><v-icon size="25">mdi-tune</v-icon>
        <p class="ms-2 text-h6">Filtres</p></span
      >
    </button>

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

.bn39 {
  background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  color: #000000;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 2px;
  width: 7em;

  &:hover {
    color: #fff;
  }

  .bn39span {
    align-items: center;
    background: #ffffff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;
  }

  &:hover .bn39span {
    background: transparent;
  }
}
</style>

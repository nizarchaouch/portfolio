<script>
export default {
  data: () => ({
    sheet: true,
  }),
};
</script>
<template>
  <div class="text-center">
    <v-btn class="mt-4" size="50" @click="sheet = !sheet">
      <v-icon size="35">mdi-tune</v-icon></v-btn
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

        <v-list density="compact">
          <v-list-item title="accueil" to="/"> </v-list-item>
          <v-list-item title="templates" to="template"></v-list-item>
          <v-list-item title="Offres d'emploi" to="offer"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped></style>

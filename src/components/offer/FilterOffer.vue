<script>
export default {
  data: () => ({
    sheet: false,
  }),
};
</script>
<template>
  <div class="text-center">
    <v-btn size="x-large" text="Click Me" @click="sheet = !sheet"></v-btn>

    <v-layout>
      <v-navigation-drawer
        v-model="sheet"
        location="start"
        elevation="10"
        class="mt-16"
      >
        <v-icon @click="drawer = !drawer" class="ma-3">mdi-close</v-icon>
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

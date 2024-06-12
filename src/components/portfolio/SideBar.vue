<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["candidat","portfolio"]),
  },
  data: () => ({
    
  }),
  methods: {
    ...mapMutations([""]),
  },
};
</script>

<template>
  <v-layout>
    <v-navigation-drawer
      temporary
      location="right"
      elevation="10"
      permanent
      width="480"
      v-model="portfolio.sideBar"
    >
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped></style>

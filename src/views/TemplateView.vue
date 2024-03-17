<script>
import NavBar from "@/components/public/NavBar.vue";
import { mapActions } from "vuex";
export default {
  name: "template",
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(["userAuth", "userAuthr"]),
  },
  mounted() {
    this.userAuth();
    this.userAuthr();
  },
};
</script>
<template lang="">
  <NavBar />
  <v-container class="mt-16">
    <v-row>
      <v-col cols="12" sm="12" md="10" xl="8" class="ma-9">
        <h1>Sélectionnez le template que vous aimez</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

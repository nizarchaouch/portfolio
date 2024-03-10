<script>
import NavBar from "@/components/public/NavBar.vue";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(["userAuth"]),
  },
  mounted() {
    this.userAuth();
  },
};
</script>
<template>
  <NavBar />
  <div style="margin-top: 80px">
    <v-btn color="success" stacked>text</v-btn>
    <v-btn icon class="d-lg-none d-sm-flex hidden-md-and-up" >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </div>
</template>

<style scoped></style>

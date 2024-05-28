<script>
import NavBar from "@/components/public/NavBar.vue";
import SideBar from "@/components/user/recruteur/SideBar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { NavBar, SideBar },
  computed: {
    ...mapState(["user"]),
    userData() {
      return this.user.userData;
    },
  },
  data() {
    return {
      drawer: true,
    };
  },
  methods: { ...mapActions(["userAuth"]) },
  async mounted() {
    await this.userAuth();

    if (
      this.user.authenticated === false ||
      this.user.userData.role === "candidat"
    ) {
      this.$router.push("login");
    } else {
      // await this.showOfferRec(this.user.userData._id);
    }
  },
};
</script>
<template>
  <NavBar />
  <SideBar />
  <v-container fluid class="bg-white h-screen">
    <v-col cols="12" lg="10" offset-lg="1">
      <v-row class="mt-12">
        <v-col cols="12" offset-lg="1"></v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<style lang="scss" scoped></style>

<script>
import NavBar from "@/components/portfolio/NavBar.vue";
import PagePort from "@/components/portfolio/PagePort.vue";
import SideBar from "@/components/portfolio/SideBar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    NavBar,
    PagePort,
    SideBar,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["user", "portfolio"]),
  },
  methods: {
    ...mapActions(["userAuth"]),
  },
  mounted() {
    this.userAuth();
    setTimeout(() => {
      if (
        this.user.authenticated === false ||
        this.user.userData.role === "recruteur"
      ) {
        this.$router.push("login");
      }
    }, 2);
  },
};
</script>
<template>
  <v-container fluid>
    <v-row>
      <NavBar />
    </v-row>
    <v-row class="mt-15">
      <v-col :cols="portfolio.sideBar ? 9 : 11" :class="!portfolio.sideBar ? 'mx-auto' : ''">
        <PagePort />
      </v-col>
      <v-col cols="3" v-if="portfolio.sideBar">
        <SideBar />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss"></style>

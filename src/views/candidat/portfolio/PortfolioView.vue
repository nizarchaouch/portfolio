<script>
import { mapState, mapActions } from "vuex";
import NavBar from "@/components/portfolio/NavBar.vue";
import PagePort from "@/components/portfolio/PagePort.vue";
import SidebarA from "@/components/portfolio/sidebar/SideBarA.vue";
import SidebarM from "@/components/portfolio/sidebar/SideBarM.vue";
export default {
  components: {
    NavBar,
    PagePort,
    SidebarA,
    SidebarM,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["user", "portfolio"]),
  },
  methods: {
    ...mapActions(["userAuth"]),
  },
  async mounted() {
    await this.userAuth();
    if (
      this.user.authenticated === false ||
      this.user.userData.role === "recruteur"
    ) {
      this.$router.push("/login");
    }
  },
};
</script>
<template>
  <v-container fluid>
    <v-row>
      <NavBar />
    </v-row>
    <v-row class="mt-13">
      <v-col
        :cols="portfolio.sideBarA || portfolio.sideBarM ? 9 : 12"
        :class="!(portfolio.sideBarA || portfolio.sideBarM) ? 'mx-auto' : ''"
      >
        <PagePort />
      </v-col>
      <v-col cols="3" v-if="portfolio.sideBarA">
        <SidebarA />
      </v-col>
      <v-col cols="3" v-if="portfolio.sideBarM">
        <SidebarM />
      </v-col>
    </v-row>
  </v-container>
  
</template>

<style lang="scss"></style>

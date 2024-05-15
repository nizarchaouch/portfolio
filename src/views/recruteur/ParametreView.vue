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
  mounted() {
    this.userAuth();
    setTimeout(() => {
      if (
        this.user.authenticated === false ||
        this.user.userData.role === "candidat"
      ) {
        this.$router.push("login");
      }
    }, 2);
  },
};
</script>
<template>
  <NavBar />
  <SideBar />
</template>
<style lang="scss" scoped></style>

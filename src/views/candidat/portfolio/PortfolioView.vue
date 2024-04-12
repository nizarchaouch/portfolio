<script>
import NavBar from "@/components/portfolio/NavBar.vue";
import PagePort from "@/components/portfolio/PagePort";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    NavBar,
    PagePort,
  },
  computed: {
    ...mapState(["user"]),
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
  <NavBar />
  <PagePort />
  <div class="a">
  </div>
</template>

<style lang="scss">
.a {
  margin: 200px;
}
</style>

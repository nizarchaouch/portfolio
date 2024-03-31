<script>
import NavBar from "@/components/portfolio/NavBar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    NavBar,
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
      if (this.user.authenticated === false || this.user.userData.role === "recruteur") {
        this.$router.push({ name: "login" });
        console.log(this.user.userData.role);
      } else {
        console.log("bbb", this.user.userData.role);
      }
    }, 2);
  },
};
</script>
<template>
  <NavBar />
  <div>aaa</div>
</template>

<style lang=""></style>

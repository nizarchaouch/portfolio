<script>
import NavBar from "@/components/public/NavBar.vue";
import { mapActions } from "vuex";
export default {
  name: "offer",
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
  <div></div>
</template>
<style lang=""></style>

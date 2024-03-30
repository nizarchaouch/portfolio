<script>
import NavBar from "@/components/portfolio/NavBar.vue";
import { mapActions } from "vuex";
export default {
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
  <div>aaa</div>
</template>

<style lang=""></style>

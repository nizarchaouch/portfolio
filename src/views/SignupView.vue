<script>
import Signup from "@/components/auth/SignupForm.vue";
export default {
  name: "signup",
  components: { Signup },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<template>
  <div class="body h-screen w-100">
    <v-btn
      color="white"
      rounded="xl"
      icon="mdi-arrow-left"
      class="ma-3"
      @click="goBack()"
    ></v-btn>
    <Signup />
  </div>
</template>
<style lang="scss">
.body {
  background-image: linear-gradient(45deg, #d2001a, #7462ff, #f84e21, #23d5ab);
  background-size: 300% 300%;
  animation: color 12s ease-in-out infinite;
  @keyframes color {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
}
</style>

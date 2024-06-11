<script>
import logo from "@/assets/logo_text.png";
import { mapState, mapActions } from "vuex";
import { useRoute } from 'vue-router';

export default {
  name: "authview",
  computed: {
    ...mapState(["forgot", "user"]),
  },
  data() {
    const route = useRoute();
    return {
      logo: logo,
      visible: false,
      loading: false,
      form: false,
      password: "",
      passwordcheck: "",
      rules: {
        required: (value) => !!value || "Champ requis.",
        counter: (value) => value.length >= 0 || "Minimum 8 caractères",
        passwordMatch: (value) => {
          return (
            value === this.passwordcheck || "Les mots de passe ne correspondent pas."
          );
        },
      },
      route 
    };
  },
  methods: {
    ...mapActions(["resetPwd", "userAuth"]),
    onSubmit() {
      const resetToken = this.route.params.token; // Access route params here
      if (!this.form) return;
      this.loading = true;
      const data = {
        resetToken,
        password: this.password,
      };
      setTimeout(() => {
        this.resetPwd(data);
        this.loading = false;
      }, 500);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    await this.userAuth();
    if (this.user.authenticated && this.user.userData.role === "recruteur") {
      this.$router.push("/dashboard");
    }
    if (this.user.authenticated && this.user.userData.role === "candidat") {
      this.$router.push("/profil");
    }
  },
};
</script>

<template>
  <div class="body h-screen w-100">
    <v-form @submit.prevent="onSubmit" v-model="form" class="pt-16">
      <div>
        <v-card
          class="mx-auto pa-8 pb-8"
          elevation="10"
          max-width="420"
          rounded="lg"
        >
          <v-snackbar
            :timeout="7000"
            color="red-darken-2 mt-16"
            v-model="forgot.alert"
            location="top"
          >
            {{ forgot.message }}
          </v-snackbar>
          <v-img class="mx-auto my-6" max-width="228" :src="logo"></v-img>
          <h2 class="text-center">Réinitialiser le mot de passe</h2>
          <div class="text-subtitle-1 text-medium-emphasis mt-4">
            Saisir le nouveau mot de passe
          </div>
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Tapez votre nouveau mot de passe"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            :readonly="loading"
            v-model="password"
            :rules="[rules.required, rules.counter, rules.counter]"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <div class="text-subtitle-1 text-medium-emphasis mt-4">
            Confirmez le mot de passe
          </div>
          <v-text-field
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Confirme mot de passe"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            :readonly="loading"
            v-model="passwordcheck"
            :rules="[
              rules.required,
              rules.passwordMatch,
            ]"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-btn
            block
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
            rounded="lg"
            :disabled="!form"
            :loading="loading"
            type="submit"
          >
            Envoyer
          </v-btn>
        </v-card>
      </div>
    </v-form>
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

<script>
import logo from "@/assets/logo_text.png";
import { mapState, mapActions } from "vuex";
export default {
  name: "authview",
  computed: {
    ...mapState(["forgot", "user"]),
  },
  data: () => ({
    logo: logo,
    loading: false,
    form: false,
    mail: "",
    rules: {
      required: (value) => !!value || "Champ requis.",
      mail: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Email invalide.";
      },
    },
  }),
  methods: {
    ...mapActions(["forgotPwd", "userAuth"]),
    onSubmit() {
      if (!this.form) return;
      this.loading = true;
      setTimeout(() => {
        this.forgotPwd(this.mail);
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
  <v-snackbar
    :timeout="7000"
    color="red-darken-2 mt-16"
    v-model="forgot.alert"
    location="top"
  >
    {{ forgot.message }}
  </v-snackbar>
  <div class="body h-screen w-100">
    <v-form @submit.prevent="onSubmit" v-model="form" class="pt-16">
      <div>
        <v-card
          class="mx-auto pa-8 pb-8"
          elevation="10"
          max-width="420"
          rounded="lg"
        >
          <v-img class="mx-auto my-6" max-width="228" :src="logo"></v-img>
          <h2 class="text-center">Mot de passe oublié?</h2>
          <p class="text-subtitle-2 text-center">
            Ne vous inquiétez pas, cela arrive la plupart du temps.
          </p>
          <p class="text-subtitle-2 text-center">
            Tapez votre email pour réinitialiser votre mot de passe.
          </p>
          <div class="text-subtitle-1 text-medium-emphasis mt-4">E-mail</div>

          <v-text-field
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            :readonly="loading"
            v-model="mail"
            :rules="[rules.required, rules.mail]"
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
          <v-row justify="center">
            <p class="text-none text-subtitle-2 mt-2 ms-3">
              Se souvenir du mot de passe?
            </p>
            <v-btn class="text-blue" variant="plain" to="login">
              <p class="text-decoration-underline text-none">Se connecter</p>
            </v-btn>
          </v-row>
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

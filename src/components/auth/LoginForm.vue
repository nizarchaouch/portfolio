<script>
import logo from "@/assets/logo_text.png";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["login", "user"]),
  },
  data: () => ({
    logo: logo,
    visible: false,
    loading: false,
    form: false,
    data: { mail: "", password: "" },
    rules: {
      required: (value) => !!value || "Champ requis.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      mail: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Email invalide.";
      },
    },
  }),
  mounted() {
    this.userAuth();
  },
  methods: {
    ...mapActions(["loginUser", "userAuth"]),
    onSubmit() {
      if (!this.form) return;
      this.loading = true;
      setTimeout(() => {
        this.loginUser(this.data);
        this.loading = false;
      }, 500);
    },
  },
};
</script>
<template>
  <template v-if="this.user.authenticated">
    {{ this.$router.push("/") }}
  </template>
  <v-form @submit.prevent="onSubmit" v-model="form">
    <div>
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="10"
        max-width="400"
        rounded="lg"
      >
        <v-snackbar
          :timeout="7000"
          color="red-darken-2 mt-16"
          v-model="login.alert"
          location="top"
        >
          {{ login.message }}
        </v-snackbar>
        <v-img class="mx-auto my-6" max-width="228" :src="logo"></v-img>
        <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>

        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :readonly="loading"
          v-model="data.mail"
          :rules="[rules.required, rules.mail]"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Mot de passe

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mot de passe oublié ?</a
          >
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Tapez votre mot de passe"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :readonly="loading"
          v-model="data.password"
          :rules="[rules.required, rules.counter]"
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
          Se connecter
        </v-btn>

        <v-card-text class="text-center">
          <v-btn class="text-blue" variant="text" to="signup">
            <p class="text-decoration-underline">S'inscrire maintenant</p>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </v-form>
</template>

<style lang="scss"></style>

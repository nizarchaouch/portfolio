<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  data: () => ({
    loading: false,
    visible: false,
    form: false,
    dialog: false,
    passwordcheck: "",
    data: {
      password: "",
    },
    rules: {
      required: (value) => !!value || "Champ requis.",
      counter: (value) => value.length > 0 || "Minimum 8 caractères",
      passwordMatch: (value, otherValue) => {
        return (
          value === otherValue || "Les mots de passe ne correspondent pas."
        );
      },
    },
  }),
  methods: {
    ...mapActions(["updated"]),
    updatePwd() {
      this.loading = true;
      const passwordData = {
        id: this.user.userData._id,
        password: this.data.password,
      };
      console.log("Données du mot de passe à envoyer:", passwordData);
      setTimeout(() => {
        this.updated(passwordData);
        this.loading = false;
        this.data.password = "";
        this.passwordcheck = "";
        this.dialog = false;
      }, 1000);
    },
  },
};
</script>
<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        color="primary"
        icon="mdi-form-textbox-password"
        v-bind="activatorProps"
      ></v-btn>
      <v-tooltip activator="parent" location="bottom"
        >Changer de mot de passe
      </v-tooltip>
    </template>

    <template v-slot:default="{ isActive }">
      <v-form v-model="form" @submit.prevent="updatePwd">
        <v-card>
          <v-toolbar title="Changer de mot de passe"></v-toolbar>

          <v-container>
            <v-col cols="12" sm="10">
              <p class="text-subtitle-2 text-medium-emphasis">
                Nouveau mot de passe
              </p>
              <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                @click:append-inner="visible = !visible"
                variant="outlined"
                density="compact"
                :disabled="loading"
                v-model="data.password"
                :rules="[rules.required, rules.counter]"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="10">
              <p class="text-subtitle-2 text-medium-emphasis">
                Confirmez le nouveau mot de passe
              </p>
              <v-text-field
                :type="visible ? 'text' : 'password'"
                variant="outlined"
                density="compact"
                :disabled="loading"
                v-model="passwordcheck"
                :rules="[
                  rules.required,
                  () => rules.passwordMatch(data.password, passwordcheck),
                ]"
              >
              </v-text-field>
            </v-col>
          </v-container>

          <v-card-actions class="justify-end">
            <v-btn
              rounded="xl"
              text="Annuler"
              class="text-none ma-2 pa-2"
              @click="isActive.value = false"
            ></v-btn>
            <v-btn
              :disabled="!form"
              :loading="loading"
              rounded="xl"
              variant="flat"
              type="submit"
              text="Enregistrer"
              class="text-none ma-2 pa-2"
              color="primary"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </template>
  </v-dialog>
</template>

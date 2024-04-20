<script>
import { mapState, mapActions } from "vuex";
export default {
  props: { idoffer: String },
  computed: {
    ...mapState(["user"]),
    userData() {
      return this.user.userData;
    },
  },
  data() {
    return {
      dialog: false,
      loading: false,
      cv: "Portfolio",
      letter: "",
    };
  },
  methods: {
    ...mapActions(["addCandOffer"]),
    postuler() {
      const data = {
        idCandidat: this.user.userData._id,
        idOffer: this.idoffer,
        cv: this.cv,
        letter: this.letter,
      };
      console.log("offze", data);
      this.loading = true;
      this.addCandOffer(data);
      setTimeout(() => {
        this.loading = false;
        this.dialog = false;
      }, 2000);
    },
  },
};
</script>
<template>
  <div class="pa-4 text-center">
    <template v-if="!this.user.authenticated && dialog">
      <!-- {{ this.$router.push("/login") }} -->
      <v-btn
        v-bind="activatorProps"
        text="Login"
        color="blue-darken-4"
        variant="tonal"
        rounded="lg"
        to="login"
      ></v-btn>
    </template>
    <v-dialog v-else max-width="500" v-model="dialog">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          text="Postuler maintenant"
          color="blue-darken-4"
          variant="tonal"
          rounded="lg"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card>
          <template v-slot:text>
            <!-- Nom prenom -->
            <!-- <p>Nom et Prenom</p>
            <v-text-field
              readonly
              :value="userData.nom + ' ' + userData.prenom"
              density="compact"
              placeholder="Nom et Prenom"
              variant="outlined"
            ></v-text-field> -->
            <!-- mail -->
            <!-- <p>Email</p>
            <v-text-field
              readonly
              :value="userData.mail"
              density="compact"
              placeholder="Email"
              variant="outlined"
            ></v-text-field> -->
            <!-- tel -->
            <!-- <p>Téléphone</p>
            <v-text-field
              readonly
              :value="userData.tel"
              density="compact"
              placeholder="Téléphone"
              variant="outlined"
            ></v-text-field> -->
            <!-- cv -->
            <p class="mb-2">Votre CV</p>
            <v-select
              chips
              v-model="cv"
              :disabled="loading"
              density="compact"
              label="Select"
              :items="['Portfolio', 'CV']"
              variant="outlined"
            ></v-select>
            <!-- letter -->
            <p>Lettre de motivation</p>
            <v-textarea
              v-model="letter"
              :disabled="loading"
              color="cyan"
              clearable
              label="Lettre de motivation"
            ></v-textarea>
          </template>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text="Annuler"
              variant="text"
              @click="isActive.value = false"
            ></v-btn>

            <v-btn
              color="blue-darken-3"
              text="Postuler"
              variant="flat"
              :loading="loading"
              @click="postuler()"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

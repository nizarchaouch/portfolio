<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      model: "Portfolio",
    };
  },
  methods: {
    postuler() {
      this.loading = true;
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
    <v-dialog max-width="500" v-model="dialog">
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
            <p>Nom et Prenom</p>
            <v-text-field
              readonly
              density="compact"
              placeholder="Nom et Prenom"
              variant="outlined"
            ></v-text-field>
            <!-- mail -->
            <p>Email</p>
            <v-text-field
              readonly
              density="compact"
              placeholder="Email"
              variant="outlined"
            ></v-text-field>
            <!-- tel -->
            <p>Téléphone</p>
            <v-text-field
              readonly
              density="compact"
              placeholder="Téléphone"
              variant="outlined"
            ></v-text-field>
            <!-- cv -->
            <p class="mb-2">Votre CV</p>
            <v-select
              chips
              v-model="model"
              :disabled="loading"
              density="compact"
              label="Select"
              :items="['Portfolio', 'CV']"
              variant="outlined"
            ></v-select>
            <!-- letter -->
            <p>Lettre de motivation</p>
            <v-textarea
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

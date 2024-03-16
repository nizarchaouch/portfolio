<template>
  <v-dialog transition="dialog-bottom-transition" width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        color="primary"
        icon="mdi-form-textbox-password"
        v-bind="activatorProps"
      ></v-btn>
      <v-tooltip activator="parent" location="bottom"
        >Modifier mot de passe</v-tooltip
      >
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar title="Modifier mot de passe"></v-toolbar>

        <v-container grid-list-xs>
          <v-col cols="12" sm="10">
            <p class="text-subtitle-2 text-medium-emphasis">
              Mot de passe actuel
            </p>
            <v-text-field variant="outlined" density="compact"> </v-text-field>
          </v-col>
          <v-col cols="12" sm="10">
            <p class="text-subtitle-2 text-medium-emphasis">
              Nouveau mot de passe
            </p>
            <v-text-field variant="outlined" density="compact"> </v-text-field>
          </v-col>
          <v-col cols="12" sm="10">
            <p class="text-subtitle-2 text-medium-emphasis">
              Confirmez le nouveau mot de passe
            </p>
            <v-text-field variant="outlined" density="compact"> </v-text-field>
          </v-col>
        </v-container>

        <v-card-actions class="justify-end">
          <v-chip
            text="Annuler"
            class="text-none ma-2 pa-2"
            @click="isActive.value = false"
          ></v-chip>
          <v-chip
            text="Enregistrer"
            class="text-none ma-2 pa-2"
            color="primary"
          ></v-chip>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

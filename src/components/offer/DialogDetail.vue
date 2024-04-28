<script>
import DialogPostuler from "./DialogPostuler.vue";
import { mapState, mapActions } from "vuex";
export default {
  props: {
    obj: Object,
  },
  computed: { ...mapState(["user"]) },
  components: { DialogPostuler },
  data() {
    return {
      dialog: false,
      loading: false,
    };
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
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="850"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn variant="plain" class="text-none" v-bind="activatorProps">
        <p class="text-decoration-underline">Voir Details</p>
        <template v-slot:append>
          <v-icon>mdi-arrow-right-drop-circle</v-icon>
        </template>
      </v-btn>
    </template>

    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

        <v-spacer></v-spacer>

        <DialogPostuler
          :idoffer="obj.raw._id"
          v-if="!(this.user.userData.role === 'recruteur')"
        />
      </v-toolbar>

      <v-list lines="two" subheader>
        <v-container>
          <v-row>
            <v-col cols="3">
              <v-img min_height="auto" rounded :src="obj.raw.image"></v-img>
            </v-col>
            <v-col cols="9">
              <p class="font-weight-bold">{{ obj.raw.nomEntreprise }}</p>
              <p class="text-h5 font-weight-bold">{{ obj.raw.titre }}</p>
              <p class="text-h6 font-weight-medium text-decoration-underline">
                Date d'expiration:
                {{ obj.raw.date_expiration /* .split("T")[0] */ }}
              </p>
              <v-list-subheader>{{ obj.raw.position }}</v-list-subheader>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-sheet
              v-for="index in 6"
              :key="index"
              :height="50"
              :width="250"
              border
              rounded
              class="d-flex ma-2 pa-2 mx-auto"
              ><p class="d-inline font-weight-bold">Postes vacants:</p>
              <p class="d-inline">1 poste ouvert</p>
            </v-sheet>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col cols="11">
              <p class="text-h6 font-weight-bold">Description de l'emploi</p>
              <p>{{ obj.raw.description }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="11">
              <p class="text-h6 font-weight-bold">Exigences de l'emploi</p>
              <p>{{ obj.raw.description }}</p>
            </v-col>
          </v-row>
          <v-divider class="my-2"></v-divider>
          <v-row>
            <v-col cols="11">
              <p class="text-h6 font-weight-bold">
                Mots clés:
                <v-chip color="red" variant="flat" class="me-2"> web </v-chip>
                <v-chip color="red" variant="flat" class="me-2"> vueJs </v-chip>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-list>
    </v-card>
  </v-dialog>
</template>

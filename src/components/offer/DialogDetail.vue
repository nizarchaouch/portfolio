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
    max-width="950"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn variant="plain" class="text-none" v-bind="activatorProps">
        <p class="text-decoration-underline">Voir Details</p>
        <template v-slot:append>
          <v-icon>mdi-arrow-right-drop-circle</v-icon>
        </template>
      </v-btn>
    </template>

    <v-card class="mt-5">
      <v-btn icon="mdi-close" variant="text" @click="dialog = false"></v-btn>

      <v-avatar size="100" class="ava position-fixed mx-auto">
        <v-img min_height="auto" circle :src="obj.raw.image"></v-img>
      </v-avatar>

      <v-list>
        <v-container>
          <v-row>
            <v-col cols="12">
              <p class="text-h5 text-center" style="font-family: Georgia">
                {{ obj.raw.titre }}
              </p>
              <div class="d-flex justify-center">
                <p class="link">
                  {{ obj.raw.nomEntreprise }}
                </p>
                <span class="text-medium-emphasis">
                  <v-icon>mdi-minus</v-icon>{{ obj.raw.position }}</span
                >
              </div>
              <DialogPostuler
                :idoffer="obj.raw._id"
                v-if="!(this.user.userData.role === 'recruteur')"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>

        <v-container>
          <v-row no-gutters>
            <v-col cols="4" order="last">
              <v-sheet
                :height="auto"
                :width="250"
                border
                rounded
                class="ma-2 pa-2 mx-auto"
              >
                <div class="mb-3 mx-6">
                  <p
                    class="text-subtitle-2 text-grey-darken-1 font-weight-bold"
                  >
                    Date d'expiration
                  </p>
                  <p class="font-weight-bold">
                    {{ obj.raw.date_expiration/* split("T")[0] */ }}
                  </p>
                </div>
                <div v-for="index in 5" :key="index" class="mb-3 mx-6">
                  <p
                    class="text-subtitle-2 text-grey-darken-1 font-weight-bold"
                  >
                  Non requis - travail à distance possible
                  </p>
                  <p class="font-weight-bold">1 poste ouvert</p>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="8" order="first">
              <v-row no-gutters>
                <v-col cols="12" class="mb-2">
                  <p class="text-h6 font-weight-bold">
                    Description de l'emploi
                  </p>
                  <p class="text-justify" style="font-family: Verdana, Geneva, Tahoma, sans-serif">{{ obj.raw.description }}</p>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12">
                  <p class="text-h6 font-weight-bold">Exigences de l'emploi</p>
                  <p class="text-justify">{{ obj.raw.description }}</p>
                </v-col>
              </v-row>
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
<style scoped lang="scss">
.ava {
  z-index: 3;
  margin-top: -40px;
  left: 0;
  right: 0;
}
.link {
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["portfolio"]),
  },
  data: () => ({
    panel: 2,
    colorPick: false,
    colorPickLinks: false,
    colorPickLinksActive: false,
    logo: {
      logo: true,
      image: true,
      logoArr: "0",
      colorChoix: "blue",
      sizeLogo: 22,
      lineImage: "",
    },
    navbar: {
      backgroundImage: false,
      backgroundTransp: false,
      colorNav: null,
      lineImage: null,
    },
    links: {
      hideSlider: false,
      colorLinkActive: "blue",
      colorLink: "white",
    },
  }),
  methods: {
    ...mapMutations(["changeSidebarM"]),
  },
};
</script>

<template>
  <v-layout>
    <v-navigation-drawer
      temporary
      location="right"
      elevation="10"
      permanent
      width="480"
      v-model="portfolio.sideBarM"
    >
      <v-toolbar color="indigo" class="px-2 mt-14">
        <v-toolbar-title class="font-weight-bold">
          Modification Rapide
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          class="text-none ms-auto"
          icon="mdi-window-close"
          @click="changeSidebarM"
        ></v-btn>
      </v-toolbar>
      <!--  -->
      <v-expansion-panels v-model="panel" multiple>
        <!-- navBar -->
        <v-expansion-panel>
          <template v-slot:title>
            <v-icon class="me-1" color="indigo" size="large"
              >mdi-alpha-n-circle</v-icon
            >
            <h3 class="mt-1">Modifier barre de navigation</h3>
          </template>
          <template v-slot:text>
            <v-row no-gutters>
              <v-col cols="12">
                <div class="d-flex">
                  <h4 class="mt-4">Ajouter une image d'arrière-plan</h4>
                  <v-switch
                    v-model="navbar.backgroundImage"
                    :value="true"
                    color="blue"
                    class="ms-auto"
                    inset
                  >
                  </v-switch>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="d-flex">
                  <h4 class="mt-4">Couleur d'arrière-plan transparente</h4>
                  <v-switch
                    v-model="navbar.backgroundTransp"
                    :value="true"
                    color="blue"
                    class="ms-auto"
                    inset
                  >
                  </v-switch>
                </div>
              </v-col>
            </v-row>
            <!--  -->
            <v-row no-gutters>
              <v-col cols="12">
                <div class="d-flex">
                  <h4 class="mt-4">Couleur d'arrière-plan</h4>
                  <v-btn
                    variant="tonal"
                    class="mt-2 ms-auto"
                    @click="colorPick = !colorPick"
                  >
                    <v-icon>mdi-format-color-fill</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" v-if="navbar.backgroundImage">
                <div class="d-flex">
                  <h4 class="mt-4">Lien d'image</h4>
                  <v-text-field
                    v-model="navbar.lineImage"
                    variant="outlined"
                    density="compact"
                    hide-details
                    single-line
                    color="blue"
                    class="mt-2 ms-2"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
            <!--  -->
            <v-row>
              <v-color-picker
                v-if="colorPick"
                :modes="['hex']"
                class="mx-auto"
              ></v-color-picker>
            </v-row>
          </template>
        </v-expansion-panel>
        <!-- logo -->
        <v-expansion-panel>
          <template v-slot:title>
            <v-icon class="me-1" color="indigo" size="large"
              >mdi-alpha-l-circle</v-icon
            >
            <h3 class="mt-1">Modifier Logo</h3>
          </template>
          <template v-slot:text>
            <v-row>
              <v-col cols="12" md="6">
                <div class="d-flex">
                  <h4 class="mt-4">Affichage Logo</h4>
                  <v-switch
                    v-model="logo.logo"
                    :value="true"
                    color="blue"
                    class="ms-auto"
                    inset
                  >
                  </v-switch>
                </div>
                <div class="d-flex">
                  <h4 class="mt-4">Logo Arrondi</h4>
                  <v-switch
                    v-model="logo.logoArr"
                    value="1"
                    color="blue"
                    class="ms-auto"
                    inset
                  >
                  </v-switch>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex">
                  <h4 class="mt-4">Affichage Image</h4>
                  <v-switch
                    v-model="logo.image"
                    :value="true"
                    color="blue"
                    class="ms-auto"
                    inset
                  >
                  </v-switch>
                </div>
              </v-col>
            </v-row>
            <!--  -->
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <div class="d-flex">
                  <h4 class="mt-4">Fond couleur</h4>
                  <v-btn
                    variant="tonal"
                    class="mt-2 ms-auto"
                    @click="colorPick = !colorPick"
                  >
                    <v-icon>mdi-format-color-fill</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex">
                  <h4 class="mt-4 ms-md-3">Taille</h4>
                  <v-text-field
                    v-model="logo.sizeLogo"
                    variant="outlined"
                    density="compact"
                    suffix="px"
                    color="blue"
                    type="Number"
                    class="mt-2 ms-5"
                    hide-details
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" v-if="logo.image">
                <div class="d-flex">
                  <h4 class="mt-4">Lien d'image</h4>
                  <v-text-field
                    v-model="logo.lineImage"
                    variant="outlined"
                    density="compact"
                    hide-details
                    single-line
                    color="blue"
                    class="mt-2 ms-2"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
            <!--  -->
            <v-row>
              <v-color-picker
                v-if="colorPick"
                v-model="logo.colorChoix"
                mode="hex"
                class="mx-auto"
              ></v-color-picker>
            </v-row>
          </template>
        </v-expansion-panel>
        <!-- Pages -->
        <v-expansion-panel>
          <template v-slot:title>
            <v-icon class="me-1" size="large" color="indigo"
              >mdi-alpha-p-circle</v-icon
            >
            <h3 class="mt-1">Modifier Pages</h3>
          </template>
          <template v-slot:text>
            <v-row no-gutters>
              <v-col cols="12">
                <div class="d-flex">
                  <h4 class="mt-4">Masquer le curseur</h4>
                  <v-switch
                    v-model="links.hideSlider"
                    :value="true"
                    color="blue"
                    class="ms-auto"
                    inset
                  >
                  </v-switch>
                </div>
              </v-col>
              <v-col cols="12" md="7">
                <div class="d-flex">
                  <h4 class="mt-4">Couleur du lien actif</h4>
                  <v-btn
                    variant="tonal"
                    class="mt-2 ms-3"
                    @click="colorPickLinksActive = !colorPickLinksActive"
                  >
                    <v-icon>mdi-format-color-fill</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="5">
                <div class="d-flex">
                  <h4 class="mt-4">Couleur lien</h4>
                  <v-btn
                    variant="tonal"
                    class="mt-2 ms-auto"
                    @click="colorPickLinks = !colorPickLinks"
                  >
                    <v-icon>mdi-format-color-fill</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <!--  -->
            <v-row>
              <v-color-picker
                v-if="colorPickLinks"
                v-model="links.colorLink"
                mode="hex"
                class="mx-auto"
              ></v-color-picker>
              <v-color-picker
                v-if="colorPickLinksActive"
                v-model="links.colorLinkActive"
                mode="hex"
                class="mx-auto"
              ></v-color-picker>
            </v-row>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped></style>

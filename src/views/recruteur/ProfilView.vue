<script>
import NavBar from "@/components/public/NavBar.vue";
import SideBar from "@/components/user/recruteur/SideBar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { NavBar, SideBar },
  computed: {
    ...mapState(["user"]),
    userData() {
      return this.user.userData;
    },
  },
  data() {
    return {
      drawer: true,
    };
  },
  methods: { ...mapActions(["userAuth"]) },
  mounted() {
    this.userAuth();
    setTimeout(() => {
      if (
        this.user.authenticated === false ||
        this.user.userData.role === "candidat"
      ) {
        this.$router.push("login");
      }
    }, 2);
  },
};
</script>
<template>
  <NavBar />
  <SideBar />
  <v-container fluid>
    <v-row class="mt-16">
      <v-col cols="12" lg="10" xl="10" offset-lg="2">
        <v-row>
          <v-col cols="11">
            <h3>Détails de l'entreprise</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="11" class="mx-auto">
            <v-sheet :elevation="4" class="rounded-lg pa-8">
              <v-row>
                <v-col cols="auto">
                  <v-avatar
                    size="68"
                    rounded="0"
                    class="rounded-lg ms-4"
                    :image="'http://localhost:8000' + this.user.userData.logo"
                  >
                  </v-avatar>
                </v-col>
                <v-col cols="12" md="3">
                  <p class="font-weight-bold text-h6">
                    {{ this.user.userData.nomEntreprise }}
                  </p>
                  <span class="text-subtitle-1 text-medium-emphasis">
                    {{ this.user.userData.secteur }}
                  </span>
                </v-col>
                <!-- Suivez-nous sur -->
                <v-col cols="auto">
                  <v-row class="mt-2" no-gutters>
                    <v-col cols="auto" class="mt-1">
                      <span class="font-weight-bold text-h6 ms-lg-9">
                        Suivez-nous sur:
                      </span>
                    </v-col>
                    <v-col cols="auto" class="ms-2">
                      <v-btn
                        size="40"
                        variant="text"
                        class="mx-1"
                        color="indigo"
                      >
                        <!-- <v-icon size="x-large"> mdi-facebook </v-icon> -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="41"
                          height="41"
                          viewBox="0 0 48 48"
                        >
                          <linearGradient
                            id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1"
                            x1="6.228"
                            x2="42.077"
                            y1="4.896"
                            y2="43.432"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#0d61a9"></stop>
                            <stop offset="1" stop-color="#16528c"></stop>
                          </linearGradient>
                          <path
                            fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
                            d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
                          ></path>
                          <path
                            d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                            opacity=".05"
                          ></path>
                          <path
                            d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                            opacity=".07"
                          ></path>
                          <path
                            fill="#fff"
                            d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                          ></path>
                        </svg>
                      </v-btn>
                      <!-- btn linekdin -->
                      <v-btn size="40" variant="text" class="mx-1" color="blue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="41"
                          height="41"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#0288D1"
                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                          ></path>
                        </svg>
                      </v-btn>
                      <!-- btn twitter -->
                      <v-btn
                        size="40"
                        variant="text"
                        class="mx-1"
                        color="black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="41"
                          height="41"
                          viewBox="0 0 50 50"
                        >
                          <path
                            d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                          ></path>
                        </svg>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <!-- btn -->
                <v-col cols="auto" class="me-xs-auto ms-sm-auto">
                  <v-btn
                    color="blue-darken-4"
                    class="text-none font-weight-bold mt-3"
                    size="large"
                    append-icon="mdi-arrow-right"
                    href="#"
                  >
                    Poster ouvert
                  </v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- Description de l'entreprise -->
        <v-row class="d-flex justify-center">
          <v-col cols="12" sm="8">
            <v-sheet :elevation="2" class="rounded-lg pa-8">
              <h4>Description de l'entreprise</h4>
              <p class="text-medium-emphasis text-justify mt-1">
                {{ this.user.userData.description }}
              </p>
            </v-sheet>
          </v-col>
          <!-- fondee && taille -->
          <v-col cols="12" sm="3">
            <v-sheet :elevation="2" class="rounded-lg pa-7">
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-icon size="x-large" color="blue-lighten-2" class="mb-2">
                    mdi-domain
                  </v-icon>
                  <p
                    class="mb-2 text-caption text-medium-emphasis text-uppercase"
                  >
                    Fondée en
                  </p>
                  <p class="text-body-2">2016</p>
                </v-col>
                <!--  -->
                <v-col cols="auto">
                  <v-icon size="x-large" color="blue-lighten-2" class="mb-2">
                    mdi-badge-account-outline
                  </v-icon>
                  <p
                    class="mb-2 text-caption text-medium-emphasis text-uppercase"
                  >
                    Taille de l'entreprise
                  </p>
                  <p class="text-body-2">11-50 employés</p>
                </v-col>
              </v-row>
            </v-sheet>
            <!-- local tel mail -->
            <v-sheet :elevation="2" class="rounded-lg px-3 mt-4">
              <h3 class="py-4">Informations de contact</h3>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <!-- row empla & tel -->
                  <v-row>
                    <!-- EMPLACEMENT -->
                    <v-col cols="1" class="ms-2">
                      <v-icon
                        size="large"
                        color="blue-lighten-2"
                        class="mt-2 pe-2"
                      >
                        mdi-map-marker-radius
                      </v-icon>
                    </v-col>
                    <v-col cols="auto">
                      <span
                        class="mb-2 text-caption text-medium-emphasis text-uppercase"
                      >
                        emplacement
                      </span>
                      <p class="text-body-2">Bouhjar, Tunisie</p>
                    </v-col>
                    <!--  Téléphone -->
                    <div class="d-flex">
                      <v-col cols="1" class="mx-2">
                        <v-icon
                          size="large"
                          color="blue-lighten-2"
                          class="mt-2 pe-2"
                        >
                          mdi-phone-in-talk
                        </v-icon>
                      </v-col>
                      <v-col cols="auto">
                        <span
                          class="mb-2 text-caption text-medium-emphasis text-uppercase"
                        >
                          Téléphone
                        </span>
                        <p class="text-body-2">+216 52641659</p>
                      </v-col>
                    </div>
                  </v-row>
                  <!-- row mail -->
                  <v-row>
                    <!-- EMPLACEMENT -->
                    <v-col cols="1" class="ms-2">
                      <v-icon
                        size="large"
                        color="blue-lighten-2"
                        class="mt-2 pe-2"
                      >
                        mdi-email-outline
                      </v-icon>
                    </v-col>
                    <v-col cols="auto">
                      <span
                        class="mb-2 text-caption text-medium-emphasis text-uppercase"
                      >
                        Adresse e-mail
                      </span>
                      <p class="mb-2 text-body-2">chaouchnizar1@gmail.com</p>
                    </v-col>
                  </v-row>
                </v-col>
                <!--  -->
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- offer d'emploi  -->
        <v-row>
          <v-col cols="11">
            <h3 class="ms-15">Offres d'emploi (12)</h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>

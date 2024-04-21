<script>
import DialogDetail from "@/components/offer/DialogDetail.vue";
import NavBar from "@/components/public/NavBar.vue";
import FilterOffer from "@/components/offer/FilterOffer.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "offer",
  computed: {
    ...mapState(["offer"]),
    offerShow() {
      return this.offer.offerData;
    },
  },
  components: {
    NavBar,
    DialogDetail,
    FilterOffer,
  },
  data: () => ({
    toggle: "card",
    search: "",
    tab: 1,
    selectedOBJ: null,
  }),
  methods: {
    ...mapActions(["userAuth", "showOffer"]),
  },
  mounted() {
    this.userAuth();
    this.showOffer();
  },
};
</script>

<template>
  <NavBar />
  <v-card class="mt-16 bg-transparent">
    <FilterOffer />
    <v-data-iterator :items="offerShow" :items-per-page="6" :search="search">
      <template v-slot:header>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="5" lg="4" offset-lg="2">
              <v-text-field
                v-model="search"
                density="comfortable"
                placeholder="Chercher"
                prepend-inner-icon="mdi-magnify"
                variant="solo"
                clearable
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="5" lg="4">
              <v-text-field
                density="comfortable"
                placeholder="Emplacement"
                prepend-inner-icon="mdi-google-maps"
                variant="solo"
                clearable
                hide-details
              >
              </v-text-field>
            </v-col>
            <v-col cols="4" sm="2" align-self="end">
              <v-btn-toggle
                mandatory
                v-model="toggle"
                class="float-right d-none d-sm-flex"
                color="blue"
              >
                <v-btn icon="mdi-apps" value="card"></v-btn>
                <v-btn
                  icon="mdi-format-list-bulleted-square"
                  value="list"
                ></v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid v-if="toggle === 'card'">
          <v-row dense>
            <v-col
              v-for="item in items"
              :key="item.title"
              cols="12"
              sm="6"
              md="6"
              lg="4"
            >
              <v-card
                class="mb-6 rounded-xl"
                border
                flat
                style="border: 1px solid gray"
              >
                <v-list-item>
                  <v-banner
                    class="text-h6"
                    :avatar="item.raw.image"
                    lines="one"
                    :text="item.raw.nomEntreprise"
                  ></v-banner>
                  <v-banner class="text-h6" lines="one" :text="item.raw.titre">
                  </v-banner>
                  <v-banner
                    lines="three"
                    :text="item.raw.description"
                  ></v-banner>
                  <div class="d-flex justify-space-around mt-3">
                    <p>
                      <v-icon class="me-2">mdi-calendar-range</v-icon
                      >{{ item.raw.date_creation.split("T")[0] }}
                    </p>
                    <p>
                      <v-icon>mdi-google-maps</v-icon>{{ item.raw.position }}
                    </p>
                  </div>
                  <div class="float-right">
                    <DialogDetail :obj="item" />
                  </div>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-else class="pa-2" value="list">
          <v-row dense>
            <v-col
              v-for="item in items"
              :key="item.title"
              cols="12"
              sm="10"
              class="mx-auto"
            >
              <v-card class="mb-6 rounded-shaped" border>
                <v-list-item class="mb-2">
                  <v-banner
                    class="text-h6"
                    :avatar="item.raw.image"
                    lines="one"
                    :text="item.raw.nomEntreprise"
                  ></v-banner>
                  <v-banner class="text-h6" lines="one" :text="item.raw.titre">
                  </v-banner>
                  <v-banner
                    lines="three"
                    :text="item.raw.description"
                  ></v-banner>
                  <div class="d-flex justify-space-between mt-3">
                    <p>
                      <v-icon class="me-2">mdi-calendar-range</v-icon
                      >{{ item.raw.date_creation.split("T")[0] }}
                    </p>
                    <p>
                      <v-icon>mdi-google-maps</v-icon>{{ item.raw.position }}
                    </p>
                    <div class="float-right">
                      <DialogDetail :obj="item" />
                    </div>
                  </div>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} sur {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>
<style lang=""></style>

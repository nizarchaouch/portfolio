<script>
import NavBar from "@/components/public/NavBar.vue";
import SideBar from "@/components/user/recruteur/SideBar.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: { NavBar, SideBar },
  computed: {
    ...mapState(["user", "offer"]),
    ...mapGetters(["offerCount", "latestOffers"]),
    userData() {
      return this.user.userData;
    },
    offerData() {
      return this.offer.offerData;
    },
  },
  data() {
    return {
      drawer: true,
      loading: false,
      search: "",
      sortBy: [{ key: "date_creation", order: "asc" }],
      headers: [
        {
          key: "titre",
          title: "Emploi",
        },
        { key: "date_creation", title: "Date de création" },
        { key: "Applications", title: "Applications" },
        { key: "Action", title: "Action", sortable: false },
      ],
    };
  },
  methods: { ...mapActions(["userAuth", "showOfferRec"]) },
  mounted() {
    this.userAuth();
    setTimeout(() => {
      this.showOfferRec(this.user.userData._id);
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
  <NavBar :hidea="' '" />
  <SideBar />
  <v-container fluid class="bg-white h-screen">
    <v-col cols="12" lg="10" offset-lg="1">
      <v-row class="mt-12">
        <v-col cols="12" offset-lg="1">
          <v-card flat>
            <v-card-title class="d-flex align-center pe-2">
              <h3 class="mb-6 mt-2">
                Mes emplois
                <span class="text-grey-darken-2">({{ offerCount }})</span>
              </h3>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="Titre d'emploi, description etc..."
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
              ></v-text-field>
            </v-card-title>

            <v-data-table
              v-model:sort-by="sortBy"
              :loading="loading"
              :headers="headers"
              :items="offerData"
              :search="search"
              hover
              style="border: 1px solid #e0e0e0"
            >
              <template
                v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }"
              >
                <tr class="bg-blue-lighten-4">
                  <template v-for="column in columns" :key="column.key">
                    <td>
                      <span
                        class="ms-3 cursor-pointer"
                        @click="() => toggleSort(column)"
                        >{{ column.title }}</span
                      >
                      <template v-if="isSorted(column)">
                        <v-icon :icon="getSortIcon(column)"></v-icon>
                      </template>
                    </td>
                  </template>
                </tr>
              </template>
              <!--  -->
              <template v-slot:item="{ item }">
                <tr>
                  <td
                    class="text-subtitle-1 font-weight-bold"
                    
                  >
                    {{ item.titre }}
                  </td>
                  <td class="text-subtitle-1" style="width: 15%">
                    Publié: {{ item.date_creation.split("T")[0] }}
                  </td>
                  <td class="text-subtitle-1 text-medium-emphasis" style="width: 15%">
                    <v-icon>mdi-account-multiple</v-icon>
                    {{ item.applications }} 4 Applications
                  </td>
                  <td style="width: 10%">
                    <div class="d-flex">
                      <!-- btn voir candidats -->
                      <v-btn
                        class="pa-3 ma-3 text-none responsive-"
                        width="282"
                        height="51"
                        variant="tonal"
                        color="light-blue-darken-4"
                      >
                        <p class="text-subtitle-1 font-weight-bold">
                          Voir les candidatures
                        </p>
                      </v-btn>
                      <!-- setting -->
                      <v-btn variant="plain" class="float-end mt-4">
                        <v-icon size="30">mdi-cog-outline</v-icon>
                        <v-menu activator="parent">
                          <v-list>
                            <v-list-item
                              link
                              title="Voir les détails"
                              prepend-icon="mdi-eye"
                            ></v-list-item>
                            <v-list-item
                              link
                              title="Modifier"
                              prepend-icon="mdi-pencil"
                            ></v-list-item>
                            <v-list-item
                              link
                              title="Supprimer"
                              prepend-icon="mdi-delete-empty"
                            ></v-list-item>
                          </v-list>
                        </v-menu>
                      </v-btn>
                    </div>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<style lang="scss" scoped>
@media (max-width: 1727px) {
  .responsive-btn {
    width: 28px !important; /* Full width on mobile */
    height: 40px !important; /* Adjust height on mobile */
  }
}
@media (min-width: 1729px) {
  .responsive-btn {
    width: 282px !important; /* Default width */
    height: 51px !important; /* Default height */
  }
}
</style>

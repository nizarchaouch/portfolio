<script>
import DialogDetail from "@/components/offer/DialogDetail.vue";
import NavBar from "@/components/public/NavBar.vue";
import { mapActions } from "vuex";
export default {
  name: "offer",
  components: {
    NavBar,
    DialogDetail,
  },
  data: () => ({
    toggle: "card",
    search: "",
    tab: 1,
    selectedOBJ: null,
    offer: [
      {
        nomRec: "SWConsulting",
        title: "Conception et développement plateforme web generate portfolio",
        description:
          "Esse sunt eiusmod commodo consectetur proident anim cillum velit mollit et elit cupidatat. Aliqua proident irure fugiat qui ad quis officia mollit consequat ex occaecat mollit. Minim veniam ex adipisicing non. Cillum minim magna ea aliquip ullamco. Sint eu amet eu occaecat esse ea Lorem culpa ea sit anim laborum nisi labore. Velit eiusmod ullamco Lorem aliquip deserunt deserunt.",
        date: "2022/06/20",
        local: "tunisie,tunisie",
        image:
          "https://www.keejob.com/media/recruiter/recruiter_17844/logo-17844-20190306-104839.jpg",
      },
      {
        nomRec: "Recruteur 2",
        title: "Title 2",
        description:
          "Reprehenderit do tempor Lorem do in sint cupidatat in Lorem nisi elit. Reprehenderit ut excepteur ea velit nisi mollit exercitation eu. Consequat sit velit quis enim minim irure dolore incididunt do qui eiusmod esse ad ex. Fugiat nostrud laboris nulla magna fugiat sit velit ad irure. Veniam nisi deserunt aute commodo mollit quis sit nostrud aliqua laboris quis et id.",
        date: "2022/06/20",
        local: "tunisie",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        nomRec: "Recruteur 3",
        title: "Title 3",
        description:
          "Consectetur Lorem aliqua eiusmod aute adipisicing nostrud est. Exercitation eiusmod nulla anim deserunt non eiusmod quis officia pariatur sit aute dolor. Deserunt aliqua qui mollit voluptate tempor pariatur. Nulla minim non culpa ipsum do aliquip. Sint anim officia amet in veniam nostrud pariatur voluptate occaecat excepteur duis irure nostrud.",
        date: "2022/06/20",
        local: "tunisie",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        nomRec: "Recruteur 4",
        title: "Title 4",
        description:
          "Laborum commodo nisi consequat enim culpa consequat dolore qui. Do do et ad culpa veniam irure eiusmod cupidatat incididunt. Reprehenderit do ex enim ad pariatur qui culpa Lorem duis consequat laboris eiusmod non esse. Et Lorem adipisicing ipsum et exercitation proident pariatur. Commodo irure ex ullamco qui adipisicing sint aliqua.",
        date: "2022/06/20",
        local: "tunisie",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        nomRec: "Recruteur 5",
        title: "Title 5",
        description:
          "Est do non quis veniam consequat exercitation deserunt mollit est id. Non consectetur cupidatat incididunt pariatur reprehenderit ut quis sit velit occaecat. Proident dolor nostrud nisi officia et.",
        date: "2022/06/20",
        local: "tunisie",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        nomRec: "Recruteur 6",
        title: "Title 6",
        description:
          "Occaecat sint officia minim et duis quis Lorem nisi labore et esse eu. Laborum nisi enim proident excepteur laborum deserunt elit velit fugiat. Mollit in Lorem fugiat sunt laboris cillum magna aute commodo nostrud.",
        date: "2022/06/20",
        local: "tunisie",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        nomRec: "Recruteur 7",
        title: "Title 7",
        description:
          "Aute est et ad sint est ut laboris qui dolor sunt. Dolor quis magna eu eu qui cillum aliquip eu ea. Cupidatat reprehenderit pariatur adipisicing sunt ut ex. Do est do irure consequat aliquip consectetur.",
        date: "2022/06/20",
        local: "tunisie",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        nomRec: "Recruteur 8",
        title: "Title 8",
        description:
          "Id velit esse deserunt reprehenderit veniam. Enim cillum velit aliqua voluptate culpa. Consequat esse deserunt officia enim minim. Irure anim consectetur ad aliquip consectetur occaecat minim cillum aliquip in elit officia ut nostrud. Aute non dolor eu Lorem. Culpa cillum amet ut ipsum id ullamco sunt tempor laboris veniam tempor nulla.",
        date: "2022/06/20",
        local: "tunisie",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
    ],
  }),
  methods: {
    ...mapActions(["userAuth"]),
  },
  mounted() {
    this.userAuth();
  },
};
</script>

<template>
  <NavBar />
  <v-card class="mt-16 bg-transparent">
    <v-data-iterator :items="offer" :items-per-page="6" :search="search">
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
                placeholder="Mots Clés"
                prepend-inner-icon="mdi-magnify"
                variant="solo"
                clearable
                hide-details
              ></v-text-field>
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
              <v-card class="mb-6 rounded-shaped" border flat>
                <v-list-item>
                  <v-banner
                    class="text-h6"
                    :avatar="item.raw.image"
                    lines="one"
                    :text="item.raw.nomRec"
                  ></v-banner>
                  <v-banner class="text-h6" lines="one" :text="item.raw.title">
                  </v-banner>
                  <v-banner
                    lines="three"
                    :text="item.raw.description"
                  ></v-banner>
                  <div class="d-flex justify-space-around mt-3">
                    <p>
                      <v-icon>mdi-calendar-range</v-icon>{{ item.raw.date }}
                    </p>
                    <p><v-icon>mdi-google-maps</v-icon>{{ item.raw.local }}</p>
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
                    :text="item.raw.nomRec"
                  ></v-banner>
                  <v-banner class="text-h6" lines="one" :text="item.raw.title">
                  </v-banner>
                  <v-banner
                    lines="three"
                    :text="item.raw.description"
                  ></v-banner>
                  <div class="d-flex justify-space-between mt-3">
                    <p>
                      {{ item.raw.date }}
                    </p>
                    <p><v-icon>mdi-google-maps</v-icon>{{ item.raw.local }}</p>
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

<script>
/* eslint-disable */
import iconNotf from "@/assets/not.png";
export default {
  data: () => ({
    iconNotf: iconNotf,
    menu: false,
    count: 10,
    Badge: false,
  }),
  created() {
    if (this.count > 0) {
      this.Badge = true;
    }
  },
};
</script>
<template>
  <div class="me-5">
    <v-menu v-model="menu" max-width="500px" rounded location="end">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon>
          <v-badge color="error" :content="count" max="9" v-model="Badge">
            <v-icon icon="mdi-bell" size="small"></v-icon>
          </v-badge>
          <v-tooltip
            activator="parent"
            location="bottom"
            text="Notfication"
          ></v-tooltip>
        </v-btn>
      </template>

      <v-card v-if="Badge">
        <v-banner
          v-for="n in count"
          :key="n"
          avatar="https://randomuser.me/api/portraits/women/8.jpg"
          lines="three"
          :stacked="false"
        >
          <template v-slot:text>
            <p>2024-02-20</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </template>
          <template v-slot:actions>
            <v-btn color="primary" class="text-none">Voir</v-btn>
          </template>
        </v-banner>
      </v-card>
      <v-card v-else>
        <v-img
          :width="160"
          aspect-ratio="16/9"
          class="mx-auto ma-16"
          cover
          :src="iconNotf"
        ></v-img>
        <div class="d-flex justify-center">
          <p class="text-h5">Recevoir vos notifications</p>
        </div>
        <div class="d-flex justify-center">
          <p class="text-center mx-16 my-4">
            Retrouvez toutes les notifications de réponses des recruteurs ici
          </p>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>
<style lang=""></style>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";
import LTN from "./bloc/navbar/LTN.vue";
import NTL from "./bloc/navbar/NTL.vue";
import CardText from "./bloc/entete/CardText.vue";
import ITTB from "./bloc/entete/ITTB.vue";
import TTBI from "./bloc/entete/TTBI.vue";
export default {
  components: {
    CardText,
    LTN,
    NTL,
    ITTB,
    TTBI,
  },
  computed: {
    ...mapState(["portfolio"]),
  },
  data: () => ({}),
  methods: {
    ...mapActions([""]),
    ...mapMutations([""]),
  },
};
</script>

<template>
  <!-- <div v-if="selectedPage">
    <div>
      {{ selectedPage.bloc }}
    </div>
  </div> -->
  <LTN />
  <!-- <NTL /> -->
  <CardText />
  <TTBI />
  <ITTB />
</template>

<style lang="scss" scoped></style>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";
import CardText from "./bloc/entete/CardText.vue";
import ITTB from "./bloc/entete/ITTB.vue";
import TTBI from "./bloc/entete/TTBI.vue";
import LTN from "./bloc/navbar/LTN.vue";
export default {
  components: {
    CardText,
    LTN,
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
  <CardText />
  <TTBI />
  <ITTB />
</template>

<style lang="scss" scoped></style>

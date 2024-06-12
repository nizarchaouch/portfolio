<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["candidat"]),
  },
  data: () => ({
    tab: null,
  }),
  methods: {
    ...mapMutations(["addElement"]),
  },
};
</script>
<template>
  <v-row no-gutters>
    <v-col cols="12">
     zzzzz
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>

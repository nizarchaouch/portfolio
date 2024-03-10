<script>
export default {
  props: {
    label: String,
    placeholder: String,
    type: String
  },
  data() {
    return {
      name:""
    }
  },
};
</script>
<template>
  <v-col cols="auto" sm="6">
    <v-text-field :label="label" :placeholder="placeholder" :type="type" class="me-2" v-model="name"></v-text-field>
  </v-col>
</template>

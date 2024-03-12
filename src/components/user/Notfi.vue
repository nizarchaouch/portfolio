<script>
export default {
  data: () => ({
    menu: false,
  }),
};
</script>
<template>
  <div class="me-5">
    <v-menu v-model="menu" max-width="500px" rounded location="end">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon>
          <v-badge color="error" :content="1">
            <v-icon icon="mdi-bell"></v-icon>
          </v-badge>
          <v-tooltip activator="parent" location="bottom">Notfication</v-tooltip>
        </v-btn>
      </template>

      <v-card>
        <v-banner
          v-for="n in 30"
          :key="n"
          avatar="https://randomuser.me/api/portraits/women/8.jpg"
          lines="two"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
          :stacked="false"
        >
          <template v-slot:actions>
            <v-btn color="primary" class="text-none">Voir</v-btn>
          </template>
        </v-banner>
      </v-card>
    </v-menu>
  </div>
</template>
<style lang=""></style>

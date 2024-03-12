<script>
import NavBar from "@/components/public/NavBar.vue";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    NavBar,
  },
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
  <div style="margin-top: 140px">
    <v-sheet
      class="mx-auto px-16 hidden-xs"
      min-height="200"
      max-width="1200"
      color="transparent"
    >
      <h1 class="text-h3 font-weight-black text-center">
        Créer un <span>portfolio d'exception</span> et trouvez des opportunités
      </h1>
      <v-sheet
        class="mx-auto mt-5 hidden-xs text-h6 text-center"
        max-width="1000"
        color="#FFFFFF00"
      >
        Bienvenue sur portfolio xception, la platform ultime pour créer un
        portefeuille professionnel et explorer des possibilités de carrière
        exceptionnelles, offrant une expérience utilisateur intuitive et
        conviviale. <br />
        <v-btn
          color="success"
          elevation="10"
          size="x-large"
          class="text-none ma-6 btn"
          rounded="xl"
          to="signup"
          >Créer maintenant</v-btn
        >
      </v-sheet>
      <v-sheet class="mx-auto" min-height="auto" :elevation="24" rounded>
        <v-img
          cover
          aspect-ratio="4/3"
          min_height="auto"
          rounded
          src="https://zyro.com/cdn-cgi/image/w=1920,q=85,f=auto/images/portfolioWebsite/shop-template.png"
        ></v-img>
      </v-sheet>
    </v-sheet>
    <!-- ddd -->
    <v-sheet
      class="mx-auto px-16 hidden-xs"
      min-height="200"
      max-width="1200"
      color="transparent"
    >
      <h1 class="text-h3 font-weight-black text-center">
        Créer un <span>portfolio d'exception</span> et trouvez des opportunités
      </h1>
      <v-sheet
        class="mx-auto mt-5 hidden-xs text-h6 text-center"
        max-width="1000"
        color="#FFFFFF00"
      >
        Bienvenue sur portfolio xception, la platform ultime pour créer un
        portefeuille professionnel et explorer des possibilités de carrière
        exceptionnelles, offrant une expérience utilisateur intuitive et
        conviviale. <br />
        <v-btn
          color="success"
          elevation="10"
          size="x-large"
          class="text-none ma-6 btn"
          rounded="xl"
          to="signup"
          >Créer maintenant</v-btn
        >
      </v-sheet>
      <v-sheet
        class="mx-auto px-16"
        min-height="auto"
        color="#FFFFFF00"
        :elevation="24"
        rounded
      >
        <v-img
          cover
          aspect-ratio="4/3"
          min_height="auto"
          lazy-src="https://zyro.com/cdn-cgi/image/w=1920,q=85,f=auto/images/portfolioWebsite/shop-template.png"
          src="https://zyro.com/cdn-cgi/image/w=1920,q=85,f=auto/images/portfolioWebsite/shop-template.png"
        ></v-img>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
span {
  background-image: linear-gradient(45deg, #d2001a, #7462ff, #f84e21, #23d5ab);
  color: transparent;
  background-clip: text;
  background-size: 400% 400%;
  animation: color 30s ease infinite;
}
.btn {
  background-image: linear-gradient(15deg, #d2001a, #7462ff, #f84e21);
  background-size: 300% 300%;
  animation: color 5s ease-in-out infinite;
  @keyframes color {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
}
</style>

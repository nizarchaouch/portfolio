<script>
import NavBar from "@/components/public/NavBar.vue";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    NavBar,
  },
  data() {
    return {
      data: {
        items: [
          {
            sub: "AUCUN CODAGE REQUIS",
            title: "La façon la plus facile pour créer votre propre site web",
            desc: "Tous les créateurs de sites web les plus simples utilisent la technologie du glisser-déposer. Chez Portfolio xception, nous avons mis au point un système de grille innovant qui vous permet de modifier facilement les mises en page préconçues sur ordinateur ou sur mobile à votre convenance. Le processus de création de sites web n'a jamais été aussi simple.",
          },
          {
            sub: "templates gratuits",
            title: "Des templates de portfolio conçus pour vous démarquer",
            desc: "Gagnez du temps et choisissez l'un de nos 900 templates gratuits, personnalisables et élaborés stratégiquement pour chaque domaine d'activité. Vous pouvez également choisir d'utiliser un canvas vierge pour commencer à créer votre site.",
          },
          {
            sub: " portfolio créés sans effort",
            title: "Des portfolios créés sans effort",
            desc: "Créer un portfolio à votre image, avec toutes les fonctionnalités dont vous avez besoin et présenter votre travail, les possibilités sont infinies.",
          },
        ],
      },
    };
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
      class="mx-auto px-16"
      min-height="200"
      max-width="1200"
      color="transparent"
    >
      <h1 class="text-h3 font-weight-black text-center">
        Créer un <span>portfolio d'exception</span> et trouvez des opportunités
      </h1>
      <v-sheet
        class="mx-auto mt-5 text-h6 text-center"
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
  </div>
  <div>
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="9">
          <h1 class="text-h4 font-weight-black text-center mt-14">
            Créer un portfolio à votre image avec toutes les fonctionnalités
            dont vous avez besoin.
          </h1>
          <p class="text-caption"></p>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="auto" v-for="(item, index) in data.items" :key="index">
          <v-sheet
            min-height="330"
            max-width="450"
            border
            rounded
            color="transparent"
          >
            <div class="pa-2">
              <p class="text-caption text-disabled text-uppercase ma-2 pa-2">
                {{ item.sub }}
              </p>
              <h3 class="pa-2">{{ item.title }}</h3>
              <p class="pa-2">
                {{ item.desc }}
              </p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
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

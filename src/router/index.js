import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/LoginView.vue";
import Signup from "@/views/SignupView";
import ProfilView from "@/views/candidat/profil/ProfilView.vue";
import TemplateView from "@/views/TemplateView.vue";
import OfferView from "@/views/OfferView.vue";
import PortfolioView from "@/views/candidat/portfolio/PortfolioView.vue";
import CandidatureView from "@/views/candidat/CandidatureView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/profil",
    name: "profil",
    component: ProfilView,
  },
  {
    path: "/template",
    name: "template",
    component: TemplateView,
  },
  {
    path: "/offer",
    name: "offer",
    component: OfferView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/candidature",
    name: "candidature",
    component: CandidatureView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

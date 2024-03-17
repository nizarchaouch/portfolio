import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/LoginView.vue";
import Signup from "@/views/SignupView";
import ProfilView from "@/views/candidat/ProfilView.vue";
import TemplateView from "@/views/TemplateView.vue";

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
    path:"/template",
    name:"template",
    component:TemplateView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

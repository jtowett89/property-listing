import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/HomePage.vue";
import ViewDetails from "./components/pages/ViewDetails.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/view-details/:id",
    component: ViewDetails,
    props: true // Pass route params as props
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

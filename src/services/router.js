import Vue from "vue";
import Router from "vue-router";

import Home from "@/Home";
import Content from "@/Content";
import Login from "@/components/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },

    {
      path: "/content",
      component: Content,
      name: "content",
    },
  ],
});

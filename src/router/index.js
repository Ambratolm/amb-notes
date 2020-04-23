//==============================================================================
// ■ Router (router/index.js)
//------------------------------------------------------------------------------
//     Router main entry point.
//==============================================================================
import Vue from "vue";

//------------------------------------------------------------------------------
// ● Vue-Router
//------------------------------------------------------------------------------
import VueRouter from "vue-router";
Vue.use(VueRouter);

//------------------------------------------------------------------------------
// ● Router
//------------------------------------------------------------------------------
import routes from "./routes";
const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  scrollBehavior(/* to, from, savedPosition */) {
    return { x: 0, y: 0 };
  }
});

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
export default router;

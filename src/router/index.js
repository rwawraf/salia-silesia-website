import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogCardCollection from "../views/BlogCardCollection.vue";
import ViewBlogPost from "../views/ViewBlogPost.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/posts",
    name: "Posts",
    component: BlogCardCollection,
    meta: {
      title: 'Beiträge'
    }
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlogPost",
    component: ViewBlogPost,
    meta: {
      title: 'View Blog'
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | AV Salia Silesia`;
  next();
});

export default router;

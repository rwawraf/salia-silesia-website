import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Program from "../views/Program.vue";
import Contact from "../views/Contact.vue";
import BlogCardCollection from "../views/BlogCardCollection.vue";
import ViewBlogPost from "../views/ViewBlogPost.vue";
import i18n from '../i18n';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: `/:lang`,
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: 'Home'
        }
      },
      {
        path: "program",
        name: "Program",
        component: Program,
        meta: {
          title: 'Program'
        }
      },
      {
        path: "posts",
        name: "Posts",
        component: BlogCardCollection,
        meta: {
          title: 'Posts'
        }
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
        meta: {
          title: 'Contact'
        }
      },
      {
        path: "view-blog/:blogid",
        name: "ViewBlogPost",
        component: ViewBlogPost,
        meta: {
          title: 'View Blog',
        },
      },
    ]
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

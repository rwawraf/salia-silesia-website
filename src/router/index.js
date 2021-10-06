import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import i18n from '../i18n';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: i18n.locale
  },
  {
    path: `/:lang(de|pl)`,
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
        component: () => import(/* webpackChunkName: "program" */ '../views/Program.vue'),
        meta: {
          title: 'Program'
        }
      },
      {
        path: "posts",
        name: "Posts",
        component: () => import(/* webpackChunkName: "blogCardCollection" */ '../views/BlogCardCollection.vue'),
        meta: {
          title: 'Posts'
        }
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
        meta: {
          title: 'Contact'
        }
      },
      {
        path: "view-blog/:blogid",
        name: "ViewBlogPost",
        component: () => import(/* webpackChunkName: "viewBlogPost" */ '../views/ViewBlogPost.vue'),
        meta: {
          title: 'View Blog',
        },
      },
    ]
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "notFound" */ "../views/NotFound"),
    meta: {
      title: 'Not Found',
    }
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { 
      x: 0, y: 0,
      behavior: 'instant' 
    }
  },
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | AV Salia Silesia`;
  next();
});

export default router;

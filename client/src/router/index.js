import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddItem.vue'
import Items from '../views/Items.vue'
import EditItems from '../views/EditItems.vue'
import login from '../views/Login.vue'
import register from '../views/Inscription.vue'
import profile from '../views/Profile.vue'
import store from '../store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'mesObjets',
    component: Home
  },
  {
    path: '/add',
    name: 'Ajouter',
    component: Add,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/items/:id',
    name: 'items',
    component: Items,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/edit/:id',
    name: 'edit',
    component: EditItems
  },

  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresGuest: true
    }
  },

  {
    path: '/register',
    name: 'register',
    component: register,  
    meta: {
      requiresGuest: true
    }
  },

  {
    path: '/profile',
    name: 'profile',
    component: profile,  
    meta: {
      requiresAuth: true
    }
  }
]

});

// imporrible d'ouvrir la page profil sans compte
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
    }
});


export default router

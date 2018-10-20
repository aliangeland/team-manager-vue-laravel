import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['./../components/login/LoginComponent.vue'], resolve)
      }
    },
    {
      path: '/register',
      name: 'register',
      component: function (resolve) {
        require(['./../components/register/RegisterComponent.vue'], resolve)
      }
    },
    {
       path: '/',
       name: 'dashboard',
       component: function (resolve) {
           require(['./../components/dashboard/DashboardComponent.vue'], resolve)
       },
       beforeEnter: guardRoute
    },
    {
       name: "team",
       path: "/team/:teamId",
       props: true,
       component: function (resolve) {
           require(['./../components/team/TeamComponent.vue'], resolve)
       },
       beforeEnter: guardRoute
    },
  ]
})

function guardRoute (to, from, next) {
  // work-around to get to the Vuex store (as of Vue 2.0)
  const auth = router.app.$options.store.state.auth

  if (!auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default router

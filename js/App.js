const app = Vue.createApp();

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActive',
  routes,
})
app.use(router);

app.component('app-header', Header);

app.mount('#app');

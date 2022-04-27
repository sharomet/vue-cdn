const app = Vue.createApp();

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActive',
  routes,
})
app.use(router);

app.mount('#app');

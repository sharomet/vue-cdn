const app = Vue.createApp();

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActive',
  routes,
})
app.use(router);

app.component('app-header', Header);
app.component('user-list', UserList);
app.component('user-list-item', UserListItem);

app.mount('#app');

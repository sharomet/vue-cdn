const AppRouter = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: "",
        redirect: {
          name: "dashboard",
        },
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "users",
        name: "users",
        component: UsersPage
      }
    ]
  }
];

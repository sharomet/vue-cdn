const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: "",
        redirect: {
          name: "login",
        },
      },
      {
        path: "login",
        name: "login",
        component: LoginPage,
      },
      {
        path: "register",
        name: "register",
        component: RegisterPage,
      }
    ]
  },
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
]

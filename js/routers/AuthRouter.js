const AuthRouter = [
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
  }
];

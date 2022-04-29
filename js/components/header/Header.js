const Header = {
  template: `
    <header class="header">
      <nav class="header__nav">
        <ul class="header__nav">
          <li
            v-for="(menuItem, index) in menu"
            :key="index"
            :class="{ active: $route.path === menuItem.url }"
          >
            <router-link :to="menuItem.url">
              {{ menuItem.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  `,
  data() {
    return {
      menu: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Users",
          url: "/users",
        },
        {
          title: "logout",
          url: "/auth/login",
        },
      ],
    }
  }
}

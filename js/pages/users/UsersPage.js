const UsersPage = {
  template: `
    <h1>Users</h1>
    <select @change="onChangeUserLimit($event)">
      <option
        v-for="(item, index) in selectLimitUser"
        :key="index"
        :value="item.value"
       >
        {{ item.text }}
      </option>
    </select>
    <table class="table" v-if="users">
      <thead>
        <tr>
          <th style="width:50px">#</th>
          <th>Firs Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  `,
  mounted() {
    this.getAllUsers();
  },
  data() {
    return {
      users: [],
      limit: 10,
      selectLimitUser: [
        { value: 10, text: 10 },
        { value: 20, text: 20 },
        { value: 30, text: 30 },
        { value: 40, text: 40 },
        { value: 50, text: 50 }
      ]
    }
  },
  methods: {
    async getAllUsers() {
      await fetch(`${API_URL}/users/?_limit=${this.limit}`)
        .then(res => res.json())
        .then(users => this.users = users)
        .catch(error => console.log('getAllUsers:', error))
    },
    onChangeUserLimit({ target: { value } }) {
      this.limit = value;
      this.getAllUsers();
    }
  }
}
const UserList = {
  template: `
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
        <user-list-item
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :firstName="user.first_name"
          :lastName="user.first_last"
          :email="user.email"
        />
      </tbody>
    </table>
  `,
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
  mounted() {
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      this.users = await fetchData(`users/?_limit=${this.limit}`)
    },
    onChangeUserLimit({ target: { value } }) {
      this.limit = value;
      this.getAllUsers();
    }
  }
}
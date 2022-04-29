const UserListItem = {
  template: `
    <tr>
      <td>{{ id }}</td>
      <td>{{ firstName }}</td>
      <td>{{ lastName }}</td>
      <td>{{ email }}</td>
    </tr>
  `,
  props: {
    id: {
      id: Number
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    }
  }
}
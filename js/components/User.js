class User {
  constructor(id, email) {
    this.email = email;
    this.id = id;
    return { id, email }
  }
}

export default User;
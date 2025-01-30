// User.js
class User {
  constructor(id, name, email, avatar) {
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }

  updateEmail(newEmail) {
    if (!newEmail.includes('@')) {
      throw new Error('Invalid email format');
    }
    this.email = newEmail;
  }

  getProfile() {
    return {
      name: this.name,
      email: this.email,
      avatar: this.avatar,
    };
  }
}

module.exports = User;

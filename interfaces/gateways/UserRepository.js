const { faker } = require('@faker-js/faker');

class UserRepository {
  async getAll(size) {
    // Fetch a list of users from the data source
    const users = [];
    for (let index = 0; index < (size || 10); index++) {
      users.push({
        id: faker.string.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
      });
    }
    return users;
  }

  async getById(id) {
    // Fetch a user by its ID from the data source
    return {
      id,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar()
    };
  }
}
module.exports = UserRepository;

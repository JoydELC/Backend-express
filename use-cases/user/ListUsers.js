// user/ListUsers.js
class ListUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(size) {
    return await this.userRepository.getAll(size);
  }
}
module.exports = ListUsers;

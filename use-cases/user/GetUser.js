// user/GetUser.js
class GetUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    return await this.userRepository.getById(id);
  }
}
module.exports = GetUser;

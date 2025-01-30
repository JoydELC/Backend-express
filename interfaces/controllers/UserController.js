// controllers/UserController.js
class UserController {
  constructor(listUsers, getUser, userPresenter) {
    this.listUsers = listUsers;
    this.getUser = getUser;
    this.userPresenter = userPresenter;
  }

  async handleListUsers(req, res) {
    const { size } = req.query;
    const users = await this.listUsers.execute(size);
    res.json(this.userPresenter.presentList(users));
  }

  async handleGetUser(req, res) {
    const { id } = req.params;
    const user = await this.getUser.execute(id);
    res.json(this.userPresenter.presentSingle(user));
  }
}
module.exports = UserController;

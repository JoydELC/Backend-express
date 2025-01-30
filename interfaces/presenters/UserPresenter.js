// presenters/UserPresenter.js
class UserPresenter {
  presentList(users) {
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    }));
  }

  presentSingle(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    };
  }
}
module.exports = UserPresenter;

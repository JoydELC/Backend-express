// presenters/CategoryPresenter.js
class CategoryPresenter {
  presentList(categories) {
    return categories.map(category => ({
      id: category.id,
      name: category.name
    }));
  }

  presentSingle(category) {
    return {
      id: category.id,
      name: category.name
    };
  }
}

module.exports =CategoryPresenter;

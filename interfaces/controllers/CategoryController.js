// controllers/CategoryController.js
class CategoryController {
  constructor(listCategories, getCategory, categoryPresenter) {
    this.listCategories = listCategories;
    this.getCategory = getCategory;
    this.categoryPresenter = categoryPresenter;
  }

  async handleListCategories(req, res) {
    const categories = await this.listCategories.execute();
    res.json(this.categoryPresenter.presentList(categories));
  }

  async handleGetCategory(req, res) {
    const { id } = req.params;
    const category = await this.getCategory.execute(id);
    res.json(this.categoryPresenter.presentSingle(category));
  }
}
module.exports = CategoryController;

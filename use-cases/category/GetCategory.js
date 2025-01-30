// category/GetCategory.js
class GetCategory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id) {
    return await this.categoryRepository.getById(id);
  }
}

module.exports = GetCategory;

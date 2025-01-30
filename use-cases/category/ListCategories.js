// category/ListCategories.js

class ListCategories {
  constructor(categoryRepository){
    this.categoryRepository = categoryRepository;
  }
  async execute(){
    return  await this.categoryRepository.getAll();
  }
}

module.exports = ListCategories;

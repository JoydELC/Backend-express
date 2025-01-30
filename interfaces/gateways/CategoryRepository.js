const { faker } = require('@faker-js/faker');

class CategoryRepository {
  async getAll() {
    // Fetch all categories from the data source (e.g., database, API)
    const categories = [
      { id: faker.string.uuid(), name: faker.commerce.department() },
      { id: faker.string.uuid(), name: faker.commerce.department() },
      { id: faker.string.uuid(), name: faker.commerce.department() },
      { id: faker.string.uuid(), name: faker.commerce.department() },
      { id: faker.string.uuid(), name: faker.commerce.department() }
    ];
    return categories;
  }

  async getById(id) {
    // Fetch a category by its ID from the data source
    return { id, name: faker.commerce.department() };
  }
}

module.exports = CategoryRepository;

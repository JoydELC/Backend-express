const { faker } = require('@faker-js/faker');

class ProductRepository {
  async getAll(size) {
    // Fetch a list of products from the data source
    const products = [];
    for (let index = 0; index < (size || 10); index++) {
      products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image: faker.image.url()
      });
    }
    return products;
  }

  async getById(id) {
    // Fetch a product by its ID from the data source
    return {
      id,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.url()
    };
  }

  async create(product) {
    // Create a new product in the data source
    return {
      id: faker.string.uuid(),
      ...product,
      createdAt: new Date()
    };
  }

  async update(id, updates) {
    // Update an existing product in the data source
    return {
      id,
      data: updates,
      message: 'updated'
    };
  }

  async delete(id) {
    // Delete a product from the data source
    return { id, message: 'deleted' };
  }
}

module.exports = ProductRepository;

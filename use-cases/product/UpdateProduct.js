// product/UpdateProduct.js
class UpdateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id, updates) {
    return await this.productRepository.update(id, updates);
  }
}

module.exports = UpdateProduct;

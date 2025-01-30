// product/ListProducts.js
class ListProducts {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(size) {
    return await this.productRepository.getAll(size);
  }
}
module.exports = ListProducts;

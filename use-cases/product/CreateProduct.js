// product/CreateProduct.js
class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(product) {
    return await this.productRepository.create(product);
  }
}
module.exports = CreateProduct;

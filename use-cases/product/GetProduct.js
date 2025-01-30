// product/GetProduct.js
class GetProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    return await this.productRepository.getById(id);
  }
}
module.exports = GetProduct;

// product/DeleteProduct.js
class DeleteProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    return await this.productRepository.delete(id);
  }
}
module.exports =DeleteProduct;

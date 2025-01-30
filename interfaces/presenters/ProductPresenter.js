// presenters/ProductPresenter.js
class ProductPresenter {
  presentList(products) {
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }));
  }

  presentSingle(product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    };
  }
}
module.exports = ProductPresenter;

// controllers/ProductController.js
class ProductController {
  constructor(listProducts, getProduct, createProduct, updateProduct, deleteProduct, productPresenter) {
    this.listProducts = listProducts;
    this.getProduct = getProduct;
    this.createProduct = createProduct;
    this.updateProduct = updateProduct;
    this.deleteProduct = deleteProduct;
    this.productPresenter = productPresenter;
  }

  async handleListProducts(req, res) {
    const { size } = req.query;
    const products = await this.listProducts.execute(size);
    res.json(this.productPresenter.presentList(products));
  }

  async handleGetProduct(req, res) {
    const { id } = req.params;
    const product = await this.getProduct.execute(id);
    res.json(this.productPresenter.presentSingle(product));
  }

  async handleCreateProduct(req, res) {
    const { name, price, category } = req.body;
    const newProduct = await this.createProduct.execute({ name, price, category });
    res.status(201).json(this.productPresenter.presentSingle(newProduct));
  }

  async handleUpdateProduct(req, res) {
    const { id } = req.params;
    const updates = req.body;
    const updatedProduct = await this.updateProduct.execute(id, updates);
    res.json(this.productPresenter.presentSingle(updatedProduct));
  }

  async handleDeleteProduct(req, res) {
    const { id } = req.params;
    await this.deleteProduct.execute(id);
    res.json({ message: 'Product deleted' });
  }
}
module.exports = ProductController;

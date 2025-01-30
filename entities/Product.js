// Product.js
class Product {
  constructor(id, name, price, image){
    if(!id || !name || !price){
      throw new Error('Product must have an id, name, and price');
    }

    if(price < 0){
      throw new Error('Price cannot be negative');
    }

    this.id=id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

module.exports = Products;



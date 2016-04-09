function ProductsDAO(connection) {
    this._connection = connection;
}

ProductsDAO.prototype.listAll = function(callback) {
    this._connection.query("SELECT * FROM products", callback);
}

ProductsDAO.prototype.save = function(products, callback) {
    this._connection.query("INSERT INTO products VALUES($1, $2, $3, $4)",
        [4, products.title, products.description, products.price], callback);
}

module.exports = function() {
    return ProductsDAO;
}
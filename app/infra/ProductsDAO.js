function ProductsDAO(connection) {
    this._connection = connection;
}

ProductsDAO.prototype.listAll = function(callback) {
    this._connection.query("SELECT * FROM products", callback);
}

module.exports = function() {
    return ProductsDAO;
}
module.exports = {
    listAll: function(client, callback) {
        return client.query("SELECT * FROM products", callback);
    }
}
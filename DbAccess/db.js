var mssql = require("mssql");
var dbConfig = {
    user: 'sa',
    password: 'pass@123',
    server: 'localhost',
    database: 'SchoolDB',
    port: 1433,
    options: {
        encrypt: false
    }
};

var connection = mssql.connect(dbConfig, function (err) {
    if (err)
        throw err;
});

module.exports = connection; 
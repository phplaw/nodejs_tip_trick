//./app/util/database.js
var mysql = require('mysql');
var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'chanaka',
        database : 'shared_adult'
      });
      return pool;
    }
};

// index.js

var db = require('./app/util/database.js');
var pool = db.getPool(); // re-uses existing if already created or creates new one
pool.getConnection(function(err, connection) {
   // don't forget to check error
   connection.query('select 1+1', function(err, rows) {
     // don't forget to check error
     // ...
     // use your data - response from mysql is in rows    
   });
});

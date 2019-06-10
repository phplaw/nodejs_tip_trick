// SOURCE: https://www.codediesel.com/nodejs/mysql-transactions-in-nodejs/
// CREATE DATABASE AND TABLE
/*
CREATE TABLE IF NOT EXISTS `names` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(50) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
 
CREATE TABLE IF NOT EXISTS `log` (
  `logid` int(11) default NULL,
  `time` timestamp NOT NULL default CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
*/
// INSTALL MYSQL PACKAGE
//$ npm install mysql

var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'YOUR_USERNAME',
      password : 'YOUR_PASSWORD',
      database : 'DB_NAME'
    }
);
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
 
/* Begin transaction */
connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('INSERT INTO names SET name=?', "sameer", function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
    var log = result.insertId;
 
    connection.query('INSERT INTO log SET logid=?', log, function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  
      connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
    });
  });
});
/* End transaction */


Connection.prototype.commit = function commit(options, callback) {
    if (!callback && typeof options === 'function') {
        callback = options;
        options = {};
    }
    options = options || {};
    options.sql = 'COMMIT';
    options.values = null;
    return this.query(options, callback);
};

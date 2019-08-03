Math.floor(new Date().getTime()/1000.0); // to unix
var date = new Date(unix_timestamp*1000); // to js date
//  bluebirdjs and mysql
const connection = mysql.createConnection({.....});
global.db  = Bluebird.promisifyAll(connection);
db.queryAsync("SELECT * FROM users").then(function(rows){   
console.log(rows);});


// return (err ? reject(err) : resolve(data));
//https://github.com/lukeb-uk/node-promise-mysql
// http://knexjs.org

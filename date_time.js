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

// How to get start and end of day in Javascript?
var start = new Date();
start.setHours(0,0,0,0);

var end = new Date();
end.setHours(23,59,59,999);

alert( start.toUTCString() + ':' + end.toUTCString() );
// micro second unixtimestamp
alert( start.getTime() + ':' + end.getTime() );

// MomentJS
const start = moment().format('YYYY-MM-DD 00:00:01');
const end = moment().format('YYYY-MM-DD 23:59:59');

// add 30 minutes to current date
// https://www.tutorialspoint.com/How-to-add-30-minutes-to-a-JavaScript-Date-object
var dt = new Date();
dt.setMinutes( dt.getMinutes() + 30 );
document.write( dt );


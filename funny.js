typeof variable === 'undefined';
variable.constructor === Array;
Array.isArray(variable);
variable instanceof Array;
let x = [].concat([1,2,3,4];
                  
                  
const databases = {};
                  
databases.helpdesk = require('sqlagent/pg').connect('connetion-string-to-postgresql');
databases.eshop = require('sqlagent/mysql').connect('connetion-string-to-mysql');
databases.monitor = require('sqlagent/mongodb').connect('connetion-string-to-mongodb');


const DB = function(name) {
    // returns SQL Agent instance
    return databases[name]();
};


var helpdesk = DB('helpdesk');
helpdesk.select('tbl_user').take(5);
helpdesk.exec(console.log);

var eshop = DB('eshop');
eshop.select('tbl_user').take(5);
eshop.exec(console.log);

var monitor = DB('monitor');
monitor.select('users').take(5);
monitor.exec(console.log);

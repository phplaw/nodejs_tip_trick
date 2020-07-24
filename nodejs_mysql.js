var c = connection.query("select ?? from users where id = ?",[["id","fname","lname"],req.body.userid],function (err, rows) {
     console.log(c.sql)
});

/*

The difference between i++ and ++i is the value of the expression.

The value i++ is the value of i before the increment.
The value of ++i is the value of i after the increment.

Example:

var i = 42;
alert(i++); // shows 42
alert(i); // shows 43
i = 42;
alert(++i); // shows 43
alert(i); // shows 43
The i-- and --i operators works the same way.

*/

// insert

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

// INSERT WITH SET

 var post  = {id: 1, title: 'Hello MySQL'};
 var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
   // Neat!
 });
 console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

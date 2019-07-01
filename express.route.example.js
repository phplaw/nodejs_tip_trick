// file routes.js

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;

// end routes.js

// FILE: server.js

var express = require('Express');
var app = express();

var _routes = require('./routes.js');

//both index.js and things.js should be in same directory
app.use('/things', _routes);

app.listen(3000);

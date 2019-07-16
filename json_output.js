// FOR HTTP MODULE

var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});
app.listen(3000);

// > {"a":1}



/// Prettified:

var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }, null, 3));
});
app.listen(3000);

// >  {
// >     "a": 1
// >  }


// EXPRESS.JS

// 'json replacer' JSON replacer callback, null by default

// 'json spaces' JSON response spaces for formatting, defaults to 2 in development, 0 in production

app.set('json spaces', 40);

res.json({ a: 1 });
// https://blog.fullstacktraining.com/res-json-vs-res-send-vs-res-end-in-express

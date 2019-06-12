// What the point of using RegExp here? 
// Express patterns is simpler, yet almost as powerful as regular expressions:

let blog = {
list: () => {}
};

app.get('/blog(?:/p/:page([0-9]+)?)?', blog.list);

/*
This route will match all of the following urls:

/blog
/blog/
/blog/p
/blog/p/
/blog/p/123

In `blog.list` controller `req.params.page` will contain page number or will be undefined if it wasn't supplied.
Source: https://stackoverflow.com/questions/17807825/regex-in-expressjs-route
*/

app.get("/my-view", async (req, res) => {
    res.send(render("my-view", {data: await db.getData()}))
  })
  
  function render(view, ctx = {}) {
    return fs.readFileSync(`./views/${view}.html`) // WTF do I do with ctx?
  }



  // use lodash as template engine

  var compiled = _.template('hello ${ user }!');
compiled({ 'user': 'tommy' });
// => 'hello tommy!'



app.get("/my-view", async (req, res) => {
    res.send(render("my-view", {data: await db.getData()}))
  })
  
  function render(view, ctx = {}) {
    return _.template(fs.readFileSync(`./views/${view}.html`))(ctx)
  }
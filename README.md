# nodejs_tip_trick

### CORS on ExpressJS
```javascript
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

```
```php
header("Access-Control-Allow-Origin: *");
```
### CORS on IONIC
https://blog.ionicframework.com/handling-cors-issues-in-ionic/
https://stackoverflow.com/questions/41861105/handling-cors-issues-in-ionic?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

https://enable-cors.org/server.html

### ADD ENVIRONMENT VARIABLE
```bash
echo "export PROJECT_EVN=development" >> .bash_profile
source .bash_profile

--- output multiple line
echo -e "Hello \n Sonny";
```

```js
if(process.env.project_evn == 'development') {
            this.getHandler().use(function(req, res, next){
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
                // intercept OPTIONS method
                if ('OPTIONS' == req.method) {
                    res.send(200);
                }
                else {
                    next();
                }
            });
        }

```
### FORECE USER TO USE HTTPS
```javascript
var express = require('express');
var app = express();
app.use( function(req, res, next) {
        // force user to use https on PROD
        // if (!/https/.test(req.protocol)) res.redirect("https://" + req.headers.host + req.url);
        if (!req.secure
        && req.headers['x-forwarded-proto'] !== 'https'
        && process.env.NODE_ENV !== "development") {
            console.log('User is on http, going to force user to use https!');
            return res.redirect('https://' + req.get('host') + req.url);
        }
        next();
    }
);
```
### NODE_EVN environment variable
```bash
# Linux & OSX:
export NODE_ENV=production
# Windows:
SET NODE_ENV=production
# for all flatforms
NODE_ENV=production node myapp.js
```
Now It is time for use your environment variable in server code
```javascript
console.log(process.env);
console.log(process.env.PORT);
console.log(process.env.NODE_ENV); // production | development
// for easy to load env, we can just use this module https://www.npmjs.com/package/dotenv
// thick packgae will autoload .env file in root to env
/* @example .env file
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=s1mpl3
    */
// require('dotenv').config()
```
### TEMPLATE ENGINE

https://github.com/baryshev/ect [The best one]

https://odino.org/the-simplest-template-engine-for-nodejs/

https://mozilla.github.io/nunjucks/ `{% extends "base.html" %}`

https://github.com/Deathspike/template-benchmark Template benchmark
https://github.com/twigjs/twig.js

### NODE JS AWESOME PARKAGES

https://github.com/typicode/lowdb
https://www.npmjs.com/package/node-cache

### ISSUE WITH PERMISSION WHEN INSTALL PACKAGE WITH NPM
<a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions" target="_blank">Source</a>
```bash
sudo chown -R $USER /usr/local
sudo chown -R $(whoami) ~/.npm

sudo chown -R $USER /Users/sonnynguyen/.npm-global
```
### GIT CHECKOUT BRAND
```bash
git fetch && git checkout rc_force_https
```

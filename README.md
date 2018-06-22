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
### CORS on IONIC
https://blog.ionicframework.com/handling-cors-issues-in-ionic/

### ADD ENVIRONMENT VARIABLE
```bash
echo "export PROJECT_EVN=development" >> .bash_profile
source .bash_profile

--- output multiple line
echo -e "Hello \n Sonny";
```

```js
if(process.env.project_evn == 'development') {
            this.getHandler().use(function(req: any, res: any, next: any){
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

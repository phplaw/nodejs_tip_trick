### Tips & Tricks while using loop
```javascript
for (var i = 0, n = arr.length; i < n; i++){}
```
```javascript
var x = true;
while (x){
  if (condition_for_stop_loop) {
    x = false;
  }
// x = !condition();
}

// a custom method for foreach
function forEach(a, fn) { for (var i = 0, n = a.length; i < n; i++) fn(a[i]); }
```

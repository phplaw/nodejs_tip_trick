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

### Static variable in method
```javascript
function someFunc1(){
    if( !('staticVar' in someFunc1) )
        someFunc1.staticVar = 0 ;
    console.log(++someFunc1.staticVar) ;
}

someFunc1() ; //prints 1
someFunc1() ; //prints 2
someFunc1() ; //prints 3


// public && private
function MyClass () { // constructor function
  var privateVariable = "foo";  // Private variable 

  this.publicVariable = "bar";  // Public variable 

  this.privilegedMethod = function () {  // Public Method
    alert(privateVariable);
  };
}

// Instance method will be available to all instances but only load once in memory 
MyClass.prototype.publicMethod = function () {    
  alert(this.publicVariable);
};

// Static variable shared by all instances
MyClass.staticProperty = "baz";

var myInstance = new MyClass();

```
https://hackernoon.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7

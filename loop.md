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

### Bonus console.log tip & trick

```javascript
var user = {name: 'Mr. X', id: 4872, image: {src: 'some/source/4872.jpg', size: {x: 500, y: 500}}}

console.log('User "%s" (Id: %d) has this image: %o', user.name, user.id, user.image);
// style output with %c
var cStyle = {red: 'color: red;', bold: 'font-weight: 700;', clear: ''}
console.log(
  'User %c"%s"%c (Id: %d) has this image: %o',
  cStyle.red + cStyle.bold, // first %c
  user.name, // %s
  cStyle.clear, // second %c
  user.id, // %d
  user.image // %o
);

var people = [
{name: 'Marie', age: 26, id: 0},
{name: 'Hans', age: 30, id: 1},
{name: 'Franz', age: 34, id: 2},
{name: 'Susann', age: 31, id: 3}]
console.table(people);
// customer headings
console.table(people, ['name', 'age']);

// count number of execution
console.count('imageLoaded')

// timer

console.time('myTimer')
 // stuff happens
 console.timeEnd('myTimer')
 
 // debug
 console.trace('Something when wrong');
 
 // group
console.group('entering group', 1)
console.log('log entry in group 1')
console.group('entering group', 2)
console.log('log entry in group 2')
console.log('another log entry in group 2')
console.groupEnd()
console.log('another log entry in group 1')
console.groupEnd()


```
https://hackernoon.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7

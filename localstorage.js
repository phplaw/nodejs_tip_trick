var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

var animal = {
 name: 'Karl',
 type: 'cat',
 color: 'black',
 age: 7
};

//convert JSON animal into a string
var dehydratedAnimal = JSON.stringify(animal);

//save it with local storage
window.localStorage.setItem('animal', dehydratedAnimal);

//get 'animal' and rehydrate it  (convert it back JSON)
var rehydratedAnimal = JSON.parse(window.localStorage.getItem('animal'));

// REMOVE SPECIFIC ITEM
localStorage.removeItem('myCat');
// CLEAR ALL ITEM

// clear all items
localStorage.clear();

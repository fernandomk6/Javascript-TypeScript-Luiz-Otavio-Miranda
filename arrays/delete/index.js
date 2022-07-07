const myArray = [1, 2, 3];
const myObj = {name: 'fernando', age: 23};

console.log(myArray, myObj);
// [ 1, 2, 3 ] { name: 'fernando', age: 23 }

delete myArray[0];
delete myObj.name; // ou delete myObj['name'];

console.log(myArray, myObj);
// [ <1 empty item>, 2, 3 ] { age: 23 }
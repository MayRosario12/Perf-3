// Use concat() to join two arrays: arr1 = ["Cecile", "Lone"] and arr2 = ["Emil", "Tobias", "Linus"].
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const joinedArr = arr1.concat(arr2);
console.log(joinedArr);

// Use push() to add an element "Kiwi" to the array fruits = ["Banana", "Orange", "Apple", "Mango"].
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// Use unshift() to add two numbers 4 and 5 to the beginning of the array array1 = [1, 2, 3].
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

// Use pop() to remove the last element from the fruits array.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
console.log(fruits2);

// Use shift() to remove the first element from the array array2 = [1, 2, 3].
const array2 = [1, 2, 3];
array2.shift();
console.log(array2);

// Use sort() to sort the fruits array alphabetically.
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.sort();
console.log(fruits3);

// Use slice() to create a new array containing a portion of the fruits array.
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const slicedFruits = fruits4.slice(1, 3);
console.log(slicedFruits);

// Use splice() to insert and remove elements in the months array
const months = ["January", "March", "April", "June"];
months.splice(1, 0, "February"); // Insert "February" at index 1
console.log(months);
months.splice(5, 1); // Remove "June" at index 5
console.log(months);
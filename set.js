/*lets explore set in javascript.
consider the array below with alot of duplicates.

if we want to learn all the things that are unique.
we can use set in js
*/

let numbers = [1,3,4,3,3,2,3,5,32,5,32,3,5,2,23,32,2,2,2,3];

let newNums = [... new Set(numbers)]; /*[
    1,  3,  4, 2,
    5, 32, 23
  ]  this is the output that it will print.
  */
console.log(newNums);

//hence set is used with new operator and it was introduced in es6. 

console.log(new Set(numbers)) //Set(7) { 1, 3, 4, 2, 5, 32, 23 }

/*we can destructure an array into an object like below */

let fruits = ['apple','banana', 'pear','strawBerry','orange','mango'];
let {0:kashmir,
1:assam,
2:Tamil,
3:punjab,
4:jammu,
5:meerut
} = fruits;

console.log(assam); // this will print banana
console.log(kashmir) // this will print apple.




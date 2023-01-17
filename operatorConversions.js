//== type check nahee karta
//=== type b check karta hai.



console.log(1=='1') // true
console.log(1==='1') // false
console.log('' == 0); // true
console.log(''==undefined) // false
console.log(1==true)
console.log("amaeen"==true)// false
console.log([]==0); // true
console.log([1]==true) // true

console.log(null == undefined) // true

// so to get the jist of it... 
// there are various falsy values in Js. "",0,false, etc ar esome of these.
console.log(typeof(undefined));// undefined
console.log(typeof('')); //string
console.log(typeof(NaN)); //number
console.log(typeof(0)); //number
console.log(typeof(1)); // number
console.log(typeof(false)); // boolean
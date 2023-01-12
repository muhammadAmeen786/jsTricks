/* lets learn how to remove all the falsy values from an array.

let arr = arr.filter(Boolean);
*/


let arrOfNums = [1,3,24,12,3,NaN,0,false];
let booleans = arrOfNums.filter(bool);
function bool(i){
    if(!(i==0 || i==""|| i==NaN || i==undefined || i==null || i==false)){
        return i;
    }
}

console.log(booleans);
// simpler verion iss ka ye hai

console.log(arrOfNums.filter(Boolean)) // this is known as falsy bouncer.

/*both will produce the same output:
[ 1, 3, 24, 12, 3 ]
[ 1, 3, 24, 12, 3 ]
*/

// // let do long hand first:
 let value = 1  ;
// if(
//     value ==1 || 
//     value =="one" || 
//     value ==2 || 
//     value =="two"
// ){
//     console.log("true")// this will execute
// }
// else{
//     console.log("false");
// }

//lets do the shorthand.


if([1,"one",2,"two"].includes(value)){
    console.log("true"); // this will be printed.

}
else{
    console.log("false");
}
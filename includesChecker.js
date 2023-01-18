// arrow function =
let fun = (a) => "hello" + " " + a;

console.log(fun(5)); // this will print //hello 5 on the console.

// if we want to check whether a particular property or value is in a array or not.
//how we will normally check lets have a look.

function fun(color){

    if(color =='red'|| color =='green'||  color =='blue' || color =='white' || color =='black' ){
        return true;
    }
    else{
        return false;
    }

}

console.log(fun('black')) // will print true on the screen.

// alternatively what we can do is store all these numbers into an array.
let colors = ['black', 'blue', 'white','green','red']

let fun = (color)=>{
    return colors.includes(color);
}
console.log(fun('black')); // this will print true as the black is present in the array.

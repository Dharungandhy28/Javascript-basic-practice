

// Scope Examples:

// Block scope:

let a = 25;
if(5>8){
    let b = 24;
    console.log(b);
    console.log(a);
}
console.log(a);
// console.log(b);

// Global scope:

var c = "varun";
var d = "dharun";
var c = 22;
console.log(a);


// Template literals:

var m = 22;
var n = 26;
console.log(`The sum of m and n is${m+n} and the value of 
m and n is${m} and ${n}`);


// Spread operator

// Example 1. It Expand the array

var arr = ["Dharun", "Gandhi"];
console.log(...arr);

// Example 2. convert the string to char array

let abc = "Hello World";
let char = [...abc];
console.log(char);

// Example 3. combining the arrays

var arr1 = ["Hello", "Ajay", "How are you"];
var arr2 = ["Hope", "Everyone", "is good"];
var arr3 = [...arr1,...arr2];
console.log(arr3);

// Example 4. we can use it in objects too

let obj1 = {a:1,b:2};
let obj2 = {c:3,d:4,...obj1};
console.log(obj2);


// Rest operators:

function foo(...rest){
    var sum = 0;
    for(var i=0; i<rest.length; i++){
        sum = sum + rest[i];
    }
    return sum;
}
console.log(foo(12,13));


// Destructuring:
// If we dont want to use spread operator then we can use destructuring

let m1 = ["Dharun", "Gandhi"];
let [fname, lname] = m1;
console.log(fname);
console.log(lname);
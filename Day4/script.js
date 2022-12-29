// Array basic problems :

// 1. Basics
var arr = [12,13,14,15,156];
console.log(arr.length); // array length
console.log(arr[3]); // to print seperate value
console.log(arr[arr.length-1]); // last index

//  2. Find the odd numbers in an array
var arrays = [11,14,22,21,77,73,79,80];
for(var i=0; i<arrays.length; i++){
    if(arrays[i] % 2 !== 0){
        console.log(arrays[i]);
    }
}

// 3. split join trim 
var name2 = "Kannan".split(" "); // split
console.log(name2); // op is in array 

// join
var name3 = "dharun".split(" ");
var str = name3.join(" ");
console.log(str);

//trim
var strn = "Dharun";
console.log(str.trim(""));

// 4.simple

var abcd = "Dharun".split(" ");
console.log(abcd);
for(var i=0; i<abcd.length; i++){
    console.log(abcd[i]);
}

// 5. splice
var arr1 = ['jan', 'mar', 'apr', 'may'];
arr1.splice(1,0,'feb');
console.log(arr1);

// concatination 

// strings
var s1 = "kannan";
var s2 = "Manivel";
var s3 = s1 + s2;
console.log(s3);

// Numbers

var a1 = 12;
var a2 = 29;
console.log(a1 + a2);

// Numbers and string
var s4 = 21;
var s5 = "Hello";
var s6 = s4 + s5;
console.log(s6);
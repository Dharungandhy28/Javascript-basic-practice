//1. Map Method
//1. find multiples of its number
// var arr=[12,13,14,15] and op is [24,26,28,30]

var arr = [12,13,14,15];
var res = arr.map((ele)=>ele*2);
console.log(res);

//2. for a given array add s after each value inside the array

var arr1 = ["Apple","Mango","Orange"];
var arr2 = arr1.map((ele)=>ele+'s');
console.log(arr2);

// 2. Filter Method
//1. var arr=[12,13,14,15] op is [12,14]

var arr3 = [12,13,14,15];
var res1 = arr3.filter((ele)=>ele%2===0);
console.log(res1);

// 3. Reduce Method
//1. Var arr = [12,13,14,15] op is 54

// Without initial value
var arr4 = [12,13,14,15];
var res2 = arr4.reduce((acc,cv)=>acc+cv);
console.log(res2);

// With initial value
var res2 = arr4.reduce((acc,cv)=>acc+cv,100);
console.log(res2);

// question 1.

// 1. Named function:

function multiplication(a,b,c){
    return(a*b*c);
}
console.log(multiplication(30,40,50));



// 2. Anonymous function:

var a = function(d,e,f){
    return(d*e*f);
}
console.log(a(10,2,3));



// 3. IFFE function:

(function mul(r,s,m){
    console.log(r*s*m);
})
(11,2,7);



// 4. Arrow function:

var c = (o,p,q)=>{
    return(o*p*q);
}
console.log(c(2,3,4));



// question 2.


// var marks = [40,50,10,0,25];
// var sum = 0;
// for(let mark of marks){
//     sum = sum + mark
// }
// var avg = sum/marks.length;
// console.log(avg);

// 1. Named or Normal function:

var marks = [40,50,10,0,25];
function Average(marks){
    let sum = 0;
    for(let mark of marks){
    sum = sum + mark;
}
let avg = sum/marks.length;
return avg;
}
console.log(Average([40,50,10,0,25]));


// 2. Anonymous function:
var getavg = function(marks){
    let sum = 0;
    for(let mark of marks){
        sum = sum + mark;
    }
    let aver = sum/marks.length;
    return aver;
}
console.log(getavg([40,50,10,0,25]));



// 4. Arrow function:
var getavera = (marks)=>{
    let sum = 0;
    for(let mark of marks){
        sum = sum + mark;
    }
    let avermark = sum/marks.length;
    return avermark;
}
console.log(getavera([40,50,10,0,25]));


// 1. product of digits
var num = 7424
function getProduct(num){
     
    
    if(num == 0){
        return 1 ;
    }
     
    
    return (num%10) * getProduct(Math.floor(num/10)) ;
}
 

 
console.log(getProduct(num));


// 2. Count the number of digits of a given number N.Size of the integer ranges from 1
// SI : 578;
// OP: 3;

const num1 = 578;
const digits = (num, count = 0) => {
    if(num){
       return digits(Math.floor(num / 10), ++count);
    };
    return count;
 };
 console.log(digits(num1));

// 3. Find the minimum and maximum among the given numbers

var arr = [1,12,44,15,0,75,77,99];
var min = Math.min(...arr);
var max = Math.max(...arr);
console.log("The minimum number is:" + min);
console.log("The maxiumu number is:" + max);

// 4. Print if the number is perfect square or not

function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log(number +"It is a perfect number.");
        } 
     else
        {
       console.log(number +"It is not a perfect number.");
        }   
 } 
is_perfect(28);




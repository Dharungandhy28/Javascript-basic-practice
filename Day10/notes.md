### Day10

Todays Topic:

1.  MRF -> Map Reduce Filter
2.  some problems

3.  Map:
    -> It takes function as a parameter apply on each and every element of the array
    -> It return the new array
    Syntax:
    arrayname.map(function);
    -> Inside the map method it is taking function as a parameter.
    -> Inside the function we can use one more parameter, ele.
    -> ele represent the array element
    -> Result will be inside the array

4.  Filter:
    -> Filter method is based on condition
    -> Odd or even is a condition here
    -> Filter method takes function as parameters
    -> Apply on each and every element of the arry
    -> If the condition is passed then it will pushed or else rejected
    -> Return a new array
    -> Filter should be inside the array but based on condition

Syntax:
arrayname.filter(function);

3. Reduce:
   ->Reduce function will reduce the array into single value
   Syntax:
   arrayname.reduce((acc,cv)=>)
   acc: Accumulator: initial value
   cv: array element

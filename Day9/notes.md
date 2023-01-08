### Day 9

Today's Topic is OOPS:

1-> Encapsulation
2-> Inheritance
3-> Polymorphism

1 Encapsulation:
-> It means hiding the implementation

2 Inheritance:
-> A parent-child relationship in which child inherits
the charistricts of parents

3 Polymorphism:
-> one phase many methods

OOPS: 1. class & objects 2. constructor 3. Method 4. Accessing

1-> Class:
It is the collections of properties,objects methods...
syntax:
class classname
class car{
// properties
}

2-> objects:
It is called as real time entity these objects are specific to a class
syntax:
var onjectname = new classname();
\*\* When we put new it creates the constructor call
var c1 = new car();// constructor call

------xxxxxx----------
To store the values inside the objects we need something called constructor
Every objects have the temporary variable called this

     this is a key word used to pointing the freshly created objects

     Then the format is like:

     class car{
        // properties...
        // brand and color
        // constructor parameter
        // constructor(brand,color)
     }

     to differentiate
     this.brand = brand;
     this.color = color;

     *** Only dot method is used to access here

---------------------xxxxxxxxxxxx--------------------

\*\* Methods:
1-> If we want the results inside the variables means we can use methods
2-> It is function inside the class here we can not call that a name function
but we can use all the properties:
syntax:
objectname.methodname();

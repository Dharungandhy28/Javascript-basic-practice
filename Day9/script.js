// Assignment till objects and this keyword

// 1. Create a class of type cricketer where it should
// have the following properties:
// a.cricketer name
//b.cricketer age
//c.cricketer salary

class cricketer{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
var c1 = new cricketer("MS",45,10000000);
console.log(c1);


// 2. create a class of type car where it should have the following properties:
//1. car name
//2. car color
//3. car price

class car{
    constructor(name,color,price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
}
var a1 = new car("Benz","White",30000000);
console.log(a1);


// Same two questions use methods:

//1. cricketer

class cricketer1{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    printsalary(){
        return this.salary;
    }
}
var b1 = new cricketer1("Koli",47,20000000);
console.log(`The salary of the player koli is ${b1.printsalary()}`);

//2. car

class car1{
    constructor(name,color,price,modelyear){
        this.name = name;
        this.color = color;
        this.price = price;
        this.modelyear = modelyear;
    }
    printmodelyear(){
        return this.modelyear;
    }
    printprice(){
        return this.price;
    }
}
let m1 = new car1("Audi","White",10000000,2022);
console.log(`The modelyear of the car is ${m1.printmodelyear()}`);
console.log(`The price of the car is ${m1.printprice()}`);


// 3. Simple multiplication

class mul{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    mul(){
        return this.a * this.b;
    }
}
let mul1 = new mul(12,12);
console.log(mul1.mul());


// 4. simple multiplication with parameter

class car2{
    constructor(color,brand){
        this.color = color;
        this.brand = brand;
    }
    printbrand(str){
        return str + this.brand;
    }
}
let d1 = new car2("red","lambo");
let res = d1.printbrand(`The car i am having is${d1.printbrand()}`);
console.log(res);
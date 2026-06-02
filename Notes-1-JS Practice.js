const myname="Amrutha"
console.log(myname)
//myname="Rux"
let age=23
console.log(age)
age=24
console.log(age)

//Data types

//String
let nickname="Rux"
console.log(nickname)

//Number
let year=2002
console.log(year)

//Boolean
let isStudent=true
console.log(isStudent)

//Array
let hobbies=["Painting","Reading", "Travelling"]
console.log(hobbies)
console.log(hobbies[1])

//Object
let userdetails={
    username:"rux",
    password:"12345"
    
}
console.log(userdetails)
console.log(userdetails.username)
console.log(userdetails.password)

//Functions
function mybio(){
    console.log("Hello, my name is Amrutha and I am 23 years old")
}
mybio()

//Arrow functions
const myarrowfunction=()=>{
    console.log("This is an arrow function")
}

myarrowfunction()

//Functions with parameters
function introduceyourself(myname,age){
    console.log("Hello, my name is "+myname+" and I am "+age+" years old")
}

introduceyourself("Amrutha", 23)

//Functions with return values
const getAge=()=>{
    age=23
    return age
}
console.log(getAge())
//or
//const ageVal=getAge()
//console.log(ageVal)

//Conditional statements
let num=24
if(num%2==0){
    console.log(num+" is an even number")
}
else{
    console.log(num+" is not an odd number")
}

let a=10
let b=20
if(a>b){
    console.log(a+" is greater than "+b)
}
else if (a<b){
    console.log(a+" is less than "+b)
}
else{
    console.log(a+" is equal to "+b)}

//Loops

for(let i=0;i<11;i++){
    console.log(i)
}

let fruits=["Apple", "Banana", "Cherry", 22]
for(const fruit of fruits){
    console.log(fruit)
}

//Async and Await
async function loadData(){
    await fetch("https://example.com")
}

//Class, methods and objects

class Car{
    //color="Red" //color and speed are attributes/properties of the class Car
   // speed=200

    constructor(model){ //constructor used to initialise values constructor can or cannot have parameters
        this.color="Red"
        this.speed=200
        this.model=model
    }
    //constructor(){ //constructor without parameters
        //this.speed=200
        
   // }

    car_color(){ 
        console.log("The color of the car is "+this.color)
    }
    car_speed(){
        console.log("The speed of the car is "+this.speed)
    }  //car_color and car_speed are methods of the class car
}

const mycar=new Car() //mycar is an object of the class Car
mycar.car_color()
mycar.car_speed()
console.log(mycar.color)
console.log(mycar.speed)
const anothercar=new Car("BMW")//anothercar is another object of the class Car and we are passing the model parameter to the constructor to initialise the model attribute for anothercar object
console.log(anothercar.model)
console.log(mycar.model) //mycar.model is undefined because we have not initialised the model attribute for mycar object, we have only initialised it for anothercar object using the constructor with parameters
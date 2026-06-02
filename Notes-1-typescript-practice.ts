const myname:string="Rux"
console.log(myname)

let myage:number=23
myage=24
console.log(myage)

console.log(`My name is ${myname}`)

//Data types in typescript
let isStudent:boolean=true //boolean
let myname1:string="Rux" //string
let myage1:number=23 //number

let hobbies:string[]=["coding","gaming","traveling"] //Array-list
console.log(hobbies[2])

let me:any[]=["Rux",23,true] //Array-tuple
console.log(me[0])

let nums:Array<number>=[1,2,3,4,5] //Alternative way to declare an array
console.log(nums[3])

//Objects in typescript
let person:{name:string,age:number}={name:"Rux",age:23}
console.log(person.name)
console.log(person.age) 
//We use interfaces to make test data more organised we will learn this later

//Functions and arrow functions in typescript
function greeting():void{ //normal function-return type is void
    console.log("Hi, how are you?")
    //return 2 //This will cause an error because the return type is void
}

greeting()

const farewell=():void=>{ //arrow function-return type is void
    console.log("Goodbye!")
}
farewell()

const add=(a:number,b:number):number=>{ //arrow function with parameters and return type
    return a+b
}

console.log(add(5,10))

function printname(name?:string):void{ //function with optional parameter and return type
    if(name){
        console.log(`My name is ${name}`)
    }
    console.log("Name not provided")
}
printname("Rux")
printname()

//Async and await in typescript
async function getUser(): Promise<string> {  // we know it returns a string
let response = await fetch("https://api.example.com/user")
return await response.json()
}

//Interfaces in typescript (more cleaner way to define objects)

interface MyBio {
    name: string;
    age: number;
    
}

let Amrutha:MyBio={
    name:"Rux",
    age:23
}
console.log(Amrutha.name)
console.log(Amrutha.age)

//Types/Type aliases in typescript (alternative to interfaces)
type MyInfo={
    food:string;
    drink:string;
}
let AmruthaInfo:MyInfo={
    food:"Pizza",
    drink:"Coffee"
}
console.log(AmruthaInfo.food)
console.log(AmruthaInfo.drink)

type response="Yes"|"No"|"Maybe" //allows user to enter a limited number of values
let myResponse:response="Yes"
console.log(myResponse)
//let anotherResponse:response="not sure" //This will cause an error because the value is not one of the allowed values

//Classes, methods, objects, constructors and inheritance in typescript

class Person {
    name: string      // ← declare attributes with types
    age: number

    constructor(name: string, age: number) {   // ← parameters with types specified in constructor
        this.name = name
        this.age = age
    }

    greet(): void {   // ← void means returns nothing
        console.log(`Hi I am ${this.name}`)
    }
}

let p = new Person("Alice", 25)
p.greet()   // Hi I am Alice

//class with access modifiers
class AnotherPerson {
    public name: string      // anyone can access
    private age: number      // only accessible inside the class
    protected id: number     // accessible inside class and subclasses

    constructor(name: string, age: number, id: number) {
        this.name = name
        this.age = age
        this.id = id
    }
}

let q = new AnotherPerson("Alice", 25, 1)
console.log(q.name)   // ✅ works
//console.log(q.age)    // ❌ TypeScript error! age is private

//inheritamce in typescript

class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    speak(): void {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    breed: string

    constructor(name: string, breed: string) {
        super(name)         // same as javascript
        this.breed = breed
    }

    speak(): void {
        console.log(`${this.name} barks!`)
    }
}

let d = new Dog("Rex", "Labrador")
d.speak()   // Rex barks!
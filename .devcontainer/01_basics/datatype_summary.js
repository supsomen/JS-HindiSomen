// Primitive

// 7 types : String,Number,Boolean, Null, undefined,Symbol,BigInt

const score=100
const scorevalue=100.3
let useremail; //undefined

const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)

// Refrence(Non primitive): array, objects, Functions

const heros=["shaktiman","naagraj","doga"]
let myobj={
    name:"somen",
    age:22,
}

const myFunction=function(){
    console.log("Hello World")

}
console.log(myFunction)

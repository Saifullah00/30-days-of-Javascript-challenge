// ES6+

// Activity 1
let name = "Saifullah"
let age = 24
// console.log(`My Name is ${name} and the age is ${age}`)
const longstring = `saifullah
let age = 24
console.log `
// console.log(longstring)

// Activity 2 Destructuring
const arr = [1,2,3,4]
const [first, second] = arr
// console.log(first)
// console.log(second)

const book = {
    title:"The Porter",
    author:"G James"
}
const {title, author} = book
// console.log(title)
// console.log(author)

// Activity 3 Spread
const arr2 = [...arr,5,6,7,8]
// console.log(arr2)

function sum(...b){
    let t =0
    for(let i in b){
        t+=b[i]
        return t
    }
}
console.log(sum(12,2))
console.log(sum(1,2,3))


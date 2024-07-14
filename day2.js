// Operators

// Activity 1: Arithmetic op
const num1 = 10;
const num2 = 5;

const add = num1+num2
const sub = num1-num2
const mul = num1*num2
const div = num1/num2
const rem = num1%num2

// console.table([add,sub,mul,div,rem])

/* Output
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   15   │
│    1    │   5    │
│    2    │   50   │
│    3    │   2    │
│    4    │   0    │
└─────────┴────────┘ */

// Activity 2: Assignment op
let a = 2
a += 1;
// console.log(a) 3

let b = 5
b -= 1;
// console.log(b) 4


// Activity 3: Comparison op
const comp = 3 > 2
const less = 3 < 2
// console.log(comp) true
// console.log(less) false

const check = 3 >=3 && 2 >= 1
// console.log(check)

let x=2
let y='2'
// console.log(x==y) true
// console.log(x===y) false

let i=2
let j=2
// console.log(x==y) true
// console.log(x===y) true


// Activity 4 Logical op
// console.log(3>=4 && 2<=4) false
// console.log(3>=4 || 2<=4) true
// console.log(3!=4) true

// Activity 5 Ternary op
const num = -2
const positiveNum = num>=0 ? "Positive" : "Negative" 
// console.log(positiveNum) positive
// console.log(positiveNum) Negative







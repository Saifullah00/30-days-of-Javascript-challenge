// Functions
// Activity 1
function evenOdd(num){
    if(num%2==0){
        console.log("Even")
    }else console.log("Odd")
}
// evenOdd(4)

function sqr(num){
    return num*num
}
// console.log(sqr(8))

// Activity 2
function max (num1, num2){
    if(num1>num2) console.log("num1 is bigger: ",num1)
    else if(num1<num2) console.log("num2 is bigger: ",num2)
    else console.log("Equal")
}
// max(10,5)

function concat (str1, str2){
    return str1+str2
}
const res =concat("Chai","aurCode")
// console.log(res)

// Activity 3
// Arrow func
const sum = (num1,num2)=> num1+num2
// console.log(sum(5,5))

const isContain = (str,char)=>{
    for(let i=0;i<str.length;i++){
    if(str.charAt(i)==char) return true
    }
    return false
}
// console.log(isContain("Code",'h'))

// Activity 4 default param
const prd = (num1,num2=10)=> num1*num2
// console.log(prd(5))

const greet = (name,age=18)=> "Good Morning "+name+"!"
console.log(greet("Saad"))

// ACtivity 5
// Higher order func
function callFunc(fn,num){
    return fn(name,num)
}

// console.log(callFunc(fn,3))

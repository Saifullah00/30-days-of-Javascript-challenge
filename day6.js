// Arrays
const printArr =(arr)=>{
    for(i in arr){
        console.log(arr[i])
    }
}

// Activity 1:
const arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr[0],arr[4])

// Activity 2:
arr.push(6)
// printArr(arr)
arr.pop()
// printArr(arr)
arr.shift()
// printArr(arr)
arr.unshift(1)
// printArr(arr)

// Activity 3:
const sqrArr = arr.map((num)=>num*2)
// printArr(sqrArr)
// console.log(sqrArr)

const evenArr = arr.filter((num)=>num%2==0) 
//printArr(evenArr)
//console.log(evenArr)

const arr2=[3,4,51,1]
let j=0
const sumArr = arr2.reduce((num,res)=> num+res,0)
// console.log(sumArr)

// Activity 4:
for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
}

// arr.forEach((item)=>console.log(item))
// console.log(arr)

// Activity 5:
const arr2D = [
    [1,2,3],
    [4,5,6]
]
console.table(arr2D)
for(let i=0;i<arr2D.length;i++){
    for(let j=0;j<arr2D[i].length;j++){
        // console.log(arr2D[i][j])
    }
}
arr2D.forEach(v=>console.log(...v))

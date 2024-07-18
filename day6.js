// Arrays
const printArr =(arr)=>{
    for(i in arr){
        console.log(arr[i])
    }
}

// Activity 1:
const arr = [1,2,3,4,5]
for(i in arr){
    // console.log(arr[i])
}
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
printArr(sqrArr)



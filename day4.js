// Activity 1
for(let a=1; a<=10; a++){
    // console.log(a);
}

const tableOf = 5
for(i=1; i<=10; i++){
    let res = tableOf*i
    // console.log(tableOf +" x "+ i +" = "+res)
}

// Activity 2
let sum =0;
let a =10;
while(a>=0){
    sum+=a;
    a--;
}
// console.log(sum)

let x = 10;
while(x>=1){
    // console.log(x)
    x--;
}

// Activity 3
let num=1
do{
    // console.log(num)
    num++
}while(num<=5)

let n = 1
let res=1
let factOf=5
do{
    res *= n
    n++
}while(n<=factOf)
// console.log(res)

// Activity 4
for(let i=1; i<=5; i++){
    let nst = ""
    for(let j=1;j<=i;j++){
        nst+="*"
    }
    // console.log(nst)
}

// Activity 5
for(let i=1; i<=10; i++){
    if(i==5) continue
    // console.log(i)
}

for(let i=1; i<=10; i++){
    if(i==7) break
    console.log(i)
}
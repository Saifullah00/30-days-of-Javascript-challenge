// If Else
// Activity 1:
const num = -7
if(num==0){
    console.log("Zero")
}
else if(num>0){
    console.log("Positive")
}
else{
    console.log("negative")
}

// Activity 2:
const a = 4
const b = 1
const c = 9
if(a>b){
    if(a>c){
        console.log("Largest is: ",c)
    }
}

// Activity 3:
const ch = 7
switch(ch){
    case 1:
        console.log("Mon")
        break;
    case 2:
        console.log("Tues")
        break;
    case 3:
        console.log("Wed")
        break;
    case 4:
        console.log("Thur")
        break;
    default:
        console.log("Friday")
}

// Activity 4:
let number =3
const check = (number%2==0) ? console.log("even"):console.log("odd") 

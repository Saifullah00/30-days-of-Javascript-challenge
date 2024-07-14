// new Map() // object type but it is iterable as well as ordered
// new Map([])
const person_inbuild = new Map([
    ["First_name", "Ayesha"],
    ["Last_name", "Shakil"]
]);
console.log(person_inbuild)

const person = new Map();
person.set("First_name", "Ayesha")
person.set("Last_name", "Shakil")
person.set("Age", 3);
// console.log(person);
// get method to acess key values
// console.log(person.get('Age'));

// for (let key of person.keys()) { // key name printed
//     console.log(key);
// }

// for (let key of person) { // person as array printed
//     console.log(key);
// }

// for (let [key, value] of person) { // person as key and value printed
//     console.log(key, ":", value);
// } 

const person1 = {
    1: "one",
    2: "two"
}
const extraValue = new Map();
extraValue.set(person1,{3:'three'})
    // console.log(person1);
console.log(extraValue.get(person1));

// clone using object.assign
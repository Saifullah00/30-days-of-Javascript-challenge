// Objects
// Activity 1 Creation
const book = {
    'title' : "Harry Potter",
    'author' : "James G",
     year : 2001,
     Bookdetails: function Bookdetails(){
        console.log(title)
        console.log(author)
     },
     Updateyear: (year)=> {
        year = 2005
        console.log(year)
    },
    details: function details(title,year){
        console.log(this.title)
        console.log(this.year)
        // return this.title, this.year
     }
}
// console.log(book)
const author = book.author
const title = book.title
// console.log(author, title)

// Activity 2 Methods
// book.Bookdetails();
// book.Updateyear();

// Activity 3 Nested Obj
const library ={
    name : {
        bookName : ["the wings","The Cat", "The potter"]
    } 
}
// console.log(library)
// console.log(library.name.bookName)
// console.log(library.name.bookName[1])
// book.details()

// Activity 5
// for ( let b in book){
//     console.log(b+":"+book[b])
// }

for ( let [key,value] of Object.entries(book)){
    console.log(`${key}:${value}`)
}


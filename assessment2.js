const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },]

    // quiz1
    // 1. Create a function called getAvailableBooks that returns an array of all available
// books.

function getAvailableBooks (bookss){
         newArray=[]
for( let a=0;a<bookss.length;a++)
{
    if(a==bookss){
   newArray.push[a].title
    }
}
    return newArray

}
console.log(getAvailableBooks(books))

// quiz2
// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
 function getBooksByAuthor(authorName){
            emptyArray=[]
const author=emptyArray.filter(emptyArray.push(author))

 }
 console.log(getBooksByAuthor(books))


//  quiz3
// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook (book){
for(let b=0;b<book.length;b++){
        books.push([a]("Half A Day"))
    }
    return book
}
console.log(addNewBook(books))
// quiz4
// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook (title){
for( let i=o;i<title.length;i++){
    if (books.includes(title)){
        return("available")
    }
    else
{
    return("book not available")
}
}
}
console.log(checkoutBook (books))


//  quiz5
// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(bookTittle){
for(let c=0;c<bookTittle.length;c++){
   if (books==true){
     return [c].isAvailable

   } 
}
}
console.log(returnBook)

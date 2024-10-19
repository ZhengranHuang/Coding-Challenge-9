//Task 1:Create a Book Class
class Book{
constructor(title, author, ISBN){
this.title = title;
this.author = author;
this.ISBN = ISBN;
this._isAvailable = true;
}
getDetails(){
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
}
//GETTER
get isAvailable() {
    return this._isAvailable;
}
//SETTER
set isAvailable(trueorfalse){
if(typeof trueorfalse === 'string'&&(trueorfalse === 'true' || trueorfalse === 'false')){
this._isAvailable = trueorfalse
}
else{
console.error("TRUE OR FALSE NEEDED");
}
}
}
//Task 2:Create a Section Class
class Section {
constructor(name) {
this.name = name;
this.books = [];
}
addBook(book) {
    this.books.push(book);
}
getAvailableBooks() {
return this.books.filter(book => book.isAvailable).length;
}
listBooks() {

}
//wrong
}
//Task 3:Create a Patron Class
class Patron{
constructor(name){
this.name = name;
this.borrowedBooks = [];
}
borrowBook(book){
if(book.isAvailable){
book.isAvailable = true//if book available, borrow the book
this.borrowBook.push(book);
console.log(`the book borrow is done.`)
}
else{
console.log(`the book is not available.`)
}
}
returnBook(book){

}
}


let arrayOFBooks = [];

class Book{
    constructor(title, author, isbn){
        this.ti = title;
        this.auth = author;
        this.isb = isbn;
        
    }
}
class UI{
     addBookToList(book){
        let bookList = document.getElementById("book-list");
        bookList.innerHTML += `<tr>
        <td>${book.ti}</td>
        <td>${book.auth}</td>
        <td>${book.isb}</td>
        <td><i class="fa-solid fa-xmark"></i></td>


        </tr>`;

     }
}

document.forms[0].onsubmit = function(e){

    let titleValue = document.getElementById("title");
    let AuthorValue = document.getElementById("author");
    let isbn = document.getElementById("isbn");

        let book = new Book(titleValue.value, AuthorValue.value, isbn.value)

        
        

        let ui = new UI();

        ui.addBookToList(book);


    e.preventDefault();
}

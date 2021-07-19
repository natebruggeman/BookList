//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI Constructor 

function UI(){}

//Add book to the list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //getting form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //instatiating a book object
    const book = new Book(title, author, isbn);

    //instatiating a ui object
    const ui = new UI();

    //add book to list
    ui.addBookToList(book);

    //clear fields when added
    ui.clearFields();


    e.preventDefault();
})


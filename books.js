// intialize library div and submit button
const libDiv = document.querySelector("#library");
const submitBookBtn = document.querySelector("#submit-book");

// initialize library array
const myLibrary = [];

//prototype for book entry
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//pre-populate books
const theHobbit = new Book("The Hobbit","JRR Tolkien", 295, false);
const theWizardOfOz = new Book("The Wizard of Oz","L. Frank Baum", 272, true);
const crackingTheCodingInterview = new Book("Cracking the Coding Interview","Gayle Laakmann McDowell", 687, false);
myLibrary.push(theHobbit);
myLibrary.push(theWizardOfOz);
myLibrary.push(crackingTheCodingInterview);
displayLibrary();

// click submit button to add user entered book to MyLibrary
submitBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    document.querySelector("#book-form").reset();
})

// add user book to myLibrary and trigger function to add it visually
function addBookToLibrary() {
    var newBookTitle = document.querySelector("#title").value;
    var newBookAuthor = document.querySelector("#author").value;
    var newBookPages = document.querySelector("#pages").value;
    var newBookRead = document.querySelector('input[name="completed"]').checked;

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    myLibrary.push(newBook);
    displayBook(newBook, (myLibrary.length - 1));
}

// pre-populates books
function displayLibrary() {
    for (book in myLibrary) {
        displayBook(myLibrary[book], book);
    }
}

// adds books to the div visually
function displayBook(book, index) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book', 'book-'+index);
    libDiv.appendChild(bookDiv);

        const bookIcon = document.createElement('img');
        bookIcon.setAttribute('class', 'book-icon');
        bookIcon.setAttribute('src', 'images/library-outline.png');
        bookDiv.appendChild(bookIcon);

        const bookTable = document.createElement('table');
        bookDiv.appendChild(bookTable);

            const bookTrTitle = document.createElement('tr');
            bookTable.appendChild(bookTrTitle);

                const bookThTitle = document.createElement('th');
                bookTrTitle.appendChild(bookThTitle);
                bookThTitle.textContent = "Title";
                const bookTdTitle = document.createElement('td');
                bookTrTitle.appendChild(bookTdTitle);
                bookTdTitle.textContent = book.title;

            const bookTrAuthor = document.createElement('tr');
            bookTable.appendChild(bookTrAuthor);

                const bookThAuthor = document.createElement('th');
                bookTrAuthor.appendChild(bookThAuthor);
                bookThAuthor.textContent = "Author";
                const bookTdAuthor = document.createElement('td');
                bookTrAuthor.appendChild(bookTdAuthor);
                bookTdAuthor.textContent = book.author;
        
            const bookTrPages = document.createElement('tr');
            bookTable.appendChild(bookTrPages);

                const bookThPages = document.createElement('th');
                bookTrPages.appendChild(bookThPages);
                bookThPages.textContent = "Pages";
                const bookTdPages = document.createElement('td');
                bookTrPages.appendChild(bookTdPages);
                bookTdPages.textContent = book.pages;

            const bookTrRead = document.createElement('tr');
            bookTable.appendChild(bookTrRead);

                const bookThRead = document.createElement('th');
                bookTrRead.appendChild(bookThRead);
                bookThRead.textContent = "Read Status";
                const bookTdRead = document.createElement('td');
                bookTdRead.textContent = book.read;
                bookTrRead.appendChild(bookTdRead);
        
        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('class', 'btn-div');
        bookDiv.appendChild(btnDiv);

            const bookDelBtn = document.createElement('button');
            bookDelBtn.classList.add('del-btn-book', index);
            bookDelBtn.textContent = "Delete Book";
            btnDiv.appendChild(bookDelBtn);

            const bookStatusBtn = document.createElement('button');
            bookStatusBtn.classList.add('read-btn-book', index);
            btnDiv.appendChild(bookStatusBtn);
            displayRead(book.read, bookStatusBtn);
}

function displayRead(readBook, bookStatusBtn) {
    if (readBook === false) {
                bookStatusBtn.textContent = "Read";
            } else {
                bookStatusBtn.textContent = "Un-Read";
            }
    bookStatusBtn.parentNode.previousSibling.lastChild.lastChild.textContent = readBook;
}


libDiv.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('del-btn-book')) {
        index = +target.classList.item(1);
        libDiv.removeChild(target.parentNode.parentNode);
        myLibrary.splice(index, 1);
    }
    else if(target.classList.contains('read-btn-book')) {
        index = +target.classList.item(1);
        const readBook = myLibrary[index].read;
        if (readBook == false) {
            myLibrary[index].read = true;
        } else {
            myLibrary[index].read = false;
        }
        displayRead(myLibrary[index].read, target);
    }
})
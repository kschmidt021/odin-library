const libDiv = document.querySelector("#library");
const submitBookBtn = document.querySelector("#submit-book");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new Book("The Hobbit","JRR Tolkien", 295, false);
myLibrary.push(theHobbit);
displayLibrary();


submitBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
})

function addBookToLibrary() {
    const newBookTitle = document.querySelector("#title").value;
    const newBookAuthor = document.querySelector("#author").value;
    const newBookPages = document.querySelector("#pages").value;
    const newBookRead = document.querySelector('input[name="completed"]').checked;

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayLibrary() {
    for (book in myLibrary) {
        displayBook(myLibrary[book]);
    }
}

function displayBook(book) {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'book');
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
                bookThRead.textContent = "Completion Status";
                const bookTdRead = document.createElement('td');
                bookTrRead.appendChild(bookTdRead);
                bookTdRead.textContent = book.read;
}

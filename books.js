const libDiv = document.querySelector("#library");

const myLibrary = [];


addBookToLibrary();
displayLibrary();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", 0);
    const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "383", "0");
    myLibrary.push(theHobbit);
    myLibrary.push(harryPotter);
    console.log(myLibrary);
}

function displayLibrary() {
    for (book in myLibrary) {
        displayBook(book);
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
                bookTdTitle.textContent = myLibrary[book].title;

            const bookTrAuthor = document.createElement('tr');
            bookTable.appendChild(bookTrAuthor);

                const bookThAuthor = document.createElement('th');
                bookTrAuthor.appendChild(bookThAuthor);
                bookThAuthor.textContent = "Author";
                const bookTdAuthor = document.createElement('td');
                bookTrAuthor.appendChild(bookTdAuthor);
                bookTdAuthor.textContent = myLibrary[book].author;
        
            const bookTrPages = document.createElement('tr');
            bookTable.appendChild(bookTrPages);

                const bookThPages = document.createElement('th');
                bookTrPages.appendChild(bookThPages);
                bookThPages.textContent = "Pages";
                const bookTdPages = document.createElement('td');
                bookTrPages.appendChild(bookTdPages);
                bookTdPages.textContent = myLibrary[book].pages;

            const bookTrRead = document.createElement('tr');
            bookTable.appendChild(bookTrRead);

                const bookThRead = document.createElement('th');
                bookTrRead.appendChild(bookThRead);
                bookThRead.textContent = "Completion Status";
                const bookTdRead = document.createElement('td');
                bookTrRead.appendChild(bookTdRead);
                bookTdRead.textContent = myLibrary[book].read;
}

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

const libraryContainer = document.querySelector(".library-container");

addBookToLibrary("The Hobbit", "J.R.R. Tolkein", 262, true);
addBookToLibrary("Dune", "Frank Herbert", 896, false);

function updateLibrary(libraryLength){
    libraryContainer.innerHTML = "";
    for (let i = 0; i < libraryLength; i++) {
        let newLibraryEntry = libraryContainer.appendChild(document.createElement("div"));
        let title = newLibraryEntry.appendChild(document.createElement("h2"));
        let author = newLibraryEntry.appendChild(document.createElement("p"));
        let pages = newLibraryEntry.appendChild(document.createElement("p"));
        let read = newLibraryEntry.appendChild(document.createElement("button"));
        title.textContent = myLibrary[i].title;
        author.textContent = `By ${myLibrary[i].author}`;
        pages.textContent = `${myLibrary[i].pages} pages`;
        read.textContent = myLibrary[i].textContent === true ? "Read" : "Not Read";
    }
}
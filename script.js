let myLibrary = [];
let formHidden = true;

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

const libraryContainer = document.querySelector(".library-container");
let readButton = document.querySelectorAll(".book-button");

const addBookButton = document.querySelector(".add-book");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const formContainer = document.querySelector(".form-container");
const bookForm = document.querySelector(".book-form");
const closeForm = document.querySelector(".close-form");
const openForm = document.querySelector(".open-form");

updateLibrary();

function updateLibrary(){
    libraryContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let newLibraryEntry = libraryContainer.appendChild(document.createElement("div"));
        let title = newLibraryEntry.appendChild(document.createElement("h2"));
        let author = newLibraryEntry.appendChild(document.createElement("p"));
        let pages = newLibraryEntry.appendChild(document.createElement("p"));
        let read = newLibraryEntry.appendChild(document.createElement("button"));
        title.textContent = myLibrary[i].title;
        author.textContent = `By ${myLibrary[i].author}`;
        pages.textContent = `${myLibrary[i].pages} pages`;
        read.textContent = myLibrary[i].read === true ? "Read" : "Not Read";
        
        myLibrary[i].read === true ? 
        read.classList.add("read-button") :
        read.classList.add("unread-button");

        read.classList.add("book-button");
        read.id = (`${i}`);

        readButton = document.querySelectorAll(".book-button");

        

        
        newLibraryEntry.classList.add("library-book");
    }

    readButton.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("read-button");
            item.classList.toggle("unread-button");
            item.textContent === "Read" ?
            item.textContent = "Not Read" :
            item.textContent = "Read";
    
            myLibrary[item.id].read === true ?
            myLibrary[item.id].read = false :
            myLibrary[item.id].read = true;
        })
    })
}

addBookButton.addEventListener("click", () => {
    if (titleInput.value === "" || 
    authorInput.value === "" || 
    pagesInput.value === "") {
        return;
    }
    else {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
        updateLibrary();
        toggleForm();
    }
})

closeForm.addEventListener("click", () => {
    toggleForm();
})

openForm.addEventListener("click", () => {
    toggleForm();
})

function toggleForm() {
    if (formHidden === false) {
        bookForm.setAttribute("style", "display: none;");
        formContainer.setAttribute("style", "display: none;");
        formHidden = true;
    }
    else {
        bookForm.setAttribute("style", "");
        formContainer.setAttribute("style", "");
        formHidden = false;
    }
    clearForm();
}

function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
}
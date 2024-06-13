// Anchor to scroll - add slow scrolling later on
const goToLibraryButton = document.querySelector("#anchor-to-library");
const libraryContainer = document.querySelector(".library-container");


goToLibraryButton.addEventListener("click", goToLibrary());

function goToLibrary() {
return libraryContainer.scrollIntoView();
}


/* MVP - Library cards */
const library = [];

function Book(title, author, year, pages) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages
}

Book.prototype.read = function() {
        if (userRead.checked = true) {
            return "read"
        } else {
            return "not read"
        }
    }

// 2 books for an example display
const atomicHabits = new Book("Atomic Habits", "James Clear", 2018, 277);
const libroRojo = new Book("El pequeño libro rojo de las ventas", 'Fran Rodrigue', 2004, 224);

//add books to the existing array
library.splice(0, 0, atomicHabits, libroRojo);

//Accept user input
const submit = document.querySelector(".submit");
submit.addEventListener("click", addBook);


function addBook(){
    const userTitle = document.querySelector("#title");
    const userAuthor = document.querySelector("#author");
    const userYear = document.querySelector("#year");
    const userPages = document.querySelector("#pages");
    const userRead = document.querySelector("#userRead");

    const title = userTitle.textContent;
    const author = userAuthor.textContent;
    const year = userYear.textContent;
    const pages = userPages.textContent;

    const userBook = userTitle;
    userBook = new Book(title, author, year, pages, userRead)

    library.push(userBook);
    addFromLibrary();
}

// loop to add things in the object to the library
function addFromLibrary() {

    let bookContainer;
    let bookTitle;
    let bookYear;
    let bookPages;
    let librarySection;

    for (i = 0; i < library.length; i++) {
        bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", `${library[i].title}`);
        bookContainer = document.querySelector(`.${library[i].title}`);

        librarySection = document.querySelector(".library-section");
        librarySection.appendChild('bookContainer');
        bookTitle = document.createElement(".h2");
        bookTitle.setAttribute("class", "book-title");
        bookTitle.textContent = library[i].title;
    }
}




// DOM - user content
//need an SVG with a plus that gets shifted / deleted anytime a user adds a new book



//how to turn the obj's to an array
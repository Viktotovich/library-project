// Anchor to scroll - add slow scrolling later on
const goToLibraryButton = document.getElementById("anchor-to-library");
const libraryContainer = document.querySelector(".library-container");


goToLibraryButton.addEventListener("click", goToLibrary());

function goToLibrary() {
return libraryContainer.scrollIntoView();
}

/* MVP - Library cards */
const library = [];

function Book(title, author, year, pages, read) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.read = read
}

// more elegant to add it this way rather than __Proto__ + the latter is obsolete
Book.prototype.read = function() {
        if (!this.read) {
            // add text readDom.textContent = 'Not read yet'
        } else {
            // add text readDom.textContent = 'Read'
        }
    }

const atomicHabits = new Book("Atomic Habits", "James Clear", 2018, 277);
const libroRojo = new Book("El pequeño libro rojo de las ventas", 'Fran Rodrigue', 2004, 224);

library.splice(0, 0, atomicHabits, libroRojo);

// DOM - user content
//need an SVG with a plus that gets shifted / deleted anytime a user adds a new book

function addToLibrary() {

}

//how to turn the obj's to an array
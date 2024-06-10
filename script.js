const goToLibraryButton = document.getElementById("anchor-to-library");
const library = document.querySelector(".library-container");


goToLibraryButton.addEventListener("click", goToLibrary());

function goToLibrary() {
return library.scrollIntoView();
}

/* MVP - Library cards */ 
function Book(title, author, year, pages) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages
}

// more elegant to add it to the book __Proto__
Book.prototype.read = function() {
        if (!read) {
            // add text readDom.textContent = 'Not read yet' 
        } else {
            // add text readDom.textContent = 'Read' 
        }
    }

const atomicHabits = new Book("Atomic Habits", "James Clear", 2018, 277) ;
const libroRojo = new Book("El pequeño libro rojo de las ventas", 'Fran Rodrigue', 2004, 224)


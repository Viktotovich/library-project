const goToLibraryButton = document.getElementById("anchor-to-library");
const library = document.querySelector(".library-container");


goToLibraryButton.addEventListener("click", goToLibrary());

function goToLibrary() {
return library.scrollIntoView();
}

/* MVP - Library cards */ 
function Book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year
}

// more elegant to add it to the book __Proto__
Book.prototype.read = function() {
        if (!read) {
            // add text readDom.textContent = 'Not read yet' 
        } else {
            // add text readDom.textContent = 'Read' 
        }
    }

atomicHabits = new Book("Atomic Habits", "James Clear", 2018);

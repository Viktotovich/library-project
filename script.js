// Anchor to scroll - add slow scrolling later on
const goToLibraryButton = document.querySelector("#anchor-to-library");
const libraryContainer = document.querySelector(".library-container");


goToLibraryButton.addEventListener("click", goToLibrary);

function goToLibrary() {
    libraryContainer.scrollIntoView({behavior:"smooth"});
}


/* Library storage, constructor function */
const library = [];

function Book(title, author, year, pages, read) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages
    this.read = read;
}

Book.prototype.readStatus = function() {
        if (this.read == true) {
            return this.read = "read"
        } else {
            return this.read = "not read"
        }
    }

// 2 books for an example display
const atomicHabits = new Book("Atomic Habits", "James Clear", 2018, 277);
const libroRojo = new Book("El pequeño libro rojo de las ventas", 'Fran Rodrigue', 2004, 224);

//add books to the existing array
library.splice(0, 0, atomicHabits, libroRojo);

//Open and close the modal
const modal = document.querySelector("dialog");
const closeModal = document.querySelector(".close-modal")
const submit = document.querySelector(".submit");
const addBookButton = document.querySelector(".add-book");

closeModal.addEventListener("click", () => {
    modal.close();
})

addBookButton.addEventListener("click", () => {
    modal.showModal();
})

//Accept user input
submit.addEventListener("click", addBook);


function addBook(e){
    const userTitle = document.querySelector("#title");
    const userAuthor = document.querySelector("#author");
    const userYear = document.querySelector("#year");
    const userPages = document.querySelector("#pages");
    const userRead = document.querySelector("#userRead");

    const title = userTitle.value;
    const author = userAuthor.value;
    const year = userYear.value;
    const pages = userPages.value;
    const read = userRead.checked;
    console.log(read)

    let userBook = userTitle;
    userBook = new Book(title, author, year, pages, read)

    library.push(userBook);
    addFromLibrary();
    e.preventDefault();
    modal.close();
}

// loop to add things in the object to the library
function addFromLibrary() {

    let bookContainer;
    let informationContainer;
    let bookTitle;
    let bookAuthor;
    let bookYear;
    let bookPages;
    let libraryContainer;
    let readStatus;

    for (i = 0; i < library.length; i++) {
        //selecting the container, and creating our first element
        bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", 'book');
        bookContainer.setAttribute("id", `${library[i].title}`);
        libraryContainer = document.querySelector("#book-sort");
        libraryContainer.appendChild(bookContainer);

        //Details Container, to make it easier to use flex on read / not read bools
        informationContainer = document.createElement("div");
        informationContainer.setAttribute("class", 'information-container');
        bookContainer.appendChild(informationContainer);

        //Title
        bookTitle = document.createElement("h2");
        bookTitle.setAttribute("class", `${library[i].title}`);
        bookTitle.textContent = library[i].title;
        informationContainer.appendChild(bookTitle);

        //Author
        bookAuthor = document.createElement("div");
        bookAuthor.setAttribute("class", "author");
        bookAuthor.textContent = library[i].author;
        informationContainer.appendChild(bookAuthor);

        //Year
        bookYear = document.createElement("div");
        bookYear.setAttribute("class", 'book-year');
        bookYear.textContent = library[i].year;
        informationContainer.appendChild(bookYear);

        //Pages
        bookPages = document.createElement('span');
        bookPages.setAttribute("class", "pages");
        bookPages.textContent = library[i].pages;
        informationContainer.appendChild(bookPages);

        //Read bool
        readStatus = document.createElement('span');
        readStatus.setAttribute("class", "read-bool");
        readStatus.textContent = library[i].readStatus();
        bookContainer.appendChild(readStatus);
    }

    //the holy grail of anti-duplicate, looks simple, took me 4 days to come to this
    library.splice(0, (library.length));
}


//make read / not read changeable
function addReadStatus() {
    const readStatusElements = document.querySelectorAll(".read-bool");

    readStatusElements.forEach(readStatus => {
        readStatus.addEventListener("click", toggleRead);
    });

    function toggleRead(event) {
        const readStatus = event.target;
        if (readStatus.textContent === 'not read') {
            readStatus.textContent = 'read';
            readStatus.setAttribute("id", 'yes');
        } else {
            readStatus.textContent = 'not read';
            readStatus.setAttribute("id", 'no');
        }
    }
};


addFromLibrary();
addReadStatus();
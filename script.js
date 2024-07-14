// Anchor to scroll - add slow scrolling later on
const goToLibraryButton = document.querySelector("#anchor-to-library");
const libraryContainer = document.querySelector(".library-container");


goToLibraryButton.addEventListener("click", goToLibrary);

function goToLibrary() {
    libraryContainer.scrollIntoView({behavior:"smooth"});
}

/* Library storage, constructor function */
const library = [];

class Book{
    constructor(title, author, year, pages, read){
        this.title = title,
        this.author = author,
        this.year = year,
        this.pages = pages
        this.read = read;
    }

    readStatus(){
        if (this.read == true) {
            return this.read = "read"
        } else {
            return this.read = "not read"
        }
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

closeModal.addEventListener("click", () => {
    modal.close();
})

//Accept user input
submit.addEventListener("click", addBook);

function addBook(e){
    e.preventDefault();

    const userTitle = document.querySelector("#title").value;
    const userAuthor = document.querySelector("#author").value;
    const userYear = document.querySelector("#year").value;
    const userPages = document.querySelector("#pages").value;
    const userRead = document.querySelector("#userRead").checked;

    let userBook = userTitle;
    userBook = new Book(userTitle, userAuthor, userYear, userPages, userRead)

    library.push(userBook);
    renderLibrary();
    modal.close();
}

// loop to add things in the object to the library
function renderLibrary() {
    let libraryContainer = document.querySelector("#book-sort");
    libraryContainer.innerHTML = '';

        //Add Book Button (causes overlap with content if not within the grid) - must be added before loop, as otherwise it'd make many buttons
        let addBookButton = document.createElement("button");
        addBookButton.setAttribute("class", "add-book");
        libraryContainer.appendChild(addBookButton);
        addBookButton.addEventListener("click", () => {
            modal.showModal();
        })
        addBookButton.textContent = "[+]"

        //The Loop
        library.forEach(function(book, index){
        //The book container element
        bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", 'book');
        bookContainer.setAttribute("title", `${"book" + index}`);
        libraryContainer.appendChild(bookContainer);

        //Details Container, to make it easier to use flex on read / not read bools
        informationContainer = document.createElement("div");
        informationContainer.setAttribute("class", 'information-container');
        bookContainer.appendChild(informationContainer);

        //Title
        bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;
        informationContainer.appendChild(bookTitle);

        //Author
        bookAuthor = document.createElement("div");
        bookAuthor.setAttribute("class", "author");
        bookAuthor.textContent = book.author;
        informationContainer.appendChild(bookAuthor);

        //Year
        bookYear = document.createElement("div");
        bookYear.setAttribute("class", 'book-year');
        bookYear.textContent = book.year;
        informationContainer.appendChild(bookYear);

        //Pages
        bookPages = document.createElement('span');
        bookPages.setAttribute("class", "pages");
        bookPages.textContent = book.pages;
        informationContainer.appendChild(bookPages);

        //Tools container
        toolContainer = document.createElement("div");
        toolContainer.setAttribute("class", "tool-container");
        bookContainer.appendChild(toolContainer);

        //Read bool
        readStatus = document.createElement('span');
        readStatus.setAttribute("class", "read-bool");
        readStatus.textContent = book.readStatus();
        toolContainer.appendChild(readStatus);
        readStatus.addEventListener("click", ()=> toggleRead(index));

        //Without this, the toggleRead doesnt work well
        readStatus.setAttribute('data-index', index);

        //Delete button
        deleteBook = document.createElement('span');
        deleteBook.setAttribute("class", "delete-book");
        deleteBook.innerHTML = "🗑️";
        toolContainer.appendChild(deleteBook);
        deleteBook.addEventListener("click", ()=> deleteBookFunction(index))
    });
}

//leave for the book class
function toggleRead(index) {
    const book = library[index];
    const readStatus = document.querySelector(`.read-bool[data-index='${index}']`);
    book.read = !book.read;
    changeTextDisplay(book, readStatus);
}

function deleteBookFunction(index) {
    library.splice(index, 1);
    renderLibrary();
}

function changeTextDisplay(book, readStatus) {
    if (book.read) {
        readStatus.textContent = "read";
        readStatus.setAttribute('id', 'yes');
    } else {
        readStatus.textContent = 'not read';
        readStatus.setAttribute('id', 'no');
    }
}

renderLibrary();
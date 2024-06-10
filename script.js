const goToLibraryButton = document.getElementById("anchor-to-library");
const library = document.querySelector(".library-container");


goToLibraryButton.addEventListener("click", goToLibrary());

function goToLibrary() {
return library.scrollIntoView();
}
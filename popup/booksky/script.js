// Selecting popup overlay, popup box, and add popup button
const popupOverlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const addPopupButton = document.getElementById("add-popup-button");

// Show popup when "Add" button is clicked
addPopupButton.addEventListener("click", function () {
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});

// Hide popup only when clicking outside the popup-box
popupOverlay.addEventListener("click", function (event) {
  if (!popupBox.contains(event.target)) {
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
  }
});

// Hide popup when "Cancel" button is clicked
const cancelButton = document.getElementById("cancel-popup");
cancelButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

// Selecting container and form inputs
const container = document.querySelector(".container");
const addBookButton = document.getElementById("add-book");
const bookTitleInput = document.getElementById("book-title-input");
const bookAuthorInput = document.getElementById("book-author-input");
const bookDescriptionInput = document.getElementById("book-description-input");

// Add book functionality
addBookButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate input fields
  if (!bookTitleInput.value || !bookAuthorInput.value || !bookDescriptionInput.value) {
    alert("Please fill out all fields before adding the book.");
    return;
  }

  // Create a new book container
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("class", "book-container");
  bookDiv.innerHTML = `
        <h2>${bookTitleInput.value}</h2>
        <h5>${bookAuthorInput.value}</h5>
        <p>${bookDescriptionInput.value}</p>
        <button class="delete-button">Delete</button>`;

  // Add book to the container
  container.appendChild(bookDiv);

  // Reset input fields
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookDescriptionInput.value = "";

  // Hide the popup
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

// Delete book functionality
container.addEventListener("click", function (event) {
  //if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();
  }
);

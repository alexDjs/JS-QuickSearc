
import { suggestionsData } from "./javascriptReference.js"
// Getting the DOM elements
const input = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");
const exampleBox = document.getElementById("example-box");


// Text input event
input.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  suggestionsBox.innerHTML = ""; // Clearing the previous hints
  exampleBox.style.display = "none"; // Hiding the block with the example

  if (query) {
    // Filtering data by request
    const filteredSuggestions = suggestionsData.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    if (filteredSuggestions.length > 0) {
      suggestionsBox.style.display = "block";

      filteredSuggestions.forEach((suggestion) => {
        const li = document.createElement("li");
        li.textContent = suggestion.name;

        // When you click on the hint, we show an example
        li.addEventListener("click", () => {
          input.value = suggestion.name;
          showExample(suggestion);
          suggestionsBox.style.display = "none"; // Hiding the hints
        });

        suggestionsBox.appendChild(li);
      });
    } else {
      suggestionsBox.style.display = "none";
    }
  } else {
    suggestionsBox.style.display = "none";
  }
});

// Function for displaying an example
function showExample(suggestion) {
  exampleBox.style.display = "block";
  exampleBox.innerHTML = `
    <h3>${suggestion.name}</h3>
    <p>${suggestion.description}</p>
    <pre>${suggestion.example}</pre>
  `;
}

// Closing suggestions when clicking outside the search field
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestionsBox.style.display = "none";
  }
});


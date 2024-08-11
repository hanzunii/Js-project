// Select the button and container where text boxes will be added
const addButton = document.getElementById('addButton');
const textBoxContainer = document.getElementById('textBoxContainer');

// Function to create a new text box
function addTextBox() {
    // Create a new input element
    const newTextBox = document.createElement('input');
    
    // Set the type of input as text
    newTextBox.type = 'text';
    
    // Apply CSS class for consistent styling
    newTextBox.className = 'custom-input'; // Apply the class defined in your CSS
    
    // Optional: Add some placeholder text
    newTextBox.placeholder = 'Enter some text';
    
    // Append the new text box to the container
    textBoxContainer.appendChild(newTextBox);
}

// Add an event listener to the button to trigger the addTextBox function
addButton.addEventListener('click', addTextBox);

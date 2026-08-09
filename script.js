// Get the screen where numbers show
const display = document.getElementById("display");

// Start with nothing
let currentInput = "";

// When any button is clicked
document.querySelectorAll("button").forEach(button => {
  button.onclick = () => {
    let value = button.textContent; // what’s written on the button

    if (value === "C") {
      // Clear everything
      currentInput = "";
    } else if (value === "⌫") {
      // Remove last character
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      // Try to solve the math
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      // Add the button value to the input
      currentInput += value;
    }

    // Show result or 0 if empty
    display.textContent = currentInput || "0";
  };
});
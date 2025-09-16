
function multiply(a, b) {
  // Local scope: result is only accessible inside this function
  let result = a * b;
  return result; // returning the value
}

// Example of global variable
let globalMessage = "This is a global variable.";

// Button to trigger calculation
document.getElementById("calcBtn").addEventListener("click", () => {
  let output = multiply(5, 10); // call function with parameters
  document.getElementById("functionResult").textContent =
    `5 × 10 = ${output}. ${globalMessage}`;
});



// Function to toggle animation on an element
function triggerAnimation(elementId, className) {
  const el = document.getElementById(elementId);

  // If element already has class, remove it; otherwise add it
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}

// Button to animate box
document.getElementById("animateBtn").addEventListener("click", () => {
  triggerAnimation("jsBox", "animate");
});

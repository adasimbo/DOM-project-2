// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the box and button elements
    const box = document.getElementById('color-box');
    const btn = document.getElementById('change-color-btn');
  
    // Function to generate a random hex color code
    function getRandomColor() {
      const hex = Math.floor(Math.random() * 0xFFFFFF)  // Random int 0–0xFFFFFF
        .toString(16)                                    // Convert to hex string
        .padStart(6, '0');                               // Ensure 6 digits
      return `#${hex}`;
    }
  
    // When button is clicked: generate a new color and apply it to the box
    btn.addEventListener('click', () => {
      const newColor = getRandomColor();
      box.style.backgroundColor = newColor;
    });
  });
  
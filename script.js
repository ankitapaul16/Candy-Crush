document.addEventListener("DOMContentLoaded", function() {
    const candyCells = document.querySelectorAll(".cell");
    
    // Add click event listeners to candy cells
    candyCells.forEach(cell => {
      cell.addEventListener("click", function() {
        const randomColor = getRandomColor();
        this.style.backgroundColor = randomColor;
      });
    });
    
    function getRandomColor() {
      const colors = ["#ff4c4c", "#ffff4c", "#4cff4c", "#4c4cff", "#ff9a4c", "#9a4cff"];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  });
  
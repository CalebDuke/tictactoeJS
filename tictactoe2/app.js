let cells = document.querySelectorAll('.cell');
let turnCounter = 0;

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if(turnCounter % 2 === 0) {
            cell.textContent = "X";
        } else {
            cell.textContent = "O";
        }

        turnCounter++
    });
});
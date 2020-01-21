let cells = document.querySelectorAll('.cell');
let turnCounter = 0;

cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
        if (turnCounter % 2 === 0) {
            cell.textContent = "X";
        } else {
            cell.textContent = "O";
        }
        win()
        turnCounter++
        if (turnCounter == 9) {
            alert("TIE")
        }
    });
});

const winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
];

function win() {
    for (i = 0; i < winningCombos.length; i++) {
        let xCount = 0
        let oCount = 0
        for (j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].innerHTML == 'X') {
                xCount++
            } else if (winningCombos[i][j].innerHTML == 'O') {
                oCount++
            }
            if (xCount == 3) {
                alert('X Wins!')
            }
            else if (oCount == 3) {
                alert('O Wins')
            }
        }
    }
}

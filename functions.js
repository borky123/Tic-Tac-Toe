var cellValue = [0,1,2,3,4,5,6,7,8];
var movesCounter = 0;

function clickValue(btnID) {
    if (!document.getElementById(btnID).textContent != "") {
        if (movesCounter % 2 == 0) {
            document.getElementById(btnID).textContent = "X";
            cellValue[btnID] = "X";
        } else {
            document.getElementById(btnID).textContent = "O";
            cellValue[btnID] = "O";
        }
    }
    if (boardCheck() == 1) {
        document.getElementById("finishText").textContent = "Winner is: " + cellValue[btnID];
    } else if (movesCounter++ == 8) {
        document.getElementById("finishText").textContent = "DRAW";
    }
}
function boardCheck() {
    if (cellValue[0] == cellValue[1] && cellValue[1] == cellValue[2] ||
        cellValue[3] == cellValue[4] && cellValue[4] == cellValue[5] ||
        cellValue[6] == cellValue[7] && cellValue[7] == cellValue[8] ||
        cellValue[0] == cellValue[3] && cellValue[3] == cellValue[6] ||
        cellValue[1] == cellValue[4] && cellValue[4] == cellValue[7] ||
        cellValue[2] == cellValue[5] && cellValue[5] == cellValue[8] ||
        cellValue[0] == cellValue[4] && cellValue[4] == cellValue[8] ||
        cellValue[2] == cellValue[4] && cellValue[4] == cellValue[6]) {
        return 1;
    }
}
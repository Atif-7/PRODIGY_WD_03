let boxes = document.querySelectorAll('.box');
let result = document.getElementById('result');
let winSec = document.getElementById('winner');
let restart = document.getElementById('restart');

let turnX = true;

const winfigure = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8],[2, 4, 6], [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (turnX) {
            box.innerHTML = "X";
            turnX = false;
        }else{
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;
        winProcess();
    })
})

function winProcess() {
    for (let figure of winfigure) {
        let pos1 = boxes[figure[0]].innerText;
        let pos2 = boxes[figure[1]].innerText;
        let pos3 = boxes[figure[2]].innerText;
        
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                boxes.forEach((box) => {
                    box.disabled = true;
                })
                let winner = pos1;
                result.innerHTML = `Winner is Player ${winner}`;

                winSec.style.display = "flex";
                restart.style.display = "none";
            }
        }
    }
}

function restartGame() {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        turnX = true;
    })
    winSec.style.display = "none";
    restart.style.display = "block";
}
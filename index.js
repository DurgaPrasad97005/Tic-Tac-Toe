const boxes = Array.from(document.getElementsByClassName("box"));
const playerTurn = document.getElementById("turn");
let turn = "X";

boxes.forEach(element => {
    element.addEventListener("click", () => {
        let temp = Array.from(element.getElementsByClassName("boxContent"))[0];
        if(temp.textContent === "") {
            temp.textContent = turn;
            turn = turn == "X" ? "0" : "X";
            playerTurn.textContent = turn;
            checkWinner();
        }
    })
});

const gridBoxes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const won = document.getElementById("won");
const winner = document.getElementById("winner");

function checkWinner() {
    const boxContents = Array.from(document.getElementsByClassName("boxContent"));

    gridBoxes.forEach(e => {
        if((boxContents[e[0]].textContent === boxContents[e[1]].textContent) && (boxContents[e[0]].textContent === boxContents[e[2]].textContent) && boxContents[e[0]].textContent !== "") {
            won.textContent = boxContents[e[0]].textContent;
            winner.style.opacity = "1";
            boxes[e[0]].style.backgroundColor = "rgb(12, 245, 12)";
            boxes[e[1]].style.backgroundColor = "rgb(12, 245, 12)";
            boxes[e[2]].style.backgroundColor = "rgb(12, 245, 12)";
            document.querySelector(".player").style.backgroundColor = "white";
        }
    })
}

const reset = document.getElementById("btn");
reset.addEventListener("click", () => {
    const boxContents = Array.from(document.getElementsByClassName("boxContent"));
    boxContents.forEach(e => {
        e.textContent = "";
    });

    boxes.forEach(e => {
        e.style.removeProperty("background-color");
    });
    turn = "X";
    playerTurn.textContent = turn;
    winner.style.opacity = "0";
})

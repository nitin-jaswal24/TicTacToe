let turn = "X";
let gameover = false;
let boxtexts;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
            boxtexts[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText =
                boxtexts[e[0]].innerText + " Won";
            gameover = true;
        }
    });
};

let boxes = document.getElementsByClassName("box");
boxtexts = document.querySelectorAll(".boxText");

Array.from(boxes).forEach(element => {
    let e = element.querySelector(".boxText");

    element.addEventListener("click", () => {
        if (e.innerText === "") {
            e.innerText = turn;
            turn = changeTurn();
            if(checkWin()===true){
                return;
            }
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText =
                    "Turn for  " + turn;
            }
        }
    });
});


reset.addEventListener("click", () => {
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    gameover = false;
    turn = "X";

    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});

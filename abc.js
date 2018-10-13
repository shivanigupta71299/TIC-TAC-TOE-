window.addEventListener("load", bindEvents);
var buttons;
var isXorZero = false;
function showTic() {


    console.log("show tic call");
    if (this.innerText.trim().length == 0) {
        this.innerText = isXorZero ? "0" : "X";
        isXorZero = !isXorZero;
        isGameOver();

    }

}

function bindEvents() {
    buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener("click", showTic);
    }
}

function isNotBlank(button) {
    return button.innerText.trim().length == 0 ? false : true;
}

function isRowSame(first, second, third) {
    if (isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third])) {
        return buttons[first].innerText == buttons[second].innerText &&
            buttons[first].innerText == buttons[third].innerText
    }
    return false;
}

function isGameOver() {

    if (isRowSame(0, 1, 2)) {
        alert("GAME OVER");
    } else
        if (isRowSame(3, 4, 5)) {
            alert("GAME OVER");
        } else if (isRowSame(6, 7, 8)) {
            alert("GAME OVER");
        } else if (isRowSame(0, 3, 6)) {
            alert("GAME OVER");
        } else if (isRowSame(1, 4, 7)) {
            alert("GAME OVER");
        } else if (isRowSame(2, 5, 8)) {
            alert("GAME OVER");
        } else if (isRowSame(0, 4, 8)) {
            alert("GAME OVER");
        } else if (isRowSame(2, 4, 6)) {
            alert("GAME OVER");
        } else if (isNotBlank(0) && isNotBlank(1) && isNotBlank(2) && isNotBlank(3) && isNotBlank(4) && isNotBlank(5) && isNotBlank(6) && isNotBlank(7) && isNotBlank(8) && isNotBlank(9)){
            alert("MATCH DRAW");
        }
}

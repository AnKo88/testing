function rollDice() {

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    return (randomNumber1);
}

function showDice() {
    var rolledDice1 = rollDice();
    var rolledDice2 = rollDice();
    var diceSide1 = "images/dice" + rolledDice1 + ".png";
    var diceSide2 = "images/dice" + rolledDice2 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", diceSide1);
    document.getElementsByClassName("img2")[0].setAttribute("src", diceSide2);

    if (rolledDice1 > rolledDice2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }

    if (rolledDice1 === rolledDice2) {
        document.querySelector("h1").innerHTML = "It's a draw!";
    }

    if (rolledDice1 < rolledDice2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }

}
showDice();



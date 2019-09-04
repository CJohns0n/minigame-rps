


"use strict";
var score = "0";
var topLeftShow = false;
var topMidShow = false;
var topRightShow = false;
var midLeftShow = false;
var midMidShow = false;
var midRightShow = false;
var botLeftShow = false;
var botmidShow = false;
var botRightShow = false;

function cpuTicMove() {


    if (midMidShow === false) {
        document.getElementById("mmxo").style.display = "block";
        document.getElementById("mmxo").innerHTML = "O";
        midMidShow = true;

    } else {
        var cpuMove = Math.floor(Math.random() * 8);
        if (cpuMove === 0) {
            if (topLeftShow === false) {
                document.getElementById("tlxo").style.display = "block";
                document.getElementById("tlxo").innerHTML = "O";
                topLeftShow = true;

            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 1) {
            if (topMidShow === false) {
                document.getElementById("tmxo").style.display = "block";
                document.getElementById("tmxo").innerHTML = "O";
                topMidShow = true;
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 2) {
            if (topRightShow === false) {
                document.getElementById("trxo").style.display = "block";
                document.getElementById("trxo").innerHTML = "O";
                topRightShow = true;
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 3) {
            if (midLeftShow === false) {
                document.getElementById("mlxo").style.display = "block";
                document.getElementById("mlxo").innerHTML = "O";
                midLeftShow = true;
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 4) {
            if (midRightShow === false) {
                document.getElementById("mrxo").style.display = "block";
                document.getElementById("mrxo").innerHTML = "O";
                midRightShow = true;
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 5) {
            if (botLeftShow === false) {
                document.getElementById("blxo").style.display = "block";
                document.getElementById("blxo").innerHTML = "O";
                botLeftShow = true;
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 6) {
            if (botmidShow === false) {
                document.getElementById("bmxo").style.display = "block";
                document.getElementById("bmxo").innerHTML = "O";
                botmidShow = true;
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 7) {
            if (botRightShow === false) {
                document.getElementById("brxo").style.display = "block";
                document.getElementById("brxo").innerHTML = "O";
                botRightShow = true;
            } else {
                cpuTicMove();
            }
        } else {
            cpuTicMove();
        }
    }
}


$("#topLeft").click(function () {

    document.getElementById("tlxo").style.display = "block";
    topLeftShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })

$("#topMid").click(function() {

    document.getElementById("tmxo").style.display = "block";
    topMidShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })
$("#topRight").click(function() {

    document.getElementById("trxo").style.display = "block";
    topRightShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })
$("#midLeft").click(function() {

    document.getElementById("mlxo").style.display = "block";
    midLeftShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })
$("#midMid").click(function() {

    document.getElementById("mmxo").style.display = "block";
    midMidShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })
$("#midRight").click(function() {

    document.getElementById("mrxo").style.display = "block";
    midRightShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })
$("#bottomLeft").click(function() {

    document.getElementById("blxo").style.display = "block";
    botLeftShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })
$("#bottomMid").click(function() {

    document.getElementById("bmxo").style.display = "block";
    botmidShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })
$("#bottomRight").click(function() {

    document.getElementById("brxo").style.display = "block";
    botRightShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    })



function checkIfPlayerWon() {
    if ($("#topLeft").hasClass("cross") && $("#topMid").hasClass("cross") && $("#topRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else if ($("#topLeft").hasClass("cross") && $("#midLeft").hasClass("cross") && $("#bottomLeft").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else if ($("#topLeft").hasClass("cross") && $("#midMid").hasClass("cross") && $("#bottomRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else if ($("#topMid").hasClass("cross") && $("#midMid").hasClass("cross") && $("#bottomMid").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else if ($("#topRight").hasClass("cross") && $("#midRight").hasClass("cross") && $("#bottomRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else if ($("#topRight").hasClass("cross") && $("#midMid").hasClass("cross") && $("#bottomLeft").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else if ($("#midLeft").hasClass("cross") && $("#midMid").hasClass("cross") && $("#midRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else if ($("#bottomLeft").hasClass("cross") && $("#bottomMid").hasClass("cross") && $("#bottomRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
    } else {
        console.log("still going");
    }
}
function resetTTT() {
    topLeftShow = false;
    topMidShow = false;
    topRightShow = false;
    midLeftShow = false;
    midMidShow = false;
    midRightShow = false;
    botLeftShow = false;
    botmidShow = false;
    botRightShow = false;
    $("#topLeft").removeClass("cross");
    $("#topMid").removeClass("cross");
    $("#topRight").removeClass("cross");
    $("#midLeft").removeClass("cross");
    $("#midMid").removeClass("cross");
    $("#midRight").removeClass("cross");
    $("#bottomLeft").removeClass("cross");
    $("#bottomMid").removeClass("cross");
    $("#bottomRight").removeClass("cross");
    document.getElementById("tlxo").style.display = "none";
    document.getElementById("tmxo").style.display = "none";
    document.getElementById("trxo").style.display = "none";
    document.getElementById("mlxo").style.display = "none";
    document.getElementById("mmxo").style.display = "none";
    document.getElementById("mrxo").style.display = "none";
    document.getElementById("blxo").style.display = "none";
    document.getElementById("bmxo").style.display = "none";
    document.getElementById("brxo").style.display = "none";
    document.getElementById("tlxo").innerHTML = "X";
    document.getElementById("tmxo").innerHTML = "X";
    document.getElementById("trxo").innerHTML = "X";
    document.getElementById("mlxo").innerHTML = "X";
    document.getElementById("mmxo").innerHTML = "X";
    document.getElementById("mrxo").innerHTML = "X";
    document.getElementById("blxo").innerHTML = "X";
    document.getElementById("bmxo").innerHTML = "X";
    document.getElementById("brxo").innerHTML = "X";
    document.getElementById("TTTWins").innerHTML = "";
}


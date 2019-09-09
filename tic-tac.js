


"use strict";
var score = "0";
var win = false;
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
        document.getElementById("mmxo").addClass("circle");
        checkIfCompWon();

    } else {
        var cpuMove = Math.floor(Math.random() * 8);
        if (cpuMove === 0) {
            if (topLeftShow === false) {
                document.getElementById("tlxo").style.display = "block";
                document.getElementById("tlxo").innerHTML = "O";
                topLeftShow = true;
                document.getElementById("tlxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 1) {
            if (topMidShow === false) {
                document.getElementById("tmxo").style.display = "block";
                document.getElementById("tmxo").innerHTML = "O";
                topMidShow = true;
                document.getElementById("tmxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 2) {
            if (topRightShow === false) {
                document.getElementById("trxo").style.display = "block";
                document.getElementById("trxo").innerHTML = "O";
                topRightShow = true;
                document.getElementById("trxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 3) {
            if (midLeftShow === false) {
                document.getElementById("mlxo").style.display = "block";
                document.getElementById("mlxo").innerHTML = "O";
                midLeftShow = true;
                document.getElementById("mlxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 4) {
            if (midRightShow === false) {
                document.getElementById("mrxo").style.display = "block";
                document.getElementById("mrxo").innerHTML = "O";
                midRightShow = true;
                document.getElementById("mrxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 5) {
            if (botLeftShow === false) {
                document.getElementById("blxo").style.display = "block";
                document.getElementById("blxo").innerHTML = "O";
                botLeftShow = true;
                document.getElementById("blxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 6) {
            if (botmidShow === false) {
                document.getElementById("bmxo").style.display = "block";
                document.getElementById("bmxo").innerHTML = "O";
                botmidShow = true;
                document.getElementById("bmxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else if (cpuMove === 7) {
            if (botRightShow === false) {
                document.getElementById("brxo").style.display = "block";
                document.getElementById("brxo").innerHTML = "O";
                botRightShow = true;
                document.getElementById("brxo").addClass("circle");
                checkIfCompWon();
            } else {
                cpuTicMove();
            }
        } else {
            cpuTicMove();
        }
    }
}


$("#topLeft").click(function () {
    if(topLeftShow === false && win === false) {
        document.getElementById("tlxo").style.display = "block";
        topLeftShow = true;
        $(this).addClass("cross");
        checkIfPlayerWon();
        cpuTicMove();
        } else {
            alert("Please select an empty box, if you've already won please reset.")
        }
})

$("#topMid").click(function() {
    if(topMidShow === false && win === false) {
        document.getElementById("tmxo").style.display = "block";
        topMidShow = true;
        $(this).addClass("cross");
        checkIfPlayerWon();
        cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})
$("#topRight").click(function() {
    if(topRightShow === false && win === false) {
        document.getElementById("trxo").style.display = "block";
        topRightShow = true;
        $(this).addClass("cross");
        checkIfPlayerWon();
        cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})
$("#midLeft").click(function() {
if(midLeftShow === false && win === false) {
    document.getElementById("mlxo").style.display = "block";
    midLeftShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})
$("#midMid").click(function() {
if(midMidShow === false && win === false) {
    document.getElementById("mmxo").style.display = "block";
    midMidShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})
$("#midRight").click(function() {
if(midRightShow === false && win === false) {
    document.getElementById("mrxo").style.display = "block";
    midRightShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})
$("#bottomLeft").click(function() {
if(botLeftShow === false && win === false) {
    document.getElementById("blxo").style.display = "block";
    botLeftShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})
$("#bottomMid").click(function() {
if(botmidShow === false && win === false) {
    document.getElementById("bmxo").style.display = "block";
    botmidShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})
$("#bottomRight").click(function() {
if(botRightShow === false && win === false) {
    document.getElementById("brxo").style.display = "block";
    botRightShow = true;
    $(this).addClass("cross");
    checkIfPlayerWon();
    cpuTicMove();
    } else {
        alert("Please select an empty box, if you've already won please reset.")
    }
})



function checkIfPlayerWon() {
    if ($("#topLeft").hasClass("cross") && $("#topMid").hasClass("cross") && $("#topRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else if ($("#topLeft").hasClass("cross") && $("#midLeft").hasClass("cross") && $("#bottomLeft").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else if ($("#topLeft").hasClass("cross") && $("#midMid").hasClass("cross") && $("#bottomRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else if ($("#topMid").hasClass("cross") && $("#midMid").hasClass("cross") && $("#bottomMid").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else if ($("#topRight").hasClass("cross") && $("#midRight").hasClass("cross") && $("#bottomRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else if ($("#topRight").hasClass("cross") && $("#midMid").hasClass("cross") && $("#bottomLeft").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else if ($("#midLeft").hasClass("cross") && $("#midMid").hasClass("cross") && $("#midRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else if ($("#bottomLeft").hasClass("cross") && $("#bottomMid").hasClass("cross") && $("#bottomRight").hasClass("cross")) {
        score++;
        document.getElementById("TTTWins").innerHTML = "winner winner chicken dinner";
        document.getElementById("winRps").innerHTML = score;
        win = true;
    } else {
        console.log("still going");
    }
}
function checkIfCompWon() {
    if ($("#topLeft").hasClass("circle") && $("#topMid").hasClass("circle") && $("#topRight").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
    } else if ($("#topLeft").hasClass("circle") && $("#midLeft").hasClass("circle") && $("#bottomLeft").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
    } else if ($("#topLeft").hasClass("circle") && $("#midMid").hasClass("circle") && $("#bottomRight").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
    } else if ($("#topMid").hasClass("circle") && $("#midMid").hasClass("circle") && $("#bottomMid").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
    } else if ($("#topRight").hasClass("circle") && $("#midRight").hasClass("circle") && $("#bottomRight").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
    } else if ($("#topRight").hasClass("circle") && $("#midMid").hasClass("circle") && $("#bottomLeft").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
    } else if ($("#midLeft").hasClass("circle") && $("#midMid").hasClass("circle") && $("#midRight").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
    } else if ($("#bottomLeft").hasClass("circle") && $("#bottomMid").hasClass("circle") && $("#bottomRight").hasClass("circle")) {
        document.getElementById("TTTWins").innerHTML = "Too bad, try again!";
        win = true;
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
    win = false;
    $("#topLeft").removeClass("cross");
    $("#topMid").removeClass("cross");
    $("#topRight").removeClass("cross");
    $("#midLeft").removeClass("cross");
    $("#midMid").removeClass("cross");
    $("#midRight").removeClass("cross");
    $("#bottomLeft").removeClass("cross");
    $("#bottomMid").removeClass("cross");
    $("#bottomRight").removeClass("cross");
    $("#topLeft").removeClass("circle");
    $("#topMid").removeClass("circle");
    $("#topRight").removeClass("circle");
    $("#midLeft").removeClass("circle");
    $("#midMid").removeClass("circle");
    $("#midRight").removeClass("circle");
    $("#bottomLeft").removeClass("circle");
    $("#bottomMid").removeClass("circle");
    $("#bottomRight").removeClass("circle");
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


var turnPlayer = "1";
var player1Space = 1;
var player2Space = 1;
var player3Space = 1;
var player4Space = 1;
var travelToSpace = "";
var totalPlayers = "4";
var humanPlayers = "";
var diceRoll = 0;
var portalSpaces = 0;
var allPortals = [];


Array.prototype.getRandomValue = function() {
    return Math.ceil(Math.random() * this.length | 0)
}

$("#oneHuman").click(function() {
    humanPlayers === "1";
    $("#start").removeClass("disabled");
    numberOfPortals();
})
$("#twoHuman").click(function() {
    humanPlayers === "2";
    $("#start").removeClass("disabled");
    numberOfPortals();
})
$("#threeHuman").click(function() {
    humanPlayers === "3";
    $("#start").removeClass("disabled");
    numberOfPortals();
})
$("#fourHuman").click(function() {
    humanPlayers === "4";
    $("#start").removeClass("disabled");
    numberOfPortals();
})
$("#start").click(function() {
    if($(this).hasClass("disabled")) {
        alert("Pick number of players")
    } else {
    $("#startTheGame").addClass("hidden");
    $("#buildingBox").removeClass("hidden");
    $("#currentPlayer").html(turnPlayer);
    }
    
})
function changeTurn() {
    if(turnPlayer == "4") {
        turnPlayer = "1";
        $("#currentPlayer").html(turnPlayer);
    } else {
    turnPlayer++;
    $("#currentPlayer").html(turnPlayer);
    }
}
function checkWinStatus() {
    if(player1Space >= 100) {
        alert("Congrats Player 1!")
    } else if(player2Space >= 100) {
        alert("Congrats Player 2!!")
    } else if(player3Space >= 100) {
        alert("Congrats Player 3!!!")
    } else if(player4Space >= 100) {
        alert("Congrats Player 4!!!!")
    } else {
        changeTurn();
    }
}
$("#roller").click(function() {
    if(turnPlayer === "1") {
        rollDice()
        
        movePlayer()
        
    } else if (turnPlayer == "2") {
        rollDice();
        
        movePlayer();
        
    } else if (turnPlayer == "3") {
        rollDice();
        
        movePlayer()
    } else if (turnPlayer == "4") {
        rollDice();
        
        movePlayer()
    } else {
        alert("not working");
    }
})
function rollDice() {
    diceRoll = Math.ceil(Math.random() * 10 / .85);
}
function numberOfPortals() {
    portalSpaces = Math.ceil((Math.random() * 25) + 5);
    portalSelector();
    console.log(portalSpaces);
}
function portalPicker() {
    var picked = "#sql-" + Math.ceil(Math.random() * 98 + 1);
    if(allPortals.indexOf(picked) === -1) {
        return picked;
    } else {
        portalPicker();
    }
    console.log(allPortals);
    
    
}
function portalSelector() {
    var i;
    for(i = 0; i < portalSpaces; i++) {
        
        var positionSelector = portalPicker();
        allPortals.push(positionSelector);
    }
    purple();
}
function purple() { 
    allPortals.forEach(
        function(entry) {
            $(entry).children("div").addClass("purport");
            $(entry).addClass("purport");
        }
        
    );
}
function teleport() {
    var i;
    var x;
    var y;
    var z;
    var A = [];
    var B = [];
    var C = [];
    var D = 0;
    var divId = [];
    var destId = "";
    
        
        x = allPortals.getRandomValue();
        y = allPortals[x];
        A = $(y).children();
        if(turnPlayer == "1") {    
            for(div of A) {
                divId = $(div).attr('id');
                if(divId.startsWith("squareA")) {
                   destId = divId;
                    console.log(destId);
                    C = destId.split("A")
                    console.log(C);
                    $("#squareA" + player1Space).removeClass("player1Piece");
                    Number(C[1]);
                    D = C[1];
                    Number(D);
                    player1Space = D;
                    console.log(player1Space);
                    travelToSpace = destId;
                    alert(player1Space);
                   } 
                }
            travelToSpace = destId;
        } else if(turnPlayer == "2") {
            for(div of A) {
                divId = $(div).attr('id');
                if(divId.startsWith("squareB")) {
                   destId = divId;
                    console.log(destId);
                    C = destId.split("B")
                    console.log(C);
                    $("#squareB" + player2Space).removeClass("player2Piece");
                    Number(C[1]);
                    D = C[1];
                    Number(D);
                    player2Space = D;
                    parseInt(player2Space);
                    console.log(player2Space);
                    travelToSpace = destId;
                    alert(player2Space);
                   } 
            }
            travelToSpace = destId;
        } else if(turnPlayer == "3") {
            for(div of A) {
                divId = $(div).attr('id');
                if(divId.startsWith("squareC")) {
                   destId = divId;
                    console.log(destId);
                    C = destId.split("C")
                    console.log(C);
                    $("#squareC" + player3Space).removeClass("player3Piece");
                    Number(C[1]);
                    D = C[1];
                    Number(D);
                    player3Space = D;
                    parseInt(player3Space);
                    console.log(player3Space);
                    travelToSpace = destId;
                    
                    alert(player3Space);
                   }
            }
            
        } else if(turnPlayer == "4") {
            for(div of A) {
                divId = $(div).attr('id');
                if(divId.startsWith("squareD")) {
                   destId = divId;
                    console.log(destId);
                    C = destId.split("D")
                    console.log(C);
                    $("#squareD" + player4Space).removeClass("player4Piece");
                    Number(C[1]);
                    D = C[1];
                    Number(D);
                    player4Space = D;
                    parseInt(player4Space);
                    console.log(player4Space);
                    travelToSpace = destId;
                    
                    alert(player4Space);
                   }
            }
            
        } else {
            alert("help");
        }
        
}
function movePlayer() {
    alert(diceRoll);
    
    if(turnPlayer == "1") {
        let sum = Math.floor(Number(player1Space) + diceRoll);
        travelToSpace = "squareA" + sum;
        if($("#" + travelToSpace).hasClass("purport")) {
            teleport();
            alert(travelToSpace);
            
            $("#" + travelToSpace).addClass("player1Piece");
        } else {
            $("#squareA" + player1Space).removeClass("player1Piece");
            $("#" + travelToSpace).addClass("player1Piece");
            player1Space = sum;
        }
        checkWinStatus();
        
    } else if(turnPlayer == "2") {
        let sum = Math.floor(Number(player2Space) + diceRoll);
        travelToSpace = "squareB" + sum;
        if($("#" + travelToSpace).hasClass("purport")) {
            teleport();
            alert(travelToSpace);
            $("#" + travelToSpace).addClass("player2Piece");
        } else {
            $("#squareB" + player2Space).removeClass("player2Piece");
            $("#" + travelToSpace).addClass("player2Piece");
            player2Space = sum;
        }
        checkWinStatus();
    } else if(turnPlayer == "3") {
        let sum = Math.floor(Number(player3Space) + diceRoll);
        travelToSpace = "squareC" + sum;
        if($("#" + travelToSpace).hasClass("purport")) {
            teleport();
            alert(travelToSpace);
            
            $("#" + travelToSpace).addClass("player3Piece");
        } else {
            $("#squareC" + player3Space).removeClass("player3Piece");
            $("#" + travelToSpace).addClass("player3Piece");
            player3Space = sum;
        }
        checkWinStatus();
        
    } else if(turnPlayer == "4") {
        let sum = Math.floor(Number(player4Space) + diceRoll);
        travelToSpace = "squareD" + sum;
        if($("#" + travelToSpace).hasClass("purport")) {
            teleport();
            alert(travelToSpace);
        
            $("#" + travelToSpace).addClass("player4Piece");
        } else {
            $("#squareD" + player4Space).removeClass("player4Piece");
            $("#" + travelToSpace).addClass("player4Piece");
            player4Space = sum;
            }
        
        checkWinStatus();
    } else {
        alert("not working");
    }
}